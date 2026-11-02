
import Breadcrumb from "@/components/common/Breadcrumb";
import CctvSecurity from "@/components/service/Cctv";
// import CtaHomeOne from "@/components/cta/CtaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "CCTV Installation & Security Systems - SBros Tech",
  description:
    "SBros Tech provides professional CCTV installation, security camera systems, remote monitoring, and reliable business and home security solutions.",
};

export default function CctvSecurityPage() {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="CCTV & Security Systems"
          subtitle="CCTV & Security Systems"
        />

        <CctvSecurity />

        {/* <CtaHomeOne style_2={true} /> */}
      </main>

      <FooterOne />
    </Wrapper>
  );
}
