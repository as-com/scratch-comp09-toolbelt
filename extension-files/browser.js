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
    
    ext.setCookie = function(name, data) {
        localStorage.setItem("comp09toolbelt_cookie_" + app.projectModel.id.toString() + "_" + name, data);
    }
    ext.getCookie = function(name) {
        return localStorage.getItem("comp09toolbelt_cookie_" + app.projectModel.id.toString() + "_" + name);
    }
    ext.deleteCookie = function(name) {
        localStorage.removeItem("comp09toolbelt_cookie_" + app.projectModel.id.toString() + "_" + name);
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['b', 'toolbelt loaded?', 'isReady'],
            ['', 'set cookie %s to %s', 'setCookie', 'name', 'data'],
            ['', 'delete cookie %s', 'deleteCookie', 'name'],
            ['r', 'cookie %s', 'getCookie', 'name']
        ],
        url: 'https://as-com.github.io/scratch-comp09-toolbelt/'
    };

    // Register the extension
    ScratchExtensions.register('comp09 - browser', descriptor, ext);
    
})({});
vex.defaultOptions.className = 'vex-theme-os';
