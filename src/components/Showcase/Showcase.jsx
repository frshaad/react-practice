import showcase from '../../data/showcaseData';
import logo from '../../images/Logo.png';
import Header from './Header';
import ShowcaseBox from './ShowcaseBox';
import SocialBtns from './SocialBtns';

export default function Showcase() {
	const { name, desc, img, social } = showcase;

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
