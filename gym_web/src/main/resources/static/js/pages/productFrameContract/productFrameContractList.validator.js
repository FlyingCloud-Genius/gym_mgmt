var $addProductFrameContractForm = $("#add-product-frame-contract-form");
var $editProductFrameContractForm = $("#edit-product-frame-contract-form");
function initFormValidator() {
    $addProductFrameContractForm.bootstrapValidator({
        message: '表单输入项格式不正确',
        fields: {

            enterpriseCode: {
                message: '企业编码格式不正确',
                trigger:"change",
                validators: {
                    notEmpty: {
                        message: '企业简码不能为空'
                    }
                    //,
                    //remote: {
                    //    message: '企业简码不存在',
                    //    url: basePath+'/merchantBasicInfo/checkByEnterpriseCode',
                    //    data : $addFormEnterpriseCode.val(),//这里默认会传递该验证字段的值到后端
                    //    delay:2000 //这里特别要说明，必须要加此属性，否则用户输入一个字就会访问后台一次，会消耗大量的系统资源，
                    //}

                }
            },
            enterpriseName: {
                message: '企业编码格式不正确',
                trigger:"change",
                validators: {
                    notEmpty: {
                        message: '企业名称不能为空'
                    }
                }
            },
            frameContractName: {
                message: '框架合同名称不能为空',
                trigger:"change",
                validators: {
                    notEmpty: {
                        message: '框架合同名称不能为空'
                    }
                }
            },
            prodId: {
                message: '产品名称格式不正确',
                validators: {
                    notEmpty: {
                        message: '贷款产品不能为空'
                    }
                }
            },
            contractLimitAmtStr: {
                message: '合同限额格式不正确',
                validators: {
                    notEmpty: {
                        message: '合同限额不能为空'
                    },
                    regexp: {
                        regexp: /^[1-9]{1}[0-9]{0,9}\.{0,1}[0-9]{0,2}$/,
                        message:'合同限额格式不正确'
                    }
                }
            },
            contractInvalidDateStr: {
                message: '合同有效期格式不正确',
                trigger:"change",
                validators: {
                    notEmpty: {
                        message: '合同有效期不能为空'
                    },
                    date:{
                        format: 'YYYY-MM-DD',
                        message:"请输入有效的日期 (YYYY-MM-DD)"
                    }
                }
            },
            currency: {
                message: '币种不正确',
                validators: {
                    notEmpty: {
                        message: '币种不能为空'
                    }
                }
            },
            contractType: {
                message: '合同类型格式不正确',
                validators: {
                    notEmpty: {
                        message: '合同类型不能为空'
                    }
                }
            }

        }
    });

}