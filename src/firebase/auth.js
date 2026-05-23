import {
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 getAuth,
 GoogleAuthProvider,
 signInWithPopup
} from 'firebase/auth'

import app from './firebase.config'

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const googleLogin = () => {
 return signInWithPopup(auth,provider)
}

export const registerUser = (email,password) => {
 return createUserWithEmailAndPassword(auth,email,password)
}

export const loginUser = (email,password) => {
 return signInWithEmailAndPassword(auth,email,password)
}