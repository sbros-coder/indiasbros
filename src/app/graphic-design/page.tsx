
import Breadcrumb from "@/components/common/Breadcrumb";
import Graphic from "@/components/service/Graphic";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "SBros | Graphic Design | Illustration | Pamphlet Design",
  description:
    "Professional graphic design, branding and digital creative services by SBros Tech.",
};

export default function GraphicDesignPage() {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Graphic Design"
          subtitle="Graphic Design"
        />

        <Graphic />
      </main>

      <FooterOne />
    </Wrapper>
  );
}