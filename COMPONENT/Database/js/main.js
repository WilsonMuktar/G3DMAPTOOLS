$(function() {

  var oMemTable = $('#pd_profiles').dataTable({
      'bProcessing': true, 'bServerSide': true, 'sAjaxSource': 'service.php?action=getMembersAjx',
    }).makeEditable({
    sUpdateURL: 'service.php?action=updateMemberAjx',
    'aoColumns': [
        {
            tooltip: 'First Name',
            oValidationOptions : { rules:{ value: {minlength: 3 }  },
            messages: { value: {minlength: 'Min length - 3'} } }
        },
        {
            tooltip: 'Last Name',
            oValidationOptions : { rules:{ value: {minlength: 3 }  },
            messages: { value: {minlength: 'Min length - 3'} } }
        },
        {
            tooltip: 'Email',
            oValidationOptions : { rules:{ value: {minlength: 5 }  },
            messages: { value: {minlength: 'Min length - 5'} } }
        },
        {
            tooltip: 'Member status',
            type: 'select',
            data: "{'passive':'passive','active':'active'}",
            submit: 'Ok',
        },
        {
            tooltip: 'Member role',
        },
        {
            tooltip: 'date_reg',
            oValidationOptions : { rules:{ value: {minlength: 3 }  },
            messages: { value: {minlength: 'Min length - 3'} } }
        }
    ],
    sDeleteURL: 'service.php?action=deleteMember',
    sDeleteRowButtonId: 'btnDeleteMemRow',
  });

});
