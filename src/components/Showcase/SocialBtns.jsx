export default function SocialBtns({ social }) {
	return social.map((media, index) => {
		if (index < social.length - 1) {
			return (
				<>
					<a key={index} href={media.link} className="showcase__social__link">
						{media.name}
					</a>
					<span className="showcase__social__slash">/</span>
				</>
			);
		} else {
			return (
				<>
					<a key={index} href={media.link} className="showcase__social__link">
						{media.name}
					</a>
				</>
			);
		}
	});
}
