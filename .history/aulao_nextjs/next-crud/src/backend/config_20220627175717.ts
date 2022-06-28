import * as firebase from "firebase";
import 'firebase/firestore';

const config = {
  
}
if(!firebase.apps.length) {
  firebase.initializeApp({
    
  })
}

export default firebase