// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");
const firebaseConfig = require("./firebaseConfig");
firebase.initializeApp(firebaseConfig);

module.exports=firebase;
