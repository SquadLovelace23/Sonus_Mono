import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Home from '../pages/Home/Home'


type Props = {}

const PublicRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
    </Routes>

  )
}

export default PublicRoutes