import { NavLink } from 'react-router-dom';
import './Navigation.css';


// Import views
import Home from '../views/Home.js';
import About from '../views/About.js';
import Users from '../views/Users.js';



function Navigation() {
    return (
        <nav>
            <NavLink to="/" element={<Home />}>Home</NavLink>
            <NavLink to="/about" element={<About />}>About</NavLink>
            <NavLink to="/users" element={<Users />}>Users</NavLink>
        </nav>
    );
}


export default Navigation;