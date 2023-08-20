import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cattpuccin.css";
import "./Home.css";

function Gimble() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>CJ Home</title>
				<link rel="canonical" href="/" />
			</Helmet>
			<div id="image-backing" className="image-backing">
				<a href="/gimble">
					<img
						src="/gimblefavicon.png"
						style={{
							width: "45px",
							height: "45px",
							position: "absolute",
							top: "850px",
							left: "20px",
						}}
					/>
				</a>
				<div className="main-body cat-bg-dark cat-fg-secondary">
					<h1>404</h1>
					<img
						src="/gimblefavicon.png"
						style={{
						}}
					/>
					<p>NOT PUDDING</p>
				</div>
			</div>
		</>
	);
}

export default Gimble;
