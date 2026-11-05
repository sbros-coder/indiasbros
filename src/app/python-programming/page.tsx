import Breadcrumb from "@/components/common/Breadcrumb";
import PythonCourse from "@/components/service/python-programming";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title: "Python Programming | SBros Tech Pvt Ltd",
  description:
    "Learn Python programming from basics to advanced concepts, including data structures, OOP, automation, APIs, Django/Flask and real-world projects through practical training at SBros Tech.",
};

const PythonCoursePage = () => {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Python Programming Course"
          subtitle="Python Programming Course"
        />

        <PythonCourse />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default PythonCoursePage;