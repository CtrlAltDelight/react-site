import { Helmet } from "react-helmet";

function About() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>about</title>
				<link rel="canonical" href="/about" />
			</Helmet>
			<h1>About page</h1>
		</>
	);
}

export default About;
