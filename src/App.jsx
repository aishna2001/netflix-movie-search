import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'



const App = () => {
  return (
    <Routes>
      < Route path="/" element={<Home />} />
      < Route path="/favorites" element={<Favorites />} />
      < Route path="/movie/:id" element={<MovieDetails />} />
      < Route path="*" element={<NotFound />} />

    </Routes>
  )
}

export default App

