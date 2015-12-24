// TODO: rename the namespace and rewrite everything to es6


(function( somecode, undefined ) {
    //Private Property
    // var isHot = true;

    //Public Property
    // somecode.ingredient = "Bacon Strips";

    //Private Method
    // function addItem( item ) {
    //     if ( item !== undefined ) {
    //         console.log( "Adding " + $.trim(item) );
    //     }
    // }    

    //Public Method
    // somecode.loginHandler = function(loginData) {
    //     console.log(loginData);
    // };

    // TODO: centered login popup in double/triple monitor set up
    // http://stackoverflow.com/a/16861050/159149
    somecode.popupCenter = function(url, title, w, h) {
        // Fixes dual-screen position                         Most browsers      Firefox
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

        width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;

        var newWindow = window.open(url, title, 'scrollbars=yes,width=' + w + ',height=' + h + ',top=' + top + ',left=' + left);

        if (window.focus) {
            newWindow.focus();
        }
    };

    somecode.popupCordova = function() {
        var link = 'https://local.ryctoic.com:8443/oauth2/google/callback';
        var popup = window.open(link, '_blank', 'location=yes');
        popup.addEventListener('loadstop', function(event) {
            if (event.url.lastIndexOf(link, 0) === 0) {
                popup.executeScript({ code: 'if (typeof loginData === "undefined") { "---=== login error ===---" } else { loginData }' },
                                    function( values ) {
                                        if(values[0] !== "---=== login error ===---")   // e.g., user clicks deny in google
                                            ryctoic.core.dispatch_login(values[0]);
                                        popup.close();
                                    }
                                   );
            }
        });
    }

    somecode.openLoginPopup = function() {
        if( somecode.we_are_inside_cordova )
            somecode.popupCordova();
        else
            somecode.popupCenter("/oauth2/google/callback", "", "500", "500");
    }
    
}( window.somecode = window.somecode || {} ));




