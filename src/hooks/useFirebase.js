import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase.init";
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const useFirebase = () => {
  const [user, setUser] = useState({});

  useEffect(() => {}, []);
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then(res => {
        const user = res.user;
        setUser(user);
        console.log(user);
    })
    .catch(error => {
        console.log(error)
    })
  };
  const handleSignOut= () => {
    signOut(auth)
    .then(() => {})
  }
  useEffect(() => {
      onAuthStateChanged(auth, user => {
          setUser(user);
      })
  })
  return { 
    user, 
    signInWithGoogle,
    handleSignOut
 };
};

export default useFirebase;