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
    
    ext.vexAlert = function(text, ok, callback) {
        vex.dialog.buttons.YES.text = ok;
        vex.dialog.alert({
            message: text,
            callback: callback
        });
    }
    ext.vexConfirm = function(text, ok, cancel, callback) {
        vex.dialog.buttons.YES.text = ok;
        vex.dialog.buttons.NO.text = cancel;
        vex.dialog.confirm({
            message: text,
            callback: callback
        });
    }
    ext.vexPrompt = function(text, placeholder, ok, cancel, callback) {
        vex.dialog.buttons.YES.text = ok;
        vex.dialog.buttons.NO.text = cancel;
        vex.dialog.prompt({
            message: text,
            placeholder: placeholder,
            callback: callback
        });

    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['b', 'toolbelt loaded?', 'isReady'],
            ['w', 'alert %s ok: %s', 'vexAlert', 'text', 'Ok'],
            ['R', 'confirm %s true: %s false: %s', 'vexConfirm', 'text', 'Ok', 'Cancel'],
            ['R', 'prompt %s placeholder: %s ok: %s cancel %s', 'vexPrompt', 'text', 'answer', 'Ok', 'Cancel'],
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
