
import Breadcrumb from "@/components/common/Breadcrumb";
import Career from "@/components/service/Career";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "SBros | Digital Marketing Services | SEO | SMM| Job Opening",
  description:
    "Explore exciting career opportunities at SBros Tech. Join our team and grow your skills in software development, web design, digital marketing, and technology solutions.",
};

const CareerPage = () => {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Career"
          subtitle="Join Our Team"
        />

        <Career />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default CareerPage;
