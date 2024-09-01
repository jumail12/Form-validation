// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import "./form.css";

// const Formv2 = () => {

//     const intialValues={username:"" , email:"", password:"" };

//     const [Fvalues,setFvalues]=useState(intialValues);
//     const [Ferror,setFerror]=useState({});
//     const [isSubmit,setIsSubmit]=useState(false)

//     useEffect(()=>{
        
//         // console.log(Ferror);
        
        
//         if(Object.keys(Ferror).length=== 0 && isSubmit ){
//          console.log(Fvalues);
//         alert("form submitted successfully")

            
//         }

//     },[Ferror,isSubmit])

//     const handleChange =(e)=>{
       
//         const {name , value}=e.target;
//         setFvalues({...Fvalues ,[name]:value}) 
//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault();

//         setFerror(validate(Fvalues));
//         setIsSubmit(true);
//     }

//    const validate =(values)=>{
//     let tempError={};
//    const regex='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';

//    if(!values.username){
//     tempError.username="User name is required...!";
//    }

//    if(!values.email ){
//     tempError.email=" Email is required...!";
//    }

//    if(!values.password){
//     tempError.password="Password  is required...!";
//    }else if((values.password).length <=4){
//     tempError.password="password atleast required 4 charecter"

//    }

//    return tempError;
    
//    }

//   return (
//     <div className='container'>
//         <form onSubmit={handleSubmit}>

//         <pre>{JSON.stringify(Fvalues,undefined,2)}</pre>

//             <div className="uiDevider">
//                 <div className="uiform">
//                     <div>
//                         <h1>Login Form</h1>
//                     </div>

//                     <div className="field">

//                         <label>Username </label>
//                         <input type="text" name='username' placeholder='Username' value={Fvalues.username} onChange={handleChange}/>
//                     </div>
//                     <p>{Ferror.username}</p>

//                     <div className="field">

//                         <label>Email </label>
//                         <input type="email" name='email' placeholder='Email' value={Fvalues.email}  onChange={handleChange}/>

//                     </div>
//                     <p>{Ferror.email}</p>


//                     <div className="field">

//                         <label>Password </label>
//                         <input type="password" name='password' placeholder='Password' value={Fvalues.password}  onChange={handleChange}/>

//                     </div>
//                     <p>{Ferror.password}</p>

// <div className='"field'><button type='submit'>Submit</button></div>
                    

//                 </div>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default Formv2;



// ----------------------------------------------------------------------------------------------------------
import "./form.css"

import React, { useEffect, useState } from 'react'

const Formv2 = () => {

   const  intialV={

    username:"",
    email:"",
    password:""
   } 

   const [Fvalues,setFvalues]=useState(intialV);
   const[Ferror,setFerror]=useState({});
   const [submit,isSubmit]=useState(false);

   const handleChange=(e)=>{

  const  {name,value}=e.target;
  setFvalues({...Fvalues,[name]:value});
   }

   const handleSubmit=(e)=>{
    // e.preventDefault();

    setFerror(validate(Fvalues));
    isSubmit(true);

   }

  const validate =(fv)=>{

  const  tempError={};

    if(!fv.username){
        tempError.username="Username is required...!";
    }

    if(!fv.email){
        tempError.email="email  is required...!";
    }

    if(!fv.password){
        tempError.password="password is required...!";
    }else if((fv.password).length<=4){
        tempError.password="password atlest contain 4 charector...!"
    }

    // if(!fv.password){
    //         tempError.password="Password  is required...!";
    //        }else if((fv.password).length <=4){
    //         tempError.password="password atleast required 4 charecter"
        
    //        }

    return tempError;
  }

  useEffect(()=>{
   if(Object.keys(Ferror).length===0 &&submit) {
      
    console.log(Fvalues);
    alert("Form submitted succesfully...!")
    

   }
  },[Ferror,submit])



  return (
    <div className='container'>
    <form  onSubmit={handleSubmit}>

    <pre>{JSON.stringify(Fvalues,undefined,2)}</pre>

        <div className="uiDevider">
            <div className="uiform">
                <div>
                    <h1>Login Form</h1>
                </div>

                <div className="field">

                    <label>Username </label>
                    <input type="text" name='username' placeholder='Username' value={Fvalues.username} onChange={handleChange}/>
                </div>
                <p>{Ferror.username}</p>

                <div className="field">

                    <label>Email </label>
                    <input type="email" name='email' placeholder='Email' value={Fvalues.email}  onChange={handleChange}/>

                </div>
                <p>{Ferror.email}</p>


                <div className="field">

                    <label>Password </label>
                    <input type="password" name='password' placeholder='Password' value={Fvalues.password}  onChange={handleChange}/>

                </div>
                <p>{Ferror.password}</p>

<div className='"field'><button type='submit'>Submit</button></div>
                

            </div>
        </div>
    </form>
</div>
  )
}

export default Formv2