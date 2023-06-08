import React from 'react';
import HeaderAvant from './HeaderAvant';
//import './js'
import HeaderAfter from './HeaderAfter';


var connected = localStorage.getItem('connected');
var head;
if(!connected){
  head = <HeaderAvant/>
}
else{
  head = <HeaderAfter/>
}


function HomePage() {
  return (
    <div>

        {head}



    </div>
  )
}

export default HomePage