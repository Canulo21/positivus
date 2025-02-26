import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import heroImg from "../../assets/images/Illustration.png";
import CompanyLogo from "../CompanyLogo/CompanyLogo";

function HeroBanner() {
  return (
    <>
      <div className="hero-container flex flex-wrap items-center py-[45px] px-5 md:px-10 lg:px-0 lg:pb-[100px] xl:pb-[70px] lg:py-[70px] mt-24 mb-14 lg:mb-0 lg:mt-28 xl:mt-36 2xl:mt-36 rounded-[45px] lg:rounded-none shadow-lg lg:shadow-none bg-[#b9ff66] lg:bg-inherit">
        <div className="hero-left lg:pr-8 lg:w-[60%] xl:w-[50%] 2xl:w-[42%] text-center lg:text-left">
          <div className="hero-title">
            <motion.h1
              className="font-semibold"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              Navigating the digital landscape for success
            </motion.h1>
          </div>
          <div className="hero-text">
            <motion.p
              className="py-5 lg:py-6 xl:py-8 2xl:py-9"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              <a
                href="#"
                className="text-[20px] bg-[#191A23] rounded-[14px] text-white px-9 py-5 inline-block hover:bg-[#fafafa] lg:hover:bg-[#B9FF66] hover:text-[#191A23]"
              >
                Book a consultation
              </a>
            </motion.div>
          </div>
        </div>
        <div className="hero-right w-full lg:flex justify-end lg:w-[40%] xl:w-[50%] 2xl:w-[58%] hidden ">
          <motion.img
            src={heroImg}
            alt="Illustration"
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </div>

      {/* COmpany logo goes here */}
      <CompanyLogo />
    </>
  );
}

export default HeroBanner;
