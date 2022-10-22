import Topbar from './Components/Topbar';
import LeftBar from './Components/LeftBar';
import Filterbar from './Components/Filterbar';
import Mainlist from './Components/Mainlist';
// import Titlebar from './Axios/Titlebar';
// import Form from './Axios/Form';
// import { useNavigate } from "react-router-dom";

import axios from "axios";
import React from "react";
import { GiBeachBag } from "react-icons/gi";
//import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import './Tasklist.css';

export default function Tasklist() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };

    // const navigate = useNavigate();

    return (
        <>
            <div className='TasklistP'>
                <div className='TasklistP_content'>
                    <div className='TasklistP_content_topbar'><Topbar /></div>
                    <div className='TasklistP_contentL'>
                        <div className='TasklistP_content_leftbar'><LeftBar /></div>
                        <div className='TasklistP_contentR'>
                            <div className='TasklistP_content_titlebar'>

                                <div>

                                    <div>< Addtask show={show} setShow={setShow} /></div>
                                    <div className="titlebar_top">
                                        <div className="titlebar_top_col1">
                                            <div className="titlebar_bagSquare">
                                                <GiBeachBag className="titlebar_bagIcon" />
                                            </div>
                                            <label>Task List</label>
                                        </div>

                                        <div className="titlebar_top_col22">
                                            <BsFillPlusCircleFill className="titlebar_plusIcon" />
                                           
                                            <button onClick={handleClick} className="AT"> ADD TASK</button>
                                        </div>
                                    </div>

                                </div>
                                <div className='TasklistP_content_filterbar'><Filterbar /></div>
                                <div className='TasklistP_content_mainlist'><Mainlist /></div>

                                {/* <div className='TasklistP_content_form'><Form /> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


function Addtask({ show, setShow }) {
    const [Subject, setSubject] = useState("");
    const [txtcomments, settxtcomments] = useState("");
    const [dtCreatedOn, setdtCreatedOn] = useState("");
    const [txtAssignedto, settxtAssignedto] = useState("");
    const [Status, setStatus] = useState("");
    const [LeadEmail, setLeadEmail] = useState("");

    const loginClick = (e) => {
        alert("added")


        // useEffect(() => {
        // const url = "https://uoqqgygwh1.execute-api.us-east-1.amazonaws.com/dev/addtask";
        const url = "http://localhost:3000/dev/addtask";
        const data = {
            Subject: Subject,
            txtcomments: txtcomments,
            dtCreatedOn: dtCreatedOn,
            txtAssignedto: txtAssignedto,
            Status: Status,
            LeadEmail: LeadEmail
        };
        const header = {}
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Response==> " + JSON.stringify(res.data))
                // localStorage.setItem("tokenvariable", res.data)
                // navigate("/Salesdb");

            })
            .catch((err) => {
                console.log("error==> " + JSON.stringify(err))
            })
        //  }, []);
    }
    return show ? (

        <>
            <div className=" A1">
                <div className="AddtaskPage">
                    <div className="full">
                        <div className="r1">
                            <div className="r1_details">
                                <div className="r1_bagSquare">
                                    <GiBeachBag className="r1_bagIcon" />
                                </div>
                                <div className="addtaskbold">
                                    <label>ADD TASK</label></div>
                                <div className=" log">
                                    <label>Log a call</label></div>
                                <div className="email">
                                    <label>Email</label></div>
                                <div className="r1_plus">
                                    <BsFillPlusCircleFill className="r1_plusIcon" />
                                
                                    <button onClick={(e) => {
                                        loginClick(e);
                                    }} >SAVE</button>
                                </div>
                            </div>
                            <div className="whitebg">
                                <div className="rowitems">
                                    <div className="r2">
                                        <label>Task list details</label>
                                    </div>

                                    <div className="r3">

                                        <div className="r3_in" >
                                            {/* <input type="text" placeholder="" value={Subject} onChange={(e) => { setSubject(e.target.value) }} /> */}
                                            <label>Subject</label><br></br>
                                            <input type="text" className="S" value={Subject} onChange={(e) => { setSubject(e.target.value) }} />

                                        </div>
                                        <div className="r3_in">
                                            {/* <input type="text" placeholder="" value={txtcomments} onChange={(e) => { settxtcomments(e.target.value) }} /> */}
                                            <label>Comments</label><br></br>
                                            <input type="text" className="S" value={txtcomments} onChange={(e) => { settxtcomments(e.target.value) }} />
                                        </div>
                                        <div className="r3_in">
                                            {/* <input type="text" placeholder="" value={dtCreatedOn} onChange={(e) => { setdtCreatedOn(e.target.value) }} /> */}
                                            <label>created on</label><br></br>
                                            <input type="text" className="S" value={dtCreatedOn} onChange={(e) => { setdtCreatedOn(e.target.value) }} />
                                        </div>
                                    </div>


                                    <div className="r4">
                                        <div className="r4_in">
                                            {/* <input type="text" placeholder="" value={txtAssignedto} onChange={(e) => { settxtAssignedto(e.target.value) }} /> */}
                                            <label>Assigned to</label><br></br>
                                            <input type="text" className="S" value={txtAssignedto} onChange={(e) => { settxtAssignedto(e.target.value) }} />
                                        </div>
                                        <div className="r4_in">
                                            {/* <input type="text" placeholder="" value={LeadEmail} onChange={(e) => { setLeadEmail(e.target.value) }} /> */}
                                            <label>Lead email id</label><br></br>
                                            <input type="text" className="S" value={LeadEmail} onChange={(e) => { setLeadEmail(e.target.value) }} />
                                        </div>
                                        <div className="r4_in">
                                            {/* <input type="text" placeholder="" value={Status} onChange={(e) => { setStatus(e.target.value) }} /> */}
                                            <label>Status</label><br></br>
                                            <input type="text" className="S" value={Status} onChange={(e) => { setStatus(e.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}