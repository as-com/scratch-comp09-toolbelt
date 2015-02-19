(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        var test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
        } catch(e) {
            return {status: 1, msg: 'Unsupported browser'};
        }

        return {status: 2, msg: 'Ready'};
    };
    
    ext.isReady = function() {
        return toolbeltReady;
    };
    
    ext.set_localstorage = function (data) {
        localStorage.setItem(app.projectModel.id.toString(), data);
    };
    ext.change_localstorage = function(change) {
        var data = localStorage.getItem(app.projectModel.id.toString());
        if (!isNaN(parseFloat(data))) {
             localStorage.setItem(app.projectModel.id.toString(), parseFloat(data) + change);
        }
    };
    ext.get_localstorage = function () {
        return localStorage.getItem(app.projectModel.id.toString());
    };


    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['b', 'toolbelt loaded?', 'isReady'],
            ['', 'set local data to %s', 'set_localstorage', '0'],
            ['', 'change local data by %d', 'change_localstorage', 1],
            ['r', 'local data', 'get_localstorage'],
        ],
        url: 'https://as-com.github.io/scratch-comp09-toolbelt/'
    };

    // Register the extension
    ScratchExtensions.register('comp09 - browser', descriptor, ext);
    
})({});
