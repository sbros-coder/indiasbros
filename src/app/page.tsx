
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import FeatureHomeOne from '@/components/feature/FeatureHomeOne';
// import AboutHomeOne from '@/components/about/AboutHomeOne';
import ProjectHomeOne from '@/components/project/ProjectHomeOne';
import FunfactHomeOne from '@/components/funfact/FunfactHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
// import TestimonialHomeOne from '@/components/testimonial/TestimonialHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
// import TeamHomeOne from '@/components/team/TeamHomeOne';
import BusinessHomeOne from '@/components/business/BusinessHomeOne';
// import CtaHomeOne from '@/components/cta/CtaHomeOne';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne'; 
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
 


export const metadata = {
  title: "SBros Tech",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <HeroHomeOne />
        <VideoHomeOne />
        <ServiceHomeOne />
        <BusinessHomeOne />
        <FeatureHomeOne />
        {/* <AboutHomeOne /> */}
        <ProjectHomeOne />
        <FunfactHomeOne />
        {/* <TestimonialHomeOne /> */}
        {/* <TeamHomeOne /> */}
        {/* <CtaHomeOne /> */}
        <BlogHomeOne />
        <BrandHomeOne />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;