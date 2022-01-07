$(document).ready(function() {

    /**
     * Initiate highlighting
     */

    hljs.initHighlightingOnLoad();

    /**
     * Initiate validation on each form.
     */

    var options = {
        'autocomplete': 'off',
        'liveValidation': true,
        'sendForm': false
    }

    $('#get-validated').validation(options);

    $('.required-validation').validation(options);

    $('.length-validation').validation(options);

    $('.range-validation').validation(options);

    $('.email-validation').validation(options);

    $('.url-validation').validation(options);

    $('.alphanumeric-validation').validation(options);

    $('.letters-validation').validation(options);

    $('.regexp-validation').validation(options);

    $('.hint-validation').validation({
        'autocomplete': 'off',
        'liveValidation': false,

        requiredMessage: function() {
            return 'blahhhh';
        }
    });

    $('.error-validation').validation(options);

    $('.live-validation').validation({
        'autocomplete': 'off',
        'liveValidation': true
    });

});
