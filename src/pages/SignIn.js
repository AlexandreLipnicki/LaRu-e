import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from "../context/context";

export default function SignIn() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const { signIn } = useContext(UserContext);

const Submit = (e) => {
    e.preventDefault();
    try {
        signIn(email, password)
        .then((userCredential) => {
            console.log("connecté !", userCredential);
            navigate('/profil');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    } catch (error) {
        console.error(error);
    }
};

return (
    <>  
        <h1 className="text-light display-3 text-center">Se connecter</h1>
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
            <button className="mt-4" type="submit">Se connecter</button>
        </form>
        </div>
    </>
);
}
