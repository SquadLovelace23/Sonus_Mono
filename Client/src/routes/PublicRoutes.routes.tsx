import { Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing/Landing"
import SignUp from "../pages/SignUp/SignUp"
import { FC } from "react"
import PrivateRoutes from "./PrivateRoutes.routes"
import Home from "../pages/Home/Home"
import Search from "../pages/Search/Search"
import Library from "../pages/Library/Library"
import Album from "../pages/Album/Album"
import Artist from "../pages/Artist/Artist"
import Genres from "../pages/Genres/Genres"
import Playlist from "../pages/Playlist/Playlist"
import Profile from "../pages/Profile/Profile"

const RoutesComponent:FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/*' element= {
        <PrivateRoutes>
          <Routes>
            <Route path='/home' element={<Home /> } />
            <Route path='/search' element={<Search />} />
            <Route path='/library' element={<Library />} />
            <Route path='/genres/:id' element={<Genres />} />
            <Route path='/artist/:id' element={<Artist />} />
            <Route path='/playlist/:id' element={<Playlist />} />
            <Route path='/album/:id' element={<Album />} />
            <Route path='/profile' element={<Profile /> } />
          </Routes>
        </PrivateRoutes>
      } />
    </Routes>  
  )
}

export default RoutesComponent