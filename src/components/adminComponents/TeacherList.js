import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteTeacher, getTeachers } from "../../services/admin.service";

function TeacherList() {

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
            <h1 className="mt-4">Teachers List</h1>
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
                          <th>{item.email}</th>
                          <td>{item.phonenumber}</td>
                          <td>{item.salary}</td>

                          <th>
                            <a href="#" onClick={() => handleDelete(item._id)}>
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </a>
                          </th>
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
