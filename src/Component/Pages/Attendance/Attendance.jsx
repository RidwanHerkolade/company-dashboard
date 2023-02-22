import React from "react";
import {Link} from "react-router-dom";
import AttendanceContent from "./AttendanceContent";
function Attendance() {
     return(
         <div className="board__grid">
                   <aside>
                        <div className="aside__div">
                               <div className="aside__logo">
                                     <img src="./img/Group 3.png" alt=""/>
                               
                               </div>
                               <div className="links">
                                     <Link to="/dashboard" className="router__links"><img src="./img/Category.png" alt=""/>dashboard</Link>
                                     <Link to="/employee" className="router__links"><img src="./img/user.png" alt=""/>employee<img src="./img/Plus.png" alt=""/></Link>
                                     <Link to="/attendance" className="router__links"><img src="./img/time.png" alt=""/>attendance</Link>
                                     <Link to="/close" className="router__links"><img src="./img/Logout.png"/>log out</Link>
                                   
                               
                               </div>
                         
                         </div>
                   
                   </aside>
                   <AttendanceContent/>
                 
           </div>
     )
}
export default Attendance;