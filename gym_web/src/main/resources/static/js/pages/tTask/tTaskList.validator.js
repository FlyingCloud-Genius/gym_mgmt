var $addTTaskForm = $("#add-t-task-form");
var $editTTaskForm = $("#edit-t-task-form");
function initFormValidator() {
	$addTTaskForm.bootstrapValidator({
		message: '���������ʽ����ȷ',
		fields: {

			id: {
				message: '��ʽ����ȷ',
				validators: {
					notEmpty: {
						message: '����Ϊ��'
					}
				}
			},

			name: {
				message: '�������Ƹ�ʽ����ȷ',
				validators: {
					notEmpty: {
						message: '�������Ʋ���Ϊ��'
					}
				}
			}

		}});

	$editTTaskForm.bootstrapValidator({
		message: '���������ʽ����ȷ',
		fields: {

			id: {
				message: '��ʽ����ȷ',
				validators: {
					notEmpty: {
						message: '����Ϊ��'
					}
				}
			},

			name: {
				message: '�������Ƹ�ʽ����ȷ',
				validators: {
					notEmpty: {
						message: '�������Ʋ���Ϊ��'
					}
				}
			}
		}});
}