(global => {
    'use strict';
    
    const App = global.App || {};
    
    function $ (selector) {
       
        let elems = [];
       
        if (typeof selector === 'string') {
            elems = document.querySelectorAll(selector);
        } else {
            elems = [selector];
        }
        console.log(elems);
        
        return new Elems(elems);
        
    };
    
    /**
     * Class elems
     * 
     * @param {object} elems
     * @returns {dom=>#1.Elems}
     */
    function Elems (elems) {
        
        /**
         * Array select dom elems or empty array
         */
        this.elems = elems || [];
        
        /**
         * Handler events
         * 
         * @param {string} type event
         * @param {object|function} callback
         * @returns {this}
         */
        this.on = (type, callback) => {
            
            if (undefined === callback) {
                
                const cnt = elems.length-1;
                let evt = document.createEvent('Event');
                evt.initEvent(type, true, true);
                
                for (let i = cnt; i >= 0; i--) {
                    elems[i].dispatchEvent(evt);
                }
                
            } else {
                
                const cnt = elems.length-1;

                for (let i = cnt; i >= 0; i--) {
                    elems[i].addEventListener(type, callback);
                }
            }
            
            return this;
        };
        
        /**
         * Past html in select elem
         * 
         * @param {string} code
         * @returns {dom=>#1.Elems|Array.innerHTML}
         */
        this.html = (code) => {
            
            if (undefined === code) {
                return elems[0].innerHTML;
            } else {
                const cnt = elems.length-1;
            
                for (let i = cnt; i >= 0; i--) {
                    elems[i].innerHTML = code;
                }
            }
            
            return this;
        };
        
        /**
         * Hide dom elem
         * 
         * @param {string} type
         * @returns {dom=>#1.Elems}
         */
        this.hide = (type = 'none') => {
            
            const cnt = elems.length-1;
            
            for (let i = cnt; i >= 0; i--) {
                elems[i].style.display = type;
            }
            
            return this;
        };
        
        /**
         * Show dom elem
         * 
         * @param {string} type
         * @returns {dom=>#1.Elems}
         */
        this.show = (type = 'block') => {
            
            const cnt = elems.length-1;
            
            for (let i = cnt; i >= 0; i--) {
                elems[i].style.display = type;
            }
            
            return this;
        };
    }
    
    App.$ = $;
    global.App = App;
    
})(window);


