import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
 
}

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;