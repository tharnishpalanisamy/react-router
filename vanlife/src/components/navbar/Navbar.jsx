import Home from '../../pages/home/Home' 
import About from '../../pages/about/About'
import './Navbar.css' 
import { Link} from 'react-router-dom'

export default function Navbar(){
    return(
    <nav className="navbar">
        <div className="brand">
            <Link to='/' className="brand-text">#VANLIFE</Link>
        </div>
        <div className="navigations">
            <Link to='/about' className="nav-link">About</Link>
            <Link to='/vans' className="nav-link">Vans</Link>
        </div>
    </nav>
    )
}