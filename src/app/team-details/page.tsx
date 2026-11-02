

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import TeamDetails from '@/components/details/TeamDetails';
import TeamDetailsForm from '@/components/form/TeamDetailsForm';

export const metadata = {
  title: "Team Details - SBros Tech",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Team Details" subtitle="Team Details" />
        <TeamDetails />
        <TeamDetailsForm />
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;