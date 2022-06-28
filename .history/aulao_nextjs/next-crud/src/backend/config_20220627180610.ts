const firebase = require("firebase");
import "firebase/auth";
import "firebase/database";
require(firebase/firestore");

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp({
    config
  })
}

export default firebase