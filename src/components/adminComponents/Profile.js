import React from 'react'
import { useHistory} from "react-router-dom";

function Profile() {
  const history = useHistory();
  const redirectToAdd = () => {
    history.push("/admin/editprofile");
  };
    return (
        <div>
          <br/><br/>
        <div className="container emp-profile">
  <form method="post">
    <div className="row">
      <div className="col-md-4">
        <div className="profile-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt />
          <div className="file btn btn-lg btn-primary">
            Change Photo
            <input type="file" name="file" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="profile-head">
        
          <div className="row">
          <div className="col-lg-11">
          <h5>
            Fatma Chtioui
          </h5>
          <h6>
            Administrator of e-learning website
          </h6>
          </div>
          <div className="col-lg-1">
          <button type="button" onClick={redirectToAdd} class="btn  kk">
              Edit
            </button>
          </div>
          </div>
          
          <br/>
          <br/>
          <br/>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <div className="row">
      <div className="col-md-4">
        
      </div>
      <div className="col-md-8">
        <div className="tab-content profile-tab" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            
            <div className="row">
              <div className="col-md-6">
                <label>Name</label>
              </div>
              <div className="col-md-6">
                <p>Fatma Chtioui</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Email</label>
              </div>
              <div className="col-md-6">
                <p>fatmachtioui@gmail.com</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Phone</label>
              </div>
              <div className="col-md-6">
                <p>123 456 7890</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Profession</label>
              </div>
              <div className="col-md-6">
                <p>Web Developer and Designer</p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </form>           
</div>

        </div>
    )
}

export default Profile
