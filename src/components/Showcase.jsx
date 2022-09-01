import showcase from '../data/showcase';

export default function Showcase() {
	const { name, desc, logo, img, social } = showcase;

	console.log('aaa');

	return (
		<>
			<section className="showcase">
				<header className="header">
					<img src={logo} alt="logo" className="header__logo" />
					<ul className="header__menu">
						<li className="header__menu__item">
							<a href="#skills">skills</a>
						</li>
						<li className="header__menu__item">
							<a href="#projects">projects</a>
						</li>
						<li className="header__menu__item">
							<a href="#testimonial">testimonial</a>
						</li>
						<li className="header__menu__item">
							<a href="#contact">contact</a>
						</li>
					</ul>
				</header>

				<div className="showcase__info">
					<article className="showcase__info__desc">
						<span className="line"></span>
						<span className="hello">hello</span>
						<h2 className="name">
							I'm <span className="red">mahdi</span> bahmani
						</h2>
						<p className="desc">{desc}</p>
						<button className="about-me-btn">about me</button>
					</article>
					<img src={img} alt={name} className="showcase__info__img" />
				</div>

				<p className="showcase__social">
					<a href={social[0].link} className="showcase__social__link">
						{social[0].name}
					</a>
					<span className="showcase__social__slash">/</span>
					<a href={social[1].link} className="showcase__social__link">
						{social[1].name}
					</a>
					<span className="showcase__social__slash">/</span>
					<a href={social[2].link} className="showcase__social__link">
						{social[2].name}
					</a>
				</p>
			</section>
		</>
	);
}
