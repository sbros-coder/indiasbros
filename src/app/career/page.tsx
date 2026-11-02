
import Breadcrumb from "@/components/common/Breadcrumb";
import Career from "@/components/service/Career";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Careers - SBros Tech",
  description:
    "Explore exciting career opportunities at SBros Tech. Join our team and grow your skills in software development, web design, digital marketing, and technology solutions.",
};

const CareerPage = () => {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Careers"
          subtitle="Join Our Team"
        />

        <Career />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default CareerPage;
