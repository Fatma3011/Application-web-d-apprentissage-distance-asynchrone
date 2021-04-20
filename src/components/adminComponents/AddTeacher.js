import React from 'react'

function AddTeacher() {
    return (
     <div>
  <div id="layoutSidenav_content">
    <main>
      <div classname="col-md-6 col-md-offset-3 ">
        
        <form id="msform">
          <fieldset>
            <h2 classname="fs-title">Add Teacher</h2>
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="lname" placeholder="Last Name" />
            <input type="text" name="specialization" placeholder="Specialization" />
            <input type="text" name="phone" placeholder="Phone" />
            <input type="text" name="email" placeholder="Email" />
            
            <input type="password" name="pass" placeholder="Password" />
            <input type="password" name="cpass" placeholder="Confirm Password" />
            <input type="submit" name="submit" className="submit action-button" value="Add Teacher" />            
          </fieldset>
        </form>
      </div>  
    </main>
  </div>
</div>

    );
}

export default AddTeacher
