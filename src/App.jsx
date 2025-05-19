import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './components/LoginPage/loginpage'
import HomePage from './components/Homepage/homePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <LoginPage />}></Route>
          <Route path='/' element={ <HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
