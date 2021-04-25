import React from "react";
import { useHistory } from "react-router-dom";

function EditPassword() {

  const history = useHistory();
  const redirectToAdd = () => {
    history.push("/admin/editprofile");
  };
  return (
    <div>
     
      <div id="layoutSidenav_content">
        <main>
          <div className="col-md-offset-3 ">
            
            <form id="msform">
              <fieldset>
                <h2 className="fs-title">Edit Password</h2>
                <br />
                <br />
                <input
                  type="password"
                  name="opass"
                  placeholder="Old Password"
                />
                <input
                  type="password"
                  name="npass"
                  placeholder="New Password"
                />
                <input
                  type="password"
                  name="cpass"
                  placeholder="Confirm Password"
                />

                <input
                  type="submit"
                  name="submit"
                  className="submit action-button"
                  value="SAVE"
                />
                <br />
              
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
  );
}

export default EditPassword;
