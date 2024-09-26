import { useState } from 'react'
import reactLogo from './assets/react.svg'
import About from './About';
import Login from './Login';
import Signup from './Signup'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function Header(){
  return(
    <div>
      <Link to="/">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  )
}
function App(){
  return(
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;