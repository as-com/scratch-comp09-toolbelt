(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 1, msg: 'These blocks may be buggy. Use with caution.'};
    };
    
    ext.createBigInt = function(number, base) {
        return JSON.stringify(str2bigInt(number, base));
    }
    ext.operation = function(a, op, b) {
        var one = JSON.parse(a);
        var two = JSON.parse(b);
        switch (op) {
            case "+":
                return JSON.stringify(add(one, two));
            case "-":
                return JSON.stringify(sub(one, two));
            case "*":
                return JSON.stringify(mult(one, two));
            case 'mod':
                return JSON.stringify(mod(one, two));
            case 'gcd':
                return JSON.stringify(GCD(one, two));
        }
    }
    ext.bigIntToText = function(input, base) {
        return bigInt2str(JSON.parse(input), base);
    }
    ext.boolOp = function(a, op, b) {
        var one = JSON.parse(a);
        var two = JSON.parse(b);
        switch (op) {
            case "=":
                return equals(one, two);
            case '>':
                return greater(one, two);
            case '<':
                return greater(two, one);
        }
    }
    ext.oneBoolOp = function(input, op) {
        var a = JSON.parse(input);
        switch (op) {
            case "zero":
                return isZero(a);
            case "negative":
                return negative(a);
        }
    }
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', '฿ from text %s base %n', 'createBigInt', "9001", "10"],
            ['r', '฿ %s %m.operations %s', 'operation', "", "+", ""],
            ['b', '฿ %s %m.boolOps %s', 'boolOp', '', '=', ''],
            ['b', '฿ is %s %m.oneBoolOps', 'oneBoolOp', '', 'zero'],
            ['r', '฿ to text %s base %n', 'bigIntToText', "", "10"]
        ],
        menus: {
            operations: ['+', '-', '*', '^', 'mod'],
            boolOps: ['=', '>'],
            oneBoolOps: ['zero', 'negative']
        },
        url: 'https://as-com.github.io/scratch-comp09-toolbelt/'
    };

    // Register the extension
    ScratchExtensions.register('comp09 - biginteger', descriptor, ext);
})({});
