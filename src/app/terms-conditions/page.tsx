import Breadcrumb from "@/components/common/Breadcrumb";
import TermsConditions from '@/layouts/footers/terms-conditions';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Terms & Conditions - SBros Tech",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb
          title="Terms & Conditions"
          subtitle="Terms & Conditions"
        />
        <TermsConditions />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;
