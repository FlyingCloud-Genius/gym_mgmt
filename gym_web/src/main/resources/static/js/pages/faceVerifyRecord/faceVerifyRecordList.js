var $defaultFaceVerifyRecordTable = $('#face-verify-record-table');
var $addFaceVerifyRecordBtton = $('#add-face-verify-record-btton');
var $addFaceVerifyRecordExeBtton = $('#add-face-verify-record-exe-btton');
var $editFaceVerifyRecordBtton = $('#edit-face-verify-record-btton');
var $editFaceVerifyRecordExeBtton = $('#edit-face-verify-record-exe-btton');
var $removeFaceVerifyRecordBtton = $('#remove-face-verify-record-btton');
var $removeFaceVerifyRecordExeBtton = $('#remove-face-verify-record-exe-btton');
var selectionsFaceVerifyRecord = [];

/**
 * 页面初始化方法
 */
function initFaceVerifyRecordPage(){
    initTable();
    initButton();
    initDialog();
}

/**
 * table数据加载方法
 * @param params
 */
function dataList(params){
    $defaultFaceVerifyRecordTable.bootstrapTable('showLoading');
    console.log(params.data);
    $.ajax({
        url : basePath + '/faceVerifyRecord/dataList.do?stamp='
        +new Date().getTime()+'&sort='+params.data.sort+'&orders='+params.data.order+'&limit='
        +params.data.limit+'&offset='+params.data.offset,
        type : "post",
        data : $("#search-face-verify-record-form").serialize(),
        dataType : "json",
        success : function(result, textStatus) {
            params.success(result);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
        },
        complete : function(XMLHttpRequest, textStatus) {
            $defaultFaceVerifyRecordTable.bootstrapTable('hideLoading');
        }
    });
}

/**
 * table初始化方法
 */
function initTable() {
    $defaultFaceVerifyRecordTable.on('check.bs.table uncheck.bs.table ' +
        'check-all.bs.table uncheck-all.bs.table', function () {
        $removeFaceVerifyRecordBtton.prop('disabled', !$defaultFaceVerifyRecordTable.bootstrapTable('getSelections').length);
        $editFaceVerifyRecordBtton.prop('disabled', !($defaultFaceVerifyRecordTable.bootstrapTable('getSelections').length==1));
        // save your data, here just save the current page
        selectionsFaceVerifyRecord = getIdSelectionsFaceVerifyRecord();
        // push or splice the selections if you want to save all data selections
    });
    $defaultFaceVerifyRecordTable.on('all.bs.table', function (e, name, args) {
        console.log(name, args);
    });

    $(window).resize(function () {
        $defaultFaceVerifyRecordTable.bootstrapTable('resetView', {
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
    $("#search-face-verify-record-btton").click(function(){
        $defaultFaceVerifyRecordTable.bootstrapTable('refresh', null);
    });
    /**
    * 重置按钮初始化
    */
    $("#reset-face-verify-record-btton").click(function(){
                $("form[id=search-face-verify-record-form]  input[name=id]").val("");
                $("form[id=search-face-verify-record-form]  input[name=requestId]").val("");
                $("form[id=search-face-verify-record-form]  input[name=fileName]").val("");
                $("form[id=search-face-verify-record-form]  input[name=type]").val("");
                $("form[id=search-face-verify-record-form]  input[name=liveScore]").val("");
                $("form[id=search-face-verify-record-form]  input[name=hackScore]").val("");
                $("form[id=search-face-verify-record-form]  input[name=gammaScore]").val("");
                $("form[id=search-face-verify-record-form]  input[name=phiScore]").val("");
                $("form[id=search-face-verify-record-form]  input[name=thetaScore]").val("");
                $("form[id=search-face-verify-record-form]  input[name=blurScore]").val("");
                $("form[id=search-face-verify-record-form]  input[name=distance]").val("");
                $("form[id=search-face-verify-record-form]  input[name=messageCode]").val("");
                $("form[id=search-face-verify-record-form]  input[name=featureConfigScore]").val("");
                $("form[id=search-face-verify-record-form]  input[name=deviceToken]").val("");
                $("form[id=search-face-verify-record-form]  input[name=createdDate]").val("");
                $("form[id=search-face-verify-record-form]  input[name=modifiedDate]").val("");
                $("form[id=search-face-verify-record-form]  input[name=osType]").val("");
                $("form[id=search-face-verify-record-form]  input[name=modelVersion]").val("");
                $("form[id=search-face-verify-record-form]  input[name=liveConfigScore]").val("");
                $("form[id=search-face-verify-record-form]  input[name=status]").val("");
                $("form[id=search-face-verify-record-form]  input[name=liveModelVersion]").val("");
                $("form[id=search-face-verify-record-form]  input[name=userId]").val("");
                $("form[id=search-face-verify-record-form]  input[name=appType]").val("");
                $("form[id=search-face-verify-record-form]  input[name=sourceType]").val("");
                $("form[id=search-face-verify-record-form]  input[name=liveStatus]").val("");
                $("form[id=search-face-verify-record-form]  input[name=liveMessageCode]").val("");
                $("form[id=search-face-verify-record-form]  input[name=batchNo]").val("");
                $("form[id=search-face-verify-record-form]  input[name=featureFileKey]").val("");
                $("form[id=search-face-verify-record-form]  input[name=yn]").val("");
                $("form[id=search-face-verify-record-form]  input[name=fileOssKey]").val("");
            });
    /**
     * table上方按钮事件（添加）
     */
    $addFaceVerifyRecordBtton.click(function () {
        $('#add-face-verify-record-dialog').on('shown.bs.modal', function () {
            //$('#myInput').focus()
            $("form[id=add-face-verify-record-form]  input[name=id]").val("");
			$("form[id=add-face-verify-record-form]  input[name=requestId]").val("");
			$("form[id=add-face-verify-record-form]  input[name=fileName]").val("");
			$("form[id=add-face-verify-record-form]  input[name=type]").val("");
			$("form[id=add-face-verify-record-form]  input[name=liveScore]").val("");
			$("form[id=add-face-verify-record-form]  input[name=hackScore]").val("");
			$("form[id=add-face-verify-record-form]  input[name=gammaScore]").val("");
			$("form[id=add-face-verify-record-form]  input[name=phiScore]").val("");
			$("form[id=add-face-verify-record-form]  input[name=thetaScore]").val("");
			$("form[id=add-face-verify-record-form]  input[name=blurScore]").val("");
			$("form[id=add-face-verify-record-form]  input[name=distance]").val("");
			$("form[id=add-face-verify-record-form]  input[name=messageCode]").val("");
			$("form[id=add-face-verify-record-form]  input[name=featureConfigScore]").val("");
			$("form[id=add-face-verify-record-form]  input[name=deviceToken]").val("");
			$("form[id=add-face-verify-record-form]  input[name=createdDate]").val("");
			$("form[id=add-face-verify-record-form]  input[name=modifiedDate]").val("");
			$("form[id=add-face-verify-record-form]  input[name=osType]").val("");
			$("form[id=add-face-verify-record-form]  input[name=modelVersion]").val("");
			$("form[id=add-face-verify-record-form]  input[name=liveConfigScore]").val("");
			$("form[id=add-face-verify-record-form]  input[name=status]").val("");
			$("form[id=add-face-verify-record-form]  input[name=liveModelVersion]").val("");
			$("form[id=add-face-verify-record-form]  input[name=userId]").val("");
			$("form[id=add-face-verify-record-form]  input[name=appType]").val("");
			$("form[id=add-face-verify-record-form]  input[name=sourceType]").val("");
			$("form[id=add-face-verify-record-form]  input[name=liveStatus]").val("");
			$("form[id=add-face-verify-record-form]  input[name=liveMessageCode]").val("");
			$("form[id=add-face-verify-record-form]  input[name=batchNo]").val("");
			$("form[id=add-face-verify-record-form]  input[name=featureFileKey]").val("");
			$("form[id=add-face-verify-record-form]  input[name=yn]").val("");
			$("form[id=add-face-verify-record-form]  input[name=fileOssKey]").val("");
						$("form[id=add-face-verify-record-form]").bootstrapValidator( 'resetForm' , true);
        });
    });
    /**
     * 按钮执行区域（添加）
     */
    $addFaceVerifyRecordExeBtton.click(function(){
        console.log(JSON.stringify($("#add-face-verify-record-form").serialize()));
        var data = $("#add-face-verify-record-form").data('bootstrapValidator');
        if (data) {
            // 修复记忆的组件不验证
            data.validate();
            if (!data.isValid()) {
                return false;
            }
        }
        $.ajax({
            url : basePath + "/faceVerifyRecord/save.do",
            type : "POST",
            data : $("#add-face-verify-record-form").serialize(),
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#add-face-verify-record-dialog').modal('hide');
                $defaultFaceVerifyRecordTable.bootstrapTable('refresh', null);
                $defaultFaceVerifyRecordTable.bootstrapTable('uncheckAll');
            }
        });
    });

    /**
     * table上方按钮事件（编辑）
     */
    $editFaceVerifyRecordBtton.click(function () {
        var id = selectionsFaceVerifyRecord[0];
        console.log(id);
        $('#edit-face-verify-record-dialog').on('shown.bs.modal', function () {
            $.ajax({
                url : basePath + "/faceVerifyRecord/getById.do",
                type : "POST",
                data : {"id":id},
                dataType : "json",
                success : function(data, textStatus) {
                	
                    if(data.success){
                    $("form[id=edit-face-verify-record-form]").bootstrapValidator( 'resetForm' , true);
                        console.log(data.data);
                        $("form[id=edit-face-verify-record-form]  input[name=id]").val(data.data.id);
					 	$("form[id=edit-face-verify-record-form]  input[name=requestId]").val(data.data.requestId);
					 	$("form[id=edit-face-verify-record-form]  input[name=fileName]").val(data.data.fileName);
					 	$("form[id=edit-face-verify-record-form]  input[name=type]").val(data.data.type);
					 	$("form[id=edit-face-verify-record-form]  input[name=liveScore]").val(data.data.liveScore);
					 	$("form[id=edit-face-verify-record-form]  input[name=hackScore]").val(data.data.hackScore);
					 	$("form[id=edit-face-verify-record-form]  input[name=gammaScore]").val(data.data.gammaScore);
					 	$("form[id=edit-face-verify-record-form]  input[name=phiScore]").val(data.data.phiScore);
					 	$("form[id=edit-face-verify-record-form]  input[name=thetaScore]").val(data.data.thetaScore);
					 	$("form[id=edit-face-verify-record-form]  input[name=blurScore]").val(data.data.blurScore);
					 	$("form[id=edit-face-verify-record-form]  input[name=distance]").val(data.data.distance);
					 	$("form[id=edit-face-verify-record-form]  input[name=messageCode]").val(data.data.messageCode);
					 	$("form[id=edit-face-verify-record-form]  input[name=featureConfigScore]").val(data.data.featureConfigScore);
					 	$("form[id=edit-face-verify-record-form]  input[name=deviceToken]").val(data.data.deviceToken);
					 	$("form[id=edit-face-verify-record-form]  input[name=createdDate]").val(data.data.createdDate);
					 	$("form[id=edit-face-verify-record-form]  input[name=modifiedDate]").val(data.data.modifiedDate);
					 	$("form[id=edit-face-verify-record-form]  input[name=osType]").val(data.data.osType);
					 	$("form[id=edit-face-verify-record-form]  input[name=modelVersion]").val(data.data.modelVersion);
					 	$("form[id=edit-face-verify-record-form]  input[name=liveConfigScore]").val(data.data.liveConfigScore);
					 	$("form[id=edit-face-verify-record-form]  input[name=status]").val(data.data.status);
					 	$("form[id=edit-face-verify-record-form]  input[name=liveModelVersion]").val(data.data.liveModelVersion);
					 	$("form[id=edit-face-verify-record-form]  input[name=userId]").val(data.data.userId);
					 	$("form[id=edit-face-verify-record-form]  input[name=appType]").val(data.data.appType);
					 	$("form[id=edit-face-verify-record-form]  input[name=sourceType]").val(data.data.sourceType);
					 	$("form[id=edit-face-verify-record-form]  input[name=liveStatus]").val(data.data.liveStatus);
					 	$("form[id=edit-face-verify-record-form]  input[name=liveMessageCode]").val(data.data.liveMessageCode);
					 	$("form[id=edit-face-verify-record-form]  input[name=batchNo]").val(data.data.batchNo);
					 	$("form[id=edit-face-verify-record-form]  input[name=featureFileKey]").val(data.data.featureFileKey);
					 	$("form[id=edit-face-verify-record-form]  input[name=yn]").val(data.data.yn);
					 	$("form[id=edit-face-verify-record-form]  input[name=fileOssKey]").val(data.data.fileOssKey);
					 	                    }else{
                        $('#edit-face-verify-record-dialog').modal('hide');
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
    $editFaceVerifyRecordExeBtton.click(function (){
        console.log(JSON.stringify($("#edit-face-verify-record-form").serialize()));
        var data = $("#edit-face-verify-record-form").data('bootstrapValidator');
        if (data) {
            // 修复记忆的组件不验证
            data.validate();
            if (!data.isValid()) {
                return false;
            }
        }
        $.ajax({
            url : basePath + "/faceVerifyRecord/save.do",
            type : "POST",
            data : $("#edit-face-verify-record-form").serialize(),
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#edit-face-verify-record-dialog').modal('hide');
                $defaultFaceVerifyRecordTable.bootstrapTable('refresh', null);
                $defaultFaceVerifyRecordTable.bootstrapTable('uncheckAll');
            }
        });
    });

    /**
     * table上方按钮事件（删除）
     */
    $removeFaceVerifyRecordBtton.click(function () {
        $('#remove-face-verify-record-dialog').on('shown.bs.modal', function () {
            //$('#myInput').focus()
        });
    });

    /**
     * 按钮执行区域（删除）
     */
    $removeFaceVerifyRecordExeBtton.click(function (){
        console.log(JSON.stringify(selectionsFaceVerifyRecord));
        var selectionsFaceVerifyRecordStr = "";
        $.each(selectionsFaceVerifyRecord,function(index,value) {

            if(index == 0 ){
                selectionsFaceVerifyRecordStr = value;
            }else{
                selectionsFaceVerifyRecordStr = selectionsFaceVerifyRecordStr + "," + value;
            }
        });
        $.ajax({
            url : basePath + "/faceVerifyRecord/delete.do",
            type : "POST",
            data : {"idArr":selectionsFaceVerifyRecordStr},
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#remove-face-verify-record-dialog').modal('hide');
                $defaultFaceVerifyRecordTable.bootstrapTable('refresh', null);
            }
        });
    });
}

/**
 * 初始化弹出面板
 */
function initDialog(){
    $('#add-face-verify-record-dialog').modal({
        keyboard: false
    });
    $('#edit-face-verify-record-dialog').modal({
        keyboard: false
    });
    $('#remove-face-verify-record-dialog').modal({
        keyboard: false
    });

    $('#add-face-verify-record-dialog').modal('hide');
    $('#edit-face-verify-record-dialog').modal('hide');
    $('#remove-face-verify-record-dialog').modal('hide');
}

/**
 * 获取选中的table项目UUID
 * @returns {*}
 */
function getIdSelectionsFaceVerifyRecord() {
    return $.map($defaultFaceVerifyRecordTable.bootstrapTable('getSelections'), function (row) {
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
	var option = '<a id="a-face-verify-record-operate-detail" data-toggle="modal" data-target="#a-edit-face-verify-record-dialog" style="margin-right: 10px" title="操作" onclick="toOperateDetails(\''+row['id']+'\')" ><li class="fa fa-eye"></li></li></a>';
    return option;
}

/**
 * 记录执行操作
 * @returns {*}
 */
function toOperateDetails(id){
	
    $('#a-edit-face-verify-record-dialog').on('shown.bs.modal', function () {
            $.ajax({
                url : basePath + "/faceVerifyRecord/getById.do",
                type : "POST",
                data : {"id":id},
                dataType : "json",
                success : function(data, textStatus) {
                    if(data.success){
                        console.log(data.data);
                        $("form[id=a-edit-face-verify-record-form]  input[name=id]").val(data.data.id);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=requestId]").val(data.data.requestId);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=fileName]").val(data.data.fileName);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=type]").val(data.data.type);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=liveScore]").val(data.data.liveScore);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=hackScore]").val(data.data.hackScore);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=gammaScore]").val(data.data.gammaScore);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=phiScore]").val(data.data.phiScore);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=thetaScore]").val(data.data.thetaScore);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=blurScore]").val(data.data.blurScore);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=distance]").val(data.data.distance);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=messageCode]").val(data.data.messageCode);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=featureConfigScore]").val(data.data.featureConfigScore);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=deviceToken]").val(data.data.deviceToken);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=createdDate]").val(data.data.createdDate);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=modifiedDate]").val(data.data.modifiedDate);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=osType]").val(data.data.osType);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=modelVersion]").val(data.data.modelVersion);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=liveConfigScore]").val(data.data.liveConfigScore);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=status]").val(data.data.status);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=liveModelVersion]").val(data.data.liveModelVersion);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=userId]").val(data.data.userId);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=appType]").val(data.data.appType);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=sourceType]").val(data.data.sourceType);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=liveStatus]").val(data.data.liveStatus);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=liveMessageCode]").val(data.data.liveMessageCode);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=batchNo]").val(data.data.batchNo);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=featureFileKey]").val(data.data.featureFileKey);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=yn]").val(data.data.yn);
					 	$("form[id=a-edit-face-verify-record-form]  input[name=fileOssKey]").val(data.data.fileOssKey);
					 	                    }else{
                        $('#a-edit-face-verify-record-dialog').modal('hide');
                    }
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                },
                complete : function(XMLHttpRequest, textStatus) {
                }
            });
        });
}




