import React, { useRef, useState, useEffect } from "react";
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
      <section id="services">
        <div className="service-wrap pt-36">
          <div className="service-top flex items-center gap-10 pb-20">
            <h2 className="head-title">Services</h2>
            <p>
              At our digital marketing agency, we offer a range of services to{" "}
              <br />
              help businesses grow and succeed online. These services include:
            </p>
          </div>
          <div className="service-card-wrapper flex flex-wrap gap-10">
            {serviceCard.map((card, i) => {
              return (
                <div
                  className="card border-black border-[1px] rounded-[45px] flex items-center justify-between p-12"
                  key={i}
                  style={{ background: card.cardBg }}
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
                </div>
              );
            })}
          </div>
        </div>
        <div className="lets-wrap pt-24 pb-32">
          <div className="bg-[#F3F3F3] rounded-[45px] relative flex items-center justify-between p-14">
            <div className="left-lets w-[40%]">
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
            </div>
            <div className="right-lets">
              <img
                src={lets}
                alt="lets-img"
                className="absolute top-0 right-60 bottom-0 m-auto"
              />
            </div>
          </div>
        </div>
        <div className="case-wrap pb-32">
          <div className="case-top flex items-center gap-10 pb-20">
            <h2 className="head-title">Case Studies</h2>
            <p>
              Explore Real-Life Examples of Our Proven Digital Marketing <br />{" "}
              Success through Our Case Studies
            </p>
          </div>
          <div className="case-btm bg-[#191A23] rounded-[45px] py-[70px] px-14 text-white">
            <div className="flex">
              <div className="pr-16">
                <p>
                  For a local restaurant, we implemented a targeted PPC campaign
                  that resulted in a 50% increase in website traffic and a 25%
                  increase in sales.
                </p>
                <a
                  href="#"
                  className="text-xl text-[#B9FF66] mt-5 flex items-center gap-5 w-fit arrow-3"
                >
                  Learn more
                  <img src={arrow3} alt="arrow-link" />
                </a>
              </div>
              <div className="border-l-2 border-r-2 border-white px-16">
                <p>
                  For a B2B software company, we developed an SEO strategy that
                  resulted in a first page ranking for key keywords and a 200%
                  increase in organic traffic.
                </p>
                <a
                  href="#"
                  className="text-xl text-[#B9FF66] mt-5 flex items-center gap-5 w-fit arrow-3"
                >
                  Learn more
                  <img src={arrow3} alt="arrow-link" />
                </a>
              </div>
              <div className="pl-16">
                <p>
                  For a national retail chain, we created a social media
                  marketing campaign that increased followers by 25% and
                  generated a 20% increase in online sales.
                </p>
                <a
                  href="#"
                  className="text-xl text-[#B9FF66] mt-5 flex items-center gap-5 w-fit arrow-3"
                >
                  Learn more
                  <img src={arrow3} alt="arrow-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="working-process-wrap pb-28">
          <div className="working-top flex items-center gap-10 pb-20">
            <h2 className="head-title">Our Working Process </h2>
            <p>
              Step-by-Step Guide to Achieving <br />
              Your Business Goals
            </p>
          </div>
          <div className="accordion-wrap">
            <Accordion type="single" collapsible>
              {accordion_working_process.map((process, i) => {
                return (
                  <AccordionItem value={`item-${i}`} key={i} className="mb-8">
                    <AccordionTrigger>
                      <span className="text-6xl w-28">{process.number}</span>
                      <span className="text-3xl">{process.title}</span>
                    </AccordionTrigger>
                    <AccordionContent>{process.text}</AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
        <div className="team-wrap pb-28">
          <div className="team-top flex items-center gap-10 pb-20">
            <h2 className="head-title">Team</h2>
            <p>
              Meet the skilled and experienced team behind our <br />
              successful digital marketing strategies
            </p>
          </div>
          <div className="team-card-holder flex flex-wrap justify-between gap-y-10">
            {teamCard.map((team, i) => {
              return (
                <div
                  className="team-card border-[1px] border-[#191A23] rounded-[45px] w-[calc(33.333%_-_20px)] py-10 px-9 common-shadow top-hover"
                  key={i}
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
                </div>
              );
            })}
          </div>
        </div>
        <div className="testimonials-wrap">
          <div className="working-top flex items-center gap-10 pb-20">
            <h2 className="head-title">Testimonials</h2>
            <p>
              Hear from Our Satisfied Clients: Read Our Testimonials <br />
              to Learn More about Our Digital Marketing Services
            </p>
          </div>
          <div className="slides bg-[#191A23] pt-20 pb-16 text-white rounded-[45px] overflow-hidden">
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
                      className="pl-1 md:basis-1/2 w-1/2 cursor-grab"
                    >
                      <div className="p-1">
                        <div className="message border-[1px] border-[#B9FF66] rounded-[45px] py-10 px-14 mb-2">
                          {testimony.testimony}
                        </div>
                      </div>
                      <div className="person pt-8 pl-20">
                        <h4 className="text-[#B9FF66] font-semibold">
                          {testimony.name}
                        </h4>
                        <p>{testimony.position}</p>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="testimonials-btns flex items-center justify-center pt-32">
                <CarouselPrevious />
                <div className="flex justify-center space-x-2 mx-56">
                  {testimonialSLides.map((_, index) => (
                    <button
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
