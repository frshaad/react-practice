import ShowcaseInfo from './ShowcaseInfo';

export default function ShowcaseBox({ img, name, desc }) {
	return (
		<div className="showcase__info">
			<ShowcaseInfo desc={desc} />
			<img src={img} alt={name} className="showcase__info__img" />
		</div>
	);
}
