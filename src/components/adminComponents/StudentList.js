import React, {useEffect,useState} from "react";
import { deleteStudent, getStudents } from "../../services/admin.service";

function StudentList() {
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
  
  //Delete Student 
  const handleDelete = (id) => {
    //  call to service 
    deleteStudent(id)
      .then(() => {
        console.log("Student deleted");
      })
      .catch((error) => {
        console.log(error);
      });
    setClicked(!clicked);
  };

  //DidMount behavior

  useEffect(() => {
    //call to service
    getStudents()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clicked]);
  return (
    <div>
      <br />
      <br />
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid">
            <h1 className="mt-4">Students List</h1>

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
                        <th>Student Name</th>
                        <th>E-mail</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Student Name</th>
                        <th>E-mail</th>
                        <th>Delete</th>
                      </tr>
                    </tfoot>
                    <tbody>
                    {data.map((item, index) => (
                        <tr>
                          <td>{item.userName}</td>
                          <td>{item.email}</td>
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

export default StudentList;
