import showcase from './showcaseData';
import Header from './Header';
import ShowcaseBox from './ShowcaseBox';
import SocialBtns from './SocialBtns';

export default function Showcase() {
	const { name, desc, logo, img, social } = showcase;

	return (
		<>
			<section className="showcase">
				<Header logo={logo} />
				<ShowcaseBox name={name} desc={desc} img={img} />
				<SocialBtns social={social} />
			</section>
		</>
	);
}
