import React from "react";
import headCount from "../Dashboard/headCount";
import './Attendance.css'
import AttendanceTable from "./AttendanceTable";

function AttendanceDetail(props){
     return(
           <div className="attendance">
                <div className="attendance__details">
                    
                    <div className="counter__width">
                       {headCount.map(head => {
                          return [
                               <div className="counter__grids">
                                     <div className="counts">
                                          <div className="count__img">
                                               <img src={head.img} alt=""/>
                                
                                          </div>
                                          <div className="count__num">
                                               <h2>{head.name}</h2>
                                               <h3>{head.number}</h3>
                                
                                          </div>
                           
                                     </div>
                      
                                </div>
                          ]
                               
                          
                      })}
                 
                 </div>
                  <div className="attendance__select">
                          <div className="select">
                                <img src="./img/vector46.png" alt="" className="images"/>
                                 <select className="att__op">
                            
                                     <option>All</option>
                                     <option>All</option>
                                    <option>All</option>
                        
                                </select>
                               <select className="att__opp">
                                     <option>today</option>
                                     <option>yesterday</option>
                                    <option>tomorrow</option>
                       
                               </select>
                               <img src="./img/phone.png" alt="" className="att__add"/>
                          
                         
                          </div>
                          <div className="select">
                               <select className="att__oppp">
                                    <option>export report</option>
                                    <option>all designation</option>
                                    <option>all designation</option>
                 
                               </select>
                               <img src="./img/gr8.png" alt="" className="att__arrow"/>
                     
                          </div>
                    
                        
                    </div>
                     
                    
                </div>
                <div className="att__detail">
                     <AttendanceTable search={props.search}/>                
                </div>
            
          </div>
     )
}
export default AttendanceDetail;