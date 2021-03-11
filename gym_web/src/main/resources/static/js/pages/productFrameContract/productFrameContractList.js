var $defaultProductFrameContractTable = $('#product-frame-contract-table');
var $addProductFrameContractBtton = $('#add-product-frame-contract-btton');
var $addProductFrameContractExeBtton = $('#add-product-frame-contract-exe-btton');
var $editProductFrameContractBtton = $('#edit-product-frame-contract-btton');
var $editProductFrameContractExeBtton = $('#edit-product-frame-contract-exe-btton');
var $removeProductFrameContractBtton = $('#remove-product-frame-contract-btton');
var $removeProductFrameContractExeBtton = $('#remove-product-frame-contract-exe-btton');
var $addFormEnterpriseCode = $('#add-form-enterpriseCode');
var $addFormEnterpriseName = $('#add-form-enterpriseName');
var $addFormFrameContractName=$('#add-form-frameContractName');
var selectionsProductFrameContract = [];
var $approvalApplyExeBtton=$('#approval-apply-exe-btton');
var $outApprovalApplyExeBtton=$('#outApproval-apply-exe-btton');
var $approvalApplyExeBtton = $('#approval-apply-exe-btton');
var $addFormProdId = $('#add-form-prodId');
var $addFormCurrency = $('#add-form-currency');
var $addFormcontractInvalidDate = $('#add-form-contractInvalidDate');
/**
 * 页面初始化方法
 */
function initProductFrameContractPage() {
    initTable();
    initButton();
    initDialog();
    initDate();
}

function initDate() {
    calenders("form[id=add-product-frame-contract-form]  input[name=contractInvalidDateStr]", false, false);
    calenders("form[id=add-approval-apply-form]  input[name=applyDate]", false, false);
    calenders("form[id=add-outApproval-apply-form]  input[name=applyDate]", false, false);
}

/**
 * table数据加载方法
 * @param params
 */
function dataList(params) {
    $defaultProductFrameContractTable.bootstrapTable('showLoading');
    console.log(params.data);
    $.ajax({
        url: basePath + '/productFrameContract/dataList.do?stamp='
        + new Date().getTime() + '&sort=' + params.data.sort + '&orders=' + params.data.order + '&limit='
        + params.data.limit + '&offset=' + params.data.offset,
        type: "post",
        data: $("#search-product-frame-contract-form").serialize(),
        dataType: "json",
        success: function (result, textStatus) {
            params.success(result);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        complete: function (XMLHttpRequest, textStatus) {
            $defaultProductFrameContractTable.bootstrapTable('hideLoading');
        }
    });
}

/**
 * table初始化方法
 */
function initTable() {
    $defaultProductFrameContractTable.on('check.bs.table uncheck.bs.table ' +
        'check-all.bs.table uncheck-all.bs.table', function () {
        selectionsProductFrameContract = getIdSelectionsProductFrameContract();
    });
    $defaultProductFrameContractTable.on('all.bs.table', function (e, name, args) {
        console.log(name, args);
    });

    $(window).resize(function () {
        $defaultProductFrameContractTable.bootstrapTable('resetView', {
            height: getHeight()
        });
    });
}

/**
 * 重置按钮初始化
 */
$("#reset-product-frame-contract-btton").click(function () {
    $("form[id=search-product-frame-contract-form]  input[name=id]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=frameContractId]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=frameContractName]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=prodId]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=enterpriseName]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=enterpriseCode]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=contractLimitAmount]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=creditedAmount]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=currency]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=contractInvalidDate]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=contractOssKey]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=contractOssLink]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=innerApproveStatus]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=merchantApproveStatus]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=dailyInterestAnnualRate]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=principleOverdueAnnualRate]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=billOverdueAnnualRate]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=billDay]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=billRepaymentDay]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=principleRepaymentDate]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=principleOverdueDate]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=createdDate]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=modifiedDate]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=yn]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=remark]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=innerApproveTime]").val("");
    $("form[id=search-product-frame-contract-form]  input[name=externalApproveTime]").val("");
    $("form[id=search-product-frame-contract-form]  select[name=internalAuditStatus]").val("");
    $("form[id=search-product-frame-contract-form]  select[name=extAuditStatus]").val("");
    $("form[id=search-product-frame-contract-form]  select[name=contractType]").val("");
});

/**
 * 按钮初始化方法
 */
function initButton() {

    /**
     * 查询按钮初始化
     */
    $("#search-product-frame-contract-btton").click(function () {
        $defaultProductFrameContractTable.bootstrapTable('refresh', null);
    });
    /**
     * table上方按钮事件（添加）
     */
    $addProductFrameContractBtton.click(function () {
        $('#add-product-frame-contract-dialog').on('shown.bs.modal', function () {
            //$('#myInput').focus()
            $("form[id=add-product-frame-contract-form]  input[name=enterpriseCode]").val("");
            $("form[id=add-product-frame-contract-form]  input[name=enterpriseName]").val("");
            $("form[id=add-product-frame-contract-form]  select[name=prodId]").val("");
            $("form[id=add-product-frame-contract-form]  select[name=contractType]").val("");
            $("form[id=add-product-frame-contract-form]  input[name=contractLimitAmtStr]").val("");
            $("form[id=add-product-frame-contract-form]  input[name=contractInvalidDate]").val("");
            $("form[id=add-product-frame-contract-form]  input[name=currency]").val("");
            $("form[id=add-product-frame-contract-form]  input[name=frameContractName]").val("");
            $("form[id=add-product-frame-contract-form]").bootstrapValidator('resetForm', true);
        });
    });
    /**
     * 按钮执行区域（添加）
     */
    $addProductFrameContractExeBtton.click(function () {
        console.log(JSON.stringify($("#add-product-frame-contract-form").serialize()));
        var data = $("#add-product-frame-contract-form").data('bootstrapValidator');
        if (data) {
            var fmt = 'yyyy-MM-dd';
            var dateStartStr = Utils.dateFormat.getDateStartStr(new Date(), fmt);
            if(dateStartStr>=$addFormcontractInvalidDate.val()){
                layer.confirm('合同到期时间有误', {
                    btn: ['确定'] //按钮
                    , skin: 'layui-layer-lan',
                    title: '提示'
                });
                return false;
            }
            // 修复记忆的组件不验证
            data.validate();
            if (!data.isValid()) {
                return false;
            }


        }
        $.ajax({
            url: basePath + "/productFrameContract/save.do",
            type: "POST",
            data: $("#add-product-frame-contract-form").serialize(),
            dataType: "json",
            success: function (data, textStatus) {
                if (data.data == null || data.data == undefined || data.data == false) {
                    var message='创建框架合同失败:';
                    if(data.message!=null&&data.message!=undefined){
                        message+=data.message;
                    }
                    layer.confirm(message, {
                        btn: ['确认'] //按钮
                        , skin: 'layui-layer-lan',
                        title: '提示'
                    });
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                layer.confirm('创建框架合同失败', {
                    btn: ['确认'] //按钮
                    , skin: 'layui-layer-lan',
                    title: '提示'
                });
            },
            complete: function (XMLHttpRequest, textStatus) {
                $('#add-product-frame-contract-dialog').modal('hide');
                $defaultProductFrameContractTable.bootstrapTable('refresh', null);
                $defaultProductFrameContractTable.bootstrapTable('uncheckAll');
            }
        });
    });

    //提交流程
    $approvalApplyExeBtton.click(function (){

        var id = $("form[id=add-approval-apply-form]  input[name=id]").val();
        $.ajax({
            url : basePath + "/productFrameContract/internalAudit.do",
            type : "POST",
            data : $("#add-approval-apply-form").serialize(),
            dataType : "json",
            success : function(data, textStatus) {
                if (data.data == null || data.data == undefined || data.data == false) {
                    var message='提交审核失败:';
                    if(data.message!=null&&data.message!=undefined){
                        message+=data.message;
                    }
                    layer.confirm(message, {
                        btn: ['确认'] //按钮
                        , skin: 'layui-layer-lan',
                        title: '提示'
                    });
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                layer.confirm('提交审核失败', {
                    btn: ['确认'] //按钮
                    , skin: 'layui-layer-lan',
                    title: '提示'
                });
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#approval-apply-dialog').modal('hide');
                $defaultProductFrameContractTable.bootstrapTable('refresh', null);
                $defaultProductFrameContractTable.bootstrapTable('uncheckAll');
            }
        });
    });
    //提交流程
    $outApprovalApplyExeBtton.click(function (){

        var id = $("form[id=add-outApproval-apply-form]  input[name=id]").val();
        $.ajax({
            url : basePath + "/productFrameContract/bankMerchantAudit.do",
            type : "POST",
            data : $("#add-outApproval-apply-form").serialize(),
            dataType : "json",
            success : function(data, textStatus) {
                //提示提交流程成功
                if (data.data == null || data.data == undefined || data.data == false) {
                    var message='提交审核失败:';
                    if(data.message!=null&&data.message!=undefined){
                        message+=data.message;
                    }
                    layer.confirm(message, {
                        btn: ['确认'] //按钮
                        , skin: 'layui-layer-lan',
                        title: '提示'
                    });
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                layer.confirm('提交审核失败', {
                    btn: ['确认'] //按钮
                    , skin: 'layui-layer-lan',
                    title: '提示'
                });
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#outApproval-apply-dialog').modal('hide');
                $defaultProductFrameContractTable.bootstrapTable('refresh', null);
                $defaultProductFrameContractTable.bootstrapTable('uncheckAll');
            }
        });
    });

    /**
     * table上方按钮事件（删除）
     */
    $removeProductFrameContractBtton.click(function () {
        $('#remove-product-frame-contract-dialog').on('shown.bs.modal', function () {
            //$('#myInput').focus()
        });
    });
    //$addContractInvalidDate.

    $addFormEnterpriseCode.focusout(function () {
        $addFormEnterpriseName.val("");
        $addFormFrameContractName.val("");
        var data = $addFormEnterpriseCode.data('bootstrapValidator');
        if (data) {
            if (!data.isValid()) {
                return false;
            }
            // 修复记忆的组件不验证
            data.validate();
        }
        $.ajax({
            url: basePath + "/merchantBasicInfo/getNameByEnterpriseCode.do",
            type: "POST",
            data: {"merchantCode": $addFormEnterpriseCode.val()},
            dataType: "json",
            success: function (data, textStatus) {
                if (data == null || data == "" || data.success == false) {
                    return false;
                }
                $addFormEnterpriseName.val(data.enterpriseName).change();
                $addFormFrameContractName.val(data.frameContractName).change();

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            complete: function (XMLHttpRequest, textStatus) {

            }
        });
    })
    $addFormProdId.change(function () {
        $addFormCurrency.val("");
        var data = $addFormProdId.data('bootstrapValidator');
        if (data) {
            if (!data.isValid()) {
                return false;
            }
            // 修复记忆的组件不验证
            data.validate();
        }
        var value=$addFormProdId.val();
        var index=value.indexOf(",");
        if(index!=-1){
            var indexCurrency=value.indexOf(",",index+1);
            if(indexCurrency!=-1){
                var currency=value.substring(indexCurrency+1);
                $addFormCurrency.val(currency);
            }

        }


    })
}

/**
 * 初始化弹出面板
 */
function initDialog() {
}

/**
 * 获取选中的table项目UUID
 * @returns {*}
 */
function getIdSelectionsProductFrameContract() {
    return $.map($defaultProductFrameContractTable.bootstrapTable('getSelections'), function (row) {
        return row.id

    });
}

function getHeight() {

}

// 数据表格展开内容
function detailFormatter(index, row) {
    var html = [];
    $.each(row, function (key, value) {
        html.push('<p><b>' + key + ':</b> ' + value + '</p>');
    });
    return html.join('');
}


/**
 * table项目中的操作
 * @returns {*}
 */
function operateFormatter(value, row, index) {
    var option;
    var link;
    if (row['ossUrl'] != null && row['ossUrl'] != undefined) {
        link = '<a  href=' + row['ossUrl'] + ' class="btn btn-xs green"  style="margin-right: 5px" title="查看合同">查看合同</a>';
    } else {
        link = '<a class="btn btn-xs green"  style="margin-right: 5px" title="查看合同" >查看合同</a>';
    }
    //新建
    if (row['internalAuditStatus'] == 1 && row['extAuditStatus'] == 1) {
        option = '<a href="javascript:void(0);" class="btn btn-xs green"  style="margin-right: 5px" title="提交审核" onclick="toOperateInner(\'' + row['id'] + '\')" >提交审核</a>' + link + '<a href="javascript:void(0);" class="btn btn-xs green"  style="margin-right: 5px" title="删除合同"  onclick="deleteContract(\'' + row['id'] + '\')" >删除</a>';
    }
    //内部审核通过 银行审核企业-生效
    else if (row['internalAuditStatus'] == 3 && row['extAuditStatus'] == 2) {
        option = '<a href="javascript:void(0);" class="btn btn-xs green"  style="margin-right: 5px"  title="生效" onclick="toBankMerchantAudit(\'' + row['id'] + '\',true)" >生效</a>' + link;
    }
    //内部审核通过 银行审核企业-终止
    else if (row['internalAuditStatus'] == 3 && row['extAuditStatus'] == 3) {
        option = '<a href="javascript:void(0);" class="btn btn-xs green"  style="margin-right: 5px"  title="终止" onclick="toBankMerchantAudit(\'' + row['id'] + '\',false)" >终止</a>' + link;
    }
    else {
        option = link;
    }
    return option;
}



function deleteContract(id) {

    layer.confirm('删除确认', {
            btn: ['删除', '取消'] //按钮
            , skin: 'layui-layer-lan',
            title: '删除确认'
        },
        function () {

            layer.closeAll('dialog');
        })
}

function toOperateInner(id){
    $('#approval-apply-dialog').modal('show');
    $("form[id=add-approval-apply-form]  input[name=id]").val(id);
    $("form[id=add-approval-apply-form]  input[name=auditName]").val("");
    $("form[id=add-approval-apply-form]  textarea[name=approveExplain]").val("");
    $("form[id=add-approval-apply-form]  input[name=applyDate]").val(Utils.dateFormat.format(new Date(),"yyyy-MM-dd hh:mm:ss"));
}
function toBankMerchantAudit(id,effect){
    $.ajax({
        url: basePath + "/productFrameContract/checkExistWaitApproveApplication.do?"+ '&id=' + id ,
        type: "POST",
        dataType: "json",
        success: function (data, textStatus) {
            if (data.success) {
                $('#outApproval-apply-dialog').modal('show');
                $("form[id=add-outApproval-apply-form]  input[name=id]").val(id);
                $("form[id=add-outApproval-apply-form]  input[name=effect]").val(effect);
                $("form[id=add-outApproval-apply-form]  input[name=auditName]").val("");
                $("form[id=add-outApproval-apply-form]  textarea[name=approveExplain]").val("");
                $("form[id=add-outApproval-apply-form]  input[name=applyDate]").val(Utils.dateFormat.format(new Date(),"yyyy-MM-dd hh:mm:ss"));
            } else {
                var message='提交审核失败:';
                if(data.message!=null&&data.message!=undefined){
                    message+=data.message;
                }
                layer.confirm(message, {
                    btn: ['确认'] //按钮
                    , skin: 'layui-layer-lan',
                    title: '提示'
                });
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        complete: function (XMLHttpRequest, textStatus) {
        }
    });


}
/**
 * 记录执行操作
 * @returns {*}
 */
function toOperateDetails(id) {

    $('#a-edit-product-frame-contract-dialog').on('shown.bs.modal', function () {
        $.ajax({
            url: basePath + "/productFrameContract/getById.do",
            type: "POST",
            data: {"id": id},
            dataType: "json",
            success: function (data, textStatus) {
                if (data.success) {
                    console.log(data.data);
                } else {
                    $('#a-edit-product-frame-contract-dialog').modal('hide');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            complete: function (XMLHttpRequest, textStatus) {
            }
        });
    });
}




