import React from 'react'
import { useHistory } from "react-router-dom";

function EditProfile() {
  const history = useHistory();
  const redirectToAdd = () => {
    history.push("/admin/profile");
  };
    return (
        <div>
           
  <div id="layoutSidenav_content">
    <main>
      <div className="col-md-offset-3 ">
        
        <form id="msform">
          <fieldset>
            <h2 className="fs-title">Edit Profile</h2>
            <br/>
            <br/>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="phone" placeholder="Phone" />
            <input type="text" name="email" placeholder="Email" />
            
            <input type="submit" name="submit" className="submit action-button" value="SAVE" />            
            <br/>
            <a href="/admin/editpassword">Edit Password</a>
          </fieldset>
          <h3> 
                <a href="#"   onClick={redirectToAdd}
>
                  <i className="fas fa-arrow-circle-left" ></i>
                </a>           
              </h3>        
        </form>
        
        
      </div>  
    </main>
  </div>
        </div>
    )
}

export default EditProfile
