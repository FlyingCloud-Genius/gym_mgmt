var $addTestTableForm = $("#add-test-table-form");
var $editTestTableForm = $("#edit-test-table-form");
function initFormValidator() {
    $addTestTableForm.bootstrapValidator({
        message: '表单输入项格式不正确',
        fields: {
		    		    
	            	id: {
	                message: '主键格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: '主键不能为空'
	                    }
	                }
	            },
	                        		    
	            	name: {
	                message: '名字格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: '名字不能为空'
	                    }
	                }
	            },
	                        		    
	            	age: {
	                message: '年龄格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: '年龄不能为空'
	                    }
	                }
	            }
	                        
    }});
    
    $editTestTableForm.bootstrapValidator({
    message: '表单输入项格式不正确',
    fields: {
		    		    
	            	id: {
	                message: '主键格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: '主键不能为空'
	                    }
	                }
	            },
	                        		    
	            	name: {
	                message: '名字格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: '名字不能为空'
	                    }
	                }
	            },
	                        		    
	            	age: {
	                message: '年龄格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: '年龄不能为空'
	                    }
	                }
	            }
	                            }});
}