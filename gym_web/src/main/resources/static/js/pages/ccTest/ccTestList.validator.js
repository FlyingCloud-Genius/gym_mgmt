var $addCcTestForm = $("#add-cc-test-form");
var $editCcTestForm = $("#edit-cc-test-form");
function initFormValidator() {
    $addCcTestForm.bootstrapValidator({
        message: '表单输入项格式不正确',
        fields: {
		    		    
	            	id: {
	                message: 'id格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'id不能为空'
	                    }
	                }
	            },
	                        		    
	            	testName: {
	                message: 'test_name格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'test_name不能为空'
	                    }
	                }
	            },
	                        		    
	            	testValue: {
	                message: 'test_value格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'test_value不能为空'
	                    }
	                }
	            },
	                        		    
	            	testTinyint: {
	                message: 'test_tinyint格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'test_tinyint不能为空'
	                    }
	                }
	            }
	                        
    }});
    
    $editCcTestForm.bootstrapValidator({
    message: '表单输入项格式不正确',
    fields: {
		    		    
	            	id: {
	                message: 'id格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'id不能为空'
	                    }
	                }
	            },
	                        		    
	            	testName: {
	                message: 'test_name格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'test_name不能为空'
	                    }
	                }
	            },
	                        		    
	            	testValue: {
	                message: 'test_value格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'test_value不能为空'
	                    }
	                }
	            },
	                        		    
	            	testTinyint: {
	                message: 'test_tinyint格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'test_tinyint不能为空'
	                    }
	                }
	            }
	                            }});
}