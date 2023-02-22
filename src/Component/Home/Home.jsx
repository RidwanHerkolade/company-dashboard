import React,{ useState} from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home(){
     const [login, setLogin] = useState(false);
     const navigate = useNavigate();
      function handleLogin(){
          setLogin(true)
          navigate("/form")
     };
     
     return (
          <main>
                <div className="home__section">
                     <div className="homePage">
                          <div className="home__logo">
                               <img src="./img/Group 3.png" alt=""/>
                          </div>
                          <p className="para__content">Punctuality as a function of time with respect to date is a very essential requirement in every organization.</p>
                          <button className="login__btn" type="submit" onClick={handleLogin}>login</button>
                     
                     </div>
                    <div className="home__image">
                         <div className="home__img">
                               <img src="./img/home.png" alt=""/>
                     
                         </div>
                
                    </div>
                </div>
          
          </main>
     )
}
export default Home;