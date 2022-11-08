import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [serviceLimit, setServiceLimit] = useState(true);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUserEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser == null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const updateUserProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    const authInfo = {
        user,
        createUserEmailPassword,
        logOut,
        loading,
        serviceLimit,
        signInEmailPassword,
        googleSignIn,
        updateUserProfile,
        setServiceLimit,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;