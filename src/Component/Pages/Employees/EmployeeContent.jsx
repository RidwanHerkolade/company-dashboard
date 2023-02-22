import React, {useState} from "react";
import './Employee.css'
import EmployeeDetails from "./EmployeeDetails";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

function EmployeeContent(){
     // const [mobile, setMobile] = useState(false)
     const [search, setSearch] = useState('');
     function handleChange(event){
          setSearch(event.target.value)
     }
     return(
           <div className="employee__div">
                <div className="employee__divs">
                    <div className="board__header">
                          {/* <div className="menuBtn"></div> */}
                              
                         <div className="greetings">EMPLOYEES</div>
                          <div className="search">
                              <div className="label">
                                      <label htmlFor="search">search</label>
                                      <input type="text" onChange={handleChange}/>
                                      <img src="./img/Search.png" alt=""/>
                              </div>
                              <img src="./img/Logout.png" alt=""/>
                             
                          
                          </div>
                      
                     </div>
                     <EmployeeDetails  search={search} />
                </div>
               
               
           
           </div>
     )
}
export default EmployeeContent;