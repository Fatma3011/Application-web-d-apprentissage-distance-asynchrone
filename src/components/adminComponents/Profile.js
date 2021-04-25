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
      <div className="col-md-1"></div>
      <div className="col-md-2">

        <div className="">
          <img src="../../../assets/img/admin.png" alt="admin picture" className="adminpic"/>
          
        </div>
      </div>
      <div className="col-md-6">
        <div className="profile-head">
        
          <div className="row">
          <div className="col-lg-11">
          <h4>
            Fatma Chtioui
          </h4>
          <h5>
            Administrator of e-learning website
          </h5>
          </div>
          <div className="col-lg-1">
          <button type="button" onClick={redirectToAdd} id="kk" class="btn">
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
            
          </ul>
        </div>
      </div>
      
    </div>
    <div className="row">
      <div className="col-md-3">
        
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
