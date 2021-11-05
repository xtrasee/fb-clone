import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAtwa6iB0qnWvK9aOU0MxcNOeXPMUZ50ws",
    authDomain: "facebook-clone-cb80a.firebaseapp.com",
    databaseURL: "https://facebook-clone-cb80a.firebaseio.com",
    projectId: "facebook-clone-cb80a",
    storageBucket: "facebook-clone-cb80a.appspot.com",
    messagingSenderId: "741764878930",
    appId: "1:741764878930:web:4eb21db9f953546ce0058b",
    measurementId: "G-KPKWMXJVSB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db  = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;