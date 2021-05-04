import React, { useState ,useEffect} from 'react'
import { updateTeacher, getTeacher } from "../../services/teacher.service";

function Profile() { 
  let iduser="6087f375b0757ab1749fec37";

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

        });

        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });



  }, []);

  

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



  const [updateState, setupdateState] = useState(false);

  const updatehandler=()=>{
    setupdateState(!updateState);
  }
  

  const submitHandler = (e) => {
      e.preventDefault() //prevent the default behaviour of a form : redirect to other page
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
        window.location.reload();
        })
      .catch((error) => {
          console.log(error);
        });
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
               onChange={(e)=>{setProfile({...profile ,firstName:e.target.value})}}            


                />
                <input type="text" name="lastName" placeholder="Last Name"
                 onChange={(e)=>{setProfile({...profile ,lastName:e.target.value})}}            
                 value={profile.lastName}
                 />
                <input type="text" name="specialization" placeholder="Specialization"
                 onChange={(e)=>{setProfile({...profile ,specialization:e.target.value})}}       
                 value={profile.specialization}
                 />
                <input type="text" name="phone" placeholder="Phone"
                 onChange={(e)=>{setProfile({...profile ,phone:e.target.value})}}
                 value={profile.phone}/>
                <input type="email" name="email" placeholder="Email"
                  onChange={(e)=>{setProfile({...profile ,email:e.target.value})}}
                  value={profile.email}/>
                <h5 className="fs-subtitle">Change Password</h5>
                <input type="password" name="password" placeholder="Password"
                   onChange={(e)=>{setProfile({...profile ,password:e.target.value})}}
                   value={profile.password}/>
                <input type="password" name="confirmpassword" placeholder="Confirm Password"
                      onChange={(e)=>{setProfile({...profile, confirmpassword:e.target.value})}}
                      value={profile.confirmpassword}/>
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

export default Profile
