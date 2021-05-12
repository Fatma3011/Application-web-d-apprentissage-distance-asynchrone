// import { useFormik, validateYupSchema } from "formik";
// import React from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { updateProfile } from "../../services/admin.service";
// import * as Yup from "yup";

// function EditEmail() {
//   const { id, ch } = useParams();
//   const history = useHistory();
//   const redirectToAdd = () => {
//     history.push("/admin/profile");
//   };
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     previousEmail: "",
//     email: "",
//     npass: "",
//       cpass:""
//   };
//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email format").required("Required"),

//   });
//   function onSubmit(values) {

//     const registred = {
      
//       email: values.email,
     
     
//     }

//     updateProfile(registred, id , ch)
//       .then(() => {
//         window.location = "/admin/profile";
//       })
//       .catch(() => {console.log("errr")});
//   }

//   const formik = useFormik({ initialValues, onSubmit ,validationSchema});

//   return (
//       <div id="layoutSidenav_content">
//         <main>
//           <div className="col-md-offset-3 ">
//             <form id="msform" onSubmit={formik.handleSubmit}>
//               <fieldset>
//                 <h2 className="fs-title">Edit {ch}</h2>
//                 <br />
//                 <br />
                
//                     <input
//                       type="mail"
//                       name="previousEmail"
//                       placeholder="Previous Email"
//                       value={formik.values.previousEmail}
//                       onChange={formik.handleChange}
//                     />
                    
//                     <input
//                       type="text"
//                       name="email"
//                       placeholder="Email"
//                       value={formik.values.email}
//                       onChange={formik.handleChange}
//                     />
                    
                
          
                
//                 <input
//                   type="submit"
//                   name="submit"
//                   className="submit action-button"
//                   value="SAVE"
//                 />
//                 <br />
//                 {/* <a href="/admin/editpassword">Edit Password</a> */}
//               </fieldset>
//               <h3>
//                 <a href="" onClick={redirectToAdd}>
//                   <i className="fas fa-arrow-circle-left"></i>
//                 </a>
//               </h3>
//             </form>
//           </div>
//         </main>
//       </div>
//   );
// }

// export default EditEmail;
