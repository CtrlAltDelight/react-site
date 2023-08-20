import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cattpuccin.css";
import "./Home.css";

function Home() {
	/*let awards = [
		"Finalist, Golden Script Fellowship 2023 (pending announcement)",
		"Coverfly #3 Overall Comedy ",
		" Top 10, Humanitas New Voices Fellowship 2023 ",
		" Finalist, Screencraft Comedy Competition 2023 ",
		" Semifinalist, Screencraft Screenwriting Fellowship 2023 ",
		" Semifinalist, WeScreenplay Diverse Voices Lab Fall 2023 ",
		" Semi-Finalist, Indie Horror Film Fest 2023 ",
		" Runner-Up, Midwest Weirdfest 2023",
	];*/

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>CJ Home</title>
				<link rel="canonical" href="/" />
			</Helmet>
			<div id="image-backing" className="image-backing">
				<a href="/gimble"><img
					src="/gimblefavicon.png"
					style={{ width: "45px", height: "45px", position: 'absolute', top: '850px', left: '20px'}}
				/></a>
				<div className="main-body cat-bg-dark cat-fg-secondary">
					<div style={{ display: "flex", margin: " 0px 5rem 1.5rem 5rem" }}>
						<img
							src="/headshot.jpg"
							style={{ width: "100%", minWidth: '300px', maxHeight: '500px', objectFit: "cover" }}
						/>
						<p style={{ margin: "15px" }}>
							<h1>Bio</h1>
							Callie J. Waligora is an award-winning screenwriter, and she also
							has hobbies that she is far less recognized for. She was raised
							throughout the Midwest before making the cross-country drive to
							Southern California, where she now resides and is… mostly loving
							it. C.J. is transgender, a woman, and a huge nerd (I’m talking
							math and science, although she likes her fair share of video
							games,) and all of these influence her writing with roughly equal
							weight. Her proudest (and loudest) television pilot, "She’s The
							Man", has placed in Humanitas’ Top 10 for their New Voices
							program, is a Screencraft Comedy finalist, and is the #2 Half-Hour
							Pilot on Coverfly, as well as the #3 Comedy project. Callie is not
							currently repped/staffed. Call now and get 10% off your order.
							Fill your quota today!
						</p>
					</div>
					<br/>
					<br/>
					<h1>Project Info</h1>
					<p>
						<strong>She's The Man</strong> - Half-hour comedy series -
						Serialized
						<br />
						Too afraid to leave the closet, a trans-male teenager lies about his
						feelings, engages in cathartic debauchery, and even sabotages his
						own transition as he fights to stop his coming-of-age story in its
						tracks.
						<br />
						<br />
						<strong>Bee O’Leary</strong> - Half-hour animated comedy series -
						Episodic
						<br />
						Aro-ace vagabond Bee O’Leary is on a quest for one, true, platonic
						friend. However, their devil-may-care attitude is both a blessing
						and a curse as it both allows them to explore secret/elite
						societies, but also ensure that everybody they meet falls madly in
						love with them.
						<br />
						<br />
						<strong>Heel Turn</strong> - Feature-length dark rom-com
						<br />
						A tumultuous friend group, mourning the death of a beloved friend,
						descends into chaos when a seemingly innocent crush spirals into a
						hurricane of sex, amateur blackmail, and a professional wrestler
						named Crazypussy.
						<br />
						<br />
						<strong>Red Rectangle</strong> - Short drama/sci-fi film
						<br />
						When a woman partaking in a clinical study on memory experiences
						traumatic side-effects, she must decide whether the pain of facing
						her past is worth the potential reward.
						<br />
						<br />
						<br />
						<br />
					</p>
					<h1>Awards</h1>
					Finalist, Golden Script Fellowship 2023 (pending announcement) |
					Coverfly #3 Overall Comedy | Top 10, Humanitas New Voices Fellowship
					2023 | Finalist, Screencraft Comedy Competition 2023 | Semifinalist,
					Screencraft Screenwriting Fellowship 2023 | Semifinalist, WeScreenplay
					Diverse Voices Lab Fall 2023 | Semi-Finalist, Indie Horror Film Fest
					2023 | Runner-Up, Midwest Weirdfest 2023
					{/* <ListGroup items={awards} heading="Awards" /> */}
					<h1>
						<br />
						Contact Info{" "}
					</h1>
					<p>
						waligora.cj@gmail.com
						<br />
						Also link out to{" "}
						<a href="https://writers.coverfly.com/profile/cjwaligora">
							Coverfly
						</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default Home;
