import { Helmet } from "react-helmet";

function About() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>CV</title>
				<link rel="canonical" href="/cv" />
			</Helmet>
			<div id="image-backing" className="image-backing">
				<a href="/gimble"><img
					src="/gimblefavicon.png"
					style={{ width: "45px", height: "45px", position: 'absolute', top: '850px', left: '20px'}}
					/>
				</a>
				<div className="main-body cat-bg-dark cat-fg-secondary">
					<div style={{ display: "flex", margin: " 0px 5rem 1.5rem 5rem" }}>
						<img
							src="/headshot.jpg"
							style={{ width: "100%", minWidth: '300px', maxHeight: '500px', objectFit: "cover" }}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
