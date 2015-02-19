(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.exp = function(base, power) {
        return Math.pow(base, power);
    }
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', '%n ^ %n', 'exp', "2", "3"],
        ],
        menus: {
            
        },
        url: 'https://as-com.github.io/scratch-comp09-toolbelt/'
    };

    // Register the extension
    ScratchExtensions.register('comp09 - biginteger', descriptor, ext);
})({});
