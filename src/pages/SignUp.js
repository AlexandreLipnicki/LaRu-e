import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from "firebase/auth";


export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const SignUp = (email, password) => {
        createUserWithEmailAndPassword(getAuth(), email, password)
        .then((userCredential) => {
            console.log("Compte créé avec succès !");
            navigate('/profil');
            // sendEmailVerification(getAuth().currentUser);
        })
        .catch((error) => {
            console.log("Erreur lors de la création du compte :", error);
        });
    }

    const Submit = (e) => {
        e.preventDefault();
        try {
            const userCredential = SignUp(email, password);
            
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>  
            <h1 className="text-light display-3 text-center">Créer un compte</h1>
            <div className="container d-flex justify-content-center">
            <form onSubmit={Submit} className="d-flex flex-column w-50">
                <label className="d-flex flex-column text-light mt-4">
                    Email:
                    <input autoComplete="email" placeholder="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>
                <label className="d-flex flex-column text-light mt-4">
                    Mot de passe:
                    <input autoComplete="current-password" placeholder="mot de passe" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <button className="mt-4" type="submit">Créer un compte</button>
            </form>
            </div>
        </>
    );
}