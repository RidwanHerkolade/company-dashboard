import React, {useState} from "react";
import './Close.css'
import {useNavigate} from "react-router-dom"

function Close() {
     // const time = new Date().toLocaleTimeString();
     // FUCTION FOR DISPLAYING OF TIME AND DATE
    const [currenTime, setCurrentTime] = useState();
    const [date, setDate] = useState();
    function handleTime(){
       const time = new Date().toLocaleTimeString();
       setCurrentTime(time)
    };
    setInterval(handleTime, 1000)
    function handleDate(){
         const date = new Date().toDateString()
         setDate(date)
    };
    setInterval(handleDate)

     // FUNCTION FOR NAVIGATING BACK TO THE LOGIN PAGE
     const navigate = useNavigate()
     function handleNavigate(){
          navigate('/form')

     };
    
     return(
          <div className="log">
                <div className="log__content">
                     <div className="log__logo">
                          <img src="./img/log.png" alt=""/>   
                     </div>
                     <div className="times">{currenTime}</div>
                     <div className="date">{date}</div>

                </div>
                <div className="admin" onClick={handleNavigate}>admin<img src="./img/Logout.png" alt=""/></div>
                <img src="./img/fill.png" alt="" className="fill"/>
          
          </div>
     )
}
export default Close;