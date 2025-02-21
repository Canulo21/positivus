import React from "react";
import heroImg from "../../assets/images/Illustration.png";
import CompanyLogo from "../CompanyLogo/CompanyLogo";

function HeroBanner() {
  return (
    <>
      <div className="hero-container flex items-center py-[70px] mt-36">
        <div className="hero-left w-[62%]">
          <div className="hero-title">
            <h1 className="font-semibold">
              Navigating the digital landscape for success
            </h1>
          </div>
          <div className="hero-text">
            <p className="py-9">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <a
              href="#"
              className="text-[20px] bg-[#191A23] rounded-[14px] text-white px-9 py-5 inline-block hover:bg-[#B9FF66] hover:text-[#191A23]"
            >
              Book a consultation
            </a>
          </div>
        </div>
        <div className="hero-right w-full flex justify-end">
          <img src={heroImg} alt="Illustration" />
        </div>
      </div>

      {/* COmpany logo goes here */}
      <CompanyLogo />
    </>
  );
}

export default HeroBanner;
