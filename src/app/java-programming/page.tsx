import Breadcrumb from "@/components/common/Breadcrumb";
import JavaCourse from "@/components/service/java-programming";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title: "Java Programming Course - SBros Tech",
  description:
    "Master Java programming from basics to Spring Boot with 12 comprehensive modules, real-world projects, and industry-level training at SBros Tech.",
  keywords:
    "Java programming course, Spring Boot training, Java tutorials, enterprise Java development",
};

const JavaCoursePage = () => {
  return (
    <Wrapper>
      <HeaderFour />

      <main>
        <Breadcrumb
          title="Java Programming"
          subtitle="Java Programming Course"
        />

        <JavaCourse />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default JavaCoursePage;