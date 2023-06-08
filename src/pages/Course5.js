import React, { useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
//import './js';

function Course5() {
    useEffect(() => {
    const closeListBtn = document.getElementById('closeListBtn');
    const showListCourses = document.getElementById('showListCourses');
    const leftCoursespage = document.getElementById('leftCoursespage');

    function handleResize() {
      if (window.innerWidth >= 799) {
        showListCourses.style.display = 'none';
        closeListBtn.style.display = 'none';
      } else if (window.innerWidth < 799) {
        showListCourses.style.display = 'grid';
      }
    }

    showListCourses.addEventListener('click', function () {
      leftCoursespage.classList.add('show');
      showListCourses.style.display = 'none';
      closeListBtn.style.display = 'block';
    });

    closeListBtn.addEventListener('click', function () {
      leftCoursespage.classList.remove('show');
      showListCourses.style.display = 'grid';
      closeListBtn.style.display = 'none';
    });

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Check the initial screen width
    handleResize();

    window.addEventListener('scroll', function () {
      const leftDiv = document.getElementById('leftCoursespage');
      const footer = document.getElementById('footer');
      const windowHeight = window.innerHeight;
      const footerOffset = footer.offsetTop;

      if (window.pageYOffset + windowHeight > footerOffset) {
        leftDiv.classList.add('move-left');
      } else {
        leftDiv.classList.remove('move-left');
      }
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
     // window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div>
      
        

    <div className="middleCoursesPage">
      <div className="leftCoursespage" id="leftCoursespage">
         <h1 style={{textAlign: 'center', fontSize: '20px'}}>Javascript courses</h1>
            <Link to='/Course1'>JS Introduction</Link>
            <Link to='/Course2'>JS Where To</Link>
            <Link to="/Course3">JS Output</Link>
            <Link to="/Course4">JS Statements</Link>
            <Link to="/Course5" className='selectedPage' >JS Comments</Link>
            <Link to="/Course6">JS Variables</Link>
            <Link to="/Course7">JS Let - Const</Link>
            <Link to="/Course8">JS Operators</Link>
            <Link to="/Course9">JS Arithmetic</Link>
            <a href="">JS Data Types</a>
            <a href="">JS Functions</a>
            <a href="">JS Objects</a>
            <a href="">JS String</a>
            <a href="">JS String Methods</a>
            <a href="">JS Numbers</a>
            <a href="">JS Numbers Methods</a>
            <a href="">JS Arrays</a>
            <a href="">JS Arrays Methods</a>
            <a href="">JS Math</a>
            <a href="">JS Random</a>
            <a href="">JS Booleans</a>
            <a href="">JS If Else</a>
            <a href="">JS Switch</a>
            <a href="">JS Loop</a>
            <a href="">JS Break</a>
            <a href="">JS Sets</a>
            <a href="">JS Maps</a>
            <a href="">JS HTML DOM</a>
            <a href="">JS Browser BOM</a>
      </div>

      <div className="rightCoursesSide" id="rightCoursesSide">
        <div>
          <img
            src="bars.png"
            alt=""
            style={{ width: '50px' }}
            id="showListCourses"
            className="showListCourses"
          />
          <h3 id="closeListBtn" className="closeListBtn">
            X
          </h3>
        </div>

        <h1>JavaScript Syntax</h1>
        <br />
        <h4>The "script" Tag</h4>
        <p>The JavaScript syntax defines two types of values:.
        Fixed values are called Literalsand changes the e
        lVariable values are called Variables:</p>
        <div className="exemple">
          <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Exemple :</p>
          <div className="inputValue">
            document.getElementById("demo").innerHTML = "My First JavaScript";
            <br />
          </div>
        </div>
        <br />
        <br />

        <h4>JavaScript Variables</h4>
        <p>
        In a programming language, variables are used to store data values 
        JavaScript uses the keywords var, let and const to declare variables
          <br />
          An equal sign is used to assign values to variables
          In this example, x is defined as a variable. Then, x is assigned (given) the value 6
        </p>
        <div className="exemple">
          <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Exemple :</p>
          <div className="inputValue">
            document.getElementById("demo").style.fontSize = "35px";
          </div>
        </div>
        <br />
        <br />
        <h4>JavaScript Can Hide HTML Elements</h4>
        <p>
          Hiding HTML elements can be done by changing the display style:
        </p>
        <div className="exemple">
          <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Exemple :</p>
          <div className="inputValue">
            document.getElementById("demo").style.display = "none";
          </div>
        </div>
        <br />
        <br />
        <h4>JavaScript Can Show HTML Elements</h4>
        <p>
          Showing hidden HTML elements can also be done by changing the display
          style:
        </p>
        <div className="exemple">
          <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Exemple :</p>
          <div className="inputValue">
            document.getElementById("demo").style.display = "block";
          </div>
        </div>
        <br />
        <br />

        <div className="DidYouKnow">
          <h3>Did You Know?</h3>
          <p>
            JavaScript and Java are completely different languages, both in
            concept and design. JavaScript was invented by Brendan Eich in 1995
            and became an ECMA standard in 1997. ECMA-262 is the official name
            of the standard. ECMAScript is the official name of the language.
          </p>
        </div>
        <div className="btnsSuivantPrec">
          <button>&lt; Previous</button>
          <button>Next &gt;</button>
        </div>
      </div>
    </div>

    
    <Footer/>
    </div>
  )
}
export default Course5
