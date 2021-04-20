import React from 'react'

function EditPassword() {
    return (
        <div>
             
            <div id="layoutSidenav_content">
    <main>
      <div classname="col-md-6 col-md-offset-3 ">
        
        <form id="msform">
          <fieldset>
            <h2 classname="fs-title">Edit Password</h2>
            <br/>
            <br/>
            <input type="password" name="opass" placeholder="Old Password" />
            <input type="password" name="npass" placeholder="New Password" />
            <input type="password" name="cpass" placeholder="Confirm Password" />
            
            <input type="submit" name="submit" className="submit action-button" value="SAVE" />            
            <br/>
          </fieldset>
        </form>
        
      </div>  
    </main>
  </div>
        </div>
    )
}

export default EditPassword
