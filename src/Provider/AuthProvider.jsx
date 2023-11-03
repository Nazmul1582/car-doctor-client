import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}

            setUser(currentUser),
            console.log("current user", currentUser);
            setLoading(false)
            // if user exist then issue a token
            if(currentUser){                
                axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
                    .then(res => {
                        console.log("token response", res.data)
                    })
                    .catch(error => console.log(error))
            }else{
                axios.post("http://localhost:5000/logout", loggedUser, {withCredentials: true})
                    .then(res => console.log(res.data))
                    .catch(error => console.log(error.message))
            }
        })
        return () =>{
            return unsubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;