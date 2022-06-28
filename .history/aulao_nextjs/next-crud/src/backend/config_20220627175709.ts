import * as firebase from "firebase";
import 'firebase/firestore';

if(!firebase.apps.length) {
  firebase.initializeApp({
    
  })
}

export default firebase