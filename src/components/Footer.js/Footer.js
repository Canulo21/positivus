import { useState, useEffect } from "react";
import FooterNav from "../Nav/FooterNav";
import backTop from "../../assets/images/arrow-black-green.png";

function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = (event) => {
    event.preventDefault(); // Prevents "#" from appearing in the URL
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer>
        <div className="px-3 lg:px-10 xl:px-12 2xl:px-[100px]">
          <div className="footer-wrap bg-[#191A23] text-white pt-[55px] pb-7 lg:pb-[50px] px-[20px] lg:px-[40px] 2xl:pt-[55px] 2xl:pb-[50px] 2xl:px-[60px] rounded-t-[40px] mt-14 lg:mt-24 xl:mt-36">
            <div className="footer-menu-wrap">
              <FooterNav />
            </div>
            <div
              className="footer-contact-info flex flex-wrap justify-between pt-[66px] pb-[50px]"
              style={{ alignItems: "normal" }}
            >
              <div className="footer-contact-left text-center lg:text-left w-full lg:w-[40%]">
                <h4 className="bg-[#B9FF66] rounded-[14px] inline-block text-black font-medium px-2 mb-[27px]">
                  Contact us:
                </h4>
                <div className="flex flex-col gap-5">
                  <p>Email: info@positivus.com</p>
                  <p>Phone: 555-567-8901</p>
                  <p>
                    Address: 1234 Main St <br /> Moonstone City, Stardust State
                    12345
                  </p>
                </div>
              </div>
              <div className="footer-contact-right w-full mt-10 lg:mt-0 lg:w-fit ">
                <div className="bg-[#292A32] rounded-[14px] justify-center flex-col xl:flex-row h-full py-10 px-6 xl:py-12 xl:px-8 2xl:py-14 2xl:px-10 flex gap-5 xl:gap-5 2xl:gap-24 items-center">
                  <input
                    className="border-2 border-white bg-transparent text-center xl:text-left w-full xl:w-[initial] py-3 px-7 xl:py-3 xl:px-5 2xl:py-5 2xl:px-10 rounded-[14px]"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                  />
                  <a
                    href="#"
                    className="rounded-[14px] border w-full xl:w-[initial] inline-block py-3 px-7 xl:py-3 xl:px-5 2xl:py-5 2xl:px-9 bg-[#B9FF66] text-[#292A32] text-center text-[20px] hover:bg-[#292A32] hover:text-white hover:border-[#B9FF66]"
                  >
                    Subscribe to news
                  </a>
                </div>
              </div>
            </div>
            <div className="all-rights-wrap border-white border-t-2 flex gap-5 lg:gap-10 items-center pt-7 text-center sm:text-left flex-col sm:flex-row lg:pt-[50px]">
              <p>© 2023 Positivus. All Rights Reserved.</p>
              <a
                href="#"
                className="underline underline-offset-4 hover:text-[#b9ff66]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className={`back-top fixed ${scrolled ? "show" : ""}`}>
        <a href="#" onClick={handleBackToTop}>
          <img src={backTop} alt="back-top" />
        </a>
      </div>
    </>
  );
}

export default Footer;
