
import Breadcrumb from "@/components/common/Breadcrumb";
import SoftwareDevelopment from "@/components/service/Software";
// import CtaHomeOne from "@/components/cta/CtaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "SBros | Software Development | Python | Java | Dot Net | iOS",
  description:
    "SBros Tech delivers custom software development, business applications, web applications, and workflow automation solutions.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Software Development"
          subtitle="Software Development"
        />

        <SoftwareDevelopment />

        {/* <CtaHomeOne style_2={true} /> */}
      </main>

      <FooterOne />
    </Wrapper>
  );
}
