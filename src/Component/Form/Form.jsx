import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Form() {
  // GETTING THE INPUT VALUE
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [showPassword, setShowPassword] = useState(false)
  
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/dashboard", { state: {...register}});
  }
  console.log("errors", errors);

  // FUNCTIONALITY FOR VISIBILITY OF PASSWORD
   function handleShow(){
    setShowPassword(!showPassword)
   };
  return (
    <div className="form__group">
      <div className="form__logo">
        <img src="./img/log.png" alt="" />
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>admin login</h1>
        {errors.userName && <p className="errors">{errors.userName.message}</p>}
        <div className="input">
          <input
            type="text"
            placeholder="username"
            name="userName"
            autoComplete="off" 
            {...register("userName", {required: "username is required"})}
          
          />
          <img src="./img/vector4.png" alt="" />
        </div>   
        {errors.passWord && <p className="errors">{errors.passWord.message}</p>}
        <div className="input">
          <input
            type={!showPassword ? "password" : "text"}
            placeholder="password"
            name="passWord"
            autoComplete="off" 
            {...register("passWord", {required: "password is required", maxLength: {value: 7, message: "you exceed the max length"}, minLength: 4, })}
          />
          <img src="./img/vector6.png" alt="" />
          <div className="show" onClick={handleShow}>
                 { showPassword ? <VisibilityIcon className="left"/> : <VisibilityOffIcon className="left"/>}
          
          </div>

         
        </div>
        <button type="submit" className="submit__btn">
          login
        </button>
        <Link to="./" className="password">
          forgot password?
        </Link>
      </form>
    </div>
  );
}
export default Form;
