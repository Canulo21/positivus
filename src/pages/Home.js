import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import lets from "../assets/images/lets.png";
import arrow1 from "../assets/images/arrow-black-green.png";
import arrow2 from "../assets/images/arrow-white-black.png";
import arrow3 from "../assets/images/arrow-3.png";
import searchEngineImg from "../assets/images/Search-engine-optimazion.png";
import payPerClickImg from "../assets/images/pay-per-click.png";
import socialMediaImg from "../assets/images/social-media.png";
import emailMarketingImg from "../assets/images/tokyo-sending-messages-from-one-place-to-another 1.png";
import contentCreationImg from "../assets/images/content-creation.png";
import analyticsImg from "../assets/images/analytics-tracking.png";

// for team card
import john from "../assets/images/john-smith.png";
import jane from "../assets/images/jane-doe.png";
import michael from "../assets/images/michael-brown.png";
import emily from "../assets/images/emily.png";
import brian from "../assets/images/brian.png";
import sarah from "../assets/images/sarah.png";
import linkIn from "../assets/images/in-img.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shadcn/ui/Accordion/Accordion";

// for testimonials
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/ui/Testimonials/Testimonials";

const serviceCard = [
  {
    title: "Search engine",
    text2: "optimization",
    textBg: "#B9FF66",
    textIsWhite: 0,
    cardBg: "#F3F3F3",
    arrow: arrow1,
    mainImg: searchEngineImg,
  },
  {
    title: "Pay-per-click",
    text2: "advertising",
    textBg: "#F3F3F3",
    textIsWhite: 0,
    cardBg: "#B9FF66",
    arrow: arrow1,
    mainImg: payPerClickImg,
  },
  {
    title: "Social Media",
    text2: "Marketing",
    textBg: "#F3F3F3",
    textIsWhite: 1,
    cardBg: "#191A23",
    arrow: arrow2,
    mainImg: socialMediaImg,
  },
  {
    title: "Email",
    text2: "Marketing",
    textBg: "#B9FF66",
    textIsWhite: 0,
    cardBg: "#F3F3F3",
    arrow: arrow1,
    mainImg: emailMarketingImg,
  },
  {
    title: "Content",
    text2: "Creation",
    textBg: "#F3F3F3",
    textIsWhite: 0,
    cardBg: "#B9FF66",
    arrow: arrow1,
    mainImg: contentCreationImg,
  },
  {
    title: "Analytics and ",
    text2: "Tracking",
    textBg: "#B9FF66",
    textIsWhite: 1,
    cardBg: "#191A23",
    arrow: arrow2,
    mainImg: analyticsImg,
  },
];

const accordion_working_process = [
  {
    number: "01",
    title: "Consultation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    number: "03",
    title: "Implementation",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const teamCard = [
  {
    img: john,
    name: "John Smith",
    position: "CEO and Founder",
    linkInUrl: "https://www.linkedin.com/in/jhon-carlo-canulo-116013227/",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    img: jane,
    name: "Jane Doe",
    position: "Director of Operations",
    linkInUrl: "https://www.linkedin.com/in/jhon-carlo-canulo-116013227/",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    img: michael,
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    linkInUrl: "https://www.linkedin.com/in/jhon-carlo-canulo-116013227/",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    img: emily,
    name: "Emily Johnson",
    position: "PPC Manager",
    linkInUrl: "https://www.linkedin.com/in/jhon-carlo-canulo-116013227/",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    img: brian,
    name: "Brian Williams",
    position: "Social Media Specialist",
    linkInUrl: "https://www.linkedin.com/in/jhon-carlo-canulo-116013227/",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    img: sarah,
    name: "Sarah Kim",
    position: "Content Creator",
    linkInUrl: "https://www.linkedin.com/in/jhon-carlo-canulo-116013227/",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

const testimonialSLides = [
  {
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    testimony:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "John Carlo Canulo",
    position: "Software Engineer",
    testimony:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "Cressa Pasanting",
    position: "Data Analyst",
    testimony:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "Paul Sabuer",
    position: "Marketing Director at XYZ Corp",
    testimony:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "Client Canulo",
    position: "Marketing Director at XYZ Corp",
    testimony:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "Ike Cahig",
    position: "Marketing Director at XYZ Corp",
    testimony:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
];

function Home() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const [api, setApi] = useState(null); // State to hold the Carousel API
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle dot navigation
  const goToSlide = (index) => {
    if (api) {
      api.scrollTo(index); // Use the Carousel API to navigate to the specific slide
    }
  };

  // Update the current index when the carousel scrolls
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap()); // Update the current index based on the Carousel API
    };

    api.on("select", onSelect); // Listen for the "select" event
    onSelect(); // Initialize the current index

    return () => {
      api.off("select", onSelect); // Clean up the event listener
    };
  }, [api]);

  return (
    <>
      <div className="service-wrap pt-20 lg:pt-24 xl:pt-36">
        <div className="service-top flex items-center text-center lg:text-left flex-col lg:flex-row gap-5 lg:gap-10 pb-12 lg:pb-14 xl:pb-20">
          <motion.h2
            className="head-title"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            Services
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            At our digital marketing agency, we offer a range of services to{" "}
            <br />
            help businesses grow and succeed online. These services include:
          </motion.p>
        </div>
        <div className="service-card-wrapper flex flex-wrap gap-7 lg:gap-7 xl:gap-10">
          {serviceCard.map((card, i) => {
            return (
              <motion.div
                className="card border-black border-[1px] rounded-[45px] flex items-center justify-between p-9 lg:p-9 2xl:p-12"
                key={i}
                style={{ background: card.cardBg }}
                variants={fadeIn("up", 0.2 * (i + 0.1))}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="left-card">
                  <div className="card-text">
                    <h3
                      style={{ background: card.textBg }}
                      className="inline-block font-medium px-2 rounded-[7px]"
                    >
                      {card.title}
                    </h3>
                    <br />
                    <h3
                      style={{ background: card.textBg }}
                      className="inline-block font-medium px-2 rounded-[7px]"
                    >
                      {card.text2}
                    </h3>
                  </div>
                  <div className="card-link pt-24">
                    <a
                      href="#"
                      className="flex items-center gap-4 text-xl"
                      style={{ color: card.textIsWhite === 1 ? "white" : "" }}
                    >
                      <img src={card.arrow} alt="arrow-link" />
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="right-card">
                  <img src={card.mainImg} alt="image" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="lets-wrap pt-24 pb-20 lg:pb-20 xl:pb-32">
        <div className="bg-[#F3F3F3] rounded-[45px] relative flex items-center justify-between px-4 sm:px-9 p-9 pt-64 lg:pt-0 xl:p-14 shadow-lg lg:shadow-none">
          <motion.div
            className="left-lets pr-0 lg:pr-20 w-full text-center lg:text-left lg:w-[60%] 2xl:w-[40%] z-10"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Let’s make things happen</h3>
            <p className="my-7">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <a
              href="#"
              className="rounded-[14px] bg-[#191A23] text-white py-5 px-9 inline-block text-[20px] hover:bg-[#B9FF66] hover:text-[#191A23]"
            >
              Get your free proposal
            </a>
          </motion.div>
          <div className="right-lets">
            <motion.img
              src={lets}
              alt="lets-img"
              className="absolute top-0 left-0 lg:left-[initial] right-0 lg:right-10  2xl:right-60 bottom-72 lg:bottom-0 m-auto"
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>
        </div>
      </div>
      <div className="case-wrap pb-20 lg:pb-20 xl:pb-32">
        <div className="case-top flex items-center text-center lg:text-left flex-col lg:flex-row gap-5 lg:gap-10 pb-12 lg:pb-14 xl:pb-20">
          <motion.h2
            className="head-title"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            Case Studies
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            Explore Real-Life Examples of Our Proven Digital Marketing <br />{" "}
            Success through Our Case Studies
          </motion.p>
        </div>
        <div className="case-btm bg-[#191A23] rounded-[45px]  py-10 px-10 xl:py-12 xl:px-10 2xL:py-[70px] 2xl:px-14 text-white shadow-lg lg:shadow-none">
          <div className="flex flex-wrap text-center lg:text-left">
            <motion.div
              className=" pr-0 sm:pr-6 w-full sm:w-1/2 pb-6 lg:pb-0 lg:w-1/3 xl:pr-8 2xl:pr-16"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>
              <a
                href="#"
                className="text-xl text-[#B9FF66] mt-5 flex items-center gap-5 justify-center lg:w-fit arrow-3"
              >
                Learn more
                <img src={arrow3} alt="arrow-link" />
              </a>
            </motion.div>
            <motion.div
              className="border-t-2 sm:border-t-0 border-l-0 sm:border-l-2 lg:border-r-2 w-full sm:w-1/2 lg:w-1/3 border-white pt-6 sm:pt-0 pb-6 lg:pb-0 pl-0 sm:pl-6 lg:px-6 xl:px-9 2xl:px-16"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </p>
              <a
                href="#"
                className="text-xl text-[#B9FF66] mt-5 flex items-center gap-5 justify-center lg:w-fit arrow-3"
              >
                Learn more
                <img src={arrow3} alt="arrow-link" />
              </a>
            </motion.div>
            <motion.div
              className="pl-0 sm:pl-6 w-full border-t-2 pt-6 lg:pt-0 border-white lg:border-t-0 lg:w-1/3 xl:pl-8 2xl:pl-16"
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </p>
              <a
                href="#"
                className="text-xl text-[#B9FF66] mt-5 flex items-center gap-5 justify-center lg:w-fit arrow-3"
              >
                Learn more
                <img src={arrow3} alt="arrow-link" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="working-process-wrap pb-14 xl:pb-28">
        <div className="working-top flex items-center text-center lg:text-left flex-col lg:flex-row gap-5 lg:gap-10 pb-12 lg:pb-14 xl:pb-20">
          <motion.h2
            className="head-title"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Working Process{" "}
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            Step-by-Step Guide to Achieving <br />
            Your Business Goals
          </motion.p>
        </div>
        <div className="accordion-wrap">
          <Accordion type="single" collapsible>
            {accordion_working_process.map((process, i) => {
              return (
                <motion.div
                  variants={fadeIn("up", 0.2 * (i + 0.1))}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <AccordionItem value={`item-${i}`} key={i} className="mb-8">
                    <AccordionTrigger>
                      <span className=" w-10 sm:w-14 text-2xl sm:text-3xl lg:w-20 lg:text-5xl xl:text-6xl xl:w-28">
                        {process.number}
                      </span>
                      <span className="text-xl sm:text-2xl xl:text-3xl">
                        {process.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base sm:text-lg">
                      {process.text}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </div>
      <div className="team-wrap pb-20 xl:pb-28">
        <div className="team-top flex items-center text-center lg:text-left flex-col lg:flex-row gap-5 lg:gap-10 pb-12 lg:pb-14 xl:pb-20">
          <motion.h2
            className="head-title"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            Team
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            Meet the skilled and experienced team behind our <br />
            successful digital marketing strategies
          </motion.p>
        </div>
        <div className="team-card-holder flex flex-wrap justify-between gap-y-6 xl:gap-y-6 2xl:gap-y-10">
          {teamCard.map((team, i) => {
            return (
              <motion.div
                className="team-card border-[1px] border-[#191A23] rounded-[45px] w-full lg:w-[calc(50%_-_15px)] xl:w-[calc(33.333%_-_15px)] 2xl:w-[calc(33.333%_-_20px)] py-8 px-7 xl:py-8 xl:px-7 2xl:py-10 2xL:px-9 common-shadow top-hover"
                key={i}
                variants={fadeIn("up", 0.2 * (i + 0.1))}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="top-card flex relative items-end border-b-[1px] border-black pb-7">
                  <div className="card-img mr-5">
                    <img
                      className="hover:scale-90 transition-all duration-300"
                      src={team.img}
                      alt={team.name}
                    />
                  </div>
                  <div className="card-name">
                    <h4 className="font-semibold">{team.name}</h4>
                    <p>{team.position}</p>
                  </div>
                  <div className="absolute right-0 top-0">
                    <a
                      className="inline-block"
                      href={team.linkInUrl}
                      target="_blank"
                    >
                      <img src={linkIn} alt="LinkIn" />
                    </a>
                  </div>
                </div>
                <div className="btm-card pt-7">{team.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="testimonials-wrap">
        <div className="working-top flex items-center text-center lg:text-left flex-col lg:flex-row gap-5 lg:gap-10 pb-12 lg:pb-14 xl:pb-20">
          <motion.h2
            className="head-title"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            Testimonials
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            Hear from Our Satisfied Clients: Read Our Testimonials <br />
            to Learn More about Our Digital Marketing Services
          </motion.p>
        </div>
        <motion.div
          className="slides bg-[#191A23] pt-12 sm:pt-20 pb-14 sm:pb-16 text-white rounded-[45px] overflow-hidden"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Carousel
            setApi={setApi} // Pass the Carousel API to the state
            opts={{ loop: true }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {testimonialSLides.map((testimony, i) => {
                return (
                  <CarouselItem
                    key={i}
                    className="pl-1 w-3/4 basis-3/4 sm:basis-3/4 sm:w-3/4 md:basis-3/4 md:w-3/4 lg:basis-3/4 lg:w-3/4 xl:basis-1/2 xl:w-1/2 cursor-grab"
                  >
                    <div className="p-3 md:p-1">
                      <div className="message border-[1px] border-[#B9FF66] rounded-[45px] py-9 px-6 xl:py-10 xl:px-14 mb-2">
                        {testimony.testimony}
                      </div>
                    </div>
                    <div className="person pt-8 sm:pl-20 text-center sm:text-left">
                      <h4 className="text-[#B9FF66] font-semibold">
                        {testimony.name}
                      </h4>
                      <p>{testimony.position}</p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="testimonials-btns flex items-center justify-center pt-10 sm:pt-20 xl:pt-32">
              <CarouselPrevious />
              <div className="flex justify-center space-x-2 mx-10 md:mx-32 lg:mx-56">
                {testimonialSLides.map((_, index) => (
                  <button
                    aria-label="dot"
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors dots ${
                      currentIndex === index ? "active" : " "
                    }`}
                  />
                ))}
              </div>
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
