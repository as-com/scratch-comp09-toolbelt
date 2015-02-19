(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.hash = function(string, algo) {
        return CryptoJS[algo](string).toString(CryptoJS.enc.Hex);
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'hash of %s with %m.hashes', 'hash', "hello world"],
        ],
        menus: {
            hashes: ["MD5", "SHA1", "SHA256", "SHA512", "SHA3", "RIPEMD160"]
        }
    };

    // Register the extension
    ScratchExtensions.register('comp09 - crypto', descriptor, ext);
})({});
