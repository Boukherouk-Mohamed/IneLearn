import React from 'react'

function AccountPage() {
  return (
    <div>
      
    <div className="App">
      <div className="headerAvantConn">
        <div className="logo">
          <img src="logo.jpg" alt="" />
        </div>
        <div className="middleNav" id="middleNav">
          <a href="account home page.html">Home</a>
          <a href="#Courses">Courses</a>
          <a href="">Language</a>
          <a href="#Documentation">Documentation</a>
          <a href="#About_US">About Us</a>
        </div>
        <div className="btns">
          <img src="Profil.png" alt="" style={{ width: '50px', marginTop: '-0.4rem' }} height="50px" />
          <div className="showBtn" id="showBtn">
            <img src="bars.png" alt="" />
          </div>
        </div>
      </div>

      <div className="sideBar" id="sideBar">
        <button className="closeBtn" id="closeBtn">X</button>
        <a href="account home page.html">Home</a>
        <a href="#Courses">Courses</a>
        <a href="">Language</a>
        <a href="">Documentation</a>
        <a href="#About_US">About Us</a>
      </div>

      <br /><br />

      <div className="divHistorique">
        <h2>Welcome back, ready for your next lesson?</h2>
        <div className="historiqueLesson">
          <div className="coursHistorique">
            <img src="dataScience.png" alt="" />
            <h3>AWS certified Solutions Architect</h3>
            <div style={{ width: '80%', height: '8px', borderRadius: '20px', backgroundColor: 'white', backgroundColor: '#49BBBD' }}></div>
            <p>Lesson 5 of 7</p>
          </div>
          <div className="coursHistorique">
            <img src="devWeb.png" alt="" />
            <h3>AWS certified Solutions Architect</h3>
            <div style={{ width: '80%', height: '8px', borderRadius: '20px', backgroundColor: 'white', backgroundColor: '#49BBBD' }}></div>
            <p>Lesson 5 of 7</p>
          </div>
          <div className="coursHistorique">
            <img src="backEnd.png" alt="" />
            <h3>AWS certified Solutions Architect</h3>
            <div style={{ width: '80%', height: '8px', borderRadius: '20px', backgroundColor: 'white', backgroundColor: '#49BBBD' }}></div>
            <p>Lesson 5 of 7</p>
          </div>
        </div>
      </div>

      <br />

      <div className="FavCourse">
        <h2>Choice your favourite course from top category</h2>
        <div className="listeFavCourses">
          <a href="">
            <div className="courseFav">
              <img src="backEnd.png" alt="" />
              <h3>Back-end Systems</h3>
              <p>Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un résultat.</p>
            </div>
          </a>

          <a href="">
            <div className="courseFav">
              <img src="dataScience.png" alt="" />
              <h3>Data Science</h3>
              <p>Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un résultat.</p>
            </div>
          </a>

          <a href="">
            <div className="courseFav">
              <img src="devWeb.png" alt="" />
              <h3>Web Development</h3>
              <p>Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un résultat.</p>
            </div>
          </a>
        </div>
      </div>

      <br />

      <div className="mostViewd">
        <h2>Most viewed courses</h2>
        <div className="listeMostViewed">
          <div className="courseMostViewed">
            <img src="dataScience.png" alt="" />
            <h3>Data Science</h3>
            <p>Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un résultat.</p>
          </div>
          <div className="courseMostViewed">
            <img src="backEnd.png" alt="" />
            <h3>Back-end Systems</h3>
            <p>Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un résultat.</p>
          </div>
          <div className="courseMostViewed">
            <img src="devWeb.png" alt="" />
            <h3>Web Development</h3>
            <p>Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un résultat.</p>
          </div>
        </div>
      </div>

      <br />

      <div className="footer">
        <p>Company Name &copy; 2023. All rights reserved.</p>
        <a href="#About_US">About Us</a>
        <a href="">Terms</a>
        <a href="">Privacy</a>
        <a href="">Contact</a>
      </div>
    </div>




    </div>
  )
}

export default AccountPage


