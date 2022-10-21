import "./style/Salesdb.css";
import React from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RiBookmarkFill } from "react-icons/ri"
import { HiUser } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {
  BsMessenger,
    BsFillBellFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import { AiFillPlusCircle } from 'react-icons/ai';
import { MdArrowForwardIos, MdCancel } from "react-icons/md";
//import Sample from "./Sample.js";
import {
  AiTwotoneStar,
} from "react-icons/ai";
import { FaRegCompass } from 'react-icons/fa';

export default function Salesdb() {
  const [edit1, setEdit1] = useState(false)
  const [edit11, setEdit11] = useState(false)
  const [edit2, setEdit2] = useState(false)
  const [edit21, setEdit21] = useState(false)
  const [edit3, setEdit3] = useState(false)
  const [edit31, setEdit31] = useState(false)


  const [show1, setShow1] = useState(false)
  const [show11, setShow11] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show21, setShow21] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show31, setShow31] = useState(false)
  return <>
    <div className="Topbar_header">
      <div className="Topbar_col1">
        <div className="Topbar_icon_circle">
          <AiOutlineMenu />

        </div><h3>Company</h3>

      </div>
      <div className="Topbar_col2" >
        <ul>
          <li>Dashboard</li>
          <li>Account</li>
          <div className="Tobar_col2_on" ><li>leads</li></div>
          <div className="Tobar_col2_on1" ><li>campaigns</li></div>
          <div className="Tobar_col2_on2" ><li>prospect</li></div>
          <li>
            <BsThreeDots />
          </li>
        </ul>
      </div>
      <div className="Topbar_col3">
        <AiOutlineSearch className="Topbar_searchIcon" />
        <input type={"text"} placeholder="Search Products,Orders and Clients" />
        <MdArrowForwardIos className="Topbar_arrowIcon" />
      </div>
      <div className="Topbar_col4">
        <CgProfile className="Topbar_profileIcon" />
        <label>Clayton Santos</label>
      </div>
      <div className="Topbar_col5">
        <div className="Topbar_Bell_Circle">
          <BsFillBellFill className="Topbar_BellIcon" />
        </div>
        <div className="Topbar_cancel_circle">
          <MdCancel className="Topbar_cancelIcon" />
        </div>
      </div>
    </div>

    <div className="Content">
      <div className="Content_leftbar">
        <div className="leftbar">
          <div className="leftbar_whitecircle1">
            <FaRegCompass />
          </div>
          <div className="leftbar_whitecircle2">
            <AiTwotoneStar />
          </div>
          <div className="leftbar_whitecircle3">
            <BsMessenger />
          </div>
        </div>
      </div>
      <div className="sales_SalesOuter">
        <div className="sales_SalesInner1">
          <div className="sales_Inner1_row1">
            <AiOutlineDown className="sales_dropdownicon" />
            <label>TODO</label>
          </div>
          <div className="sales_Inner_row2">
            <div className="sales_Inner_row2_row1">
              < AiOutlineDown onClick={() => { setShow1(!show1) }} />
              <label>Test Task First One</label>
              < BsThreeDots className="sales_threedotsicon" onClick={() => { setEdit1(!edit1) }} />

            </div>

            {show1 ? (<>
              <div className="Event_Task_Lead_top">
                <div className="Event_Task_Lead">
                  <ul>
                    <li>
                      <div className="sales_eventicon_outer">
                        < RiBookmarkFill className="sales_eventicon" />
                      </div>
                      <label>Event</label>
                    </li>
                    <li>
                      <div className="sales_taskicon_outer">
                        < RiBookmarkFill className="sales_taskicon" />
                      </div>
                      <label>Task</label>
                    </li>
                    <li>
                      <div className="sales_leadicon_outer">
                        < HiUser className="sales_leadicon" />
                      </div>
                      <label>Lead</label>
                    </li>
                  </ul>
                </div>



              </div>
            </>
            ) : (<></>)}
          </div>
          <div className="sales_Inner_row2">
            <div className="sales_Inner_row2_row1">
              < AiOutlineDown onClick={() => { setShow11(!show11) }} />
              <label>Test Task First One</label>
              < BsThreeDots className="sales_threedotsicon" onClick={() => { setEdit11(!edit11) }} />
            </div>
            {show11 ? (<>
              <div className="Event_Task_Lead_top">
                <div className="Event_Task_Lead">
                  <ul>
                    <li>
                      <div className="sales_eventicon_outer">
                        < RiBookmarkFill className="sales_eventicon" />
                      </div>
                      <label>Event</label>
                    </li>
                    <li>
                      <div className="sales_taskicon_outer">
                        < RiBookmarkFill className="sales_taskicon" />
                      </div>
                      <label>Task</label>
                    </li>
                    <li>
                      <div className="sales_leadicon_outer">
                        < HiUser className="sales_leadicon" />
                      </div>
                      <label>Lead</label>
                    </li>
                  </ul>
                </div>




              </div>
            </>
            ) : (<></>)}
          </div>
          <div className="sales_Inner_row4">
            <label>+</label>
          </div>
        </div>
        <div className="sales_SalesInner2">
          <div className="sales_Inner2_row1">
            <AiOutlineDown className="sales_dropdownicon" />
            <label>PROGRESS</label>
          </div>
          <div className="sales_Inner_row2">
            <div className="sales_Inner_row2_row1">
              < AiOutlineDown onClick={() => { setShow2(!show2) }} />
              <label>Test Task First One</label>
              < BsThreeDots className="sales_threedotsicon" onClick={() => { setEdit2(!edit2) }} />
            </div>

            {show2 ? (<>
              <div className="Event_Task_Lead_top">
                <div className="Event_Task_Lead">
                  <ul>
                    <li>
                      <div className="sales_eventicon_outer">
                        < RiBookmarkFill className="sales_eventicon" />
                      </div>
                      <label>Event</label>
                    </li>
                    <li>
                      <div className="sales_taskicon_outer">
                        < RiBookmarkFill className="sales_taskicon" />
                      </div>
                      <label>Task</label>
                    </li>
                    <li>
                      <div className="sales_leadicon_outer">
                        < HiUser className="sales_leadicon" />
                      </div>
                      <label>Lead</label>
                    </li>
                  </ul>
                </div>




              </div>
            </>
            ) : (<></>)}
          </div>
          <div className="sales_Inner_row2">
            <div className="sales_Inner_row2_row1">
              < AiOutlineDown onClick={() => { setShow21(!show21) }} />
              <label>Test Task First One</label>
              < BsThreeDots className="sales_threedotsicon" onClick={() => { setEdit21(!edit21) }} />
            </div>
            {show21 ? (<>
              <div className="Event_Task_Lead_top">
                <div className="Event_Task_Lead">
                  <ul>
                    <li>
                      <div className="sales_eventicon_outer">
                        < RiBookmarkFill className="sales_eventicon" />
                      </div>
                      <label>Event</label>
                    </li>
                    <li>
                      <div className="sales_taskicon_outer">
                        < RiBookmarkFill className="sales_taskicon" />
                      </div>
                      <label>Task</label>
                    </li>
                    <li>
                      <div className="sales_leadicon_outer">
                        < HiUser className="sales_leadicon" />
                      </div>
                      <label>Lead</label>
                    </li>
                  </ul>
                </div>



              </div>
            </>
            ) : (<></>)}
          </div>
          <div className="sales_Inner_row4">
            <label>+</label>
          </div>
        </div>
        <div className="sales_SalesInner3">
          <div className="sales_Inner3_row1">
            <AiOutlineDown className="sales_dropdownicon" />
            <label>COMPLETED</label>
          </div>
          <div className="sales_Inner_row2">
            <div className="sales_Inner_row2_row1">
              < AiOutlineDown onClick={() => { setShow3(!show3) }} />
              <label>Test Task First One</label>
              < BsThreeDots className="sales_threedotsicon" onClick={() => { setEdit3(!edit3) }} />
            </div>
            {show3 ? (<>
              <div className="Event_Task_Lead_top">
                <div className="Event_Task_Lead">
                  <ul>
                    <li>
                      <div className="sales_eventicon_outer">
                        < RiBookmarkFill className="sales_eventicon" />
                      </div>
                      <label>Event</label>
                    </li>
                    <li>
                      <div className="sales_taskicon_outer">
                        < RiBookmarkFill className="sales_taskicon" />
                      </div>
                      <label>Task</label>
                    </li>
                    <li>
                      <div className="sales_leadicon_outer">
                        < HiUser className="sales_leadicon" />
                      </div>
                      <label>Lead</label>
                    </li>
                  </ul>
                </div>





              </div>
            </>
            ) : (<></>)}
          </div>
          <div className="sales_Inner_row2">
            <div className="sales_Inner_row2_row1">
              < AiOutlineDown onClick={() => { setShow31(!show31) }} />
              <label>Test Task First One</label>
              < BsThreeDots className="sales_threedotsicon" onClick={() => { setEdit31(!edit31) }} />
            </div>
            {show31 ? (<>
              <div className="Event_Task_Lead_top">
                <div className="Event_Task_Lead">
                  <ul>
                    <li>
                      <div className="sales_eventicon_outer">
                        < RiBookmarkFill className="sales_eventicon" />
                      </div>
                      <label>Event</label>
                    </li>
                    <li>
                      <div className="sales_taskicon_outer">
                        < RiBookmarkFill className="sales_taskicon" />
                      </div>
                      <label>Task</label>
                    </li>
                    <li>
                      <div className="sales_leadicon_outer">
                        < HiUser className="sales_leadicon" />
                      </div>
                      <label>Lead</label>
                    </li>
                  </ul>
                </div>




              </div>
            </>
            ) : (<></>)}
          </div>
          <div className="sales_Inner_row4">
            <label>+</label>
          </div>
        </div>
      </div>
      </div>
    </>
}