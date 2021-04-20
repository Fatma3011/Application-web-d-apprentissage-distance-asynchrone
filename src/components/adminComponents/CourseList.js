import React from "react";

function CourseList() {
  return (
    <div>
      <br />
      <br />
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid">
            <h1 className="mt-4">Courses List</h1>

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
                        <th>CourseName</th>
                        <th>TeacherName</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>CourseName</th>
                        <th>TeacherName</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>Donna Snider</td>
                        <td>Customer Support</td>
                        <td>New York</td>
                        <th>
                          <a href="#">
                            <i class="fas fa-edit"></i>
                          </a>
                        </th>
                        <th>
                          <a href="#">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
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
  );
}

export default CourseList;
