


import "./Mainlist.css";
import axios from "axios";
import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
export default function Mainlist() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    // const url = "https://uoqqgygwh1.execute-api.us-east-1.amazonaws.com/dev/taskfetch";
    const url = "http://localhost:3000/dev/taskfetch";
    const data = {};
    const Headers = {};
    axios
      .post(url, data, { Headers: Headers })
      .then((res) => {
        console.log("Response==>" + JSON.stringify(res.data));
        setArray(res.data)
      })

      .catch((err) => {
        console.log("Error==>" + err);
      });
  }, []);
  return (
    <>
      <div className="Mainlist_Outer">
        <div className="Mainlist_box"></div>
        <div className="Mainlist_header">
          <div className="Mainlist_row1">
            <ul>
              <li>tasklist</li>
              <li>campaign</li>
              <li>Status</li>
              <li> dtCreatedOn </li>
              <li>LeadEmail</li>
             
          <li>owner</li>
            </ul>
          </div>
        </div>
        <div className="Mainlist_Innerbox">
          <div className="Mainlist_list">
          {array.map((itm, indx) => {
              return <ListRow itm={itm} array={array} setArray={setArray}/>;
            })}
            <div>
              <button className="Mainlist_Button">load more tasks</button>
            </div>
          </div>
          </div>
        </div>
    </>
  );
}
function ListRow({itm, array, setArray}) {
  const handleClick=(e, itm)=>{
    let temp=[...array];
    for (const iterator of temp) {
      if(itm.tasktitle === iterator.tasktitle){
        iterator.isclicked=!iterator.isclicked;
      }
    }
    setArray(temp)
  }
  const d=new Date(itm.dtCreatedOn);
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  return (
    <>
      <div className={itm.isclicked?"Mainlist_list_row_topSelected":"Mainlist_list_row_top"} >
        <input className="Cb" type="checkbox" onClick={e=>handleClick(e, itm)}/>
              <label for="checkbox"></label>
        <div className="Mainlist_list_row">
        <label>{itm.tasktitle}</label>
          <label>{itm.campaign}</label>
          <label>{itm.Status}</label>
          <div>{day}-{month}-{year}</div>
          
          <label>{itm.LeadEmail}</label>
        
          <label>{itm.owner}</label>
          <div className="Mainlist_icon">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}