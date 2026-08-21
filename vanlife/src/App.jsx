// import Navbar from './components/navbar/Navbar' 
import Home from './pages/home/Home' 
import About from './pages/about/About'
import Vans from './pages/vans/Vans' 
import Layout from './components/layout/Layout'
import {Routes , Route } from 'react-router-dom'
import VanDetails from './pages/vanDetails/VanDetails'
import Host from './pages/host/Host' 
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews' 
import HostLayout from './components/hostlayout/HostLayout'

export default function App(){
  return(
    <>
      <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='vans' element={<Vans/>}/> 
            <Route path='vans/:id' element={<VanDetails/>}/> 


            <Route path='/host' element={<HostLayout/>}>   
              <Route index element={<Host/>} /> 
              <Route path='income' element={<Income/>} /> 
              <Route path='reviews' element={<Reviews/>} />           
            </Route>
          </Route> 
          
      </Routes>
    </>
  )
}