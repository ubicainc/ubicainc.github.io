(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    /*var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="Message"]');*/
    
    var firstName = $('#firstName');
    var lastName = $('#lastName');
    var email = $('#email');
    var orgName = $('#orgName');
    var orgSize = $('#orgSize');
    var orgWebsite = $('#orgWebsite');
    var country = $('#country');
    var message = $('#message');


    $('.validate-form').on('submit', function () {
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
            console.log('everything looks good')
        } else {
            console.log('missing something');
        }
    });


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

})(jQuery);
