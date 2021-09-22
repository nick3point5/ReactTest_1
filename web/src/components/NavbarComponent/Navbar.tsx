import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/pawprint-svgrepo-com.svg'

function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/users" className="homelink">
					<img src={logo} alt='Logo' className="logo-img" id="nav-logo" />
			</Link>
		</nav>
	)

}
export default Navbar
