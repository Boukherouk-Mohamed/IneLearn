import React, { useEffect } from 'react';
import '../css.css';
import Footer from './Footer';


function RegisterPage() {
    useEffect(()=>{
        // Retrieve the input values from the form
        const nameInputRegister = document.getElementById('nameInputRegister');
        const passwordInputRegister = document.getElementById('passwordInputRegister');
        const emailInputregister = document.getElementById('emailInputregister');
        const submitButton = document.getElementById('submitButtonRegister');

        // Add a click event listener to the submit button
        submitButton.addEventListener('click', function(event) {
        //event.preventDefault(); // Prevent the form from submitting

        // Get the values from the input fields
        const name = nameInputRegister.value;
        const password = passwordInputRegister.value;
        const email = emailInputregister.value;

        // Store the values in local storage
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);
        localStorage.setItem('email',email);
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
                    <p>LOGIN</p>
                    <p  style={{backgroundColor: 'rgba(73 , 187, 189, 0.6)', width: '33%', textAlign: 'center', 
                        height: '30px', alignItems: 'center', display: 'flex',
                         justifyContent: 'center', borderRadius: '50px'}}> REGISTER </p>
                </div>
                <p>Welcome again, please enter the informations to login :</p>
                <h4>Email</h4>
                <input type="email" name="mail" id="emailInputregister" placeholder="Enter your user mail" />
                
                <h4>User name</h4>
                <input type="text" name="userName" id="nameInputRegister" placeholder="Enter your user name" />
                <h4>Password</h4>
                <input type="password" name="password" id="passwordInputRegister" placeholder="Enter your password" />
                <a href="/Login">Already have an account?</a>
                 <a href="/"><button id='submitButtonRegister'>REGISTER</button></a> 


            </div>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default RegisterPage
