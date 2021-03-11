/*状态类型枚举js*/

var merchantCustomerStatus=[];
var merchantFinancableStatus=[];
var merchantInternalApproveStatus=[];
var merchantAmlStatus=[];
var merchantForceRepaymentFlag=[];
var merchantLoanprcpRepaidStatus=[];
var merchantLoanExtAuditStatus=[];
var merchantloanOverdueStatus=[];
var forceEarlyRpymStatus=[];
var merchantLoanStatus=[];
var remitStatus=[];
var innnerApproveStatus=[];
var repaymentStatus=[];
var repaymentReversalStatus=[];
var remitType=[];
var repaymentReversalType=[];
var touchChannelType=[];
var repaymentType=[];
var currencyType=[];
var frozenUnfrozenOperType=[];
var ekycStatus=[];
var merchantFinancableStatus=[];
var remitApplyType=[];
var operateType=[];
var merchantUserType=[];
var merchantUserGenderType=[];
var nationalityType=[];
var identityCardType=[];
var enterpriseType=[];
var indusNatureType=[];

var billRepaymentStatus=[];
var billOverdueStatus=[];
var financableStatus=[];
var isGroupUserType=[];

var craType=[];
var pepType=[];
var strType=[];
var staffType=[];




//initilize All type status
$(function () {
  getStatusAll();
  getTypeAll();
});

function getStatusAll() {
  var enumName = "";

  //企业客户状态
  enumName = "MerchantCustomerStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantCustomerStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });




  //企业可融资状态
  enumName = "MerchantFinancableStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantFinancableStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //企业内部审核状态
  enumName = "MerchantInternalApproveStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantInternalApproveStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //企业-AML状态
  enumName = "MerchantAmlStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantAmlStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //企业-是否强制提还
  enumName = "MerchantForceRepaymentFlag";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantForceRepaymentFlag = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });

  //贷款-本金还款状态
  enumName = "MerchantLoanprcpRepaidStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantLoanprcpRepaidStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //贷款-审核状态
  enumName = "MerchantLoanExtAuditStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantLoanExtAuditStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //贷款-逾期状态
  enumName = "MerchantloanOverdueStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantloanOverdueStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });




  //贷款-强制提还状态
  enumName = "ForceEarlyRpymStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      forceEarlyRpymStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });



  //贷款-放款状态
  enumName = "MerchantLoanStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantLoanStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //汇出状态
  enumName = "RemitStatus";
  $.ajax({
    url : basePath + '/utils/querySingleStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      remitStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });

  //内部审核状态
  enumName = "InnnerApproveStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      innnerApproveStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });



 //冲销状态
  enumName = "RepaymentReversalStatus";
  $.ajax({
    url : basePath + '/utils/querySingleStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      repaymentReversalStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //汇出状态
  enumName = "RepaymentStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      repaymentStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  enumName = "EkycStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      ekycStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //可融资状态
  enumName = "MerchantFinancableStatus";
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantFinancableStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });

    //账单还款状态
    enumName = "BillRepaymentStatus";
    $.ajax({
        url : basePath + '/utils/queryStatus',
        type : "post",
        data : {"EnumName":enumName},
        dataType : "json",
        success : function(result, textStatus) {
            billRepaymentStatus = result;
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
        },
        complete : function(XMLHttpRequest, textStatus) {
        }
    });

    //账单逾期状态
    enumName = "BillOverdueStatus";
    $.ajax({
        url : basePath + '/utils/queryStatus',
        type : "post",
        data : {"EnumName":enumName},
        dataType : "json",
        success : function(result, textStatus) {
            billOverdueStatus = result;
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
        },
        complete : function(XMLHttpRequest, textStatus) {
        }
    });


 //可融资状态
  enumName = "FinancableStatus";
  $.ajax({
    url : basePath + '/utils/querySingleStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      financableStatus = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });

}
function getTypeAll(){
  var enumName ="";




  enumName = "TouchChannelType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      touchChannelType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });



  //币种
  enumName = "CurrencyType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      currencyType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //冻结解冻操作类型
  enumName = "FrozenUnfrozenOperType";
  $.ajax({
    url : basePath + '/utils/querySingleType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      frozenUnfrozenOperType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });

  //冲销类型
  enumName = "RepaymentReversalType";
  $.ajax({
    url : basePath + '/utils/querySingleType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      repaymentReversalType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });

  //汇出类型
  enumName = "RemitType";
  $.ajax({
    url : basePath + '/utils/querySingleType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      remitType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //还款类型
  enumName = "RepaymentType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      repaymentType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });

    //汇出款类型
    enumName = "RemitType";
    $.ajax({
        url : basePath + '/utils/queryType',
        type : "post",
        data : {"EnumName":enumName},
        dataType : "json",
        success : function(result, textStatus) {
            remitApplyType = result;
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
        },
        complete : function(XMLHttpRequest, textStatus) {
        }
    });

    //汇出操作类型
    enumName = "RemitOperationType";
    $.ajax({
        url : basePath + '/utils/queryType',
        type : "post",
        data : {"EnumName":enumName},
        dataType : "json",
        success : function(result, textStatus) {
            operateType = result;
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
        },
        complete : function(XMLHttpRequest, textStatus) {
        }
    });

  //用户类型
  enumName = "MerchantUserType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantUserType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });
  //用户性别
  enumName = "MerchantUserGenderType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      merchantUserGenderType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });

  //国籍
  enumName = "NationalityType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      nationalityType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });
  //身份证类型
  enumName = "IdentityCardType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      identityCardType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });



  //企业类型
  enumName = "EnterpriseType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      enterpriseType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });



  //行业性质
  enumName = "IndusNatureType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      indusNatureType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });

  //是否是集团用户
  enumName = "IsGroupUserType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      isGroupUserType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //cra
  enumName = "CraType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      craType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });


  //pepType
  enumName = "PepType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      pepType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });

  //strType
  enumName = "StrType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      strType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });

  //staffType
  enumName = "StaffType";
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      staffType = result;
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });



}


function constructStatus(id,enumName){

  var html = '';
  $.ajax({
    url : basePath + '/utils/queryStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      html = '<option value="" selected>请选择...</option>';
      $.each(result,function(index,value) {
        html += '<option value="'+value.code+'">'+value.name+'</option>';
      });
      $(id).append(html);
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });
}

function constructSingleStatus(id,enumName){

  var html = '';
  $.ajax({
    url : basePath + '/utils/querySingleStatus',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      html = '<option value="" selected>请选择...</option>';
      $.each(result,function(index,value) {
        html += '<option value="'+value.code+'">'+value.name+'</option>';
      });
      $(id).append(html);
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });
}


/**
 * 获取类型enum常量值，并且转化成select控件中option
 * @param id 控件ID
 * @param enumName [AccountRunType<流水类型>|RuleType<积分规则类型>|BizType<系统来源业务分类>|ClientType<设备来源类型>]
 * @returns void
 */
function constructType(id,enumName){

  var html = '';
  $.ajax({
    url : basePath + '/utils/queryType',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      if(enumName != "RegulationType")
        html = '<option value="" selected>请选择...</option>';
      $.each(result,function(index,value) {
        html += '<option  value='+value.code+' >'+value.name+'</option>';
      });
      $(id).append(html);
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });
}

/**
 * 获取类型enum常量值，并且转化成select控件中option
 * @param id 控件ID
 * @param enumName [AccountRunType<流水类型>|RuleType<积分规则类型>|BizType<系统来源业务分类>|ClientType<设备来源类型>]
 * @returns void
 */
function constructSingleType(id,enumName) {

  var html = '';
  $.ajax({
    url: basePath + '/utils/querySingleType',
    type: "post",
    data: {"EnumName": enumName},
    dataType: "json",
    success: function (result, textStatus) {
      if (enumName != "RegulationType")
        html = '<option value="" selected>请选择...</option>';
      $.each(result, function (index, value) {
        html += '<option  value=' + value.code + ' >' + value.name + '</option>';
      });
      $(id).append(html);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
    },
    complete: function (XMLHttpRequest, textStatus) {
    }
  });
}