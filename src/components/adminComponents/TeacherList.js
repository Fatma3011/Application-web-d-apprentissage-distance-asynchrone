import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom';

function TeacherList() {
  const history = useHistory()
  const redirectToAdd = () => {
    history.push('/admin/addteacher')

  }
    return (
      <div>
  <div id="layoutSidenav_content">
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">Teachers List</h1>
        <button type="button"  onClick={redirectToAdd} class="btn  kk">Add Teacher</button>
        <br/><br/>
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table mr-1" />
            Data
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Phone number</th>
                    <th>Salary</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Phone number</th>
                    <th>Salary</th>
                    <th>Operations</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>Donna Snider</td>
                    <td>Customer Support</td>
                    <td>New York</td>
                    <td>27</td>
                    <th>
                    <a href="#"> <img src="./assets/img/modifier.jpg" width ="40px" height="40px"/></a>
                    <a href="#"> <img src="./assets/img/supprimer.jpg" width ="40px" height="40px"/></a>
                    <a href="#"> <i className="fas fa-pencil-square-o" /></a>


                    </th>
                   
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  </div>
</div>

    )
}

export default TeacherList
