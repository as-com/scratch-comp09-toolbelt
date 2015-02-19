(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.hash = function(string, algo) {
        var md = forge.md[algo].create();
        md.update(string);
        return md.digest().toHex();
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'hash of %s with %m.hashes', 'hash', "hello world"],
        ],
        menus: {
            hashes: ["sha1", "sha256", "sha384", "sha512", "md5"]
        }
    };

    // Register the extension
    ScratchExtensions.register('comp09 - crypto', descriptor, ext);
})({});
