import React,{useState} from "react";
import AttendanceDetail from "./AttendanceDetail";


function AttendanceContent(){
     const [search, setSearch] = useState("");
     console.log(search)
     function handleChange(event){
          setSearch(event.target.value);
     };
     return(
           <div className="employee__div">
                <div className="employee__divs">
                    <div className="board__header">
                         <div className="greetings">ATTENDANCE</div>
                          <div className="search">
                              <div className="label">
                                      <label htmlFor="search">search</label>
                                      <input type="text" onChange={handleChange}/>
                                      <img src="./img/Search.png" alt=""/>
                              </div>
                              <img src="./img/Logout.png"/>
                             
                          
                          </div>
                      
                     </div>
                     <AttendanceDetail search={search}/>
                   
                </div>

               
           </div>
          
     )
}
export default AttendanceContent;