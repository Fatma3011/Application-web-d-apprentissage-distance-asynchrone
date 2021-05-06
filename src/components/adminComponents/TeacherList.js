import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteTeacher, getTeachers } from "../../services/admin.service";
import {
  BrowserRouter as Router,
  useRouteMatch,   

  Route,
  Switch,
} from "react-router-dom"; 
function TeacherList() {
  const c = useRouteMatch();
  console.log(c)
  const history = useHistory();
  
  //state
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      salary: "",
    },
  ]);

  //redirect 
  const redirectToAdd = () => {
    history.push("/admin/addteacher");
  };

  //Delete Teacher 
  const handleDelete = (id) => {
    //  call to service 
    deleteTeacher(id)
      .then(() => {
        console.log("teacher deleted");
      })
      .catch((error) => {
        console.log(error);
      });
    setClicked(!clicked);
  };

  //DidMount behavior
  useEffect(() => {
    //call to service
    getTeachers()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clicked]);

  return (
    <div>
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid">
          <div className="row" >
            <div class="col-md-9">  <h1 className="mt-4">Teachers List</h1></div>
            <div className="col-md-3">
              <br/>
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
            </div>
          </div>
          
            <button type="button" onClick={redirectToAdd} class="btn" id="kk">
              Add Teacher
            </button>
            <br />
            <br />
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-table mr-1" />
                Data
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>E-mail</th>
                        <th>Phone number</th>
                        <th>Salary</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>E-mail</th>
                        <th>Phone number</th>
                        <th>Salary</th>
                        <th>Delete</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      {data.map((item, index) => (
                        <tr>
                          <td>{item.firstname}</td>
                          <td>{item.lastname}</td>
                          <td>{item.email}</td>
                          <td>{item.phonenumber}</td>
                          <td>{item.salary}</td>
                          <td>
                            <a href="#" onClick={() => handleDelete(item._id)}>
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TeacherList;
