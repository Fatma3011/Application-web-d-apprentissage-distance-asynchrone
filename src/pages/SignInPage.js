import React from 'react'
import Signin from '../components/studentComponents/Signin'

function SignInPage() {
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
            <Signin/>
          </div>
        </div>
      </div>
    </div>
    )
}

export default SignInPage

