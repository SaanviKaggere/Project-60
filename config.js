import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB68ck7k_7AZaLrpZ9kD4Xk0iY3gt88lmc",
  authDomain: "myquiz-form-d7592.firebaseapp.com",
  databaseURL: "https://myquiz-form-d7592-default-rtdb.firebaseio.com",
  projectId: "myquiz-form-d7592",
  storageBucket: "myquiz-form-d7592.appspot.com",
  messagingSenderId: "556669696687",
  appId: "1:556669696687:web:2c6c861abf4f651b3f725a"
};

//initialize your database
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
