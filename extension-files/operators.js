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
    ext.joinFour = function(a, b, c, d) {
        return String(a) + String(b) + String(c) + String(d);
    }
    ext.gte = function(a, b) {
        return (a >= b);
    }
    ext.lte = function(a, b) {
        return (a <= b);
    }
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', '%n ^ %n', 'exp', "2", "3"],
            ['r', "join %s %s %s %s", "joinFour", "a", "b", "c", "d"],
            ['b', '%s != %s (case sensitive)', 'neq'],
            ['b', "%s = %s (case sensitive)", "eq"],
            ['b', "%n >= %n", 'gte'],
            ['b', "%n <= %n", 'lte']
        ],
        menus: {
            
        }
    };

    // Register the extension
    ScratchExtensions.register('comp09 - operators', descriptor, ext);
})({});