
 
var closeListBtn = document.getElementById('closeListBtn');
var showListCourses = document.getElementById('showListCourses');
var leftCoursespage = document.getElementById('leftCoursespage');



function handleResize() {
  if (window.innerWidth >= 799) {
    // Screen width is greater than or equal to 799px
    showListCourses.style.display = 'none';
    closeListBtn.style.display = 'none';
  }
  else if (window.innerWidth < 799) {
    // Screen width is greater than or equal to 799px
    showListCourses.style.display = 'grid';
  }
}

showListCourses.addEventListener('click', function() {
  leftCoursespage.classList.add('show');
  showListCourses.style.display = 'none';
  closeListBtn.style.display = 'block';
});

closeListBtn.addEventListener('click', function() {
  leftCoursespage.classList.remove('show');
  showListCourses.style.display = 'grid';
  closeListBtn.style.display = 'none';
});


// Add resize event listener
window.addEventListener('resize', handleResize);

// Check the initial screen width
handleResize();






 window.addEventListener('scroll', function() {
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





