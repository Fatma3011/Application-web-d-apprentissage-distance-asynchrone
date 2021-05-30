import React, { useState ,useEffect} from 'react'
import { updateTeacher, getTeacher } from "../../services/teacher.service";
import {withRouter ,useHistory} from 'react-router-dom';
<<<<<<< HEAD

function Profile() { 
  let iduser="6087f375b0757ab1749fec37";
  const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
   const phoneRegex=/\D/;
=======
import * as Yup from 'yup'
import {useFormik} from 'formik'


function Profile() { 
  let iduser="6087f375b0757ab1749fec37";
 
>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85
   const history=useHistory();

  useEffect(() => {
    let idUser="6087f375b0757ab1749fec37";

    getTeacher(idUser)
      .then((response) => {
        setData({
          firstName: response.response.firstName,
          lastName: response.response.lastName,
           specialization: response.response.specialization,
             phone: response.response.phone,
            email:response.response.email,
            password:response.response.password,

        });
        setProfile({
          firstName: response.response.firstName,
          lastName: response.response.lastName,
           specialization: response.response.specialization,
             phone: response.response.phone,
            email:response.response.email,
<<<<<<< HEAD

=======
            currentPassword:response.response.password,
            newPassword:'',
            confirmpassword:''
>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85
        });

        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });



  }, []);

  const [error, setError] = useState(
    {
<<<<<<< HEAD
   firstName:true,
   lastName: true,
   specialization: true,
   phone: true,
   validPhone:true,
   email:true,
   validEmail:true,
   password:true,
   confirmpassword:true,
   matchedPassword:true
  }
 );

 const errorHandler=()=>{




}
=======
   firstName:false,
   lastName: false,
   specialization: false,
   phone: false,
   email:false,
   currentPassword:false,
   newPassword:false,
   confirmPassword:false,
   matchedPassword:false
  }
 );

 const  initialValues= {
  firstName:profile.firstName,
   lastName: profile.lastName,
   specialization: profile.specialization,
   phone: profile.phone,
   email:profile.email,
   password:profile.password,
   confirmpassword:profile.confirmpassword,
   matchedPassword:true

}


const validationSchema = Yup.object({
  firstName: Yup.string()
  .required('Required'),
  lastName: Yup.string()
  .required('Required'),
  specialization: Yup.string()
  .required('Required'),




  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
    password:Yup.string().required('Required')
    .min(6),
password2: Yup.mixed().test('match', 'Passwords do not match', function (value) {
return value === this.parent.password
}).required('Password confirm is required'),
 })


>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85

function validation(){
  if(profile.password!==profile.confirmpassword) setError({...error,matchedPassword:false})
  return(error.firstName && error.lastName && error.specialization && 
    error.phone && error.validPhone && error.email && error.validEmail && 
    error.matchedPassword)
}

  const [profile, setProfile] = useState(
     {
    firstName:"",
    lastName: "",
    specialization: "",
    phone: "",
    email:"",
    password:"",
    confirmpassword:""
   }
  );
    const [data, setData] = useState(
        {
      firstName:"",
      lastName: "",
      specialization: "",
      phone: "",
      email:"",
      }
    );



<<<<<<< HEAD
  const [updateState, setupdateState] = useState(true);
=======
  const [updateState, setupdateState] = useState(false);
>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85

  const updatehandler=()=>{
    setupdateState(!updateState);
  }
  

  const submitHandler = (e) => {
      e.preventDefault() //prevent the default behaviour of a form : redirect to other page
      if(validation()){
      const update={
            userId:iduser,
            firstName: profile.firstName,
            lastName: profile.lastName,
            specialization: profile.specialization,
            phone: profile.phone,
            email:profile.email,
            password:profile.password
          }
      updateTeacher(update)
      .then((response) => {
        history.push('/teacher/profile')           
      })
      .catch((error) => {
          console.log(error);
        });
  } 
  }
  return (
    <div id="layoutSidenav_content">
    <main >
  
      <div className=" profile">
      <br/><br/>

        <form id="msform"   onSubmit={submitHandler}>
            <fieldset>
            <h2 className="fs-title">PROFILE</h2>

            <div >
          <table className="profile-data">
           <tr> <td>First Name :</td>    <td>{data.firstName}</td> </tr>
           <tr> <td>Last Name :</td>    <td>{data.lastName}</td> </tr>
           <tr> <td>Specialization :</td>    <td>{data.specialization}</td> </tr>
           <tr> <td>Phone :</td>    <td>{data.phone}</td> </tr>
           <tr> <td>email :</td>    <td>{data.email}</td> </tr>
           </table>
                </div>

<div  className="update-btn" onClick={updatehandler}> update profile</div>
             
   {  updateState &&  <div>
                <input type="text" name="firstName" placeholder="First Name"
               value={profile.firstName}
               onChange={(e)=>{setProfile({...profile ,firstName:e.target.value});
<<<<<<< HEAD
              e.target.value===""?setError({...error,firstName:false}):setError({...error,firstName:true})
=======
              e.target.value===""?setError({...error,firstName:false}):setError({...error,firstName:false})
>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85
              }}            
               />

               {!error.firstName && <span className="error">This field is required</span>} 


                <input type="text" name="lastName" placeholder="Last Name"
                value={profile.lastName}
                 onChange={(e)=>{setProfile({...profile ,lastName:e.target.value});
<<<<<<< HEAD
                 e.target.value===""?setError({...error,lastName:false}):setError({...error,lastName:true})
=======
                 e.target.value===""?setError({...error,lastName:false}):setError({...error,lastName:false})
>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85

                }}            
                 />
               {!error.lastName && <span className="error">This field is required</span>} 


                <input type="text" name="specialization" placeholder="Specialization"
                                 value={profile.specialization}
                 onChange={(e)=>{setProfile({...profile ,specialization:e.target.value});
<<<<<<< HEAD
                 e.target.value===""?setError({...error,specialization:false}):setError({...error,specialization:true})
=======
                 e.target.value===""?setError({...error,specialization:false}):setError({...error,specialization:false})
>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85
                }}       
                 />
               {!error.specialization && <span className="error">This field is required</span>} 


                <input type="text" name="phone" placeholder="Phone"
                value={profile.phone}
                 onChange={(e)=>{setProfile({...profile ,phone:e.target.value});
<<<<<<< HEAD
                 e.target.value===""?setError({...error,phone:false}):setError({...error,phone:true})
                phoneRegex.test(e.target.value)? setError({...error,validPhone:true}):setError({...error,validPhone:false})
=======
                 e.target.value===""?setError({...error,phone:false}):setError({...error,phone:false})
>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85

                }}
                 />

              {!error.phone && <span className="error">This field is required</span>} 
              {!error.validPhone && <span className="error">This field is invalid</span>} 



                <input type="email" name="email" placeholder="Email"
                  value={profile.email}
                  onChange={(e)=>{setProfile({...profile ,email:e.target.value});
<<<<<<< HEAD
                  e.target.value===""?setError({...error,email:false}):setError({...error,email:true})
                  emailRegex.test(e.target.value)? setError({...error,validEmail:true}):setError({...error,validEmail:false})
=======
                  e.target.value===""?setError({...error,email:false}):setError({...error,email:false})
>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85

                }}
                  />

              {!error.email && <span className="error">This field is required</span>} 
              {!error.validEmail && <span className="error">This field is invalid</span>} 


                <h5 className="fs-subtitle">Change Password</h5>
<<<<<<< HEAD
                <input type="password" name="password" placeholder="Password"
                   onChange={(e)=>{setProfile({...profile ,password:e.target.value});}}
                   value={profile.password}/>
=======
                <input type="password" name="currentpassword" placeholder="Current Password"
                   onChange={(e)=>{setProfile({...profile ,currentPassword:e.target.value});}}
                   value={profile.currentPassword}/>

                <input type="password" name="newpassword" placeholder=" New Password"
                   onChange={(e)=>{setProfile({...profile ,newPassword:e.target.value});}}
                   value={profile.newPassword}/>
>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85
                <input type="password" name="confirmpassword" placeholder="Confirm Password"
                      onChange={(e)=>{setProfile({...profile, confirmpassword:e.target.value});}}
                      value={profile.confirmpassword}/>

                      {!error.matchedPassword && <span className="error">Passwords doesn't match</span>} 

                <input type="submit" name="submit" className="submit action-button" value="save" />            
                </div>
              
   }       
                </fieldset>

        </form>
        </div>  
  
  
  
 
    </main>
    </div>
  );
}

export default withRouter(Profile)
