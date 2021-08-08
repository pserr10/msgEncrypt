export class CrabCipher {
    constructor() { };

    encrypt(str){
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("").reverse().join("");
    }

    decrypt(str){
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("").reverse().join("");
    }

}