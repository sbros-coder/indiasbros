

import Breadcrumb from '@/components/common/Breadcrumb';
import ShopDetails from '@/components/details/ShopDetails';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Shop Details - SBros Tech",
};




const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Shop Details" subtitle="Shop Details" />
        <ShopDetails />
      </main>
      <FooterOne />     
    </Wrapper>
  );
};

export default index;