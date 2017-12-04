import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCZBv3R55MKUJf4nntjd6C2CXAkSJqSqqQ",
    authDomain: "project-mgmt-study-5698a.firebaseapp.com",
    databaseURL: "https://project-mgmt-study-5698a.firebaseio.com",
    projectId: "project-mgmt-study-5698a",
    storageBucket: "project-mgmt-study-5698a.appspot.com",
    messagingSenderId: "369664170585"
  };
  firebase.initializeApp(config);
const database = firebase.database();

export default database;
