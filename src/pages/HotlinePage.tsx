import Title from "@/components/Title";
import { hotlineData } from "@/utils/hotlineData";

const HotlinePage = () => {
	return (
		<section className="">
			<div className="">
				<div className="">
					<Title text="hotline" classname="" />
					<div className="">
						<img src={hotlineData.src} alt="hotline-logo" className="" />
					</div>
					<div className="">
						<p className="">{hotlineData.text}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default HotlinePage;