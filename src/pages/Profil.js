import Navbar from "../components/Navbar";
import { UserContext } from "../context/context";
import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react";
import { auth } from '../firebase';
import { updateProfile } from "firebase/auth";

export default function Profil() {
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const [name, setName] = useState(currentUser.displayName || "");

    useEffect(() => {
        if (!currentUser) {
            navigate("/signin");
        }
    }, [currentUser, navigate]);

    const signOut = () => {
        auth.signOut().then(() => {
            navigate('/');
        });
    }

    const submit = (e) => {
        e.preventDefault();
        try {
            updateProfile(auth.currentUser, {
                displayName: name,
            }); console.log('Profil mis à jour !')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <> 
            <Navbar />
            <div className="container p-5">
                <h1 className="display-3 text-light">
                    Profil
                </h1>
                <button onClick={signOut}>Déconnexion</button>
                <p className="text-light">Email : {currentUser.email}</p>
                <p className="text-light">ID : {currentUser.uid}</p>
                <p className="text-light">Date de création : {currentUser.metadata.creationTime}</p>
                <div className="d-flex">
                    <p className="text-light">Prénom : </p>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </div>                
                <button onClick={submit}>Enregistrer</button>
            </div>
        </>
    )
};