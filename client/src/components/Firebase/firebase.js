import app from 'firebase/app';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCV_CHo1kcXqWEhcMgHqNLTZB2hC-NLDXw",
  authDomain: "firesign-61201.firebaseapp.com",
  databaseURL: "https://firesign-61201.firebaseio.com",
  projectId: "firesign-61201",
  storageBucket: "firesign-61201.appspot.com",
  messagingSenderId: "507766107559",
  appId: "1:507766107559:web:16fc55fd7fce0087955a82"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}


export default Firebase;
