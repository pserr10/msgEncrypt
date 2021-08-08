export class FirebaseConfig {

    constructor(chatMsgContainer) {
        this.chatMsgContainer = chatMsgContainer;
        const config = {
            apiKey: "AIzaSyDhDVf67q6cGIbNxa2B7khJKp5N-jqd9OM",
            authDomain: "msgcipher.firebaseapp.com",
            databaseURL: "https://msgcipher-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "msgcipher",
            storageBucket: "msgcipher.appspot.com",
            messagingSenderId: "827693109132",
            appId: "1:827693109132:web:e134c5ede2f05d9824d0a9"
        };
        firebase.initializeApp(config);
        this.uid = null;
        this.checkLoggedInUser();
        this.getUsers();
    }

    checkLoggedInUser() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.uid = user.uid;
                document.querySelector("#userid").innerText = this.uid;
                document.querySelector("#loginForms").classList.add("hidden");
                document.querySelector("#logoutBtnCont").classList.remove("hidden");
                document.querySelector("#userbtn").classList.add("active");
                document.querySelector("#chatbtn").classList.add("active");
                document.querySelector("#userid").innerText = this.uid;
            } else {
                console.log("No user is logged in!");
                document.querySelector("#chatbtn").classList.remove("active");
            }
        });
    }

    registerUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                firebase.database().ref("users").push().set({
                    "uid":user.uid
                });
                location.reload();
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error(errorCode + ": " + errorMessage);
                alert(errorMessage);
                // ..
            });
    }

    loginUser(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                document.querySelector("#chatbtn").classList.add("active");
                this.getUsers();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error(errorCode + ": " + errorMessage);
                alert(errorMessage);
                // ..
            });
    }

    logoutUser() {
        firebase.auth().signOut();
        location.reload();
    }

    sendMessage(message, destinator, encryption) {
        firebase.database().ref("chats/"+destinator+"/messages").push().set({
            "sender": this.uid,
            "encryption": encryption, 
            "message": message
        });
        firebase.database().ref("chats/"+this.uid+"/messages").push().set({
            "sender": this.uid,
            "encryption": encryption, 
            "message": message
        });
    }

    getUserMessages() {
        this.senders = [];
        firebase.database().ref("chats/"+this.uid+"/messages").on("child_added", (snapshot) => {
            let sender = snapshot.val().sender;
            let time = new Date().getHours() + ":" + new Date().getMinutes();
            let chatItem = document.createElement("li");
            chatItem.addEventListener("click", this.decryptMsg);
            chatItem.classList.add("chat-message");
            chatItem.id = "message-" + snapshot.key;
            chatItem.setAttribute("result", btoa(snapshot.val().result));
            chatItem.setAttribute("encryption", btoa(snapshot.val().encryption));
            chatItem.setAttribute("message", btoa(snapshot.val().message));
            chatItem.classList.add(sender === this.uid ? "sent" : "received");
            chatItem.innerText = sender + " @ " + time + "\n" + snapshot.val().message;
            this.chatMsgContainer.appendChild(chatItem);
            this.chatMsgContainer.children[this.chatMsgContainer.children.length - 1].scrollIntoView();
        });
    }

    getUsers(){
        const dbRef = firebase.database().ref();
        dbRef.child("users").get().then((snapshot) => {
            if (snapshot.exists()) {
                this.users = Object.values(snapshot.val());
                this.users.forEach(user => {
                    let userItem = document.createElement("option");
                    userItem.id = user.uid;
                    userItem.innerText = user.uid;
                    document.querySelector("#userIds").appendChild(userItem);
                });
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.warn("No User Logged in! "+error);
        });
    }

    passRecover(email){
        firebase.auth().sendPasswordResetEmail(email);
        location.reload();
    }

};