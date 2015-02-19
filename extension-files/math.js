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
    ext.neq = function(a, b) {
        return (a != b);
    }
    ext.eq = function(a, b) {
        return (a != b);
    }
    ext.join = function(a, b, c, d) {
        return String(String(a) + String(b) + String(c) + String(d));
    }
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', '%n ^ %n', 'exp'],
            ['r', "join%s%s%s%s", "joinFour"],
            ['b', '%s != %s (case sensitive)', 'neq'],
            ['b', "%s = %s (case sensitive)", "eq"]
        ],
        menus: {
            
        }
    };

    // Register the extension
    ScratchExtensions.register('comp09 - math', descriptor, ext);
})({});
