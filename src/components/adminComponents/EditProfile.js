import React from 'react'

function EditProfile() {
    return (
        <div>
           
  <div id="layoutSidenav_content">
    <main>
      <div classname="col-md-6 col-md-offset-3 ">
        
        <form id="msform">
          <fieldset>
            <h2 classname="fs-title">Edit Profile</h2>
            <br/>
            <br/>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="phone" placeholder="Phone" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="profession" placeholder="Profession" />
            
            <input type="submit" name="submit" className="submit action-button" value="SAVE" />            
            <br/>
            <a href="/admin/editpassword">Edit Password</a>
          </fieldset>
        </form>
        
      </div>  
    </main>
  </div>
        </div>
    )
}

export default EditProfile
