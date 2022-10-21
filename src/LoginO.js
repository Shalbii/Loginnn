import React from "react";
import "./style/main.css";
import Logo from "./m.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginO() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
   const navigate = useNavigate();
    const loginClick = (e) => {

        const url = "http://localhost:3000/dev/Loginn";
        const data = { email: Email, password: Password };
        const header = {}
        axios.post(url, data, header)
            .then((res) => {
                console.log("Response==> " + JSON.stringify(res.data))
                localStorage.setItem("tokenvariable", res.data)
                navigate("/Salesdb");

            })
            .catch((err) => {
                console.log("Response==> " + JSON.stringify(err))
            })
    };


    return (
        <>
            <div className="Login_outer">

                <div className="outer_row1">
                    <div className="outer_rowb">
                        <div className="outer_rowb_inner1">
                            <img src={Logo} alt="hi"></img>
                            <label>
                                <h4>Logo</h4>
                            </label>
                        </div>
                        <div className="outer_rowb_inner2">
                            <h3>Welcome!</h3>
                            <label>Please sign-in to your account</label>
                        </div>
                        <div className="outer_rowb_inner3">
                            <input type="text" onChange={(e) => (setEmail(e.target.value))} placeholder="Email" />

                            <label>{Email}</label>
                        </div>

                        <div className="outer_rowb_inner4">
                            <input type="password" onChange={(e) => (setPassword(e.target.value))} placeholder="Password" />

                            <label>{Password}</label>
                        </div>
                        <div className="outer_rowb_inner5">
                            <input type="checkbox" />
                            <label>Remember me?</label>
                            <div className="outer_rowb_inner51">
                                <label>Forgot Password?</label>
                            </div>
                        </div>
                        <div className="outer_rowb_inner6">
                            <button onClick={(e) => {
                                loginClick(e);
                            }} >
                                Login</button>
                        </div>
                    </div>
                </div>
                <div className="outer_row2">
                    <label>New member? <span  > Signup </span>
                    </label>
                </div>
            </div>
        </>
    );
}