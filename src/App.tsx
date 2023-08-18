import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Help from "./pages/Help";

function App() {
	// Set title of page
	useEffect(() => {
		document.title = "Home";
	}, []);

	return (
		<Router>
			<div className="dark-theme">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="help" element={<Help />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</div>
		</Router>
	);
	// Self closing syntax: <Message />
}

export default App;
