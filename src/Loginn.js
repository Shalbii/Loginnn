import "./style/logintry.css";
import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Loginn() {
    const [email, setemail] = useState("");
    const [Password, setPassword] = useState("");

    const navigate=useNavigate();
    const logintryClick = (e) => {
        

        const url = "http://localhost:3000/dev/Loginn";
        const data = { email: email, password: Password };
        const header = {}
        axios.post(url, data, header)
            .then((res) => {
                console.log("Response==> " + JSON.stringify(res.data))
                localStorage.setItem("tokenvariable",res.data)
                navigate("/Home")

            })
            .catch((err) => {
                console.log("Response==> " + JSON.stringify(err))
            })
    };

    return (
        <>
            <div className="logintry">
                <div className="login_inner">
                    <h3>Login</h3>
                    <input type="email" onChange={(e) => (setemail(e.target.value))}
                        placeholder="email" /> {email}
                    <input type="Password" onChange={(e) => (setPassword(e.target.value))}
                        placeholder="Password" />  {Password}

                    <button onClick={(e) => {
                        logintryClick(e);
                    }}
                    >logintry</button>
                </div>
            </div>
        </>
    );
}