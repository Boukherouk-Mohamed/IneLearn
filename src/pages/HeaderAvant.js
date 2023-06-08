import React, { useEffect } from 'react';
import '../css.css';
//import './HeaderJs'
import { Link } from 'react-router-dom';


function HeaderAvant() {
  useEffect(()=>{
    var middleNav = document.getElementById('middleNav');
    var sidebar = document.getElementById('sidebar');
    var closeBtn = document.getElementById('closeBtn');


    var showBtn = document.getElementById('showBtn');
    var sideBar = document.getElementById('sideBar');
    showBtn.addEventListener('click' , function(){
      sideBar.style.display = 'block'
    });

    closeBtn.addEventListener('click' , function(){
        sideBar.style.display = 'none'
    });
      
  
  
  })

  return (
    <div>
      <div>
        <div className="headerAvantConn">
          <div className="logo">
          <a href="/"><img src="./logo.jpg" alt="" /></a>
            
          </div>
          <div className="middleNav" id="middleNav">
            <a href="/">Home</a>
            <a href="/#Courses">Courses</a>
            <a href="">Language    v</a>
            <a href="">Documentation</a>
            <a href="/#AboutUs">About Us</a>
          </div>
          <div className="btns">
            <a href="/Login"><button>Login</button></a>  
            <a href="/Register"><button>Register</button></a> 
            <div className="showBtn" id="showBtn">
              <img src="bars.png" alt="" />
            </div>
          </div>
        </div>
        <div className="sideBar" id="sideBar">
          <button className="closeBtn" id="closeBtn">X</button>

          <Link to="/">Home</Link>
          <Link to="/#Courses">Courses</Link>
          <Link to="">Language</Link>
          <Link to="">Documentation</Link>
          <Link to="/#AboutUs">About Us</Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderAvant;
