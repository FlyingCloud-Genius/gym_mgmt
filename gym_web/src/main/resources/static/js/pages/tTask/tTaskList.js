var $defaultTTaskTable = $('#t-task-table');
var $addTTaskBtton = $('#add-t-task-btton');
var $addTTaskExeBtton = $('#add-t-task-exe-btton');
var $editTTaskBtton = $('#edit-t-task-btton');
var $editTTaskExeBtton = $('#edit-t-task-exe-btton');
var $removeTTaskBtton = $('#remove-t-task-btton');
var $removeTTaskExeBtton = $('#remove-t-task-exe-btton');
var selectionsTTask = [];

/**
 * 页面初始化方法
 */
function initTTaskPage(){
    alert("initTable");
    initTable();

    initButton();
    initDialog();
}
/**
 * table数据加载方法
 * @param params
 */
function dataList(params){
    $defaultTTaskTable.bootstrapTable('showLoading');
    console.log(params.data);
    $.ajax({
        url : basePath + '/tTask/dataList.do?stamp='
        +new Date().getTime()+'&sort='+params.data.sort+'&orders='+params.data.order+'&limit='
        +params.data.limit+'&offset='+params.data.offset,
        type : "post",
        data : $("#search-t-task-form").serialize(),
        dataType : "json",
        success : function(result, textStatus) {
            params.success(result);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
        },
        complete : function(XMLHttpRequest, textStatus) {
            $defaultTTaskTable.bootstrapTable('hideLoading');
        }
    });
}

/**
 * table初始化方法
 */
function initTable() {
    $defaultTTaskTable.on('check.bs.table uncheck.bs.table ' +
        'check-all.bs.table uncheck-all.bs.table', function () {
        $removeTTaskBtton.prop('disabled', !$defaultTTaskTable.bootstrapTable('getSelections').length);
        $editTTaskBtton.prop('disabled', !($defaultTTaskTable.bootstrapTable('getSelections').length==1));
        // save your data, here just save the current page
        selectionsTTask = getIdSelectionsTTask();
        // push or splice the selections if you want to save all data selections
    });
    $defaultTTaskTable.on('all.bs.table', function (e, name, args) {
        console.log(name, args);
    });

    $(window).resize(function () {
        $defaultTTaskTable.bootstrapTable('resetView', {
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
    $("#search-t-task-btton").click(function(){
        $defaultTTaskTable.bootstrapTable('refresh', null);
    });
    /**
     * 重置按钮初始化
     */
    $("#reset-t-task-btton").click(function(){
        $("form[id=search-t-task-form]  input[name=id]").val("");
        $("form[id=search-t-task-form]  input[name=name]").val("");
    });
    /**
     * table上方按钮事件（添加）
     */
    $addTTaskBtton.click(function () {
        $('#add-t-task-dialog').on('shown.bs.modal', function () {
            //$('#myInput').focus()
            $("form[id=add-t-task-form]  input[name=id]").val("");
            $("form[id=add-t-task-form]  input[name=name]").val("");
            $("form[id=add-t-task-form]").bootstrapValidator( 'resetForm' , true);
        });
    });
    /**
     * 按钮执行区域（添加）
     */
    $addTTaskExeBtton.click(function(){
        console.log(JSON.stringify($("#add-t-task-form").serialize()));
        var data = $("#add-t-task-form").data('bootstrapValidator');
        if (data) {
            // 修复记忆的组件不验证
            data.validate();
            if (!data.isValid()) {
                return false;
            }
        }
        $.ajax({
            url : basePath + "/tTask/save.do",
            type : "POST",
            data : $("#add-t-task-form").serialize(),
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#add-t-task-dialog').modal('hide');
                $defaultTTaskTable.bootstrapTable('refresh', null);
                $defaultTTaskTable.bootstrapTable('uncheckAll');
            }
        });
    });

    /**
     * table上方按钮事件（编辑）
     */
    $editTTaskBtton.click(function () {
        var id = selectionsTTask[0];
        console.log(id);
        $.ajax({
            url : basePath + "/tTask/getById.do",
            type : "POST",
            data : {"id":id},
            dataType : "json",
            success : function(data, textStatus) {

                if(data.success){
                    $("form[id=edit-t-task-form]").bootstrapValidator( 'resetForm' , true);
                    console.log(data.data);
                    $("form[id=edit-t-task-form]  input[name=id]").val(data.data.id);
                    $("form[id=edit-t-task-form]  select[name=dataSource]").val(data.data.tDycQueryBaseView.dataSourceId);
                    initDataSourceSelectInit(data.data.tDycQueryBaseView.dataSourceId);
                    initDataTableSelectInit(data.data.tDycQueryBaseView.dataSourceId,data.data.tDycQueryBaseView.dataTable);
                    $("form[id=edit-t-task-form]  select[name=dataTable]").val(data.data.tDycQueryBaseView.dataTable);
                    $("form[id=edit-t-task-form]  select[name=showCol]").val(data.data.tDycQueryBaseView.showCol);
                    $("form[id=edit-t-task-form]  input[name=aksDe]").attr("checked",data.data.tDycQueryBaseView.aksDe==1);
                    $("form[id=edit-t-task-form]  input[name=base64]").attr("checked",data.data.tDycQueryBaseView.base64==1);
                    $("form[id=edit-t-task-form]  select[name=appName]").val(data.data.tDycQueryBaseView.appName);
                    $("form[id=edit-t-task-form]  select[name=bucket]").val(data.data.tDycQueryBaseView.bucket);
                    $("form[id=edit-t-task-form]  input[name=dirName]").val(data.data.tDycQueryBaseView.dirName);

                    var tDycQueryWhereConditionViews=data.data.tDycQueryWhereConditionViews;
                    if(tDycQueryWhereConditionViews!=null){
                        for(var i=0;i<tDycQueryWhereConditionViews.length;i++){
                            var condition=tDycQueryWhereConditionViews[i];
                            if(i!=0){
                                edit_whereConditionLine();
                            }

                            $("form[id=edit-t-task-form]  select[name='conditionCol']").eq(i).val(condition.conditionCol);
                            $("form[id=edit-t-task-form]  select[name='conditionOper']").eq(i).val(condition.conditionOper);
                            $("form[id=edit-t-task-form]  input[name='conditionVal']").eq(i).val(condition.conditionVal);
                        }
                    }
                }else{
                    $('#edit-t-task-dialog').modal('hide');
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
            }
        });
    });

    /**
     * 按钮执行区域（编辑）
     */
    $editTTaskExeBtton.click(function (){
        console.log(JSON.stringify($("#edit-t-task-form").serialize()));
        var data = $("#edit-t-task-form").data('bootstrapValidator');
        if (data) {
            // 修复记忆的组件不验证
            data.validate();
            if (!data.isValid()) {
                return false;
            }
        }
        $.ajax({
            url : basePath + "/tTask/save.do",
            type : "POST",
            data : $("#edit-t-task-form").serialize(),
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#edit-t-task-dialog').modal('hide');
                $defaultTTaskTable.bootstrapTable('refresh', null);
                $defaultTTaskTable.bootstrapTable('uncheckAll');
            }
        });
    });

    /**
     * table上方按钮事件（删除）
     */
    $removeTTaskBtton.click(function () {
        $('#remove-t-task-dialog').on('shown.bs.modal', function () {
            //$('#myInput').focus()
        });
    });

    /**
     * 按钮执行区域（删除）
     */
    $removeTTaskExeBtton.click(function (){
        console.log(JSON.stringify(selectionsTTask));
        var selectionsTTaskStr = "";
        $.each(selectionsTTask,function(index,value) {

            if(index == 0 ){
                selectionsTTaskStr = value;
            }else{
                selectionsTTaskStr = selectionsTTaskStr + "," + value;
            }
        });
        $.ajax({
            url : basePath + "/tTask/delete.do",
            type : "POST",
            data : {"idArr":selectionsTTaskStr},
            dataType : "json",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#remove-t-task-dialog').modal('hide');
                $defaultTTaskTable.bootstrapTable('refresh', null);
            }
        });
    });
}

/**
 * 初始化弹出面板
 */
function initDialog(){
    $('#add-t-task-dialog').modal({
        keyboard: false
    });
    $('#edit-t-task-dialog').modal({
        keyboard: false
    });
    $('#remove-t-task-dialog').modal({
        keyboard: false
    });

    $('#add-t-task-dialog').modal('hide');
    $('#edit-t-task-dialog').modal('hide');
    $('#remove-t-task-dialog').modal('hide');

    var add_html=$('#add-t-task-dialog').html();
    var edit_html=$('#edit-t-task-dialog').html();
    var remove_html=$('#remove-t-task-dialog').html();
    var a_edit_html=$('#a-edit-t-task-dialog').html();


    $("#add-t-task-dialog").on("hidden.bs.modal", function() {
        $(this).html(add_html);
        initDataSourceSelect();
    });
    $("#edit-t-task-dialog").on("hidden.bs.modal", function() {
        $(this).html(edit_html);
        initDataSourceSelect();
    });
    $("#remove-t-task-dialog").on("hidden.bs.modal", function() {
        $(this).html(remove_html);
        initDataSourceSelect();
    });
    $("#a-edit-t-task-dialog").on("hidden.bs.modal", function() {
        $(this).html(a_edit_html);
        initDataSourceSelect();
    });

    initDataSourceSelect();
    initDataSourceSelectOnChange();
    initConditionPlusClick();
    initDataTableSelectOnChange();
    initSaveBtnOnClick();
}
function initDataSourceSelect(){
    alert("initDataSourceSelect")
    $.ajax({
        url : basePath + "/tDatasourceDic/dataListNoPage.do",
        type : "POST",
        //data : $("#edit-t-task-form").serialize(),
        dataType : "json",
        async:false,
        success : function(data, textStatus) {
            var data=data.data;
            console.log(data);
            var html="<option value=''>--数据源--</option>";
            for(var i=0;i<data.length;i++){
                html+="<option value='"+data[i].id+"'>"+data[i].datasourceCn+"</option>";
            }
            $("select[name='dataSource']").html(html);
        }
    });
}
function initDataSourceSelectOnChange(){
    $("body").on("change","select[name='dataSource']",function(){
        $.ajax({
            url : basePath + "/tDatasourceDic/getDataTableList.do",
            type : "POST",
            data : {id:$("#dataSource").val()},
            dataType : "json",
            async:false,
            success : function(data, textStatus) {
                var data=data.data;
                console.log(data);
                var html="<option value=''>--数据表--</option>";
                for(var i=0;i<data.length;i++){
                    html+="<option value='"+data[i]+"'>"+data[i]+"</option>";
                }
                $("select[name='dataTable']").html(html);
            }
        });
    });
}
function initDataSourceSelectInit(dataDourceId){
    $.ajax({
        url : basePath + "/tDatasourceDic/getDataTableList.do",
        type : "POST",
        data : {id:dataDourceId},
        dataType : "json",
        async:false,
        success : function(data, textStatus) {
            var data=data.data;
            console.log(data);
            var html="<option value=''>--数据表--</option>";
            for(var i=0;i<data.length;i++){
                html+="<option value='"+data[i]+"'>"+data[i]+"</option>";
            }
            $("select[name='dataTable']").html(html);
        }
    });
}
function initDataTableSelectOnChange(){
    $("body").on("change","select[name='dataTable']",function(){
        $.ajax({
            url : basePath + "/tDatasourceDic/getColList.do",
            type : "POST",
            data : {dataSourceId:$("#dataSource").val(),dataTable:$("#dataTable").val()},
            dataType : "json",
            async:false,
            success : function(data, textStatus) {
                var data=data.data;
                console.log(data);
                var html="<option value=''>--字段--</option>";
                for(var i=0;i<data.length;i++){
                    html+="<option value='"+data[i]+"'>"+data[i]+"</option>";
                }
                $("select[name='showCol']").html(html);
                $("select[name='conditionCol']").html(html);
            }
        });
    });
}
function initDataTableSelectInit(dataSourceId,dataTable){
    $.ajax({
        url : basePath + "/tDatasourceDic/getColList.do",
        type : "POST",
        data : {dataSourceId:dataSourceId,dataTable:dataTable},
        dataType : "json",
        async:false,
        success : function(data, textStatus) {
            var data=data.data;
            console.log(data);
            var html="<option value=''>--字段--</option>";
            for(var i=0;i<data.length;i++){
                html+="<option value='"+data[i]+"'>"+data[i]+"</option>";
            }
            $("select[name='showCol']").html(html);
            $("select[name='conditionCol']").html(html);
        }
    });
}
function initConditionPlusClick(){
    $("body").on("click","form[id=add-t-task-form] .myplus",function(){
        var whereConditionTemplateDiv_html=$("#whereConditionTemplateDiv").html();
        whereConditionTemplateDiv_html='<div class="form-group">'+whereConditionTemplateDiv_html+'</div>';
        $("#dycWhereConditionDiv").append(whereConditionTemplateDiv_html);
    });

    $("body").on("click","form[id=add-t-task-form] .myminus",function(){
        $(this).parent().parent().remove();
    });

    $("body").on("click","form[id=edit-t-task-form] .myplus",function(){
        var whereConditionTemplateDiv_html=$("#edit_whereConditionTemplateDiv").html();
        whereConditionTemplateDiv_html='<div class="form-group">'+whereConditionTemplateDiv_html+'</div>';
        $("#edit_dycWhereConditionDiv").append(whereConditionTemplateDiv_html);
    });

    $("body").on("click","form[id=edit-t-task-form] .myminus",function(){
        $(this).parent().parent().remove();
    });

}
function edit_whereConditionLine(){
    var whereConditionTemplateDiv_html=$("#edit_whereConditionTemplateDiv").html();
    whereConditionTemplateDiv_html='<div class="form-group">'+whereConditionTemplateDiv_html+'</div>';
    $("#edit_dycWhereConditionDiv").append(whereConditionTemplateDiv_html);
}

function a_edit_whereConditionLine(){
    var whereConditionTemplateDiv_html=$("#a-edit_whereConditionTemplateDiv").html();
    whereConditionTemplateDiv_html='<div class="form-group">'+whereConditionTemplateDiv_html+'</div>';
    $("#a-edit_dycWhereConditionDiv").append(whereConditionTemplateDiv_html);
}
function initSaveBtnOnClick(){
    $("body").on("click","#saveBtn",function(){
        var form=new Object();
        var dataSourceId=$("form[id=add-t-task-form] #dataSource").val();
        var dataTable=$("form[id=add-t-task-form] #dataTable").val();
        var showCol=$("form[id=add-t-task-form] #showCol").val();
        var aksDe=$("form[id=add-t-task-form] #aksDe").is(':checked');
        var base64=$("form[id=add-t-task-form] #base64").is(':checked');

        var  whereCondition=new Array();
        $("#dycWhereConditionDiv").find(".form-group").each(function(){
            var o=new Object();
            o.conditionCol=$(this).find("select[name='conditionCol']").val();
            o.conditionOper= $(this).find("select[name='conditionOper']").val();
            o.conditionVal=$(this).find("input[name='conditionVal']").val();
            whereCondition.push(o);
        });

        var appName=$("form[id=add-t-task-form] #appName").val();
        var bucket=$("form[id=add-t-task-form] #bucket").val();
        var dirName=$("form[id=add-t-task-form] #dirName").val();

        form['dataSourceId']=dataSourceId;
        form['dataTable']=dataTable;
        form['showCol']=showCol;
        form['aksDe']=aksDe;
        form['base64']=base64;
        form['whereCondition']=whereCondition;
        form['appName']=appName;
        form['bucket']=bucket;
        form['dirName']=dirName;
        $.ajax({
            url : basePath + "/tTask/saveDycQuery.do",
            type : "POST",
            data : JSON.stringify(form),
            dataType : "json",
            contentType:"application/json; charset=utf-8",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#add-t-task-dialog').modal('hide');
                $defaultTTaskTable.bootstrapTable('refresh', null);
                $defaultTTaskTable.bootstrapTable('uncheckAll');
            }
        });
    });


    $("body").on("click","#edit_saveBtn",function(){
        var form=new Object();
        var taskId=$("form[id=edit-t-task-form] input[name='id']").val();
        var dataSourceId=$("form[id=edit-t-task-form] select[name='dataSource']").val();
        var dataTable=$("form[id=edit-t-task-form] select[name='dataTable']").val();
        var showCol=$("form[id=edit-t-task-form] select[name='showCol']").val();
        var aksDe=$("form[id=edit-t-task-form] input[name='aksDe']").is(':checked');
        var base64=$("form[id=edit-t-task-form] input[name='base64']").is(':checked');

        var  whereCondition=new Array();
        $("#edit_dycWhereConditionDiv").find(".form-group").each(function(){
            var o=new Object();
            o.conditionCol=$(this).find("select[name='conditionCol']").val();
            o.conditionOper= $(this).find("select[name='conditionOper']").val();
            o.conditionVal=$(this).find("input[name='conditionVal']").val();
            whereCondition.push(o);
        });

        var appName=$("form[id=edit-t-task-form] select[name='appName']").val();
        var bucket=$("form[id=edit-t-task-form] select[name='bucket']").val();
        var dirName=$("form[id=edit-t-task-form] input[name='dirName']").val();

        form['dataSourceId']=dataSourceId;
        form['dataTable']=dataTable;
        form['showCol']=showCol;
        form['aksDe']=aksDe;
        form['base64']=base64;
        form['whereCondition']=whereCondition;
        form['appName']=appName;
        form['bucket']=bucket;
        form['dirName']=dirName;
        form['taskId']=taskId;
        $.ajax({
            url : basePath + "/tTask/saveDycQuery.do",
            type : "POST",
            data : JSON.stringify(form),
            dataType : "json",
            contentType:"application/json; charset=utf-8",
            success : function(data, textStatus) {

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
            },
            complete : function(XMLHttpRequest, textStatus) {
                $('#edit-t-task-dialog').modal('hide');
                $defaultTTaskTable.bootstrapTable('refresh', null);
                $defaultTTaskTable.bootstrapTable('uncheckAll');
            }
        });
    });

}
/**
 * 获取选中的table项目UUID
 * @returns {*}
 */
function getIdSelectionsTTask() {
    return $.map($defaultTTaskTable.bootstrapTable('getSelections'), function (row) {
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
    var option_execute_dyc_query='<a id="a-t-task-operate-exedyc" style="margin-right: 10px" title="执行查询" onclick="exedyc(\''+row['id']+'\')" >执行查询</li></a>&nbsp;';
    var option = option_execute_dyc_query+'<a id="a-t-task-operate-detail" data-toggle="modal" data-target="#a-edit-t-task-dialog" style="margin-right: 10px" title="操作" onclick="toOperateDetails(\''+row['id']+'\')" ><li class="fa fa-eye"></li></li></a>';
    return option;
}

/**
 * 记录执行操作
 * @returns {*}
 */
function toOperateDetails(id){

    $.ajax({
        url : basePath + "/tTask/getById.do",
        type : "POST",
        data : {"id":id},
        dataType : "json",
        success : function(data, textStatus) {

            if(data.success){
                $("form[id=a-edit-t-task-form]").bootstrapValidator( 'resetForm' , true);
                console.log(data.data);
                $("form[id=a-edit-t-task-form]  input[name=id]").val(data.data.id);
                $("form[id=a-edit-t-task-form]  select[name=dataSource]").val(data.data.tDycQueryBaseView.dataSourceId);
                initDataSourceSelectInit(data.data.tDycQueryBaseView.dataSourceId);
                initDataTableSelectInit(data.data.tDycQueryBaseView.dataSourceId,data.data.tDycQueryBaseView.dataTable);
                $("form[id=a-edit-t-task-form]  select[name=dataTable]").val(data.data.tDycQueryBaseView.dataTable);
                $("form[id=a-edit-t-task-form]  select[name=showCol]").val(data.data.tDycQueryBaseView.showCol);
                $("form[id=a-edit-t-task-form]  input[name=aksDe]").attr("checked",data.data.tDycQueryBaseView.aksDe==1);
                $("form[id=a-edit-t-task-form]  input[name=base64]").attr("checked",data.data.tDycQueryBaseView.base64==1);
                $("form[id=a-edit-t-task-form]  select[name=appName]").val(data.data.tDycQueryBaseView.appName);
                $("form[id=a-edit-t-task-form]  select[name=bucket]").val(data.data.tDycQueryBaseView.bucket);
                $("form[id=a-edit-t-task-form]  input[name=dirName]").val(data.data.tDycQueryBaseView.dirName);

                var tDycQueryWhereConditionViews=data.data.tDycQueryWhereConditionViews;
                if(tDycQueryWhereConditionViews!=null){
                    for(var i=0;i<tDycQueryWhereConditionViews.length;i++){
                        var condition=tDycQueryWhereConditionViews[i];
                        if(i!=0){
                            a_edit_whereConditionLine();
                        }

                        $("form[id=a-edit-t-task-form]  select[name='conditionCol']").eq(i).val(condition.conditionCol);
                        $("form[id=a-edit-t-task-form]  select[name='conditionOper']").eq(i).val(condition.conditionOper);
                        $("form[id=a-edit-t-task-form]  input[name='conditionVal']").eq(i).val(condition.conditionVal);
                    }
                }
            }else{
                $('#a-edit-t-task-form').modal('hide');
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
        },
        complete : function(XMLHttpRequest, textStatus) {
        }
    });
}

function exedyc(id){
    $.ajax({
        url : basePath + "/tTask/executeDycQuery.do",
        type : "POST",
        data : {taskId:id},
        dataType : "json",
        success : function(data, textStatus) {
            alert("执行成功");
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            alert("执行失败...");
        },
        complete : function(XMLHttpRequest, textStatus) {
        }
    });
}



