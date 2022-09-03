export default function ShowcaseInfo({ desc }) {
	return (
		<article className="showcase__info__desc">
			<div className="box">
				<span className="line"></span>
				<span className="hello">hello</span>
			</div>
			<h2 className="name">
				I'm <span className="red">mahdi</span> bahmani
			</h2>
			<p className="desc">{desc}</p>
			<button className="about-me-btn">about me</button>
		</article>
	);
}
