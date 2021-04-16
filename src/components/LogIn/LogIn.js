import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';




if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };


  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    //    console.log('clicked');
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = { name: displayName, email }
        console.log(email, displayName, photoURL);
        setLoggedInUser(signedInUser);
        history.replace(from);
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        //console.log(credential,token,user,);

      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(credential, email, errorCode, errorMessage);

      });

  }

  
  return (
    <div className="pt-5 mt-5">
      <button className=" bg-primary" onClick={handleSignIn}>Sign In With Google</button>
    </div>
  );
};

export default LogIn;