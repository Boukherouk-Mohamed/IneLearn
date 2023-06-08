import React from 'react'
import Footer from './Footer'

function GameDev() {
  return (
    <div style={{backgroundColor:'#EDEDED'}}><br/><br/><br/><br/><br/><br/><br/>
    <div className="CourseContainer">
        <div className="title">
          <h1 style={{ backgroundColor: 'transparent' }}>Back-end systems</h1>
        </div>
        <br />
        <br />
        <div className="ListeCoursesCont">
          <a href="/Course1">
            <div className="IndividualCourse">
              <div className="picCourseIndiv">
                <img src="devWeb.png" alt="" />
              </div>
              <div className="InfosCoursIndiv">
                <h2>JavaScript</h2>
                <p>
                  Welcome to our Game Development course! During this course, we will learn how
                  to develop games on the web. We will start with the basics of HTML 5, CSS, and
                  JavaScript as well as demonstrate how to create real games on the web from
                  scratch!
                </p>
              </div>
            </div>
            <br />
          </a>
          <a href="/Course1">
            <div className="IndividualCourse">
              <div className="picCourseIndiv">
                <img src="cSharp.png" alt="" />
              </div>
              <div className="InfosCoursIndiv">
                <h2>Introduction to C#</h2>
                <p>
                  C# is used by many large organizations, start-ups and beginners alike. It takes
                  some of the useful features of C and adds syntax to save time and effort.
                  Although C# is based on C, you can learn it without any knowledge of C - in
                  fact, this course is perfect for those with no coding experience at all!
                </p>
              </div>
            </div>
            <br />
          </a>
          <a href="/Course1">
            <div className="IndividualCourse">
              <div className="picCourseIndiv">
                <img src="c++.png" alt="" />
              </div>
              <div className="InfosCoursIndiv">
                <h2>C++</h2>
                <p>
                  If you’re looking to deepen your C++ skills, this course is perfect for you.
                  Bite-sized, simple lessons mean you can learn at your own pace, whenever and
                  wherever you like.
                </p>
              </div>
            </div>
            <br />
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default GameDev

