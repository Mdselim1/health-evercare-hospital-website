import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider,GithubAuthProvider ,createUserWithEmailAndPassword, signInWithPopup, getAuth, signInWithEmailAndPassword,onAuthStateChanged, signOut,updateProfile } 
    from "firebase/auth";
import initializeAuthentication from '../../Firebase/FirebaseAuth/Firebase.initial';

initializeAuthentication();

const Firebase = () => {

    const [user, setUser] = useState({});
    const [checkValue, setCheckValue] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [errorvalue, setErrorValue] = useState('');
    const [name , setName] = useState('')

    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();
    const githubeProvider = new GithubAuthProvider();

    // Email INput Value Find Function 
    const handleFindEmailInputValue = (e) => {
        setEmailValue(e.target.value);
    };

    // Password INput Value Find Function 
    const handleFindPasswordInputValue = (e) => {
        setPasswordValue(e.target.value);
    };

    // checkbox value find 
    const handleCheckBoxValueFind = (e) => {
        setCheckValue(e.target.checked);
        
    };

    // Chekd email value and Password vlaue 
   
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (passwordValue.length < 6) {
            setErrorValue('Password at least be 6 character');
            return;
        } else {
            setErrorValue('')
        }
        checkValue ? createAnewUser(emailValue, passwordValue) :
        proccessToLogInUser(emailValue, passwordValue); 
    };

    // Log In Manually 

    const proccessToLogInUser = (emailValue, passwordValue) => {
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setErrorValue(error.messege);
            })
    };



    // Create A new User People 

    const createAnewUser = (emailValue , passwordValue) => {
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then(result => {
        const user = result.user;
        console.log(user);
        setErrorValue('');
        setUserName();
      })
      .catch(error => {
      setErrorValue(error.messege);
    })
    }

    // Google Sign In Method 

    const handleGoogleSignIn = () => {
       return signInWithPopup(auth, googleProvider)
            
            .catch(error => {
                setErrorValue(error.messege);
            })
    };

    //Githube Sign In method 

    const handleGithubeSignIn = () => {
        signInWithPopup(auth, githubeProvider)
            .then(result => {
            setUser(result.user);
            })
            .catch(error => {
            setErrorValue(error.messege);
        })
    }

    //Log Out User

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch(error => {
            setErrorValue(error.messege)
        })
    };

    // UserName Value Find 
    
    const handleUserNameInputValueFind = (e) => {
        setName(e.target.value);
    }

    // User name Changed 

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(result=>{})
      }


    // when auth changed


    useEffect(() => {
        onAuthStateChanged(auth,user=>{
            if (user) {
                setUser(user);
        }
        })
    },[])

    return {
        handleCheckBoxValueFind,
        handleFindEmailInputValue,
        handleFindPasswordInputValue,
        handleGoogleSignIn,
        handleGithubeSignIn,
        handleFormSubmit,
        handleLogOut,
        handleUserNameInputValueFind,
        checkValue,
        emailValue,
        passwordValue,
        errorvalue,
        user
    }
   
};

export default Firebase;