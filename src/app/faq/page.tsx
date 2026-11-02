

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FaqArea from '@/components/faq/FaqArea';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';


export const metadata = {
  title: "Faq - SBros Tech",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Faq" subtitle="Faq" />
        <FaqArea />
        <CtaHomeOne style_2={true} />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;