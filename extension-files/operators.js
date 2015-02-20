(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    // Convert a byte array to a hex string
    function bytesToHex(bytes) {
            for (var hex = [], i = 0; i < bytes.length; i++) {
                    hex.push((bytes[i] >>> 4).toString(16));
                    hex.push((bytes[i] & 0xF).toString(16));
            }
            return hex.join("");
    }
    // Convert a hex string to a byte array
    function hexToBytes(hex) {
            for (var bytes = [], c = 0; c < hex.length; c += 2)
                    bytes.push(parseInt(hex.substr(c, 2), 16));
            return bytes;
    }
    
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
    ext.compactIfElse = function(cond, a, b) {
        if (cond) {
            return a;
        } else {
            return b;
        }
    }
    ext.returnTrue = function() {
        return true;
    }
    ext.returnFalse = function() {
        return false;
    }
    ext.convertToBool = function(input) {
        if (input) {
            return true;
        } else {
            return false;
        }
    }
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', '%n ^ %n', 'exp', "2", "3"],
            ['r', "join %s %s %s %s", "joinFour", "a", "b", "c", "d"],
            ['r', "if %b then %s else %s", "compactIfElse", null, "a", "b"],
            ['r', "encode text %s for cloud data", "encCloud", ''],
            ['r', "decode text %s from cloud data", "decCloud", ''],
            ['b', '%s != %s (case sensitive)', 'neq'],
            //['b', "%s = %s (case sensitive)", "eq"],
            ['b', "%n >= %n", 'gte'],
            ['b', "%n <= %n", 'lte'],
            ['b', "true", "returnTrue"],
            ['b', "false", "returnFalse"]
        ],
        menus: {
            
        },
        url: 'https://as-com.github.io/scratch-comp09-toolbelt/'
    };

    // Register the extension
    ScratchExtensions.register('comp09 - operators', descriptor, ext);
})({});
