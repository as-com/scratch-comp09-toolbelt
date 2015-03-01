(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        if (window.btoa && window.atob) {
            return {status: 2, msg: 'Ready'};
        } else {
            return {status: 0, msg: 'Browser not supported'};
        }
    };
    
    ext.hash = function(string, algo) {
        switch (algo) {
            case "MD5":
                return md5(string);
            case "SHA1":
                return sha1(string);
            case "SHA2-256":
                return sha256(string);
            case "SHA2-224":
                return sha224(string);
            case "SHA2-512":
                return sha512(string);
            case "SHA2-384":
                return sha384(string);
            case "SHA3-256":
                return sha3_256(string);
            case "SHA3-224":
                return sha3_224(string);
            case "SHA3-512":
                return sha3_512(string);
            case "SHA3-384":
                return sha3_384(string);
        }
    }
    
    var JsonFormatter = {
        stringify: function (cipherParams) {
            // create json object with ciphertext
            var jsonObj = {
                ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
            };

            // optionally add iv and salt
            if (cipherParams.iv) {
                jsonObj.iv = cipherParams.iv.toString();
            }
            if (cipherParams.salt) {
                jsonObj.s = cipherParams.salt.toString();
            }

            // stringify json object
            return JSON.stringify(jsonObj);
        },

        parse: function (jsonStr) {
            // parse json string
            var jsonObj = JSON.parse(jsonStr);

            // extract ciphertext from json object, and create cipher params object
            var cipherParams = CryptoJS.lib.CipherParams.create({
                ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
            });

            // optionally extract iv and salt
            if (jsonObj.iv) {
                cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv)
            }
            if (jsonObj.s) {
                cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s)
            }

            return cipherParams;
        }
    };
    
    ext.aesEncrypt = function(plaintext, passphrase) {
        return String(CryptoJS.AES.encrypt(plaintext, passphrase, { format: JsonFormatter }));
    }
    ext.aesDecrypt = function(ciphertext, passphrase) {
        decrypted = CryptoJS.AES.decrypt(ciphertext, passphrase, { format: JsonFormatter });
        if (decrypted.sigBytes < 0) {
            return "fail";
        }
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
    ext.encBase64 = function(message) {
        return window.btoa(message);
    }
    ext.decBase64 = function(base64) {
        return window.atob(base64);
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'hash %s with %m.hashes', 'hash', "hello world", "SHA3-512"],
            ['r', 'aes encrypt %s with passphrase %s', "aesEncrypt", "message", "secret"],
            ['r', 'aes decrypt %s with passphrase %s', "aesDecrypt", "encrypted", "secret"],
            ['r', 'encode base64 %s', "encBase64", "string"],
            ['r', 'decode base64 %s', "decBase64", "YWJj"]
        ],
        menus: {
            hashes: ["MD5", "SHA1", "SHA2-256", "SHA2-224", "SHA512", "SHA3-256", "SHA3-224", "SHA3-512", "SHA3-384"]
        },
        url: 'https://as-com.github.io/scratch-comp09-toolbelt/'
    };

    // Register the extension
    ScratchExtensions.register('comp09 - crypto', descriptor, ext);
})({});
