export class InvertedAlphabetCipher {
    constructor() {};

    encrypt(str) {
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
        let alphabet1 = "abcdefghijklmnopqrstuvwxyz";
        let tebahpla1 = "zyxwvutsrqponmlkjihgfedcba";
        let decoded_string = "";

        for (let i = 0; i < str.length; i++) {
            let coded_letra = str.charAt(i);

            if (/[^a-zA-Z]/.test(str[i])) {
                decoded_string = decoded_string + str[i];
            } else if (str[i] === str[i].toUpperCase()) {
                let letraPosMayus = alphabet.indexOf(coded_letra);
                let tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
                decoded_string = decoded_string + tebLetraPosMayus;
            } else {
                let letraPosMinus1 = alphabet1.indexOf(coded_letra);
                let tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
                decoded_string = decoded_string + tebLetraPosMinus1;
            }
        }
        return decoded_string;
    }

    decrypt(str) {
        return this.encrypt(str);
    }
}