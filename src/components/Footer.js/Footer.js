import { useState, useEffect } from "react";
import FooterNav from "../Nav/FooterNav";
import backTop from "../../assets/images/arrow-black-green.png";

function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <footer>
        <div className="px-[100px]">
          <div className="footer-wrap bg-[#191A23] text-white pt-[55px] pb-[50px] px-[60px] rounded-t-[40px] mt-36">
            <div className="footer-menu-wrap">
              <FooterNav />
            </div>
            <div
              className="footer-contact-info flex justify-between pt-[66px] pb-[50px]"
              style={{ alignItems: "normal" }}
            >
              <div className="footer-contact-left">
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
              <div className="footer-contact-right w-[45%] ">
                <div className="bg-[#292A32] rounded-[14px] h-full py-14 px-10 flex justify-between items-center">
                  <input
                    className="border-2 border-white bg-transparent py-5 px-10 rounded-[14px]"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                  />
                  <a
                    href="#"
                    className="rounded-[14px] border inline-block py-5 px-9 bg-[#B9FF66] text-[#292A32] text-[20px] hover:bg-[#292A32] hover:text-white hover:border-[#B9FF66]"
                  >
                    Subscribe to news
                  </a>
                </div>
              </div>
            </div>
            <div className="all-rights-wrap border-white border-t-2 flex gap-10 items-center pt-[50px]">
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
        <a href="#">
          <img src={backTop} alt="back-top" />
        </a>
      </div>
    </>
  );
}

export default Footer;
