import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth } from '../firebase'
import './Login.css'

function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch()

  const register = () => {
    if (!name) {
      return alert('Please enter your full name')
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic
              })
            )
          })
      })
      .catch(error => alert(error))
  }
  const loginToApp = e => {
    e.preventDefault()
  }
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
        alt="linkedin logo"
      />
      <form action="">
        <input
          type="text"
          placeholder="Full Name(required if registering)"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="url"
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          {' '}
          Register now
        </span>
      </p>
    </div>
  )
}

export default Login
