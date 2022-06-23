import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../../logo.svg';


// Import views
import Home from '../../views/Home.jsx';
import About from '../../views/About.jsx';
import Users from '../../views/Users.jsx';



function Navigation() {
	return (
		<nav>
			<Link to="/" className="Logo-link"><img className="App-logo" src={logo} alt="React logo spinner" /></Link>
			<NavLink to="/" element={<Home />}>Home</NavLink>
			<NavLink to="/about" element={<About />}>About</NavLink>
			<NavLink to="/users" element={<Users />}>Users</NavLink>
		</nav>
	);
}


export default Navigation;