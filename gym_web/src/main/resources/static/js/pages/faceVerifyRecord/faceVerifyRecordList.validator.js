var $addFaceVerifyRecordForm = $("#add-face-verify-record-form");
var $editFaceVerifyRecordForm = $("#edit-face-verify-record-form");
function initFormValidator() {
    $addFaceVerifyRecordForm.bootstrapValidator({
        message: '表单输入项格式不正确',
        fields: {
		    		    
	            	id: {
	                message: 'primary key self-increasing id/主键自增id格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'primary key self-increasing id/主键自增id不能为空'
	                    }
	                }
	            },
	                        		    
	            	requestId: {
	                message: 'Request Id/请求Id格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Request Id/请求Id不能为空'
	                    }
	                }
	            },
	                        		    
	            	fileName: {
	                message: 'Image url/照片地址格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Image url/照片地址不能为空'
	                    }
	                }
	            },
	                        		    
	            	type: {
	                message: 'Photo type (1: id /0: selfie)/照片类型（1:证件照/0:自拍照）格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Photo type (1: id /0: selfie)/照片类型（1:证件照/0:自拍照）不能为空'
	                    }
	                }
	            },
	                        		    
	            	liveScore: {
	                message: 'Live scores/活体分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Live scores/活体分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	hackScore: {
	                message: 'Attack score/攻击分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Attack score/攻击分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	gammaScore: {
	                message: 'Attitude gamma score/姿态gamma分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Attitude gamma score/姿态gamma分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	phiScore: {
	                message: 'Attitude phi score/姿态phi分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Attitude phi score/姿态phi分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	thetaScore: {
	                message: 'Attitude theta score/姿态theta分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Attitude theta score/姿态theta分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	blurScore: {
	                message: 'Pose blur score/姿态blur分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Pose blur score/姿态blur分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	distance: {
	                message: 'Distance score/距离分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Distance score/距离分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	messageCode: {
	                message: 'Identification message code/识别消息码格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Identification message code/识别消息码不能为空'
	                    }
	                }
	            },
	                        		    
	            	featureConfigScore: {
	                message: 'Feature configuration comparison values/特征配置比较值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Feature configuration comparison values/特征配置比较值不能为空'
	                    }
	                }
	            },
	                        		    
	            	deviceToken: {
	                message: 'Client device unique identification/客户端设备唯一标识格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Client device unique identification/客户端设备唯一标识不能为空'
	                    }
	                }
	            },
	                        		    
	            	createdDate: {
	                message: 'created date/创建时间格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'created date/创建时间不能为空'
	                    }
	                }
	            },
	                        		    
	            	modifiedDate: {
	                message: 'modified date/修改时间格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'modified date/修改时间不能为空'
	                    }
	                }
	            },
	                        		    
	            	osType: {
	                message: 'Operating system (ios andriod)/操作系统（ios andriod）格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Operating system (ios andriod)/操作系统（ios andriod）不能为空'
	                    }
	                }
	            },
	                        		    
	            	modelVersion: {
	                message: 'Model version/模型版本格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Model version/模型版本不能为空'
	                    }
	                }
	            },
	                        		    
	            	liveConfigScore: {
	                message: 'Security configuration check value/防伪配置校验值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Security configuration check value/防伪配置校验值不能为空'
	                    }
	                }
	            },
	                        		    
	            	status: {
	                message: 'Face recognition status: -1: failure, 1: face recognition success, 2: face recognition feature value mismatch, 3: face authentication security failed/人脸认识状态：-1：失败，1：人脸识别成功，2：人脸认识特征值不匹配，3：人脸认证防伪未能过格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Face recognition status: -1: failure, 1: face recognition success, 2: face recognition feature value mismatch, 3: face authentication security failed/人脸认识状态：-1：失败，1：人脸识别成功，2：人脸认识特征值不匹配，3：人脸认证防伪未能过不能为空'
	                    }
	                }
	            },
	                        		    
	            	liveModelVersion: {
	                message: 'Security model version/防伪模型版本格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Security model version/防伪模型版本不能为空'
	                    }
	                }
	            },
	                        		    
	            	userId: {
	                message: 'User number, front-end delivery/用户号,前端传递格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'User number, front-end delivery/用户号,前端传递不能为空'
	                    }
	                }
	            },
	                        		    
	            	appType: {
	                message: 'Application type, front-end delivery/应用类型，前端传递格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Application type, front-end delivery/应用类型，前端传递不能为空'
	                    }
	                }
	            },
	                        		    
	            	sourceType: {
	                message: 'Source: login: login,kyc link: kyc/来源：登录：login,kyc环节：kyc格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Source: login: login,kyc link: kyc/来源：登录：login,kyc环节：kyc不能为空'
	                    }
	                }
	            },
	                        		    
	            	liveStatus: {
	                message: '防伪是否通过：0表示防伪未通过，1表示防伪通过格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: '防伪是否通过：0表示防伪未通过，1表示防伪通过不能为空'
	                    }
	                }
	            },
	                        		    
	            	liveMessageCode: {
	                message: 'Security error code/防伪错误码格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Security error code/防伪错误码不能为空'
	                    }
	                }
	            },
	                        		    
	            	batchNo: {
	                message: 'Batch number: used to distinguish multiple face recognition data from the same requestId/批次号：用于区分同一个requestId多次人脸识别数据格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Batch number: used to distinguish multiple face recognition data from the same requestId/批次号：用于区分同一个requestId多次人脸识别数据不能为空'
	                    }
	                }
	            },
	                        		    
	            	featureFileKey: {
	                message: 'The eigenvalue file key/特征值文件key格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'The eigenvalue file key/特征值文件key不能为空'
	                    }
	                }
	            },
	                        		    
	            	yn: {
	                message: '是否有效,默认有效/yes or no,default 0 means yes格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: '是否有效,默认有效/yes or no,default 0 means yes不能为空'
	                    }
	                }
	            },
	                        		    
	            	fileOssKey: {
	                message: 'selfie OSS file key/人脸自拍照片oss文件key格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'selfie OSS file key/人脸自拍照片oss文件key不能为空'
	                    }
	                }
	            }
	                        
    }});
    
    $editFaceVerifyRecordForm.bootstrapValidator({
    message: '表单输入项格式不正确',
    fields: {
		    		    
	            	id: {
	                message: 'primary key self-increasing id/主键自增id格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'primary key self-increasing id/主键自增id不能为空'
	                    }
	                }
	            },
	                        		    
	            	requestId: {
	                message: 'Request Id/请求Id格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Request Id/请求Id不能为空'
	                    }
	                }
	            },
	                        		    
	            	fileName: {
	                message: 'Image url/照片地址格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Image url/照片地址不能为空'
	                    }
	                }
	            },
	                        		    
	            	type: {
	                message: 'Photo type (1: id /0: selfie)/照片类型（1:证件照/0:自拍照）格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Photo type (1: id /0: selfie)/照片类型（1:证件照/0:自拍照）不能为空'
	                    }
	                }
	            },
	                        		    
	            	liveScore: {
	                message: 'Live scores/活体分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Live scores/活体分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	hackScore: {
	                message: 'Attack score/攻击分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Attack score/攻击分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	gammaScore: {
	                message: 'Attitude gamma score/姿态gamma分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Attitude gamma score/姿态gamma分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	phiScore: {
	                message: 'Attitude phi score/姿态phi分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Attitude phi score/姿态phi分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	thetaScore: {
	                message: 'Attitude theta score/姿态theta分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Attitude theta score/姿态theta分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	blurScore: {
	                message: 'Pose blur score/姿态blur分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Pose blur score/姿态blur分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	distance: {
	                message: 'Distance score/距离分值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Distance score/距离分值不能为空'
	                    }
	                }
	            },
	                        		    
	            	messageCode: {
	                message: 'Identification message code/识别消息码格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Identification message code/识别消息码不能为空'
	                    }
	                }
	            },
	                        		    
	            	featureConfigScore: {
	                message: 'Feature configuration comparison values/特征配置比较值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Feature configuration comparison values/特征配置比较值不能为空'
	                    }
	                }
	            },
	                        		    
	            	deviceToken: {
	                message: 'Client device unique identification/客户端设备唯一标识格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Client device unique identification/客户端设备唯一标识不能为空'
	                    }
	                }
	            },
	                        		    
	            	createdDate: {
	                message: 'created date/创建时间格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'created date/创建时间不能为空'
	                    }
	                }
	            },
	                        		    
	            	modifiedDate: {
	                message: 'modified date/修改时间格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'modified date/修改时间不能为空'
	                    }
	                }
	            },
	                        		    
	            	osType: {
	                message: 'Operating system (ios andriod)/操作系统（ios andriod）格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Operating system (ios andriod)/操作系统（ios andriod）不能为空'
	                    }
	                }
	            },
	                        		    
	            	modelVersion: {
	                message: 'Model version/模型版本格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Model version/模型版本不能为空'
	                    }
	                }
	            },
	                        		    
	            	liveConfigScore: {
	                message: 'Security configuration check value/防伪配置校验值格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Security configuration check value/防伪配置校验值不能为空'
	                    }
	                }
	            },
	                        		    
	            	status: {
	                message: 'Face recognition status: -1: failure, 1: face recognition success, 2: face recognition feature value mismatch, 3: face authentication security failed/人脸认识状态：-1：失败，1：人脸识别成功，2：人脸认识特征值不匹配，3：人脸认证防伪未能过格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Face recognition status: -1: failure, 1: face recognition success, 2: face recognition feature value mismatch, 3: face authentication security failed/人脸认识状态：-1：失败，1：人脸识别成功，2：人脸认识特征值不匹配，3：人脸认证防伪未能过不能为空'
	                    }
	                }
	            },
	                        		    
	            	liveModelVersion: {
	                message: 'Security model version/防伪模型版本格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Security model version/防伪模型版本不能为空'
	                    }
	                }
	            },
	                        		    
	            	userId: {
	                message: 'User number, front-end delivery/用户号,前端传递格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'User number, front-end delivery/用户号,前端传递不能为空'
	                    }
	                }
	            },
	                        		    
	            	appType: {
	                message: 'Application type, front-end delivery/应用类型，前端传递格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Application type, front-end delivery/应用类型，前端传递不能为空'
	                    }
	                }
	            },
	                        		    
	            	sourceType: {
	                message: 'Source: login: login,kyc link: kyc/来源：登录：login,kyc环节：kyc格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Source: login: login,kyc link: kyc/来源：登录：login,kyc环节：kyc不能为空'
	                    }
	                }
	            },
	                        		    
	            	liveStatus: {
	                message: '防伪是否通过：0表示防伪未通过，1表示防伪通过格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: '防伪是否通过：0表示防伪未通过，1表示防伪通过不能为空'
	                    }
	                }
	            },
	                        		    
	            	liveMessageCode: {
	                message: 'Security error code/防伪错误码格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Security error code/防伪错误码不能为空'
	                    }
	                }
	            },
	                        		    
	            	batchNo: {
	                message: 'Batch number: used to distinguish multiple face recognition data from the same requestId/批次号：用于区分同一个requestId多次人脸识别数据格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'Batch number: used to distinguish multiple face recognition data from the same requestId/批次号：用于区分同一个requestId多次人脸识别数据不能为空'
	                    }
	                }
	            },
	                        		    
	            	featureFileKey: {
	                message: 'The eigenvalue file key/特征值文件key格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'The eigenvalue file key/特征值文件key不能为空'
	                    }
	                }
	            },
	                        		    
	            	yn: {
	                message: '是否有效,默认有效/yes or no,default 0 means yes格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: '是否有效,默认有效/yes or no,default 0 means yes不能为空'
	                    }
	                }
	            },
	                        		    
	            	fileOssKey: {
	                message: 'selfie OSS file key/人脸自拍照片oss文件key格式不正确',
	                validators: {
	                    notEmpty: {
	                        message: 'selfie OSS file key/人脸自拍照片oss文件key不能为空'
	                    }
	                }
	            }
	                            }});
}