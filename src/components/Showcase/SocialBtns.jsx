export default function SocialBtns({ social }) {
	return (
		<div className="showcase__social">
			{social.map((media, index) => {
				if (index < social.length - 1) {
					return (
						<>
							<a
								key={index}
								href={media.link}
								className="showcase__social__link"
								target="_blank"
								rel="noreferrer"
							>
								{media.name}
							</a>
							<span className="showcase__social__slash">/</span>
						</>
					);
				} else {
					return (
						<>
							<a
								key={index}
								href={media.link}
								className="showcase__social__link"
								target="_blank"
								rel="noreferrer"
							>
								{media.name}
							</a>
						</>
					);
				}
			})}
		</div>
	);
}
