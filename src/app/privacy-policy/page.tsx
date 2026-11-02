import Breadcrumb from "@/components/common/Breadcrumb";
import PrivacyPolicy from '@/layouts/footers/privacy-policy';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Privacy Policy - SBros Tech",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
         <Breadcrumb
          title="Privacy Policy"
          subtitle="Privacy Policy"
        />
        <PrivacyPolicy />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;
