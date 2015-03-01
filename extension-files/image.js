(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    var crossOrigin = "Anonymous";
    var imageData = null;
    
    ext.setCrossDomain = function(input) {
        crossOrigin = input;
    }
    ext.loadImage = function(url, callback) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var src = url;
        var img = new Image;
        img.crossOrigin = crossOrigin;
        
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            imageData = ctx.getImageData(0, 0, img.width, img.height);
            callback();
        }
        img.src = src;
        if ( img.complete || img.complete === undefined ) {
            img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            img.src = src;
        }
    }
    ext.getColor = function(x, y) {
        red = imageData.data[((y*(imageData.width*4)) + (x*4))];
        green = imageData.data[((y*(imageData.width*4)) + (x*4)) + 1];
        blue = imageData.data[((y*(imageData.width*4)) + (x*4)) + 2];
        
        return (red * 65535) + (green * 256) + blue;
    }
    ext.imageWidth = function() {
        return imageData.width;
    }
    ext.imageHeight = function() {
        return imageData.height;
    }
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['', 'set crossdomain to %s', 'setCrossDomain', "Anonymous"],
            ['w', 'load image %s', 'loadImage', "http://i.imgur.com/wIOiMi4.jpg"],
            ['r', 'get color at x %n y %n', 'getColor', '0', '0'],
            ['r', 'image width', 'imageWidth'],
            ['r', 'image height', 'imageHeight']
        ],
        url: 'https://as-com.github.io/scratch-comp09-toolbelt/'
    };

    // Register the extension
    ScratchExtensions.register('comp09 - image', descriptor, ext);
    
})({});
