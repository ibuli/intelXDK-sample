var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        // Fix for iOS status bar overlap
        if (typeof StatusBar != "undefined") {
             StatusBar.overlaysWebView(false);
             StatusBar.styleDefault();
        }
        // Init Bit6 SDK
        var opts = {'apikey': '3kwe9-kh4bTc5HCymO'}; // TODO: insert your API key here
        var b6 = Bit6.init(opts);
        // Prepare the app
        initApp(b6, true);
    }
};

app.initialize();
