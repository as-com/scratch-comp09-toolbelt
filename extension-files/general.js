(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.isReady = function() {
        return toolbeltReady;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['b', 'toolbelt loaded?', 'isReady'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('comp09 - general', descriptor, ext);
})({});
