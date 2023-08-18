//import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import NavLinks from './NavBar.json'

function NavBar() {
	//const [isDropdownOpen, setDropdownOpen] = useState(false);
	return (
		<nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					<img src="night_city.png" width="50" height="50" />
				</NavLink>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						{NavLinks.Links.map((link, index) => (
						<li className="nav-item" key={index}>
							<NavLink className="nav-link" to={link.route}>
								{link.name}
							</NavLink>
						</li>
						))}
						{/*
						<li
							className="nav-item"
							onMouseEnter={(e) => {
								e.preventDefault();
								setDropdownOpen(true);
							}}
							onMouseLeave={(e) => {
								e.preventDefault();
								setDropdownOpen(false);
							}}
						>
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								dropdown
							</a>
							<div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
								<NavLink
									onClick={() => {
										setDropdownOpen(false);
									}}
									className="dropdown-item"
									to="/help"
								>
									help
								</NavLink>
							</div>
						</li>*/}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
