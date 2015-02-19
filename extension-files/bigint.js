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
    ext.bigIntOperation = function(a, op, b) {
        var one = JSON.parse(a);
        var two = JSON.parse(b);
        switch (op) {
            case "+":
                return JSON.stringify(add(one, two));
            case "-":
                return JSON.stringify(sub(one, two));
            case "*":
                return JSON.stringify(mult(one, two));
        }
    }
    ext.bigIntToText = function(input, base) {
        return bigInt2Str(JSON.parse(input), base);
    }
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', '฿ from text %s base %n', 'createBigInt', "9001", "10"],
            ['r', '฿%s %m.operations %s', 'bigIntOperation', "", "+", ""],
            ['r', '฿ to text %s base %n', 'bigIntToText', "", "10"]
        ],
        menus: {
            operations: ['+', '-', '*']
        },
        url: 'https://as-com.github.io/scratch-comp09-toolbelt/'
    };

    // Register the extension
    ScratchExtensions.register('comp09 - biginteger', descriptor, ext);
})({});
