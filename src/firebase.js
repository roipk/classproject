import firebase from 'firebase/app';
import 'firebase/firestore';

//team2
var firebaseConfig = {
    apiKey: "AIzaSyDxP2zbKRZVAeKLiwji_S7K8KUUgQ3NSOY",
    authDomain: "react-project-vehicles.firebaseapp.com",
    databaseURL: "https://react-project-vehicles.firebaseio.com",
    projectId: "react-project-vehicles",
    storageBucket: "react-project-vehicles.appspot.com",
    messagingSenderId: "716546628154",
    appId: "1:716546628154:web:32bc62c890b05825093303",
    measurementId: "G-9TH0P5RYGX"
};

//team3
// var firebaseConfig = {
//     apiKey: "AIzaSyCihZjbY0RvIjEV-_R7BBIy0UV39Br5uvo",
//     authDomain: "react-final-d6e46.firebaseapp.com",
//     databaseURL: "https://react-final-d6e46.firebaseio.com",
//     projectId: "react-final-d6e46",
//     storageBucket: "react-final-d6e46.appspot.com",
//     messagingSenderId: "460497880421",
//     appId: "1:460497880421:web:3284b05d900d889ee4cd8c"
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);




export const fb=firebaseConfig;
export const db = firebase.firestore();
export default firebase
