export default function Header({ logo }) {
	return (
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
	);
}
