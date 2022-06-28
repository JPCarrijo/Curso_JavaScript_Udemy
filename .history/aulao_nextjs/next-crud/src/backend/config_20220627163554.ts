import firebase from "../../node_modules/firebase/index";
import 'firevbase/firestore';

if(!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.
    authDomain: process.env
    projectId: process.env
  })
}