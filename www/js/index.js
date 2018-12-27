var app = app || {};

$(function () {

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    // deviceready Event Handler
    // 
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    function onDeviceReady() {
        receivedEvent('deviceready');
        ons.ready(function () {
            // deviceready event is fired
            // Call whatever Cordova APIs
            console.log('ons.ready');

            ons.disableDeviceBackButtonHandler();
            document.addEventListener("backbutton", onBackKeyDown, false);
            ons.GestureDetector(document.querySelector('#menu-home')).dispose(); // Remove event listeners from the menu
        });
    };

    // Do Something on a Received Event
    function receivedEvent(id) {
        if (cordova.platformId == 'android') {
            StatusBar.backgroundColorByHexString("#2196f3");
        }

        app.RouterInstance = new app.Router();
        Backbone.history.start();

        // console.log('Received Event: ' + id);
        // console.log('Status Bar: ' + StatusBar);

    };

    var lastTimeBackPress = 0;
    var timePeriodToExit = 2000;

    function onBackKeyDown() {
        // exit if on homepage
        if (Backbone.history.getFragment() === '') {
            // navigator.app.exitApp();
            if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                navigator.app.exitApp();
            } else {
                ons.notification.toast('Press again to exit.', {
                    timeout: 2000
                }); // Shows from 0s to 2s
                lastTimeBackPress = new Date().getTime();
            }
        } else {
            Backbone.history.history.back();
        }
    };

});
