import React from "react";
import AttendanceData from "./AttendanceData";
function AttendanceTable({search}){

     return(
          <>
          <div className="table">                 
          <table className="att__table">
               <tbody>
                    {AttendanceData.filter((data)=> {
                         return(
                              data.name.toLowerCase().includes(search)
                         )
                    }).map(data => {
                         return[
                             <tr>
                                 <td>
                                        <div className="dev"> 
                                             <div className="dev__img">
                                                   <img src={data.images} alt=""/>
                                              </div>
                                             <h3>{data.name}</h3>
                       
                                        </div>
                                  </td>
                                   <td>
                                         <small className="data__position">{data.position}</small>
                                   </td>
                                   <td>
                                   <div className="del">
                                         <div className="up__icon">
                                               <img src={data.upIcon} alt="" className="up"/>
                                               <span className="time">7:34 am</span>
                                         
                                         </div>
                                         <div className="up__icon">
                                               <img src={data.downIcon} alt="" className="down"/>
                                               <span className="time">5:34 pm</span>
                                   
                                         </div>
                                         

                                   </div>

                               </td>
                               
                                   <td>
                                        <div className="media">
                                             <img src={data.callIcon} alt="" className="call"/>
                                             <img src={data.msgImg} alt="" className="msg"/>

                                        </div>
                                  </td>
                               
                             </tr>
                         ]
                    })}
                  
                         
               </tbody>
          
          </table>
         
        
</div>


</>


     )
}
export default AttendanceTable;