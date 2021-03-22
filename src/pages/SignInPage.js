import React from "react";
import NavBar from "../components/studentComponents/NavBar";

import Signin from "../components/studentComponents/Signin";

function SignInPage() {
  return (
    <div>
      <div class="card bg-dark text-white">
        <img src="./assets/img/sign-in.jpg" class="card-img" alt="Beauty-picture" />

        <div class="card-img-overlay">
          <NavBar />
          <Signin />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
