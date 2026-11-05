
import Breadcrumb from "@/components/common/Breadcrumb";
import CctvSecurity from "@/components/service/network";
// import CtaHomeOne from "@/components/cta/CtaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "SBros | Security System | CCTV | Bio-Metric | Automatic Gate",
  description:
    "SBros Tech provides professional CCTV installation, security camera systems, remote monitoring, and reliable business and home security solutions.",
};

export default function network() {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Network & Security Systems"
          subtitle="Network & Security Systems"
        />

        <CctvSecurity />

        {/* <CtaHomeOne style_2={true} /> */}
      </main>

      <FooterOne />
    </Wrapper>
  );
}
