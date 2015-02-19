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
        return CryptoJS.enc.Base64.stringify(message);
    }
    ext.decBase64 = function(base64) {
        return CryptoJS.enc.Base64.parse(base64);
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'hash %s with %m.hashes', 'hash', "hello world"],
            ['r', 'aes encrypt %s with passphrase %s', "aesEncrypt", "message", "secret"],
            ['r', 'aes decrypt %s with passphrase %s', "aesDecrypt", "encrypted", "secret"],
            ['r', 'encode base64 %s', "encBase64", "string"],
            ['r', 'decode base64 %s', "decBase64", "YWJj"]
        ],
        menus: {
            hashes: ["MD5", "SHA1", "SHA256", "SHA512", "SHA3", "RIPEMD160"]
        }
    };

    // Register the extension
    ScratchExtensions.register('comp09 - crypto', descriptor, ext);
})({});
