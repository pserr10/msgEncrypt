import { FirebaseConfig } from "../services/firebaseService.js";
import { BitlyService } from "../services/bitlyService.js";
import { MsgService } from "../services/msgService.js";
import { CesarCipher } from "../ciphers/cesarCipher.js";
import { NumericalAlphabetCipher } from "../ciphers/numericalAlphabet.js";
import { CrabCipher } from "../ciphers/crabCipher.js";
import { Passa2MelrosCipher } from "../ciphers/passa2melros.js";
import { InvertedAlphabetCipher } from "../ciphers/invertedAlphabet.js";
import { SnailCipher } from "../ciphers/snailCipher.js";
import { FakeBrailleCipher } from "../ciphers/fakeBraille.js";
import { Passa1Melro } from "../ciphers/passa1melro.js";
import { MorseNodes } from "../ciphers/morseNodes.js";
import { MountainMorse } from "../ciphers/mountainMorse.js";
import { HorizontalCipher } from "../ciphers/horizontalCipher.js";
import { SmsCipher } from "../ciphers/smsCipher.js";
import { FirstFakeLetterCipher } from "../ciphers/firstFakeLetterCipher.js";
import { TransportoCipher } from "../ciphers/transportoCipher.js";
import { AngularCipher } from "../ciphers/angularCipher.js";
import { VerticalKeyPhraseCipher } from "../ciphers/verticalKeyPhrase.js";
import { RomanoArabeCipher } from "../ciphers/romanoArabeCipher.js";
import { HalvesCipher } from "../ciphers/halvesCipher.js";
import { VerticalCipher } from "../ciphers/verticalCipher.js";
import { DataCipher } from "../ciphers/dataCipher.js";
import { HorizontalKeyPhraseCipher } from "../ciphers/horizontalKeyPhrase.js";
import { VogaisPorPonto } from "../ciphers/vogaisPorPonto.js";
import { BatalhaNaval } from "../ciphers/batalhaNaval.js";
import { UltimaLetraFalsa } from "../ciphers/ultimaLetraFalsa.js";
import { CodigoChines2 } from "../ciphers/codigoChines2.js";

export class Main extends FirebaseConfig {
    constructor() {
        super(document.querySelector("#chatMsgContainer"));
        this.bitlyService = new BitlyService();
        this.msgService = new MsgService();
        this.key = null;
        this.cipher = null;
        this.selectedCiphers = [];
        this.currentTab = "ciphersForm";
        this.userIds = document.querySelector("#userIds");
        this.sendChatMsgBtn = document.querySelector("#encryptSend");
        this.chatbtn = document.querySelector("#chatbtn");
        this.closeChatBtn = document.querySelector("#closeChatBtn");
        this.registerButton = document.querySelector("#registerBtn");
        this.loginButton = document.querySelector("#loginBtn");
        this.registerTab = document.querySelector("#regTabBtn");
        this.loginTab = document.querySelector("#loginTabBtn");
        this.ciphersMultiSelector = document.querySelector("#ciphersMultiSelector");
        this.messageInput = document.querySelector("#messageInput");
        this.msgKeyInput = document.querySelector("#msgKeyInput");
        this.rsaTimer = document.querySelector("#rsaTimer");
        this.rsaMessageContainer = document.querySelector("#rsaMessageContainer");
        this.rsaMessageInput = document.querySelector("#rsaMessageInput");
        this.privateKeyInput = document.querySelector("#privateKeyInput");
        this.publicKeyInput = document.querySelector("#publicKeyInput");
        this.sendWhatsAppBtn = document.querySelector("#sendWhatsappBtn");
        this.aesDesMessageInput = document.querySelector("#aesDesMessageInput");
        this.aesMessageInput = document.querySelector("#aesMessageInput");
        this.desMessageInput = document.querySelector("#desMessageInput");
        this.tripleDesMessageInput = document.querySelector(
            "#tripleDesMessageInput"
        );
        this.aesPassphrase = document.querySelector("#aesPassphrase");
        this.sendEmailBtn = document.querySelector("#sendEmailBtn");
        this.encryptButton = document.querySelector("#encryptButton");
        this.userButton = document.querySelector("#userbtn");
        this.blowfishEncryptButton = document.querySelector(
            "#blowfishEncryptButton"
        );
        this.blowfishDecryptButton = document.querySelector(
            "#blowfishDecryptButton"
        );
        this.decryptButton = document.querySelector("#decryptButton");
        this.rsaEncryptButton = document.querySelector("#rsaEncryptButton");
        this.rsaDecryptButton = document.querySelector("#rsaDecryptButton");
        this.generateKeysButton = document.querySelector("#generateKeyBtn");
        this.hashMessageInput = document.querySelector("#hashMessageInput");
        this.keySizeSelector = document.querySelector("#keySizes");
        this.md5MessageInput = document.querySelector("#md5MessageInput");
        this.sha1MessageInput = document.querySelector("#sha1MessageInput");
        this.sha256MessageInput = document.querySelector("#sha256MessageInput");
        this.sha512MessageInput = document.querySelector("#sha512MessageInput");
        this.sha3MessageInput = document.querySelector("#sha3MessageInput");
        this.blowfishMessageInput = document.querySelector("#blowfishMessageInput");
        this.blowfishPassword = document.querySelector("#blowfishPassword");
        this.generateKeysButton.addEventListener(
            "click",
            this.generateKeys.bind(this)
        );
        this.encryptButton.addEventListener("click", this.runCipher.bind(this));
        this.decryptButton.addEventListener("click", this.runCipher.bind(this));
        this.blowfishEncryptButton.addEventListener(
            "click",
            this.runBlowfish.bind(this)
        );
        this.blowfishDecryptButton.addEventListener(
            "click",
            this.runBlowfish.bind(this)
        );
        this.rsaEncryptButton.addEventListener(
            "click",
            this.rsaEncryption.bind(this)
        );
        this.rsaDecryptButton.addEventListener(
            "click",
            this.rsaEncryption.bind(this)
        );
        this.userButton.addEventListener("click", this.openLogin.bind(this));
        this.registerButton.addEventListener("click", this.register.bind(this));
        this.loginButton.addEventListener("click", this.login.bind(this));
        this.loginTab.addEventListener("click", this.toggleLoginTabs.bind(this));
        this.registerTab.addEventListener("click", this.toggleLoginTabs.bind(this));
        this.closeChatBtn.addEventListener("click", this.closeChat.bind(this));
        this.chatbtn.addEventListener("click", this.openChat.bind(this));
        this.sendChatMsgBtn.addEventListener("click", this.sendChatMsg.bind(this));
        this.userIds.addEventListener("change", this.setUserChatMsg.bind(this));

        document.querySelector("#forgotPass").addEventListener("click", () => {
            let email = prompt("Enter your account email!");
            if (email !== null || email !== "") {
                this.passRecover(email);
            }
        });

        document
            .querySelector("#regCancelBtn")
            .addEventListener("click", this.closeLogin.bind(this));
        document
            .querySelector("#loginCancelBtn")
            .addEventListener("click", this.closeLogin.bind(this));
        document
            .querySelector("#cancelLogout")
            .addEventListener("click", this.closeLogin.bind(this));
        document
            .querySelector("#logoutBtn")
            .addEventListener("click", this.logoutUser);

        document.querySelectorAll("#mainNav .nav-link").forEach((item) => {
            item.addEventListener("click", this.toggleViews.bind(this));
        });
        this.sendWhatsAppBtn.addEventListener(
            "click",
            this.sendWhatsAppMsg.bind(this),
            true
        );
        this.sendEmailBtn.addEventListener(
            "click",
            this.sendMailMsg.bind(this),
            true
        );
        this.aesDesMessageInput.addEventListener(
            "input",
            this.aesAndDesEncrypt.bind(this),
            true
        );
        this.hashMessageInput.addEventListener(
            "input",
            this.hashMessage.bind(this),
            true
        );
        document
            .querySelectorAll("#aesPassphrase, #blowfishPassword")
            .forEach((input) => {
                input.addEventListener("input", (evt) => {
                    let elements = "";
                    switch (evt.target.id) {
                        case "aesPassphrase":
                            elements =
                                "#aesMessageInput, #desMessageInput, #tripleDesMessageInput, #aesDesMessageInput";
                            break;
                        case "blowfishPassword":
                            elements =
                                "#blowfishMessageInput, #blowfishEncryptButton, #blowfishDecryptButton";
                            document
                                .querySelector("#blowfishMessageInput")
                                .setAttribute("placeholder", "Message...");
                            break;
                    }
                    document.querySelectorAll(elements).forEach((el) => {
                        if (evt.target.value !== "") {
                            el.removeAttribute("disabled");
                        } else {
                            el.setAttribute("disabled", true);
                            el.value = "";
                        }
                    });
                });
            });

        this.msgKeyInput.addEventListener("change", (evt) => {
            this.key = evt.target.value;
        });
        this.keySizeSelector.addEventListener("change", (evt) => {
            this.keySize = evt.target.value.split("bit")[0].trim();
        });
        this.getCiphers();
    }
    /// GET LIST OF AVAILABLE CIPHERS
    getCiphers() {
        fetch("config/ciphers.json")
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                this.ciphers = data;
                this.buildSelector();
                this.readUrl();
            })
            .catch((error) => console.log(error));
    }
    ///BUILD CIPHERS SELECTOR
    buildSelector() {
        this.ciphersSelector = document.querySelector("#ciphers");
        this.ciphers.forEach((cipher) => {
            this.ciphersSelector.insertAdjacentHTML(
                "beforeend",
                `<option>${cipher.name}</option>`
            );
        });
        this.ciphersSelector.addEventListener("change", (evt) => {
            const selectedCipher =
                this.ciphers[
                this.ciphers.findIndex(
                    (cipher) =>
                        cipher.name.toLowerCase() == evt.target.value.toLowerCase()
                )
                ];
            this.selectedCiphers.push(selectedCipher);
            this.addSelectedCipher(selectedCipher);
        });
    }
    ///ADD SELECTED CIPHER
    addSelectedCipher(selectedCipher) {
        let cipherItem = document.createElement("span");
        cipherItem.setAttribute("data", btoa(selectedCipher));
        cipherItem.setAttribute("id", btoa(selectedCipher.object));
        cipherItem.addEventListener("click", this.removeSelectedCipher.bind(this));
        cipherItem.textContent = selectedCipher.name;
        this.ciphersMultiSelector.appendChild(cipherItem);
        this.selectedCiphers.forEach((cipher) => {
            if (cipher.key) {
                this.msgKeyInput.parentElement.classList.remove("hidden");
            }
        });
    }
    ///REMOVE SELECTED CIPHER
    removeSelectedCipher(evt) {
        this.selectedCiphers = this.selectedCiphers.filter(
            (cipher) => cipher.object !== atob(evt.target.id)
        );
        evt.target.parentNode.removeChild(evt.target);
        let keyEnable = false;
        this.selectedCiphers.forEach((cipher) => {
            if (cipher.key) {
                keyEnable = true;
            }
        });
        if (!keyEnable || this.selectedCiphers.length < 0) {
            this.msgKeyInput.parentElement.classList.add("hidden");
        }
        if (atob(evt.target.id) === "AngularCipher") {
            document.querySelector("#imageCipherContainer").textContent = "";
        }
    }
    ///ENCRYPT MESSAGE
    runCipher(event) {
        const action = event.target.id === "encryptButton" ? "encrypt" : "decrypt";
        const tempList =
            action === "encryptButton"
                ? this.selectedCiphers
                : this.selectedCiphers.reverse();
        if (this.selectedCiphers.length > 0) {
            this.selectedCiphers.forEach((cipher) => {
                setTimeout(() => {
                    const message = this.messageInput.value;
                    const cipherObj = eval(`new ${cipher.object}();`);
                    this.messageInput.value = cipherObj[action](message, this.key);
                }, 100);
            });
        }
    }
    ///SEND THE MESSAGE THROUGH WHATSAPP
    sendWhatsAppMsg() {
        const phone = document.querySelector("#whatsappInput").value;
        const params = {
            ciphers: JSON.stringify(this.selectedCiphers),
            key: this.key,
            message: this.messageInput.value,
            rsaMessage: this.rsaMessageInput.value,
            privateKey: this.privateKeyInput.value,
            publicKey: this.publicKeyInput.value,
            hashMessage: this.hashMessageInput.value,
            md5: this.md5MessageInput.value,
            sha1: this.sha1MessageInput.value,
            sha256: this.sha256MessageInput.value,
            sha512: this.sha512MessageInput.value,
            sha3: this.sha3MessageInput.value,
            aes: this.aesMessageInput.value,
            des: this.desMessageInput.value,
            tripledes: this.tripleDesMessageInput.value,
            passphrase: this.aesPassphrase.value,
            blowfishMessage: this.blowfishMessageInput.value,
        };
        let content = this.msgService.whatsApp(this.currentTab, params);
        this.bitlyService
            .getShortenLink(
                `https://conceptree.github.io/msgCipher/?content=${content}`
            )
            .then((resp) => {
                window.open(
                    `https://api.whatsapp.com/send/?phone=${phone}&text=${this.msgService.getText(
                        this.currentTab,
                        params,
                        resp.link
                    )}`
                );
            });
    }
    ///SEND THE MESSAGE THROUGH MAIL
    sendMailMsg() {
        const email = document.querySelector("#emailInput").value;
        const params = {
            ciphers: JSON.stringify(this.selectedCiphers),
            key: this.key,
            message: this.messageInput.value,
            rsaMessage: this.rsaMessageInput.value,
            privateKey: this.privateKeyInput.value,
            publicKey: this.publicKeyInput.value,
            hashMessage: this.hashMessageInput.value,
            md5: this.md5MessageInput.value,
            sha1: this.sha1MessageInput.value,
            sha256: this.sha256MessageInput.value,
            sha512: this.sha512MessageInput.value,
            sha3: this.sha3MessageInput.value,
            aes: this.aesMessageInput.value,
            des: this.desMessageInput.value,
            tripledes: this.tripleDesMessageInput.value,
            passphrase: this.aesPassphrase.value,
            blowfishMessage: this.blowfishMessageInput.value,
        };
        let content = this.msgService.whatsApp(this.currentTab, params);
        this.bitlyService
            .getShortenLink(
                `https://conceptree.github.io/msgCipher/?content=${content}`
            )
            .then((resp) => {
                window.open(`mailto:${email}?subject=MsgCipher Message&body=${this.msgService.getText(this.currentTab, params, resp.link)}`); 
            });
    }
    ///READ URL
    readUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("content");
        if (myParam !== "" && myParam !== undefined && myParam !== null) {
            const tab = atob(myParam).split("tab=")[1].split("&")[0];

            if (tab !== "" && tab !== undefined && tab !== null) {
                this.toggleViews({
                    target: document.querySelector(`#${tab.split("Form")[0]}btn`),
                });
            } else {
                return;
            }

            switch (this.currentTab) {
                case "ciphersForm":
                    const ciphersParam = JSON.parse(
                        atob(myParam).split("&ciphers=")[1].split("&key")[0]
                    );
                    const key = atob(myParam).split("key=")[1].split("&message")[0];
                    const message = atob(myParam).split("message=")[1];
                    this.key = key;
                    this.selectedCiphers = ciphersParam;
                    this.selectedCiphers.forEach((cipherInj) => {
                        this.addSelectedCipher(
                            this.ciphers[
                            this.ciphers.findIndex(
                                (cipher) => cipher.name == cipherInj.name
                            )
                            ]
                        );
                    });
                    this.messageInput.value = String(message);
                    this.msgKeyInput.value = String(this.key);
                    this.decryptButton.click();
                    break;
                case "rsaForm":
                    this.jsEncrypt = new JSEncrypt();
                    this.rsaMessageContainer.classList.remove("hidden");
                    this.privateKeyInput.value = atob(myParam)
                        .split("privKey=")[1]
                        .split("&")[0];
                    this.publicKeyInput.value = atob(myParam)
                        .split("pubKey=")[1]
                        .split("&")[0];
                    this.rsaMessageInput.value = atob(myParam).split("message=")[1];
                    this.rsaEncryption({ target: { id: "rsaDecryptButton" } });
                    break;
                case "hashForm":
                    this.hashMessageInput.value = atob(myParam).split("message=")[1];
                    this.md5MessageInput.value = atob(myParam)
                        .split("md5=")[1]
                        .split("&")[0];
                    this.sha1MessageInput.value = atob(myParam)
                        .split("sha1=")[1]
                        .split("&")[0];
                    this.sha256MessageInput.value = atob(myParam)
                        .split("sha256=")[1]
                        .split("&")[0];
                    this.sha512MessageInput.value = atob(myParam)
                        .split("sha512=")[1]
                        .split("&")[0];
                    this.sha3MessageInput.value = atob(myParam)
                        .split("sha3=")[1]
                        .split("&message")[0];
                    break;
                case "aesForm":
                    this.aesPassphrase.value = atob(myParam)
                        .split("passphrase=")[1]
                        .split("&")[0];
                    this.aesPassphrase.dispatchEvent(
                        new Event("input", {
                            bubbles: true,
                            cancelable: true,
                        })
                    );
                    this.aesMessageInput.value = atob(myParam)
                        .split("aes=")[1]
                        .split("&")[0];
                    this.desMessageInput.value = atob(myParam)
                        .split("des=")[1]
                        .split("&")[0];
                    this.tripleDesMessageInput.value =
                        atob(myParam).split("tripledes=")[1];
                    let result = CryptoJS.AES.decrypt(
                        this.aesMessageInput.value,
                        this.aesPassphrase.value
                    );
                    document.querySelector("#aesDesMessageInput").value = result.toString(CryptoJS.enc.Utf8);
                    break;
                case "blowfishForm":
                    this.blowfishMessageInput.value = atob(myParam).split("message=")[1];
                    this.blowfishPassword.setAttribute(
                        "placeholder",
                        "You need the password to decrypt it!"
                    );
                    break;
            }
        }
    }
    ///LOGIN
    login(evt) {
        const email = document.querySelector("#userEmail").value;
        const password = document.querySelector("#userPassword").value;

        const emailValid = Boolean(email !== "");
        const passValid = Boolean(password !== "");

        if (emailValid && passValid) {
            this.loginUser(email, password);
        } else {
            alert("Please, check the fields and try again!");
        }
    }
    ///REGISTER
    register(evt) {
        const email = document.querySelector("#userEmailReg").value;
        const password = document.querySelector("#userPasswordReg").value;
        const passwordRep = document.querySelector("#userRepeatPassword").value;
        const emailValid = Boolean(email !== "");
        const passValid = Boolean(password !== "" && password === passwordRep);

        if (emailValid && passValid) {
            this.registerUser(email, password);
        } else {
            alert("Please, check the fields and try again!");
        }
    }
    ///COPY TO CLIPBOARD
    copyToClipboard(evt) { }
    ///TOGGLE VIEWS
    toggleViews(evt) {
        document.querySelectorAll("form").forEach((form) => {
            form.classList.add("hidden");
        });
        document.querySelectorAll(".nav-link").forEach((form) => {
            form.classList.remove("active");
        });
        evt.target.classList.add("active");
        this.currentTab = evt.target.id.split("btn")[0] + "Form";
        document.querySelector("#" + this.currentTab).classList.remove("hidden");
    }
    ///GENERATE KEYS
    generateKeys() {
        let keySize = parseInt(this.keySize);
        this.jsEncrypt = new JSEncrypt({ default_key_size: keySize });
        let async = document.querySelector("#asyncCheck").checked;
        let dt = new Date();
        let time = -dt.getTime();
        if (async) {
            this.rsaTimer.textContent = ".";
            let load = setInterval(() => {
                let text = this.rsaTimer.textContent;
                this.rsaTimer.textContent = text + ".";
            }, 500);
            this.jsEncrypt.getKey(() => {
                clearInterval(load);
                dt = new Date();
                time += dt.getTime();
                this.rsaTimer.textContent = "Generated in " + time + " ms";
                this.privateKeyInput.value = this.jsEncrypt.getPrivateKey();
                this.publicKeyInput.value = this.jsEncrypt.getPublicKey();
                this.rsaMessageContainer.classList.remove("hidden");
            });
            return;
        }
        this.jsEncrypt.getKey();
        dt = new Date();
        time += dt.getTime();
        this.rsaTimer.textContent = "Generated in " + time + " ms";
        this.privateKeyInput.value = this.jsEncrypt.getPrivateKey();
        this.publicKeyInput.value = this.jsEncrypt.getPublicKey();
    }
    ///RSA ENCRYPTION
    rsaEncryption(evt) {
        // Set the private.
        this.jsEncrypt.setPrivateKey(this.privateKeyInput.value);
        switch (evt.target.id) {
            case "rsaEncryptButton":
                this.rsaMessageInput.value = this.jsEncrypt.encrypt(
                    this.rsaMessageInput.value
                );
                break;
            case "rsaDecryptButton":
                this.rsaMessageInput.value = this.jsEncrypt.decrypt(
                    this.rsaMessageInput.value
                );
                break;
        }
    }
    ///HASHING
    hashMessage() {
        if(this.hashMessageInput.value !== ""){
            this.md5MessageInput.value = CryptoJS.MD5(this.hashMessageInput.value);
            this.sha1MessageInput.value = CryptoJS.SHA1(this.hashMessageInput.value);
            this.sha256MessageInput.value = CryptoJS.SHA256(
                this.hashMessageInput.value
            );
            this.sha512MessageInput.value = CryptoJS.SHA512(
                this.hashMessageInput.value
            );
            this.sha3MessageInput.value = CryptoJS.SHA3(this.hashMessageInput.value);
        }else{
            this.md5MessageInput.value = "";
            this.sha1MessageInput.value = "";
            this.sha256MessageInput.value = "";
            this.sha512MessageInput.value = "";
            this.sha3MessageInput.value = "";
        }
        
    }
    ///AES & DES
    aesAndDesEncrypt() {
        if (this.aesPassphrase.value !== "") {
            if(this.aesDesMessageInput.value !== ""){
                this.aesMessageInput.value = CryptoJS.AES.encrypt(
                    this.aesDesMessageInput.value,
                    this.aesPassphrase.value
                );
                this.desMessageInput.value = CryptoJS.DES.encrypt(
                    this.aesDesMessageInput.value,
                    this.aesPassphrase.value
                );
                this.tripleDesMessageInput.value = CryptoJS.TripleDES.encrypt(
                    this.aesDesMessageInput.value,
                    this.aesPassphrase.value
                );
            }else{
                this.aesMessageInput.value = "";
                this.desMessageInput.value = "";
                this.tripleDesMessageInput.value = "";
            }
           
        }
    }
    ///BLOWFISH
    runBlowfish(evt) {
        this.blowfish = new Blowfish(this.blowfishPassword.value);
        if (evt.target.id === "blowfishEncryptButton") {
            let encrypted = this.blowfish.encrypt(this.blowfishMessageInput.value);
            this.blowfishMessageInput.value = this.blowfish.base64Encode(encrypted);
        } else {
            let base64Code = this.blowfish.base64Decode(
                this.blowfishMessageInput.value
            );
            let decrypted = this.blowfish.decrypt(base64Code);
            this.blowfishMessageInput.value = this.blowfish.trimZeros(decrypted);
        }
    }
    ///CLOSE LOGIN
    closeLogin() {
        document.querySelector("#loginDialog").classList.remove("active");
    }
    ///OPEN USER LOGIN DIALOGUE
    openLogin() {
        document.querySelector("#loginDialog").classList.add("active");
    }
    /// TOGGLER LOGIN VIEWS
    toggleLoginTabs(evt) {
        if (evt.target.id === "loginTabBtn") {
            document.querySelector("#loginTabBtn").classList.add("active");
            document.querySelector("#regTabBtn").classList.remove("active");
            document.querySelector("#loginForm").classList.add("show");
            document.querySelector("#registerForm").classList.remove("show");
        } else {
            document.querySelector("#loginTabBtn").classList.remove("active");
            document.querySelector("#regTabBtn").classList.add("active");
            document.querySelector("#loginForm").classList.remove("show");
            document.querySelector("#registerForm").classList.add("show");
        }
    }
    /// CLOSE CHAT DIALOGUE
    closeChat() {
        document.querySelector("#chatDialog").classList.remove("active");
    }
    /// OPEN CHAT DIALOGUE
    openChat() {
        document.querySelector("#chatDialog").classList.add("active");
    }
    ///ON ENCRYPTION MODE CHANGE
    encryptionModeChange(evt) { }
    ///SEND CHAT MESSAGE
    sendChatMsg() {
        let message = document.querySelector("#chatMessage").value;
        let destinator = document.querySelector("#userIds").value;
        let encryptionMode = document.querySelector("#encryptionMode").value;
        let password = document.querySelector("#chatMessagePassphrase").value;
        let result = null;

        if (message === "" || destinator === "") {
            alert("Empty Message or no user ID selected!");
            return;
        }

        if (
            encryptionMode !== "Encryption mode..." &&
            encryptionMode !== "" &&
            encryptionMode !== null &&
            encryptionMode !== undefined
        ) {
            if (
                password !== "Encryption mode" &&
                password !== "" &&
                password !== null &&
                password !== undefined
            ) {
                switch (encryptionMode) {
                    case "BlowFish":
                        const blowfish = new Blowfish(password);
                        result = blowfish.base64Encode(message);
                        message = blowfish.base64Encode(result);
                        break;
                    case "AES":
                        result = CryptoJS.AES.encrypt(message, password);
                        message = result.toString();
                        break;
                    case "DES":
                        result = CryptoJS.DES.encrypt(message, password);
                        message = result.toString();
                        break;
                    case "Triple DES":
                        result = CryptoJS.TripleDES.encrypt(message, password);
                        message = result.toString();
                        break;
                }
            } else {
                alert("If you set an encryption mode a passphrase becomes mandatory!");
                return;
            }
        }

        this.sendMessage(message, destinator, encryptionMode);
    }
    ///SET USER CHAT MESSAGES
    setUserChatMsg(evt) {
        if (
            evt.target.value !== "" ||
            evt.target.value !== null ||
            evt.target.value !== undefined
        ) {
            this.getUserMessages(evt.target.value);
        }
    }
    ///DECRYPT CHAT MESSAGE
    decryptMsg(evt) {
        let message = atob(evt.target.getAttribute("message"));
        let encryptionMode = atob(evt.target.getAttribute("encryption"));
        let password = document.querySelector("#chatMessagePassphrase").value;
        let result = null;
        let validEncMode = Boolean(encryptionMode === document.querySelector("#encryptionMode").value);
        if (!validEncMode) {
            alert("Wrong encryption mode!");
            return;
        }
        if (
            encryptionMode !== "Encryption mode..." &&
            encryptionMode !== "" &&
            encryptionMode !== null &&
            encryptionMode !== undefined &&
            password !== "Encryption mode..." &&
            password !== "" &&
            password !== null &&
            password !== undefined
        ) {
            switch (encryptionMode) {
                case "BlowFish":
                    const blowfish = new Blowfish(password);
                    result = blowfish.encrypt(message);
                    message = blowfish.trimZeros(result);
                    break;
                case "AES":
                    result = CryptoJS.AES.decrypt(message, password);
                    message = result.toString(CryptoJS.enc.Utf8);
                    break;
                case "DES":
                    result = CryptoJS.DES.decrypt(message, password);
                    message = result.toString(CryptoJS.enc.Utf8);
                    break;
                case "Triple DES":
                    result = CryptoJS.TripleDES.decrypt(message, password);
                    message = result.toString(CryptoJS.enc.Utf8);
                    break;
            }
        } else {
            alert(
                "In order to decrypt you need to select the used encryption mode and passphrase!"
            );
            return;
        }

        document.querySelector("#chatMessage").value = message;
    }
}

const main = new Main();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js", { scope: './' });
} else {
    console.warn("Your browser does not support service workers!");
}
