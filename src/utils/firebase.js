import firebase from 'firebase';
<script src="/__/firebase/8.9.1/firebase-app.js"></script>

     https://firebase.google.com/docs/web/setup#available-libraries -->


<script src="/__/firebase/init.js"></script>

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
