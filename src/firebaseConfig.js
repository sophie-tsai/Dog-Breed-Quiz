import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "dog-breed-quiz-98cd5.firebaseapp.com",
  databaseURL: "https://dog-breed-quiz-98cd5.firebaseio.com",
  projectId: "dog-breed-quiz-98cd5",
  storageBucket: "dog-breed-quiz-98cd5.appspot.com",
  messagingSenderId: "1023298340457",
  appId: "1:1023298340457:web:b39bfeb529d356801304f8",
  measurementId: "G-R3DS7GK47K",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
