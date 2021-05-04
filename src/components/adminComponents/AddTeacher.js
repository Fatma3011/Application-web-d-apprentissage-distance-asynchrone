import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postTeacher } from "../../services/admin.service";

function AddTeacher() {
  const [emailError, setEmailError] = useState(false);
  const initialValues = {
    firstname: "",
    lastname: "",
    specialization: "",
    phonenumber: "",
    email: "",
    password: "",
    cpassword: "",
    salary: "",
  };
  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required").min(6),
    cpassword: Yup.mixed()
      .test("match", "Passwords do not match", function (value) {
        return value === this.parent.password;
      })
      .required("Password confirm is required"),
    phonenumber: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
    salary: Yup.string().required("Required"),
  });

  function onSubmit(values) {
    const registred = {
      firstname: values.firstname,
      lastname: values.lastname,
      specialization: values.specialization,
      phonenumber: values.phonenumber,
      email: values.email,
      password: values.password,
      salary: values.salary,
    };

    setEmailError(!postTeacher(registred));
    console.log(emailError);
    if (!emailError) {
      window.location = "/admin/teacherlist";
    }
  }

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <div>
      <div id="layoutSidenav_content">
        <main>
          <div className="col-md-offset-3">
            <form id="msform" onSubmit={formik.handleSubmit}>
              <fieldset>
                <h2 className="fs-title">Add Teacher</h2>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div className="error">{formik.errors.firstname}</div>
                ) : null}
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div className="error">{formik.errors.lastname}</div>
                ) : null}
                <input
                  type="text"
                  name="specialization"
                  placeholder="Specialization"
                  value={formik.values.specialization}
                  onChange={formik.handleChange}
                />
                {formik.touched.specialization &&
                formik.errors.specialization ? (
                  <div className="error">{formik.errors.specialization}</div>
                ) : null}
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Phone"
                  value={formik.values.phonenumber}
                  onChange={formik.handleChange}
                />
                {formik.touched.phonenumber && formik.errors.phonenumber ? (
                  <div className="error">{formik.errors.phonenumber}</div>
                ) : null}
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
                {emailError ? <div className="error">E-mail used</div> : null}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  value={formik.values.cpassword}
                  onChange={formik.handleChange}
                />
                {formik.touched.cpassword && formik.errors.cpassword ? (
                  <div className="error">{formik.errors.cpassword}</div>
                ) : null}
                <input
                  type="text"
                  name="salary"
                  placeholder="Salary"
                  value={formik.values.salary}
                  onChange={formik.handleChange}
                />
                {formik.touched.salary && formik.errors.salary ? (
                  <div className="error">{formik.errors.salary}</div>
                ) : null}
                <input
                  type="submit"
                  name="submit"
                  className="submit action-button"
                  value="Add Teacher"
                />
              </fieldset>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddTeacher;
