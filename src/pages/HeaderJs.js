
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
