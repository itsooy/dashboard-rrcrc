import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqiA6lmAQkZlyXlwyG8oSzIltWYEZ-F_Q",
  authDomain: "dashboard-charity13.firebaseapp.com",
  projectId: "dashboard-charity13",
  storageBucket: "dashboard-charity13.appspot.com",
  messagingSenderId: "876520424828",
  appId: "1:876520424828:web:8b40ef0e00ddff089e90f9"
};

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db