
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
