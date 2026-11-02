


import Checkout from '@/components/checkout/Checkout';
import Breadcrumb from '@/components/common/Breadcrumb';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Checkout - SBros Tech",
};



const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Checkout" subtitle="Checkout" />
        <Checkout />
        <CtaHomeOne style_2={true} />
      </main>
      <FooterOne />      
    </Wrapper>
  );
};

export default index;