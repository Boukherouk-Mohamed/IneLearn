import React, { useEffect } from 'react';
import '../css.css';
import Footer from './Footer';
//import './jsLogin';



function LoginPage() {
    useEffect(()=>{
        // Retrieve the input values from the form
        const nameInput = document.getElementById('nameInput');
        const passwordInput = document.getElementById('passwordInput');
        const submitButton = document.getElementById('submitButton');

        // Add a click event listener to the submit button
        submitButton.addEventListener('click', function(event) {
        //event.preventDefault(); // Prevent the form from submitting

        // Get the values from the input fields
        const name = nameInput.value;
        const password = passwordInput.value;

        // Store the values in local storage
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);
        localStorage.setItem('connected', true);

        // Optionally, display a success message or perform any other actions
        console.log('Input values stored in local storage');
});

    
    
    
    })
  return (
    <div>
    <section class="bodyLogin">
    <br /><br /><br /><br /><br /><br /><br /><br />
        <div class="loginBody">
            <div class="leftBodyLogin">
                <img src="loginImge.png" alt=""/>
            </div>
            <div class="rightBodyLogin">
                <div class="headRightBody">
                    <p style={{backgroundColor: 'rgba(73 , 187, 189, 0.6)', width: '33%', textAlign: 'center', height: '30px',
                         alignItems: 'center', display: 'flex', justifyContent: 'center',
                         borderRadius: '50px'}}>LOGIN</p>
                    <p> <a href="/Register">REGISTER</a> </p>
                </div>
                <p>Welcome again, please enter the informations to login :</p>
                <h4>User name</h4>
                <input type="text" name="userName" id="nameInput" placeholder="Enter your user name" />
                <h4>Password</h4>
                <input type="password" name="password" id="passwordInput" placeholder="Enter your password"/>
                <a href="/Register">Still don't have an account?</a>
                <a href="/"><button id='submitButton'>LOGIN</button></a> 


            </div>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default LoginPage
