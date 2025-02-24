import React from "react";
import heroImg from "../../assets/images/Illustration.png";
import CompanyLogo from "../CompanyLogo/CompanyLogo";

function HeroBanner() {
  return (
    <>
      <div className="hero-container flex flex-wrap items-center py-[45px] px-[20px] lg:pb-[100px] xl:pb-[70px] lg:py-[70px] mt-24 mb-14 lg:mb-0 lg:mt-28 xl:mt-36 2xl:mt-36 rounded-[45px] lg:rounded-none shadow-lg lg:shadow-none bg-[#b9ff66] lg:bg-none">
        <div className="hero-left pr-8 lg:w-[60%] xl:w-[50%] 2xl:w-[42%] text-center lg:text-left">
          <div className="hero-title">
            <h1 className="font-semibold">
              Navigating the digital landscape for success
            </h1>
          </div>
          <div className="hero-text">
            <p className="py-5 lg:py-6 xl:py-8 2xl:py-9">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <a
              href="#"
              className="text-[20px] bg-[#191A23] rounded-[14px] text-white px-9 py-5 inline-block hover:bg-[#fafafa] lg:hover:bg-[#B9FF66] hover:text-[#191A23]"
            >
              Book a consultation
            </a>
          </div>
        </div>
        <div className="hero-right w-full lg:flex justify-end lg:w-[40%] xl:w-[50%] 2xl:w-[58%] hidden ">
          <img src={heroImg} alt="Illustration" />
        </div>
      </div>

      {/* COmpany logo goes here */}
      <CompanyLogo />
    </>
  );
}

export default HeroBanner;
