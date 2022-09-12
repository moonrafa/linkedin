import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC1bJrcNQ9Dshiv0aCztXgXMMBxYJ6uJV0',
  authDomain: 'linkedin-clone-91b73.firebaseapp.com',
  projectId: 'linkedin-clone-91b73',
  storageBucket: 'linkedin-clone-91b73.appspot.com',
  messagingSenderId: '651393479098',
  appId: '1:651393479098:web:61ec1806740cc63a7f6d83'
}
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, auth, timestamp }
