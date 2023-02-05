import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Sidebar from './components/sidebar/Sidebar';
import Cards from './pages/Cards/Cards';
import Button from './pages/Button/Button';
import Color from './pages/Color/Color';
import Border from './pages/Border/Border';
import Animation from './pages/Animation/Animation';
import Other from './pages/Other/Other';
import Forget from './pages/Forget/Forget';
import Register from './pages/Register/Register';
import Errorpage from './pages/404/404';
import Blank from './pages/Blankpage/Blank';
import Charts from './pages/Charts/Charts';
import Tables from './pages/Tables/Tables';
import User from './pages/Blankpage copy/Blank';
import Edituser from "./pages/EditUser/Edituser.jsx"





function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/cards'element={<Cards/>}/>
      <Route path='/button'element={<Button/>}/>
      <Route path='/color'element={<Color/>}/>
      <Route path='/border'element={<Border/>}/>
      <Route path='/animation'element={<Animation/>}/>
      <Route path='/other'element={<Other/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/forgetpassword'element={<Forget/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/404'element={<Errorpage/>}/>
      <Route path='/blankpage'element={<Blank/>}/>
      <Route path='/adduser'element={<User/>}/>
      <Route path='/charts'element={<Charts/>}/>
      <Route path='/tables'element={<Tables/>}/>
      <Route path='/edituser'element={<Edituser/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
