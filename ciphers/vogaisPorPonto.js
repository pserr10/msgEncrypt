export class VogaisPorPonto {
    constructor(){};
    


isVowel(char){
    return 'aeiou'.includes(char); //if char == a,e,i,o,u return True. False if it does not
    }

encrypt(str){
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    let vowelsByDots = "";

    for(let i = 0; i < str.length; i++){
        if(this.isVowel(str[i])){
            vowelsByDots += '.';
        }else if(!this.isVowel(str[i])){
            vowelsByDots += str[i];
            }
        }
        return vowelsByDots;
    }    
}