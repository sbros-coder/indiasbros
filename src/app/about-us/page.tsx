

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
// import CtaHomeOne from '@/components/cta/CtaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ProjectHomeOne from '@/components/project/ProjectHomeOne';
import FunfactHomeOne from '@/components/funfact/FunfactHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
// import ServiceHomeOne from '@/components/service/ServiceHomeOne';
// import BusinessAbout from '@/components/business/BusinessAbout';

export const metadata = {
  title: "About - SBros Tech",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="About Us" subtitle="About Us" />
        <AboutHomeOne style_2={true} />
        <ProjectHomeOne />
        <FunfactHomeOne style_2={true} />
        <VideoHomeOne />
       
        {/* <ServiceHomeOne style_2={true} />
        <BusinessAbout /> */}
        {/* <CtaHomeOne style_2={true} /> */}
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;