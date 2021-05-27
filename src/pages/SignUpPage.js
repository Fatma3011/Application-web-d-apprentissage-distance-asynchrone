import React from "react";
import Signup from "../components/clientComponents/Signup";

function SignUpPage() {
  return (
    <div>
      <div class="card bg-dark text-white">
        <img src="./assets/img/sign-in.jpg" className="card-img" alt="Beauty" />
        <div class="card-img-overlay">
          <Signup />
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;