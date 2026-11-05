import Breadcrumb from '@/components/common/Breadcrumb';
import Training from '@/components/service/Training';
// import CtaHomeOne from '@/components/cta/CtaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Job-Focused Courses | Java | Python | Digital marketing",
  description:
    "SBros Tech offers industry-oriented training in web development, software development and digital skills with hands-on projects and expert mentors.",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Training"
          subtitle="Training"
        />

        <Training />

        {/* <CtaHomeOne style_2={true} /> */}
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default index;