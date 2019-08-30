console.log('It Works');

$(document).ready(function () {
    $('#submit').click(function (event) {
        console.log('clicked button')

        var firstName = $('#firstName');
        var lastName = $('#lastName');
        var email = $('#email');
        var orgName = $('#orgName');
        var orgSize = $('#orgSize');
        var orgWebsite = $('#orgWebsite');
        var country = $('#country');
        var message = $('#message');

        var check = true;

        if ($(firstName).val().trim() == '') {
            showValidate(firstName);
            check = false;
        }

        if ($(lastName).val().trim() == '') {
            showValidate(lastName);
            check = false;
        }

        if ($(orgName).val().trim() == '') {
            showValidate(orgName);
            check = false;
        }

        if ($(orgSize).val().trim() == '') {
            showValidate(orgSize);
            check = false;
        }

        if ($(orgWebsite).val().trim() == '') {
            showValidate(orgWebsite);
            check = false;
        }

        if ($(message).val().trim() == '') {
            showValidate(message);
            check = false;
        }

        if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check = false;
        }

        if (check == false) {
            event.preventDefault();
            console.log('missing something');
        } else {
            console.log('all good');
        }



        $('.validate-form .input100').each(function () {
            $(this).focus(function () {
                hideValidate(this);
            });
        });

        function showValidate(input) {
            var thisAlert = $(input).parent();

            $(thisAlert).addClass('alert-validate');
        }

        function hideValidate(input) {
            var thisAlert = $(input).parent();

            $(thisAlert).removeClass('alert-validate');
        }






    })
})
