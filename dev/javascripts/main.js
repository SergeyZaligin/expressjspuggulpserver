(global => {
    'use strict';
    
    const FORM_SIGNUP_SELECTOR = '#signup-form';

    /*beginGlobals*/
    const App = global.App;
    /*endGlobals*/

    console.log('App===>', App);

    /*beginCommonFunction*/
    const $ = App.$;
    /*endCommonFunction*/

    /*beginSignupFormHandler*/
    //console.log(global.document.getElementById('signup-form'));
    const SignupHandler = new App.SignupHandler(FORM_SIGNUP_SELECTOR);
    SignupHandler.init();
    /*endSignupFormHandler*/

})(window);