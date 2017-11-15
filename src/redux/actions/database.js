import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB25Uky1Y40WuW9gDvGz_ULexp2XwhMV0s",
    authDomain: "project-mgmt-study.firebaseapp.com",
    databaseURL: "https://project-mgmt-study.firebaseio.com",
    projectId: "project-mgmt-study",
    storageBucket: "",
    messagingSenderId: "179189599236"
  };

firebase.initializeApp(config);
const database = firebase.database();

export default database;
