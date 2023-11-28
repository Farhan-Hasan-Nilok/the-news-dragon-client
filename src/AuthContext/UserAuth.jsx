/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const UserContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const UserAuth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserInfo = (userName) => {
        return updateProfile(auth.currentUser, {
            displayName: userName
        })
    }

    const logOut = () => {
        return signOut(auth)
    }

    // Auth state Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth state use is ', currentUser);
            setUser(currentUser);
            setLoading(false)
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authUser = {
        user,
        googleLogin,
        createUser,
        signInUser,
        logOut,
        updateUserInfo,
        loading

    }

    // this authUser object above is equivalent to this 
    // {user: (value of user which is in this case 'null'), createUser: (value of createUser), signInUser: (value of signInUser)}
    return (
        <UserContext.Provider value={authUser}>
            {children}
        </UserContext.Provider>
    );
};

export default UserAuth;