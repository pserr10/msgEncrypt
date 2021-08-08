
export class MsgService{

    whatsApp(tab, params){
        switch(tab){
            case "ciphersForm":
                return btoa(`tab=${tab}&ciphers=${params.ciphers}&key=${params.key}&message=${params.message}`);
            break;
            case "rsaForm":
                return btoa(`tab=${tab}&privKey=${params.privateKey}&pubKey=${params.publicKey}&message=${params.rsaMessage}`);
            break;
            case "hashForm":
                return btoa(`tab=${tab}&md5=${params.md5}&sha1=${params.sha1}&sha256=${params.sha256}&sha512=${params.sha512}&sha3=${params.sha3}&message=${params.hashMessage}`);
            break;
            case "aesForm":
                return btoa(`tab=${tab}&passphrase=${params.passphrase}&aes=${params.aes}&des=${params.des}&tripledes=${params.tripledes}`);
            break;
            case "blowfishForm":
                return btoa(`tab=${tab}&message=${params.blowfishMessage}`);
            break;
        }
    }

    getText(tab, params, link){
        switch(tab){
            case "ciphersForm":
                return params.message + " DECRYPT IN: " + link;
            break;
            case "rsaForm":
                return params.rsaMessage + " DECRYPT IN: " + link;
            break;
            case "hashForm":
                return "An hashed Message was sent. You can check it out at: " + link;
            break;
            case "aesForm":
                return "AES: "+ params.aes + "| Encrypted message, to decrypt it click here: " + link + "|";
            break;
            case "blowfishForm":
                return "Blowfish : "+ params.blowfishMessage + "| Encrypted message, to decrypt it click here: " + link + "|";
            break;
        }
    }
}