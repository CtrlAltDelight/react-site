import { Helmet } from "react-helmet";

function Home() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Home</title>
				<link rel="canonical" href="/" />
			</Helmet>
			<div style={{backgroundImage: `url('night_city.png')`, height: '1500px'}}>
			<h1>Home page</h1>

			</div>
		</>
	);
}

export default Home;
