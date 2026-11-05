
import Breadcrumb from "@/components/common/Breadcrumb";
import DigitalMarketing from "@/components/service/digital-marketing";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title: "Digital Marketing | SBros Tech Pvt Ltd",
  description:
    "Grow your business with professional digital marketing services at SBros Tech, including SEO, social media marketing, Google Ads, PPC campaigns, and content marketing.",
  keywords:
    "Digital Marketing Services, SEO Services, Social Media Marketing, Google Ads, PPC Advertising, Content Marketing, SBros Tech",
};

const DigitalMarketingPage = () => {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Digital Marketing"
          subtitle="Digital Marketing Services"
        />

        <DigitalMarketing />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default DigitalMarketingPage;
