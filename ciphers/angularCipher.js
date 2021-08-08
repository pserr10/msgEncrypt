export class AngularCipher {
    constructor() {}

    encrypt(str) {
        var plaintext = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");;
        plaintext = plaintext.toLowerCase();
        var ciphertext = "";
        var alphabetNoDot = "abcdefghistuv";
        var alphabetDot = "jklmnopqrwxyz";

        for (var i = 0; i < plaintext.length; i++) {
            var letter = plaintext.charAt(i);
            if (alphabetNoDot.indexOf(letter) > -1) {
                ciphertext = ciphertext + "<div class='pigpen-wrapper'><div class='pigpen " + letter + "'> </div></div>";
            } else {
                if (alphabetDot.indexOf(letter) > -1) {
                    ciphertext = ciphertext + "<div class='pigpen-wrapper dotted'><div class='pigpen " + letter + "'> </div></div>";
                }
            }
        }
        document.getElementById("imageCipherContainer").innerHTML = ciphertext;
        return str;
    }
}