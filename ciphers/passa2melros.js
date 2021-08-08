
export class Passa2MelrosCipher{

    constructor(){
        this.alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    }

    encrypt(str){
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let result = str.split("").map(char => {
            let random1 =  this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
            let random2 =  this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
            return char+random1+random2;
        });
        return result.join("");
    }

    decrypt(str){
        let result = [];
        for(let i=0; i < str.split("").length; i++){
            result.push(str.split("")[i]);
            i = i+2;
        }
        return result.join("");
    }
}

