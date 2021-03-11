var $defaultCcTestTable = $('#cc-test-table');
var $addCcTestBtton = $('#add-cc-test-btton');
var $addCcTestExeBtton = $('#add-cc-test-exe-btton');
var $editCcTestBtton = $('#edit-cc-test-btton');
var $editCcTestExeBtton = $('#edit-cc-test-exe-btton');
var $removeCcTestBtton = $('#remove-cc-test-btton');
var $removeCcTestExeBtton = $('#remove-cc-test-exe-btton');
var selectionsCcTest = [];

/**
 * 页面初始化方法
 */
function initCcTestPage(){
    initTable();
    initButton();
    initDialog();
}

/**
 * table数据加载方法
 * @param params
 */
function dataList(params){
    $defaultCcTestTable.bootstrapTable('showLoading');
    console.log(params.data);
    $.ajax({
        url : basePath + '/ccTest/dataList.do?stamp='
        +new Date().getTime()+'&sort='+params.data.sort+'&orders='+params.data.order+'&limit='
        +params.data.limit+'&offset='+params.data.offset,
        type : "post",
        data : $("#search-cc-test-form").serialize(),
        dataType : "json",
        success : function(result, textStatus) {
            params.success(result);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
        },
        complete : function(XMLHttpRequest, textStatus) {
            $defaultCcTestTable.bootstrapTable('hideLoading');
        }
    });
}

/**
 * table初始化方法
 */
function initTable() {
    $defaultCcTestTable.on('check.bs.table uncheck.bs.table ' +
        'check-all.bs.table uncheck-all.bs.table', function () {
        $removeCcTestBtton.prop('disabled', !$defaultCcTestTable.bootstrapTable('getSelections').length);
        $editCcTestBtton.prop('disabled', !($defaultCcTestTable.bootstrapTable('getSelections').length==1));
        // save your data, here just save the current page
        selectionsCcTest = getIdSelectionsCcTest();
        // push or splice the selections if you want to save all data selections
    });
    $defaultCcTestTable.on('all.bs.table', function (e, name, args) {
        console.log(name, args);
    });

    $(window).resize(function () {
        $defaultCcTestTable.bootstrapTable('resetView', {
            height: getHeight()
        });
    });
}

/**
 * 按钮初始化方法
 */
function initButton(){

    /**
     * 查询按钮初始化
     */
    $("#search-cc-test-btton").click(function(){
        $defaultCcTestTable.bootstrapTable('refresh', null);
    });
    /**
    * 重置按钮初始化
    */
    $("#reset-cc-test-btton").click(function(){
                $("form[id=search-cc-test-form]  input[name=id]").val("");
                $("form[id=search-cc-test-form]  input[name=testName]").val("");
                $("form[id=search-cc-test-form]  input[name=testValue]").val("");
                $("form[id=search-cc-test-form]  input[name=testTinyint]").val("");
            });
    /**
     * table上方按钮事件（添加）
     */
    $addCcTestBtton.click(function () {
        $('#add-cc-test-dialog').on('shown.bs.modal', function () {
            //$('#myInput').focus()
            $("form[id=add-cc-test-form]  input[name=id]").val("");
			$("form[id=add-cc-test-form]  input[name=testName]").val("");
			$("form[id=add-cc-test-form]  input[name=testValue]").val("");
			$("form[id=add-cc-test-form]  input[name=testTinyint]").val("");
						$("form[id=add-cc-test-form]").bootstrapValidator( 'resetForm' , true);
        });
    });
    /**
     * 按钮执行区域（添加）
     */
    $addCcTestExeBtton.click(function(){
        console.log(JSON.stringify($("#add-cc-test-form").serialize()));
        var data = $("#add-cc-test-form").data('bootstrapValidator');
        if (data) {
            // 修复记忆的组件不验证
            data.validate();
            if (!data.isValid()) {
                return false;
            }
        }
        $.ajax({
            url : basePath + "/ccTest/save.do",
            type : "POST",
            data : $("#add-cc-test-form").serialize(),
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#add-cc-test-dialog').modal('hide');
                $defaultCcTestTable.bootstrapTable('refresh', null);
                $defaultCcTestTable.bootstrapTable('uncheckAll');
            }
        });
    });

    /**
     * table上方按钮事件（编辑）
     */
    $editCcTestBtton.click(function () {
        var id = selectionsCcTest[0];
        console.log(id);
        $('#edit-cc-test-dialog').on('shown.bs.modal', function () {
            $.ajax({
                url : basePath + "/ccTest/getById.do",
                type : "POST",
                data : {"id":id},
                dataType : "json",
                success : function(data, textStatus) {
                	
                    if(data.success){
                    $("form[id=edit-cc-test-form]").bootstrapValidator( 'resetForm' , true);
                        console.log(data.data);
                        $("form[id=edit-cc-test-form]  input[name=id]").val(data.data.id);
					 	$("form[id=edit-cc-test-form]  input[name=testName]").val(data.data.testName);
					 	$("form[id=edit-cc-test-form]  input[name=testValue]").val(data.data.testValue);
					 	$("form[id=edit-cc-test-form]  input[name=testTinyint]").val(data.data.testTinyint);
					 	                    }else{
                        $('#edit-cc-test-dialog').modal('hide');
                    }
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                },
                complete : function(XMLHttpRequest, textStatus) {
                }
            });
        });
    });

    /**
     * 按钮执行区域（编辑）
     */
    $editCcTestExeBtton.click(function (){
        console.log(JSON.stringify($("#edit-cc-test-form").serialize()));
        var data = $("#edit-cc-test-form").data('bootstrapValidator');
        if (data) {
            // 修复记忆的组件不验证
            data.validate();
            if (!data.isValid()) {
                return false;
            }
        }
        $.ajax({
            url : basePath + "/ccTest/save.do",
            type : "POST",
            data : $("#edit-cc-test-form").serialize(),
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#edit-cc-test-dialog').modal('hide');
                $defaultCcTestTable.bootstrapTable('refresh', null);
                $defaultCcTestTable.bootstrapTable('uncheckAll');
            }
        });
    });

    /**
     * table上方按钮事件（删除）
     */
    $removeCcTestBtton.click(function () {
        $('#remove-cc-test-dialog').on('shown.bs.modal', function () {
            //$('#myInput').focus()
        });
    });

    /**
     * 按钮执行区域（删除）
     */
    $removeCcTestExeBtton.click(function (){
        console.log(JSON.stringify(selectionsCcTest));
        var selectionsCcTestStr = "";
        $.each(selectionsCcTest,function(index,value) {

            if(index == 0 ){
                selectionsCcTestStr = value;
            }else{
                selectionsCcTestStr = selectionsCcTestStr + "," + value;
            }
        });
        $.ajax({
            url : basePath + "/ccTest/delete.do",
            type : "POST",
            data : {"idArr":selectionsCcTestStr},
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#remove-cc-test-dialog').modal('hide');
                $defaultCcTestTable.bootstrapTable('refresh', null);
            }
        });
    });
}

/**
 * 初始化弹出面板
 */
function initDialog(){
    $('#add-cc-test-dialog').modal({
        keyboard: false
    });
    $('#edit-cc-test-dialog').modal({
        keyboard: false
    });
    $('#remove-cc-test-dialog').modal({
        keyboard: false
    });

    $('#add-cc-test-dialog').modal('hide');
    $('#edit-cc-test-dialog').modal('hide');
    $('#remove-cc-test-dialog').modal('hide');
}

/**
 * 获取选中的table项目UUID
 * @returns {*}
 */
function getIdSelectionsCcTest() {
    return $.map($defaultCcTestTable.bootstrapTable('getSelections'), function (row) {
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
function operateFormatter(value,row,index){
	var option = '<a id="a-cc-test-operate-detail" data-toggle="modal" data-target="#a-edit-cc-test-dialog" style="margin-right: 10px" title="操作" onclick="toOperateDetails(\''+row['id']+'\')" ><li class="fa fa-eye"></li></li></a>';
    return option;
}

/**
 * 记录执行操作
 * @returns {*}
 */
function toOperateDetails(id){
	
    $('#a-edit-cc-test-dialog').on('shown.bs.modal', function () {
            $.ajax({
                url : basePath + "/ccTest/getById.do",
                type : "POST",
                data : {"id":id},
                dataType : "json",
                success : function(data, textStatus) {
                    if(data.success){
                        console.log(data.data);
                        $("form[id=a-edit-cc-test-form]  input[name=id]").val(data.data.id);
					 	$("form[id=a-edit-cc-test-form]  input[name=testName]").val(data.data.testName);
					 	$("form[id=a-edit-cc-test-form]  input[name=testValue]").val(data.data.testValue);
					 	$("form[id=a-edit-cc-test-form]  input[name=testTinyint]").val(data.data.testTinyint);
					 	                    }else{
                        $('#a-edit-cc-test-dialog').modal('hide');
                    }
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                },
                complete : function(XMLHttpRequest, textStatus) {
                }
            });
        });
}




