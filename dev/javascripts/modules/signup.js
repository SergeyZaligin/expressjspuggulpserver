(global => {
    'use strict';
   
    /**
     * Object App
     * 
     * @type object |global.App
     */
    const App = global.App || {};
   
    /**
     * Constructor handler form signup
     * 
     * @param {Object} selector
     * @returns {registrationL#1.FormHandler}
     */
    function SignupHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        } else {
            this.selector = document.querySelector(selector);
        }
    }
    
    SignupHandler.prototype.init = function () {
        if (this.selector) {

            this.selector.addEventListener('submit', e => {
                e.preventDefault();
                const formEntries = new FormData(this.selector).entries();
                const dataForm = JSON.stringify(Object.assign(...Array.from(formEntries, ([x,y]) => ({[x]:y}))));

                async function asaw () {
                    const response = await fetch('/auth/registration', {
                        method: "post",
                        headers: {
                            "Accept": 'application/json, text/plain, */*',
                            "Content-Type": "application/json"
                        },
                        body: dataForm
                     });
                     const json = await response.json();
                     const msg = document.querySelector('.message');
                     msg.innerHTML = json.message;
                     window.location = "/auth/registration";
                     console.log(json);
                }
                asaw();
                
            });


        } else {
            return false;
        }
        
        
    };
    
    App.SignupHandler = SignupHandler;
    global.App = App;
    
})(window);