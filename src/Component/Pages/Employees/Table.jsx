import React from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";
import { Link } from "react-router-dom";


function Table({search}){
      console.log(search)
     return(
          <div className="table">                 
                     <table>
                          <thead>
                               <tr>
                                    {TableHeader.map(dataHead => {
                                         return[
                                             <th>{dataHead.name}</th>
                                         ]
                                    })}
                               </tr>
                          
                          </thead> 
                          <tbody>
                               {TableData.filter((data)=> {
                                   return (
                                        data.name.toLowerCase().includes(search)
                                   )
                               }).map((data) => {
                                    return[
                                        <tr key={data.id}>
                                            <td>
                                                   <Link className="dev" to={`/employee/${data.id}`}> 
                                                        <div className="dev__img">
                                                             <img src={data.images} alt=""/>
                                                        </div>
                                                        <h3>{data.name}</h3>
                                        
                                                   </Link>
                                             </td>
                                              <td>
                                                    <small className="data__position">{data.position}</small>
                                              </td>
                                              <td>
                                                   <div className="media">
                                                        <img src={data.callIcon} alt="" className="call"/>
                                                        <img src={data.msgImg} alt="" className="msg"/>

                                                   </div>
                                             </td>
                                             <td>
                                                  <div className="del">
                                                         <img src={data.delIcon} alt="" className="call"/>
                                                        <img src={data.editIcon} alt="" className="msg"/>

                                                  </div>

                                              </td>
                                              
                                             
                                            
                                        </tr>
                                    ]
                               })}
                             
                                    
                          </tbody>
                     
                     </table>
                          
          
          
          </div>
     )
}
export default Table;