import Breadcrumb from '@/components/common/Breadcrumb';
import Digital from '@/components/service/Digital';
// import CtaHomeOne from '@/components/cta/CtaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "SBros | Digital Marketing | SEO | SEM | SMO | SMM",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Digital Marketing"
          subtitle="Digital Marketing"
        />

        <Digital />

        {/* <CtaHomeOne style_2={true} /> */}
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default index;