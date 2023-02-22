import React from "react";
import Table from "./Table";
import './Employee.css';


function EmployeeDetails(props) {
      return(
           <div className="employees">
               <div className="employee__details">
                     <div className="select">
                          <img src="./img/vector46.png" alt="" className="images"/>
                          <select className="op">
                            
                               <option>All</option>
                               <option>All</option>
                               <option>All</option>
                        
                          </select>
                          
                          <select className="opp">
                                <option>all designation</option>
                                <option>all designation</option>
                                <option>all designation</option>
                       
                          </select>
                     </div>
                     <div className="select">
                          <img src="./img/add.png" alt="" className="add"/>
                          <select className="oppp">
                               <option>export report</option>
                               <option>all designation</option>
                               <option>all designation</option>
                 
                          </select>
                          <img src="./img/gr8.png" alt="" className="arrow"/>
                     
                     </div>
                    
               </div>
               <div className="employees__detail">
                      <Table search={props.search}/>
               
               </div>
              
              
           
           </div>
          
      )
}
export default EmployeeDetails;