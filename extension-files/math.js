(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', '%n^%n', 'exp'],
        ],
        menus: {
            
        }
    };

    // Register the extension
    ScratchExtensions.register('comp09 - math', descriptor, ext);
})({});
