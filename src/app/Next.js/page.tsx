
import Breadcrumb from "@/components/common/Breadcrumb";
import NextJsCourse from "@/components/service/Next.js";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title: "Full Stack Development in Next.js | SBros Tech Pvt Ltd",
  description:
    "Learn Next.js, TypeScript, PostgreSQL, backend APIs and modern full stack development through practical training and real-world projects at SBros Tech.",
};

const NextJsFullStackPage = () => {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Full Stack Development in Next.js"
          subtitle="Full Stack Development in Next.js"
        />

        <NextJsCourse />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default NextJsFullStackPage;
