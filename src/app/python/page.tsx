import Breadcrumb from '@/components/common/Breadcrumb';
import PythonCourse from '@/components/service/Python';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Full Stack Development in Python | SBros Tech Pvt Ltd",
  description:
    "Master Python, Django and build complete web applications from frontend to backend. 200 hours, portfolio projects, certification and job placement support at SBros Tech.",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Full Stack Development in Python"
          subtitle="Full Stack Development in Python"
        />

        <PythonCourse />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default index;