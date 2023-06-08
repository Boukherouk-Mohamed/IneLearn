
import './App.css';
import './css.css';



import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import HomeContenu from './pages/HomeContenu';
import LoginPage from './pages/LoginPage';
import RegiserPage from './pages/RegisterPage';
import Course2 from './pages/Course2';
import Course1 from './pages/Course1';
import Course3 from './pages/Course3';
import Course4 from './pages/Course4';
import Course5 from './pages/Course5';
import Course6 from './pages/Course6';
import Course7 from './pages/Course7';
import Course8 from './pages/Course8';
import Course9 from './pages/Course9';
import HomePageAccount from './pages/HomePageAccount'; 
import GameDev from './pages/GameDev';




function App() {
  return (
    <div className="">
      <BrowserRouter>
       <HomePage/>
       <Routes>
        <Route path='/' element={<HomeContenu/>}></Route>
        <Route path='/Login' element={<LoginPage/>}></Route>
        <Route path='/Register' element={<RegiserPage/>}></Route>
        <Route path='/Course1' element={<Course2/>}></Route>
        <Route path='/Course2' element={<Course1/>}></Route>
        <Route path='/Course3' element={<Course3/>}></Route>
        <Route path='/Course4' element={<Course4/>}></Route>
        <Route path='/Course5' element={<Course5/>}></Route>
        <Route path='/Course6' element={<Course6/>}></Route>
        <Route path='/Course7' element={<Course7/>}></Route>
        <Route path='/Course8' element={<Course8/>}></Route>
        <Route path='/Course9' element={<Course9/>}></Route>
        <Route path='/GameDev' element={<GameDev/>}></Route>
        <Route path='/HomePageAccount' element={<HomePageAccount/>}></Route>



       </Routes>
      </BrowserRouter>

      
   



   

      
    </div>
  );
}

export default App;
