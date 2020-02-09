// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJoOJKSuKfl_qg5qIJ-X3DuYQ26rTvUJU",
    authDomain: "mywork-dcb55.firebaseapp.com",
    databaseURL: "https://mywork-dcb55.firebaseio.com",
    projectId: "mywork-dcb55",
    storageBucket: "mywork-dcb55.appspot.com",
    messagingSenderId: "262831554283",
    appId: "1:262831554283:web:7b3282fd42d65b3d2248ae",
    measurementId: "G-18ZDDCTBD0"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


document.getElementById('fireForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;

    saveMessage(name, lastname, email);
}

function saveMessage(name, lastname, email) {
    var messageRef = firebase.database().ref('contact/' + name);
    messageRef.set({
        name: name,
        lastname: lastname,
        email: email
    });
}