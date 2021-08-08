import { SnailArray } from "./util/snailArray.js";
export class SnailCipher {
    constructor() {
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.snailArray = new SnailArray();
    }

    encrypt(str, key) {
        let chars = str.trim().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("");

        key = Number(key);

        let templist = chars.reduce((all, one, i) => {
            const ch = Math.floor(i / key);
            all[ch] = [].concat((all[ch] || []), one);
            return all;
        }, []);

        templist.forEach(innerList => {
            while (innerList.length < key) {
                innerList.push(this.alphabet[Math.floor(Math.random() * this.alphabet.length)]);
            }
        });

        let result = this.snailArray.snailAntiClockWise(templist);

        return result.join("").replace(/,/g, '');
    }

    decrypt(str, key) {
        key = Number(key);
        let chars = str.split("");
        let templist = chars.reduce((all, one, i) => {
            const ch = Math.floor(i / key);
            all[ch] = [].concat((all[ch] || []), one);
            return all;
        }, []);
        templist.forEach(innerList => {
            while (innerList.length < key) {
                innerList.push(this.alphabet[Math.floor(Math.random() * this.alphabet.length)]);
            }
        });
        let result = this.snailArray.snailClockWise(templist);
        return result.join("").replace(/,/g, '');
    }

}