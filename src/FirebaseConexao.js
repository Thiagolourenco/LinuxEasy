import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAJdPJAMs1gT8Kc_Kbv03j0oyB7dQ_-uTQ",
    authDomain: "linux-a9872.firebaseapp.com",
    databaseURL: "https://linux-a9872.firebaseio.com",
    projectId: "linux-a9872",
    storageBucket: "linux-a9872.appspot.com",
    messagingSenderId: "888788472927"
  };
  firebase.initializeApp(config);

  export default firebase;