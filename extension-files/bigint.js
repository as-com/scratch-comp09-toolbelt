(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    var bigInts = {};
    
    ext.setBigInt = function(name, value) {
        bigInts[name] = bigInt(value);
    }
    ext.getBigInt = function(name, radix) {
        return bigInts[name].toString(radix);
    }
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['', 'set bigint %s to %s', 'setBigInt', "", "9001"],
            ['r', 'get bigint %s in radix %n', 'getBigInt', "", "10"],
            
        ],
        menus: {
            
        },
        url: 'https://as-com.github.io/scratch-comp09-toolbelt/'
    };

    // Register the extension
    ScratchExtensions.register('comp09 - biginteger', descriptor, ext);
})({});
