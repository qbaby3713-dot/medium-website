import React from 'react'
import Navbar from './Components/Navbar'
import UserAuthform from './pages/UserAuthform'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path='/signin' element={<UserAuthform type={'sign-in'} />}>  </Route>
        <Route path='/signup' element={<UserAuthform type={'sign-up'} />}>  </Route>
      </Route>
    </Routes>
  )
}

export default App
