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
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        if (window.focus) {
            newWindow.focus();
        }
    };
}( window.somecode = window.somecode || {} ));


