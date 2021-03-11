var $addTTaskForm = $("#add-t-task-form");
var $editTTaskForm = $("#edit-t-task-form");
function initFormValidator() {
	$addTTaskForm.bootstrapValidator({
		message: '表单输入项格式不正确',
		fields: {

			id: {
				message: '格式不正确',
				validators: {
					notEmpty: {
						message: '不能为空'
					}
				}
			},

			name: {
				message: '任务名称格式不正确',
				validators: {
					notEmpty: {
						message: '任务名称不能为空'
					}
				}
			}

		}});

	$editTTaskForm.bootstrapValidator({
		message: '表单输入项格式不正确',
		fields: {

			id: {
				message: '格式不正确',
				validators: {
					notEmpty: {
						message: '不能为空'
					}
				}
			},

			name: {
				message: '任务名称格式不正确',
				validators: {
					notEmpty: {
						message: '任务名称不能为空'
					}
				}
			}
		}});
}