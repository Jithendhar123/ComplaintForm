import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {

    apiKey: "AIzaSyDtBN8G3K3PgvgA4dlAxuyH8M2TjYmBBOU",
    authDomain: "complaint-form-e7409.firebaseapp.com",
    projectId: "complaint-form-e7409",
    storageBucket: "complaint-form-e7409.appspot.com",
    messagingSenderId: "563712049935",
    appId: "1:563712049935:web:9fee13254c3cde2866347a"
  };
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

