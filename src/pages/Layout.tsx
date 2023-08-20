import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import NavLinks from '../components/NavBar.json'

function Layout() {
	return (
		<div id="outer-container">
			{/* hamburger menu button */}
			<Menu outerContainerId="outer-container" pageWrapId="page-wrap">

				{NavLinks.Links.map((link) => (
					<NavLink className="nav-link" to={link.route}>
						{link.name}
					</NavLink>
				))}
			</Menu>
			<main id="page-wrap">
			<NavBar showLinks />
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
