import React from 'react'
import './App.css'
import Feed from './components/Feed'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Widgets from './components/Widgets'

/*const firebaseConfig = {
  apiKey: "AIzaSyC1bJrcNQ9Dshiv0aCztXgXMMBxYJ6uJV0",
  authDomain: "linkedin-clone-91b73.firebaseapp.com",
  projectId: "linkedin-clone-91b73",
  storageBucket: "linkedin-clone-91b73.appspot.com",
  messagingSenderId: "651393479098",
  appId: "1:651393479098:web:61ec1806740cc63a7f6d83"
};*/

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  )
}

export default App
