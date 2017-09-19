import firebase from "firebase"

const config = {
  apiKey: "AIzaSyDJchIp7Aw7ocbVGW-cKsC5-uXxJcg8PaE",
  authDomain: "first-flight-with-friendss.firebaseapp.com",
  databaseURL: "https://first-flight-with-friendss.firebaseio.com",
  projectId: "first-flight-with-friendss",
  storageBucket: "",
  messagingSenderId: "982132667033"
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
