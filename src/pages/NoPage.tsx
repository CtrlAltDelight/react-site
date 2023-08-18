import { Helmet } from "react-helmet";
function NoPage() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>404</title>
				<link rel="canonical" href="/404" />
			</Helmet>
			<h1>
				404
				<br />
				Page not found
			</h1>
		</>
	);
}

export default NoPage;
