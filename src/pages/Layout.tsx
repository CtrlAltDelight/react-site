import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { elastic as Menu } from 'react-burger-menu';
import { NavLink } from "react-router-dom";

function Layout() {
	return (
		<>
			<NavBar />
			<div id="outer-container">
				{/* hamburger menu button TODO make it use NavBar.json */}
				<Menu right outerContainerId="outer-container" pageWrapId="page-wrap">
					<NavLink className="nav-link" to="/">
						home
					</NavLink>
				</Menu>
				<main id="page-wrap">
					<Outlet />
				</main>
			</div>
		</>
	);
}

export default Layout;
