var $defaultTestTableTable = $('#test-table-table');
var $addTestTableBtton = $('#add-test-table-btton');
var $addTestTableExeBtton = $('#add-test-table-exe-btton');
var $editTestTableBtton = $('#edit-test-table-btton');
var $editTestTableExeBtton = $('#edit-test-table-exe-btton');
var $removeTestTableBtton = $('#remove-test-table-btton');
var $removeTestTableExeBtton = $('#remove-test-table-exe-btton');
var selectionsTestTable = [];

/**
 * 页面初始化方法
 */
function initTestTablePage(){
    initTable();
    initButton();
    initDialog();
}

/**
 * table数据加载方法
 * @param params
 */
function dataList(params){
    $defaultTestTableTable.bootstrapTable('showLoading');
    console.log(params.data);
    $.ajax({
        url : basePath + '/testTable/dataList.do?stamp='
        +new Date().getTime()+'&sort='+params.data.sort+'&orders='+params.data.order+'&limit='
        +params.data.limit+'&offset='+params.data.offset,
        type : "post",
        data : $("#search-test-table-form").serialize(),
        dataType : "json",
        success : function(result, textStatus) {
            params.success(result);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
        },
        complete : function(XMLHttpRequest, textStatus) {
            $defaultTestTableTable.bootstrapTable('hideLoading');
        }
    });
}

/**
 * table初始化方法
 */
function initTable() {
    $defaultTestTableTable.on('check.bs.table uncheck.bs.table ' +
        'check-all.bs.table uncheck-all.bs.table', function () {
        $removeTestTableBtton.prop('disabled', !$defaultTestTableTable.bootstrapTable('getSelections').length);
        $editTestTableBtton.prop('disabled', !($defaultTestTableTable.bootstrapTable('getSelections').length==1));
        // save your data, here just save the current page
        selectionsTestTable = getIdSelectionsTestTable();
        // push or splice the selections if you want to save all data selections
    });
    $defaultTestTableTable.on('all.bs.table', function (e, name, args) {
        console.log(name, args);
    });

    $(window).resize(function () {
        $defaultTestTableTable.bootstrapTable('resetView', {
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
    $("#search-test-table-btton").click(function(){
        $defaultTestTableTable.bootstrapTable('refresh', null);
    });
    /**
    * 重置按钮初始化
    */
    $("#reset-test-table-btton").click(function(){
                $("form[id=search-test-table-form]  input[name=id]").val("");
                $("form[id=search-test-table-form]  input[name=name]").val("");
                $("form[id=search-test-table-form]  input[name=age]").val("");
            });
    /**
     * table上方按钮事件（添加）
     */
    $addTestTableBtton.click(function () {
        $('#add-test-table-dialog').on('shown.bs.modal', function () {
            //$('#myInput').focus()
            $("form[id=add-test-table-form]  input[name=id]").val("");
			$("form[id=add-test-table-form]  input[name=name]").val("");
			$("form[id=add-test-table-form]  input[name=age]").val("");
						$("form[id=add-test-table-form]").bootstrapValidator( 'resetForm' , true);
        });
    });
    /**
     * 按钮执行区域（添加）
     */
    $addTestTableExeBtton.click(function(){
        console.log(JSON.stringify($("#add-test-table-form").serialize()));
        var data = $("#add-test-table-form").data('bootstrapValidator');
        if (data) {
            // 修复记忆的组件不验证
            data.validate();
            if (!data.isValid()) {
                return false;
            }
        }
        $.ajax({
            url : basePath + "/testTable/save.do",
            type : "POST",
            data : $("#add-test-table-form").serialize(),
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#add-test-table-dialog').modal('hide');
                $defaultTestTableTable.bootstrapTable('refresh', null);
                $defaultTestTableTable.bootstrapTable('uncheckAll');
            }
        });
    });

    /**
     * table上方按钮事件（编辑）
     */
    $editTestTableBtton.click(function () {
        var id = selectionsTestTable[0];
        console.log(id);
        $('#edit-test-table-dialog').on('shown.bs.modal', function () {
            $.ajax({
                url : basePath + "/testTable/getById.do",
                type : "POST",
                data : {"id":id},
                dataType : "json",
                success : function(data, textStatus) {
                	
                    if(data.success){
                    $("form[id=edit-test-table-form]").bootstrapValidator( 'resetForm' , true);
                        console.log(data.data);
                        $("form[id=edit-test-table-form]  input[name=id]").val(data.data.id);
					 	$("form[id=edit-test-table-form]  input[name=name]").val(data.data.name);
					 	$("form[id=edit-test-table-form]  input[name=age]").val(data.data.age);
					 	                    }else{
                        $('#edit-test-table-dialog').modal('hide');
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
    $editTestTableExeBtton.click(function (){
        console.log(JSON.stringify($("#edit-test-table-form").serialize()));
        var data = $("#edit-test-table-form").data('bootstrapValidator');
        if (data) {
            // 修复记忆的组件不验证
            data.validate();
            if (!data.isValid()) {
                return false;
            }
        }
        $.ajax({
            url : basePath + "/testTable/save.do",
            type : "POST",
            data : $("#edit-test-table-form").serialize(),
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#edit-test-table-dialog').modal('hide');
                $defaultTestTableTable.bootstrapTable('refresh', null);
                $defaultTestTableTable.bootstrapTable('uncheckAll');
            }
        });
    });

    /**
     * table上方按钮事件（删除）
     */
    $removeTestTableBtton.click(function () {
        $('#remove-test-table-dialog').on('shown.bs.modal', function () {
            //$('#myInput').focus()
        });
    });

    /**
     * 按钮执行区域（删除）
     */
    $removeTestTableExeBtton.click(function (){
        console.log(JSON.stringify(selectionsTestTable));
        var selectionsTestTableStr = "";
        $.each(selectionsTestTable,function(index,value) {

            if(index == 0 ){
                selectionsTestTableStr = value;
            }else{
                selectionsTestTableStr = selectionsTestTableStr + "," + value;
            }
        });
        $.ajax({
            url : basePath + "/testTable/delete.do",
            type : "POST",
            data : {"idArr":selectionsTestTableStr},
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#remove-test-table-dialog').modal('hide');
                $defaultTestTableTable.bootstrapTable('refresh', null);
            }
        });
    });
}

/**
 * 初始化弹出面板
 */
function initDialog(){
    $('#add-test-table-dialog').modal({
        keyboard: false
    });
    $('#edit-test-table-dialog').modal({
        keyboard: false
    });
    $('#remove-test-table-dialog').modal({
        keyboard: false
    });

    $('#add-test-table-dialog').modal('hide');
    $('#edit-test-table-dialog').modal('hide');
    $('#remove-test-table-dialog').modal('hide');
}

/**
 * 获取选中的table项目UUID
 * @returns {*}
 */
function getIdSelectionsTestTable() {
    return $.map($defaultTestTableTable.bootstrapTable('getSelections'), function (row) {
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
	var option = '<a id="a-test-table-operate-detail" data-toggle="modal" data-target="#a-edit-test-table-dialog" style="margin-right: 10px" title="操作" onclick="toOperateDetails(\''+row['id']+'\')" ><li class="fa fa-eye"></li></li></a>';
    return option;
}

/**
 * 记录执行操作
 * @returns {*}
 */
function toOperateDetails(id){
	
    $('#a-edit-test-table-dialog').on('shown.bs.modal', function () {
            $.ajax({
                url : basePath + "/testTable/getById.do",
                type : "POST",
                data : {"id":id},
                dataType : "json",
                success : function(data, textStatus) {
                    if(data.success){
                        console.log(data.data);
                        $("form[id=a-edit-test-table-form]  input[name=id]").val(data.data.id);
					 	$("form[id=a-edit-test-table-form]  input[name=name]").val(data.data.name);
					 	$("form[id=a-edit-test-table-form]  input[name=age]").val(data.data.age);
					 	                    }else{
                        $('#a-edit-test-table-dialog').modal('hide');
                    }
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                },
                complete : function(XMLHttpRequest, textStatus) {
                }
            });
        });
}




