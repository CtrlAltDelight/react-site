import { Helmet } from "react-helmet";
function NoPage() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>404</title>
				<link rel="canonical" href="/404" />
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
					<img src="/snail_animated.gif" style={{}} />
					<p>NOT PUDDING</p>
					<p>Email lc@ctrlaltdelight.org for more sites like this.</p>
				</div>
			</div>
		</>
	);
}

export default NoPage;
