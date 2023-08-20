import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Help from "./pages/Help";
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/cattpuccin.css';

function App() {
	// Set title of page
	useEffect(() => {
		document.title = "Home";
	}, []);

	return (
	<>
		<Helmet>
				<link rel="icon" type="image/png" href="gimblefavicon.png" />
		</Helmet>
		<Router>
			<div className="dark-theme">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="cv" element={<About />} />
						<Route path="help" element={<Help />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</div>
		</Router>
		</>
	);
	// Self closing syntax: <Message />
}

export default App;
