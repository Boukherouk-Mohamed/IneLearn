import React, { useEffect } from 'react';
import '../css.css';
import { Link } from 'react-router-dom';

function HeaderAfter() {
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
        <div class="headerAvantConn">
            <div class="logo">
            <a href="/"><img src="./logo.jpg" alt=""/></a> 
        </div>
        <div class="middleNav" id="middleNav">
            <a href="/">Home</a>
            <a href="/#Courses">Courses</a>
            <a href="">Language v</a>
            <a href="">Documentation</a>
            <a href="/#AboutUs">About Us</a>
        </div>
        <div class="btns">
            <img src="Profil.png" alt="" style={{ width: '50px', marginTop: '-0.4rem' }} height="50px" />
            <div class="showBtn" id="showBtn">
                <img src="bars.png" alt="" />
            </div>
            
        </div>
        </div>
        <div class="sideBar" id="sideBar">
            <button class="closeBtn" id="closeBtn">X</button>

            <Link to="/">Home</Link>
          <Link to="/#Courses">Courses</Link>
          <Link to="">Language</Link>
          <Link to="">Documentation</Link>
          <Link to="/#AboutUs">About Us</Link>
        </div>
    </div>
      
    </div>
  )
}

export default HeaderAfter
