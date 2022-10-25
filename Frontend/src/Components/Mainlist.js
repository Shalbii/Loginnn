


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
            <div className="Header_Main1"><li>tasklist</li></div>
              {/* <li>campaign</li> */}
              <div className="Header_Main2"><li>Status</li></div>
             {/* <li> dtCreatedOn </li> */}
             <div className="Header_Main3"><li>dtCreatedOn</li></div>
               {/* <li>LeadEmail</li> */}
               <div className="Header_Main4"><li>LeadEmail</li></div>
          {/* <li>owner</li> */}
          <div className="Header_Main5"><li>owner</li></div>
            </ul>
          </div>
        </div>
        <div className="Mainlist_Innerbox">
          <div className="Mainlist_list">
            {array.map((itm, indx) => {
              return <ListRow itm={itm} array={array} setArray={setArray} />;
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
function ListRow({ itm, array, setArray }) {
  const handleClick = (e, itm) => {
    let temp = [...array];
    for (const iterator of temp) {
      if (itm.tasktitle === iterator.tasktitle) {
        iterator.isclicked = !iterator.isclicked;
      }
    }
    setArray(temp)
  }
  const d = new Date(itm.dtCreatedOn);
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  return (
    <>
      <div className={itm.isclicked ? "Mainlist_list_row_topSelected" : "Mainlist_list_row_top"} >
        <input className="Cb" type="checkbox" onClick={e => handleClick(e, itm)} />
        <label for="checkbox"></label>
        <div className="Mainlist_list_row">
          {/* <label>{itm.tasktitle}</label> */}
          <div className="itmtasktitle">{itm.tasktitle}</div>
          {/* <label>{itm.campaign}</label> */}
          {/* <label>{itm.Status}</label> */}
          <div className="itmStatus">{itm.Status}</div>
          {/* <div>{day}-{month}-{year}</div> */}
          <div className="itmdate">{year}-{month}-{day}</div>

          {/* <label>{itm.LeadEmail}</label> */}
          <div className="itmLeadEmail">{itm.LeadEmail}</div>

          {/* <label>{itm.owner}</label> */}
          <div className="itmowner">{itm.owner}</div>
          <div className="Mainlist_icon">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}