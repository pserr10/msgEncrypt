export class FakeBrailleCipher {

    constructor() {
        this.square1 = [
            "A", "B", "C",
            "D", "E", "F",
            "G", "H", "I"
        ];
        this.square2 = [
            "J", "K", "L",
            "M", "N", "O",
            "P", "Q", "R"
        ];
        this.square3 = [
            "S", "T", "U",
            "V", "W", "X",
            "Y", "Z", ""
        ];
        this.squareA = [
            "⠇", "⠇⠄", "⠇⠄⠄",
            "⠇⠂", "⠇⠆", "⠇⠆⠄",
            "⠇⠂⠂", "⠇⠆⠂", "⠇⠆⠆"
        ];
        this.squareB = [
            "⠇⠁", "⠇⠅", "⠇⠅⠄",
            "⠇⠃", "⠇⠇", "⠇⠇⠄",
            "⠇⠃⠂", "⠇⠇⠂", "⠇⠇⠆"
        ];
        this.squareC = [
            "⠇⠁⠁", "⠇⠅⠁", "⠇⠅⠅",
            "⠇⠃⠁", "⠇⠇⠁", "⠇⠇⠅",
            "⠇⠃⠃", "⠇⠇⠃", "⠇⠇⠇"
        ];
    }

    encrypt(str) {
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let result = [];
        let splited = str.split("");
        splited.forEach(char => {
            if(this.square1.indexOf(char.toUpperCase()) >= 0){
                result.push(this.squareA[this.square1.indexOf(char.toUpperCase())], "|");
            }else if(this.square2.indexOf(char.toUpperCase()) >= 0){
                result.push(this.squareB[this.square2.indexOf(char.toUpperCase())], "|");
            }else if(this.square3.indexOf(char.toUpperCase()) >= 0){
                result.push(this.squareC[this.square3.indexOf(char.toUpperCase())], "|");
            }
        });
        return result.join("");
    }

    decrypt(str) {
        let result = [];
        let splited = str.split("|");
        splited.forEach(char => {
            if(this.squareA.indexOf(char) >= 0){
                result.push(this.square1[this.squareA.indexOf(char)]);
            }else if(this.squareB.indexOf(char) >= 0){
                result.push(this.square2[this.squareB.indexOf(char)]);
            }else if(this.squareC.indexOf(char) >= 0){
                result.push(this.square3[this.squareC.indexOf(char)]);
            }
        });
        return result.join("");
    }
}