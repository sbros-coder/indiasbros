 

import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import CtaHomeThree from "@/components/cta/CtaHomeThree";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import BlogHomeThree from "@/components/blog/BlogHomeThree";
import HeroHomeThree from "@/components/hero/HeroHomeThree";
import AboutHomeThree from "@/components/about/AboutHomeThree";
import PricingHomeThree from "@/components/pricing/PricingHomeThree";
import ProjectHomeThree from "@/components/project/ProjectHomeThree";
import ServiceHomeThree from "@/components/service/ServiceHomeThree";
import FeatureHomeThree from "@/components/feature/FeatureHomeThree";
import LocationHomeThree from "@/components/location/LocationHomeThree";
import SolutionHomeThree from "@/components/solution/SolutionHomeThree";
import TestimonialHomeTwo from "@/components/testimonial/TestimonialHomeTwo";
import TechnologyHomeThree from "@/components/technology/TechnologyHomeThree";

 
const index = () => {
	return (
		<Wrapper>
			<HeaderThree />
			<main>
				<HeroHomeThree />
				<FeatureHomeThree />
				<AboutHomeThree />
				<ServiceHomeThree />
				<ProjectHomeThree />
				<SolutionHomeThree />
				<BrandHomeOne style_2={true} />
				<TestimonialHomeTwo style_2={true} />
				<PricingHomeThree />
				<TechnologyHomeThree />
				<BlogHomeThree />
				<CtaHomeThree />
				<LocationHomeThree />
			</main>
			<FooterOne />
		</Wrapper>
	);
};

export default index;
