console.log("cordova_only.js");



(function( somecode, undefined ) {

    somecode.we_are_inside_cordova = true;
    
}( window.somecode = window.somecode || {} ));


document.addEventListener('deviceready', function() {
    console.log("cordova event: deviceready");
    
    ryctoic.core.dispatch_deviceready();

    ryctoic.core.dispatch_network_information();
    document.addEventListener("online",  ryctoic.core.dispatch_network_information(), false);
    document.addEventListener("offline", ryctoic.core.dispatch_network_information(), false);

    ryctoic.core.dispatch_network_information();
    
    window.sqlitePlugin.openDatabase({ name: 'hello-world.db' }, function (db) {
        db.executeSql("select length('tenletters') as stringlength", [], function (res) {
            var stringlength = res.rows.item(0).stringlength;
            console.log('got stringlength: ' + stringlength);
        });
    });
    
}, false);
