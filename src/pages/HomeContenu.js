import React from 'react';
import '../css.css';

function HomeContenu() {
  return (
    <div style={{backgroundColor:'#EDEDED'}}>
    <br/><br/><br/><br/><br/><br/><br/><br/>
       
        <div class="homePart1">
            <div class="leftPartHome">
                <h1>Welcome to IneLearn</h1>
                <h3>Your world - at all levels</h3>
                <a href="/HomePageAccount"><button>Start Now</button></a> 
            </div>
            <div class="rightPartHome">
                <img src="./bd.png" alt="IneLearn"/>
            </div>
        </div><br/><br/>
        <div class="trust">
            <h1>Trusted by over <span style={{color: '#FF4B4B'}} >10,000</span>  Companies  </h1>
        </div>
        <br/><br/>
        <div class="pannelSocialMedia">
            <img src="./faceb.png" alt=""/>
            <img src="./google.png" alt=""/>
            <img src="./amazon.png" alt=""/>
            <img src="./mic.png" alt=""/>
            <img src="./linkedin.png" alt=""/>
        </div>

        <div class="Courses" id='Courses'>
        <div class="title">
            <h1>Courses</h1>
            <hr/>
        </div><br/>
        <div class="CoursesContainer">
        <a href="/GameDev">
            <div class="course"  style={{marginTop:"1rem"}}> 
                <img src="./backEnd.png" alt=""/>
                <h2 >Back-End Systems</h2>
                <p>Dorsal est un terme
                     désignant un étage de sortie d'un logiciel 
                     devant produire un résultat.
                </p>
                <div class="buttomCourse">
                    <div style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }} >
                        <img src="./pt.png" alt=""/>
                        <p>25 Lessons</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }} >
                        <img src="./pt2.png" alt=""/>
                        <p>20 hr 35 min</p>
                    </div>
                </div> 

            </div>
            </a>
            <a href="/GameDev">
            <div class="course"  style={{marginTop:"1rem"}}> 
                <img src="./mobileAps.png" alt=""/>
                <h2 >Mobile  Apps</h2>
                <p>Le dév mobile est le processus de création d'applications 
                    logicielles spécifiquement conçues 
                </p>
                <div class="buttomCourse">
                    <div  style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }} >
                        <img src="./pt.png" alt=""/>
                        <p>25 Lessons</p>
                    </div>
                    <div  style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }} >
                        <img src="./pt2.png" alt=""/>
                        <p>20 hr 35 min</p>
                    </div>
                </div> 

            </div></a>
            <a href="/GameDev">
            
            <div class="course"  style={{marginTop:"1rem"}}> 
                <img src="./machineLearning.png" alt=""/>
                <h2 >Machine Learning</h2>
                <p>Le Machine Learning est quelque chose de nouveau 
                    sous le soleil : une technologie qui se construit elle-même.
                </p>
                <div class="buttomCourse">
                    <div  style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }} >
                        <img src="./pt.png" alt=""/>
                        <p>25 Lessons</p>
                    </div>
                    <div  style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }}>
                        <img src="./pt2.png" alt=""/>
                        <p>20 hr 35 min</p>
                    </div>
                </div> 

            </div></a>
            <a href="/GameDev">
            
            <div class="course" style={{marginTop:'3rem'}}> 
                <img src="./mobDev.png" alt=""/>
                <h2 >Game Development</h2>
                <p>Le développement de jeux nécessite une combinaison unique de créativité,
                     de compétences techniques et d'attention aux détails
                </p>
                <div class="buttomCourse">
                    <div style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }} >
                        <img src="./pt.png" alt=""/>
                        <p>25 Lessons</p>
                    </div>
                    <div  style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }} >
                        <img src="./pt2.png" alt=""/>
                        <p>20 hr 35 min</p>
                    </div>
                </div> 

            </div></a>
            <a href="/GameDev">
            
            <div class="course" style={{marginTop:'3rem'}}> 
                <img src="./dataScience.png" alt=""/>
                <h2 >Data Science</h2>
                <p>La science des données est un domaine
                     multidisciplinaire qui combine des techniques d'analyse statistique,
                     d'apprentissage automatique .
                </p>
                <div class="buttomCourse">
                    <div  style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }}>
                        <img src="./pt.png" alt=""/>
                        <p>25 Lessons</p>
                    </div>
                    <div  style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }} >
                        <img src="./pt2.png" alt=""/>
                        <p>20 hr 35 min</p>
                    </div>
                </div> 

            </div>
            </a>
            <a href="/GameDev">
            <div class="course" style={{marginTop:'3rem'}}> 
                <img src="./devWeb.png" alt=""/>
                <h2 >Dev Web</h2>
                <p style={{fontSize: '15px' }}>Le développement Web implique la conception, le codage et
                     la maintenance de sites Web et d'applications Web, à l'aide d'une 
                    variété de langages .
                </p>
                <div class="buttomCourse">
                    <div style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }} >
                        <img src="./pt.png" alt=""/>
                        <p>25 Lessons</p>
                    </div>
                    <div  style={{display: 'flex', alignItems: 'center',    backgroundColor: '#D9D9D9' }} >
                        <img src="./pt2.png" alt=""/>
                        <p>20 hr 35 min</p>
                    </div>
                </div> 

            </div>
            </a>
        </div>
    </div>

    <div className="numberCourses">
            <div style={{backgroundColor: 'transparent'}}>
                <p style={{backgroundColor: 'transparent'}}> +20 000</p><br/>
                <p style={{backgroundColor: 'transparent'}}>Learners</p>
            </div>
            <div style={{backgroundColor: 'transparent'}}>
                <p style={{backgroundColor: 'transparent'}}> +200</p><br/>
                <p style={{backgroundColor: 'transparent'}}>Courses</p>
            </div>
            <div style={{backgroundColor: 'transparent'}}>
                <p style={{backgroundColor: 'transparent'}}> +100</p><br/>
                <p style={{backgroundColor: 'transparent'}}>Countries</p>
            </div>

        </div>
        <br/><br/><br/><br/><br/>
        
        <div className="classe">
        
            <div className="leftSideClasse">
                <h2>Everything you can do in a physical classroom, 
                    <span style={{color: '#00CBB8'}}>you can do it with IneRread</span> </h2> <br/>
                    <p>Lorem Ipsum est simplement du faux texte employé dans la composition
                         et la mise en page avant impression. Le Lorem Ipsum est
                         le faux texte standard de l'imprimerie depuis les années 1500.
                    </p><br/>
                    <a href="#">Learn more</a>
            </div>
            <div className="rightSideClasse">
                <img src="./classe.png" alt=""/>
            </div>
        </div>

        
<br/><br/>

<div class="aboutUs" id='AboutUs'>
            <div class="leftSideAboutUS">
                <img src="./abtUs.png" alt=""  style={{backgroundColor: 'transparent'}}/>
            </div>
            <div class="rightSideAboutUS">
                <p style={{backgroundColor: 'transparent', fontSize: '24px', fontWeight: 'bold'}}> <span style={{backgroundColor: 'transparent',color: '#00CBB8'}} >IneLearn</span>  est une platforme en ligne :  </p> <br/>
                <p style={{backgroundColor: 'transparent'}}>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum
                     est le faux texte standard de l'imprimerie depuis les années 1500.</p>
            </div>
        </div>

        <div className="Testimonials">
            <div class="titleTestimonials">
                <h1>Testimonials</h1>
                <hr/>
            </div><br/>
            <div class="containerTestimonials">
                <div class="leftSideTestimonials">
                <p class="whatTheysay" style={{color: '#2F327D',  fontSize: '40px'}}>What they say</p>
                <p style={{width: '60%'}}>IneLearn has got more than 100k positive 
                    ratings from our users around the world. </p><br/>
                    <p>Many of the student were greatly helped</p><br/>
                    <p>Are you too? Please give your assessment </p><br/>
                    <button>Write your assessment</button>
            </div>
            <div class="rightSideTestimonials">
                <img src="./testimonial.png" alt=""/>
            </div>
            </div>
            
        </div>

        <div class="Footer"><br/>
            <div style={{backgroundColor: 'transparent', marginTop: '10vh'}}>
                <h1 style={{backgroundColor: 'transparent', color: 'white', marginLeft: '8%'}}>CONTACT US</h1>
            </div>
            
            <div class="contactusLine">
                <div class="reseau">
                    <img src="./fb.png" alt=""/>
                    <p>Check out our Fecebook</p>
                </div>
                <div class="reseau">
                    <img src="./Instagram.png" alt=""/>
                    <p>Join our Instagram</p>
                </div>
                <div class="reseau">
                    <img src="./Twitter.png" alt=""/>
                    <p>See what we tweet about</p>
                </div>
                <div class="reseau">
                    <img src="./LinkedIn2.png" alt=""/>
                    <p>Follow us on LinkedIn</p>
                </div>
            </div>
            <div class="infosFooter">
                <div class="aboutUsInfos">
                    <h1>ABOUT US</h1>
                    <p>Lorem Ipsum est simplement du faux texte employé dans la composition
                         et la mise en page Ipsum est simplement du faux texte employé dans la 
                         composition et la mise.Lorem Ipsum est simplement du faux texte 
                         employé dans la composition  composition et la mise.
                        et la mise en page Ipsum est simplement du faux texte employé dans la
                        Lorem </p>
                </div>
                <div class="aboutUsInfos">
                    <h1>COURSES</h1>
                    <a href="">Web Dev</a>
                    <a href="">Mobile Apps</a>
                    <a href="">Backend Systems</a>
                    <a href="">Data Science</a>
                    <a href="">Machine Learning</a>
                    <a href="">Game dev</a>
                </div>
                <div class="aboutUsInfos">
                    <h1>COURSES</h1>
                    <a href="">HTML</a>
                    <a href="">CSS </a>
                    <a href=""> Javascript</a>
                    <a href=""> React</a>
                    <a href=""> Angular</a>
                    <a href=""> Node js</a>
                </div>
                <div class="aboutUsInfos">
                    <h1>LEGAL</h1>
                    <a href="">Find Developpers</a>
                    <a href="">Team</a>
                    <a href="">Terrms Of Use</a>
                    <a href="">User privacy Notice</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeContenu
