import React from 'react';
import Footer from './Footer';

function HomePageAccount() {
  return (
    <div>
    <div className="divHistorique"><br/><br/><br/><br/><br/><br/><br/>
        <h2>Welcome back, ready for your next lesson?</h2>
        <div className="historiqueLesson">
          <a href="/GameDev">
            <div className="coursHistorique">
              <img src="dataScience.png" alt="" />
              <h3>AWS certified Solutions Architect </h3>
              <div
                style={{
                  width: '80%',
                  height: '8px',
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  backgroundColor: '#49BBBD',
                }}
              ></div>
              <p>Lesson 5 of 7</p>
            </div>
          </a>
          <a href="/GameDev">
            <div className="coursHistorique">
              <img src="devWeb.png" alt="" />
              <h3>AWS certified Solutions Architect </h3>
              <div
                style={{
                  width: '80%',
                  height: '8px',
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  backgroundColor: '#49BBBD',
                }}
              ></div>
              <p>Lesson 5 of 7</p>
            </div>
          </a>
          <a href="/GameDev">
            <div className="coursHistorique">
              <img src="backEnd.png" alt="" />
              <h3>AWS certified Solutions Architect </h3>
              <div
                style={{
                  width: '80%',
                  height: '8px',
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  backgroundColor: '#49BBBD',
                }}
              ></div>
              <p>Lesson 5 of 7</p>
            </div>
          </a>
          
        </div>
      </div>
      <br />
      <div className="FavCourse">
        <h2>Choice your favourite course from top category</h2>
        <div className="listeFavCourses">
          <a href="/GameDev">
            <div className="courseFav">
              <img src="backEnd.png" alt="" />
              <h3>Back-end Systems </h3>
              <p>
                Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un
                résultat.
              </p>
            </div>
          </a>
          <a href="/GameDev">
            <div className="courseFav">
              <img src="machineLearning.png" alt="" />
              <h3>Machine Learning </h3>
              <p>
                Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un
                résultat.
              </p>
            </div>
          </a>
          <a href="/GameDev">
            <div className="courseFav">
              <img src="dataScience.png" alt="" />
              <h3>Data science </h3>
              <p>
                Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un
                résultat.
              </p>
            </div>
          </a>
          <a href="/GameDev">
            <div className="courseFav">
              <img src="devWeb.png" alt="" />
              <h3>Dev WEB </h3>
              <p>
                Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un
                résultat.
              </p>
            </div>
          </a>
          <a href="/GameDev">
            <div className="courseFav">
              <img src="mobDev.png" alt="" />
              <h3>Dev Mobile </h3>
              <p>
                Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un
                résultat.
              </p>
            </div>
          </a>
          <a href="/GameDev">
            <div className="courseFav">
              <img src="mobileAps.png" alt="" />
              <h3>Deep web </h3>
              <p>
                Dorsal est un terme désignant un étage de sortie d'un logiciel devant produire un
                résultat.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="mostViewd">
        <div className="title">
          <h1>MOST VIEWD</h1>
        </div>
        <div className="coursesMostViewd">
        <a href="/GameDev">
          <div className="courseMostViewd">
              <img src="backEnd.png" alt="" className="picMostViewd" />
              <div className="histo">
                <p>Design</p>
                <p>3 Months</p>
              </div>
              <div className="titleCourse">
                <h2>DEV WEB</h2>
              </div>
              <br />
              <p>
                Le développement Web implique la conception, le codage et la maintenance de sites Web
                et d'applications.
              </p>
              <br />
              <div className="footerCourseMostViewd">
                <div className="footerCourseMostViewdLeft">
                  <img src="Profil.png" alt="" />
                  <h2>USERNAME</h2>
                </div>
                <div className="footerCourseMostViewdRight">
                  <p style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}>100$</p>
                  <p style={{ fontWeight: 'bold', color: '#49BBBD' }}>0$</p>
                </div>
              </div>
            </div>
        </a>
          <a href="/GameDev">
            <div className="courseMostViewd">
              <img src="machineLearning.png" alt="" className="picMostViewd" />
              <div className="histo">
                <p>Design</p>
                <p>3 Months</p>
              </div>
              <div className="titleCourse">
                <h2>MACHINE LEARNING</h2>
              </div>
              <br />
              <p>
                Le développement Web implique la conception, le codage et la maintenance de sites Web
                et d'applications.
              </p>
              <br />
              <div className="footerCourseMostViewd">
                <div className="footerCourseMostViewdLeft">
                  <img src="Profil.png" alt="" />
                  <h2>USERNAME</h2>
                </div>
                <div className="footerCourseMostViewdRight">
                  <p style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}>100$</p>
                  <p style={{ fontWeight: 'bold', color: '#49BBBD' }}>0$</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/GameDev">
            <div className="courseMostViewd">
              <img src="dataScience.png" alt="" className="picMostViewd" />
              <div className="histo">
                <p>Design</p>
                <p>3 Months</p>
              </div>
              <div className="titleCourse">
                <h2>DATA SCIENCE</h2>
              </div>
              <br />
              <p>
                Le développement Web implique la conception, le codage et la maintenance de sites Web
                et d'applications.
              </p>
              <br />
              <div className="footerCourseMostViewd">
                <div className="footerCourseMostViewdLeft">
                  <img src="Profil.png" alt="" />
                  <h2>USERNAME</h2>
                </div>
                <div className="footerCourseMostViewdRight">
                  <p style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}>100$</p>
                  <p style={{ fontWeight: 'bold', color: '#49BBBD' }}>0$</p>
                </div>
              </div>
            </div>
          </a>
          
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default HomePageAccount


