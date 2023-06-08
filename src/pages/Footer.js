import React from 'react';

function Footer() {
  return (
    <div><br />
    
        <div className="Footer" id="footer">
          <br />
          <div style={{ backgroundColor: 'transparent', marginTop: '10vh' }}>
            <h1 style={{ backgroundColor: 'transparent', color: 'white', marginLeft: '8%' }}>CONTACT US</h1>
          </div>
          <div className="contactusLine">
            <div className="reseau">
              <img src="fb.png" alt="" />
              <p>Check out our Fecebook</p>
            </div>
            <div className="reseau">
              <img src="Instagram.png" alt="" />
              <p>Join our Instagram</p>
            </div>
            <div className="reseau">
              <img src="Twitter.png" alt="" />
              <p>See what we tweet about</p>
            </div>
            <div className="reseau">
              <img src="LinkedIn2.png" alt="" />
              <p>Follow us on LinkedIn</p>
            </div>
          </div>
          <div className="infosFooter">
            <div className="aboutUsInfos">
              <h1>ABOUT US</h1>
              <p>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page Ipsum est simplement du faux texte employé dans la composition et la mise.Lorem Ipsum est simplement du faux texte employé dans la composition composition et la mise. et la mise en page Ipsum est simplement du faux texte employé dans la Lorem </p>
            </div>
            <div className="aboutUsInfos">
              <h1>COURSES</h1>
              <a href="">Web Dev</a>
              <a href="">Mobile Apps</a>
              <a href="">Backend Systems</a>
              <a href="">Data Science</a>
              <a href="">Machine Learning</a>
              <a href="">Game dev</a>
            </div>
            <div className="aboutUsInfos">
              <h1>COURSES</h1>
              <a href="">HTML</a>
              <a href="">CSS</a>
              <a href="">Javascript</a>
              <a href="">React</a>
              <a href="">Angular</a>
              <a href="">Node js</a>
            </div>
            <div className="aboutUsInfos">
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

export default Footer;
