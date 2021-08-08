export class CesarCipher {
    constructor() {};

    encrypt(str, key) {
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let num = key % 26;

        if (num < 0) {
            console.log("Introduza um nº maior ou igual a 0")
        }
        let output = "";

        for (let i = 0; i < str.length; i++) {
            let charEncript = str[i];
    
            if (charEncript.match(/[a-z]/i)) {
        
                let code = str.charCodeAt(i);
        
                if (code >= 65 && code <= 90) {
                    charEncript = String.fromCharCode(((code - 65 + num) % 26) + 65);
                }
        
                else if (code >= 97 && code <= 122) {
                    charEncript = String.fromCharCode(((code - 97 + num) % 26) + 65)
                }
            }
            output += charEncript;
        }
        return output;
    }

    decrypt(str, key) {
        let num = key % 26
        let output = "";

        for (let i = 0; i < str.length; i++) {
            let charDecript = str[i];
    
    
            if (charDecript.match(/[a-z]/i)) {
                let code = str.charCodeAt(i);
        
                if (code >= 65 && code <= 90) {
                    charDecript = String.fromCharCode(((code + 65 - num) % 26) + 65);
                } else if (code >= 97 && code <= 122) {
                    charDecript = String.fromCharCode(((code + 96 - num) % 26) + 65);
                }
            }
            output += charDecript;
        }
        return output;
    }
};