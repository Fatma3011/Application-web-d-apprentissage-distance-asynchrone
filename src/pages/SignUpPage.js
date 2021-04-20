import React from 'react'
import Signup from '../components/studentComponents/Signup';

function SignUpPage() {
    return (
        <div>
      <div>
        <div class="card bg-dark text-white">
          <img
            src="./assets/img/sign-in.jpg"
            class="card-img"
            alt="Beauty-picture"
          />
          <div class="card-img-overlay">
            <Signup/>
          </div>
        </div>
      </div>
    </div>
    )
}

export default SignUpPage
