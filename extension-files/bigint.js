(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.createBigInt = function(number, base) {
        return JSON.stringify(str2bigInt(number, base));
    }
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'text to bigint %s with base %n', 'createBigInt', "", "9001"],
        ],
        menus: {
            oneOps: ['abs', '']
        },
        url: 'https://as-com.github.io/scratch-comp09-toolbelt/'
    };

    // Register the extension
    ScratchExtensions.register('comp09 - biginteger', descriptor, ext);
})({});
