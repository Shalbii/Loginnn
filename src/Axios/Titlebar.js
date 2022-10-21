import "./titlebar.css";
import React from "react";
import { GiBeachBag } from "react-icons/gi";
//import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
// import Addtask from './TasklistPages/Addtask';


export default function TitleBar() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div>< Addtask show={show} setShow={setShow} /></div>
      <div className="titlebar_top">
        <div className="titlebar_top_col1">
          <div className="titlebar_bagSquare">
            <GiBeachBag className="titlebar_bagIcon" />
          </div>
          <label>Task List</label>
        </div>
        {/* <div className="titlebar_top_col2">
          <div className="titlebar_top_col21">
            <HiDownload className="titlebar_downloadIcon" />
            <label>Bulk Import</label>
          </div> */}
        <div className="titlebar_top_col22">
          <BsFillPlusCircleFill className="titlebar_plusIcon" />
          {/* <label>Add Lead</label> */}
          <button onClick={handleClick} className="AT"> ADD TASK</button>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}


function Addtask({ show, setShow }) {
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
                  {/* <label>Add Lead</label> */}
                  <button className="button">  <b> SAVE</b></button>
                  {/* <button className="button" onClick={(e) => { SAVEclick(e); }} >  <b> SAVE</b></button> */}
                  {/* <button onClick={(e) => { SAVEclick(e); }}>SAVE
                  </button> */}


                </div>
              </div>
              <div className="rowitems">
                <div className="r2">
                  <label>Task list details</label>
                </div>

                <div className="r3">
                  <div className="r3_in">
                    <label>Subject</label><br></br>

                    <input type="text" className="S"></input>

                  </div>
                  <div className="r3_in">
                    <label>Comments</label><br></br>
                    <input type="text" className="S"></input>
                  </div>
                  <div className="r3_in">
                    <label>created on</label><br></br>
                    <input type="text" className="S"></input>
                  </div>
                </div>


                <div className="r4">
                  <div className="r4_in">
                    <label>Assigned to</label><br></br>
                    <input type="text" className="S"></input>
                  </div>
                  <div className="r4_in">
                    <label>Lead email id</label><br></br>
                    <input type="text" className="S"></input>
                  </div>
                  <div className="r4_in">
                    <label>Status</label><br></br>
                    <input type="text" className="S"></input>
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





