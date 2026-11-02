
import Breadcrumb from "@/components/common/Breadcrumb";
import JavaCourse from "@/components/service/Java";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title: "Full Stack Development in Java - SBros Tech",
  description:
    "Master Core Java, Advanced Java, Spring Boot, Microservices, React.js and database technologies. Get practical project experience and career guidance at SBros Tech.",
};

const JavaFullStackPage = () => {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Full Stack Development in Java"
          subtitle="Full Stack Development in Java"
        />

        <JavaCourse />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default JavaFullStackPage;
