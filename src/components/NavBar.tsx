import { NavLink } from "react-router-dom";
import "./NavBar.css";
import NavLinks from "./NavBar.json";
import "../pages/cattpuccin.css";

interface Props {
	showLinks?: boolean;
	logoImg?: string | null;
}

function NavBar({ showLinks, logoImg = null }: Props) {
/* resizing using state (now using css)
	const [isScreenSmall, setIsScreenSmall] = useState(false);
	useEffect(() => {
		// define resize handler
		const handleResize = () => {
			console.log(window.innerWidth);
			setIsScreenSmall(window.innerWidth <= 768);
		};

		// Call once to set the correct state on mount
		handleResize();

		// Attach the resize handler
		window.addEventListener("resize", handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
*/
	//const [isDropdownOpen, setDropdownOpen] = useState(false);
	// set position: "sticky" on the nav tag if you want it to follow you down the page
	return ( 
	
		<nav
			className="navbar cat-bg-primary navbar-expand-lg"
			style={{ top: 0, height: "5rem" }}
			data-bs-theme="dark"
		>
			<div className="container-fluid">
				{logoImg != null && (
					<NavLink className="navbar-brand" to="/">
						<img src={logoImg} width="50" height="50" />
					</NavLink>
				)}
				<div className="" id="navbarSupportedContent">
					{showLinks && (
						<ul className="navbar-nav">
							{NavLinks.Links.map((link, index) => (
								<li className="navLink nav-item" key={index}>
									<NavLink className="nav-link" to={link.route}>
										{link.name}
									</NavLink>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
}

{
	/* Code for dropdown links
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
						</li>*/
}

export default NavBar;
