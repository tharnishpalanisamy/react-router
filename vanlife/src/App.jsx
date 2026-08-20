// import Navbar from './components/navbar/Navbar' 
import Home from './pages/home/Home' 
import About from './pages/about/About'
import Vans from './pages/vans/Vans'
import {Routes , Route } from 'react-router-dom'
import VanDetails from './pages/vanDetails/VanDetails'

export default function App(){
  return(
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/vans' element={<Vans/>}/> 
          <Route path='/vans/:id' element={<VanDetails/>}/> 


      </Routes>
    </>
  )
}