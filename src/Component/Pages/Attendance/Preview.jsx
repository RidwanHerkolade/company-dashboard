import React, {useState} from "react";
import {useForm} from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams} from "react-router-dom"
import detail from "./detail";


function Preview(){
     // GETTING THE INPUT VALUE FROM THE FORM USING REACT HOOK FORM
     const {register, handleSubmit, formState: {errors}} = useForm();
     const onSubmit = (data) => {
          console.log(data)
     };
     

     const navigate = useNavigate()
     const handleClose = () => {
          navigate('/employee')

     };
      const { employeeId } = useParams()
     const myData = detail.find(detailData => detailData.id === employeeId);

        return(
         <div className="prev">
       
                <div className="previews">
                         <CloseIcon className="close" onClick={handleClose}/>
                         <div className="preview__divs">
                              <div className="preview">
                                    <div className="preview__img">
                                         <img src={myData.staffImg}/>
                                    
                                    </div>
                                    <div className="preview__detail">
                                         <h6>{myData.staffName}</h6>
                                         <small>{myData.staffPosition}</small>
                                         <div className="upload">upload</div>
                                    
                                    </div>
                              
                              </div>
                                
                         <form className="form__details" onSubmit={handleSubmit(onSubmit)}>
                              
                               <div className="fullName">
                                    <div className="detail__input">
                                    {errors.fullName && <p className="error">{errors.fullName.message}</p>}
                                         <label htmlFor="fullName" className="label">Full name</label>
                                         <input
                                              type="text"
                                              placeholder="Full name"
                                              name="fullName"
                                              {...register("fullName", {required: "your name is required"})}
                                        />
                                   </div>
                                   <div className="detail__input">
                                   {errors.email && <p className="error">{errors.email.message}</p>}
                                         <label htmlFor="email" className="label">Email</label>
               
                                        <input
                                              type="text"
                                               placeholder="Email"
                                               name="email"
                                               {...register("email", {required: " your email is required"})}

                                        />
                                    </div>
                               </div>
                          
                         
                          <div className="position">
                               <div className="detail__input">
                               {errors.designation && <p className="error">{errors.designation.message}</p>}
                                    <label htmlFor="designation" className="label">Designation</label>
                                    <input
                                         type="text"
                                         placeholder="Designation"
                                         name="designation"
                                         {...register("designation", {required: "designation is required"})}
                                        
                                    />

                              </div>
                              <div className="detail__input">
                                   {errors.staffId && <p className="error">{errors.staffId.message}</p>}
                                     <label htmlFor="staffId" className="label">Staff Id</label>
                
                                   <input
                                         type="text"
                                         placeholder="staff id"
                                         name="staffId"
                                         {...register("staffId", {required: "your staff id is required"})}
                                       
                                    />
                          
                              </div>
                              <div className="detail__input">
                              {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}
                              <label htmlFor="phone" className="label" id="labels">Phone Number</label>
                              <label htmlFor="phone" className="label" id="label">Phone</label>
         
                            <input
                                  type="number"
                                  placeholder="phone no"
                                  name="phoneNumber"
                                  {...register("phoneNumber", {required: "your phone no is required"})}

                             />
                   
                       </div>
                        </div>
                        <div className="duration">
                               <div className="detail__input">
                               {errors.dateJoin && <p className="error">{errors.dateJoin.message}</p>}
                                    <label htmlFor="date" className="label">Date Of Joining</label>
                                    <input
                                         type="date"
                                         placeholder="Date Of Joinig"
                                         name="dateJoin"
                                         {...register("dateJoin", {required: "the DOJ is required"})}
                                
                                    />

                              </div>
                               <div className="detail__input">
                                     {errors.dateBirth && <p className="error">{errors.dateBirth.message}</p>}
                                      <label htmlFor="date" className="label">Date Of Birth</label>
                                      <input
                                               type="date"
                                               placeholder="Date Of Birth"
                                               name="dateBirth"
                                               {...register("dateBirth", {required: "your DOB is required "})}
                                       
                                       />

                              </div>
                                <div className="detail__input">
                                {errors.nationName && <p className="error">{errors.nationName.message}</p>}
                                    <label htmlFor="nation" className="label">Nationality</label>
                                   <input
                                         type="text"
                                         placeholder="Nationality"
                                         name="nationName"
                                         {...register("nationName", {required: "required"})}
                                       
                                    />

                              </div>
                             <div className="detail__input">
                             {errors.stateName && <p className="error">{errors.stateName.message}</p>}
                                    <label htmlFor="nation" className="label" id="labels">State Of Origin</label>
                                    <label htmlFor="nation" className="label" id="label">State</label>
                                   <input
                                         type="text"
                                         placeholder="State Of Origin"
                                         name="stateName"
                                         {...register("stateName", {required: "your SOR  is required"})}
                                        
                                    />

                              </div>
                       </div>
                          <div className="detail__input">
                          {errors.textArea && <p className="error">{errors.textArea.message}</p>}
                               <label htmlFor="address" className="label">Address</label>
                               <textarea 
                                    className="form__address"
                                    name="textArea"
                                    type="text"
                                    {...register("textArea", {required: "your address is required"})}

                              >
                               </textarea>
                          
                          </div>
                         
                          <div className="detail__btn">
                               
                                 <button type="submit" className="saveChange">save changes</button>
                           
                          </div>
                          
                    
                    </form>
                                 
                    </div>
          </div>
          </div> 
        )
}
export default Preview;