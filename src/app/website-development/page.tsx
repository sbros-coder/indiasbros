
import Breadcrumb from '@/components/common/Breadcrumb';
import WebsiteDevelopment from '@/components/service/Website';
// import CtaHomeOne from '@/components/cta/CtaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "SBros | Website and Portal Design | Ecommerce | Wordpress",
  description:
    "SBros Tech provides professional website development services, including responsive websites, business websites, and custom web solutions.",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Website Development"
          subtitle="Website Development"
        />

        <WebsiteDevelopment />

        {/* <CtaHomeOne style_2={true} /> */}
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default index;
