"use client";
import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import { Poppins, Raleway, Nunito } from "next/font/google";
import {
  SOCIAL_ICONS_PATHS,
  TeamMemberData,
  accordionData,
  roadmapData,
} from "@/constants";
import Roadmap from "@/components/Roadmap/Roadmap";

export interface TeamMember {
  name: string;
  about: string;
  profilePicName: any;
  socials?: SocialLink[];
}

export interface SocialLink {
  name: string;
  iconPath: string;
  url: string;
}

const poppins = Poppins({
  weight: ["400", "500", "600", "900"], // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
  variable: "--font-poppins",
});

const raleway = Raleway({
  weight: ["400", "500", "600", "900"], // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
  variable: "--font-raleway",
});

const nunito = Nunito({
  weight: ["400", "500", "600", "900"], // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
  variable: "--font-nunito",
});

const currentYear = new Date().getFullYear();

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main
      className={`${poppins.variable} ${raleway.variable} ${nunito.variable} font-nunito text-color-charcoal-gray`}
    >
      <div className="p-5 flex flex-col items-center">
        <div className="min-h-[100vh] w-full items-center flex flex-col">
          <header className="font-poppins w-full lg:w-full max-w-[1024px]">
            <div className="">
              <div className="header_wrapper flex flex-row gap-0 justify-between">
                <div className="header_logo !bg-transparent !w-auto !h-auto text-xl md:text-xl lg:text-2xl font-[900] flex flex-row gap-3 items-center cursor-default">
                  <img
                    src="/images/logo.png"
                    alt="Prepaid gas logo"
                    className="w-[64px]"
                  />
                  prepaidGas
                </div>
                <div className="header_links">
                  <a href="#description">How does it work?</a>
                  {/* <a href="#use_cases">Use cases</a> */}
                  <a href="#roadmap">Roadmap</a>
                  <a href="#team">Team</a>
                  <a href="#contact_us">Contact us</a>
                  <a href="">Blog</a>
                </div>
                <div
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="mobile_button"
                >
                  <img
                    id="close-btn"
                    src="/images/mobile_open.svg"
                    alt="Open sidebar button"
                    className={`mobile_open !md:hidden transition duration-500 ease-in-out ${
                      isSidebarOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    id="open-btn"
                    src="/images/mobile_close.svg"
                    alt="Close sidebar button"
                    className={`mobile_close !md:hidden transition duration-500 ease-in-out ${
                      isSidebarOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
                <div
                  className={`header_links_mobile flex !md:hidden transform transition duration-500 ease-in-out  ${
                    isSidebarOpen ? "translate-x-[0%]" : "translate-x-[100%]"
                  }`}
                >
                  <a
                    onClick={() => setIsSidebarOpen(false)}
                    href="#description"
                  >
                    How does it work?
                  </a>
                  <a onClick={() => setIsSidebarOpen(false)} href="#use_cases">
                    Use cases
                  </a>
                  <a onClick={() => setIsSidebarOpen(false)} href="#contact_us">
                    Contact us
                  </a>
                  <a onClick={() => setIsSidebarOpen(false)} href="#roadmap">
                    Roadmap
                  </a>
                  <a onClick={() => setIsSidebarOpen(false)} href="#team">
                    Team
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div className="bg1 bg-color-sky-blue"></div>
          <section className="mt-[10%] font-raleway w-full max-w-[1024px]">
            {/* <div className="">
            <div className="hero flex-col lg:flex-row lg:items-center">
              <div className="hero_left m-0 w-full text-center  lg:flex-1 lg:grow-[1.5] lg:w-[12.4em] lg:text-right">

              </div>
              <div className="hero_right pt-4 lg:pt-0 lg:pl-[20px] grow text-center lg:flex-1 lg:grow lg:text-left">

              </div>
            </div>
            <div className="hero_btns">
              <button
                className={`main_btn flex justify-center items-center font-raleway text-2xl font-extrabold rounded-md p-2  bg-color-vibrant-pink hover:bg-color-sky-blue text-color-vibrant-pink hover:text-color-sky-blue`}
              >
                <div className="bg-color-soft-white h-full w-full p-[24px] rounded-md">
                  <p>Get Started</p>
                </div>
              </button>
            </div>
          </div> */}
            <div className="flex flex-col gap-4">
              <h1 className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-color-vibrant-pink to-color-charcoal-gray">
                Buy Gas now
                <br />
                use it later
              </h1>
              <p className="text-2xl font-light max-w-[500px]">
                The PrepaidGas protocol is a decentralized and permissionless
                system that enables a Gas futures market. It allows L2s to
                purchase Gas in advance to trade or utilize it as required in
                the future.
              </p>
              <button className="btn">
                <p>Get started</p>
              </button>
            </div>
          </section>
        </div>

        <section className="description" id="description">
          <div className="container">
            <h2 className="section_title">How does it work?</h2>
            <div className="mt-8">
              {accordionData.map((item, index) => (
                <Accordion
                  key={`accordion_item-${index}`}
                  title={`Step ${index + 1}: ${item.title}`}
                  body={item.body}
                  pathToImage={item.pathToImage}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="roadmap mt-16" id="roadmap">
          <div className="container">
            <h2 className="section_title">Roadmap</h2>
            <div className="flex flex-col justify-center items-center">
              <Roadmap roadmapData={roadmapData} />
            </div>
          </div>
        </section>

        <section className="mt-16" id="team">
          <div className="container">
            <h2 className="section_title">Team</h2>
            <div className="team_cards_wrapper">
              <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 lg:flex lg:flex-row lg:justify-between lg:gap-0">
                {TeamMemberData.map((item, index) => (
                  <div
                    key={`team_cards_item-${index}`}
                    className="flex flex-col items-center mx-1 md:justify-between"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={item.profilePicName}
                        alt=""
                        className="rounded-[50%] lg:w-[200px] md:p-0 max-w-[250px] p-3 mb-[10px]"
                      />
                      <h3 className="text-[30px] mb-[5px] text-center font-medium">
                        {item.name}
                      </h3>
                      <p className="text-center mb-[12px] h-[50px] max-w-[250px]">
                        {item.about}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-row gap-4">
                      {item.socials?.map((i, index) => (
                        <a
                          key={`link-to-social-${item.name}-${index}`}
                          href={i.url}
                          target="_blank"
                        >
                          <img
                            className="w-[2rem] h-[2rem] filter_scale"
                            src={i.iconPath}
                            alt={i.name}
                          />
                        </a>
                      ))}
                    </div>
                    <div className="team_card_bg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16" id="contact_us">
          <div className="container">
            <h2 className="section_title">Contact us</h2>
            <div className="contact_info">
              <div className="contact_logos gap-20 my-4">
                <a href="https://t.me/prepaidgas" target="_blank">
                  <img
                    className="filter_scale"
                    src={SOCIAL_ICONS_PATHS["telegram"]}
                    alt="Link to our telegram channel"
                    width={64}
                    height={64}
                  />
                </a>
                <a href="https://github.com/prepaidgas" target="_blank">
                  <img
                    className="filter_scale"
                    src={SOCIAL_ICONS_PATHS["github"]}
                    alt="Link to github page"
                    width={64}
                    height={64}
                  />
                </a>
                <a href="https://twitter.com/prepaidgas_io" target="_blank">
                  <img
                    className="filter_scale"
                    src={SOCIAL_ICONS_PATHS["twitter"]}
                    alt="Link to github page"
                    width={64}
                    height={64}
                  />
                </a>
              </div>
              {/* <form className="contact_form">
              <input type="text" />
              <button type="submit">Get the demo</button>
            </form> */}
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-color-charcoal-gray text-color-cool-gray flex justify-center">
        <div className="p-5 flex flex-col-reverse gap-4 md:flex-row md:gap-0 items-center w-full md:justify-between max-w-[1024px]">
          <p className="shrink-0 text-center md:text-left">
            PrepaidGas © {currentYear} years after Christ's birth
            <br></br>
            13.8 billion years after the appearance of the universe
          </p>
          <div className="flex gap-10 shrink-0">
            <a href="https://t.me/prepaidgas" target="_blank">
              <img
                className="filter_scale"
                src={SOCIAL_ICONS_PATHS["telegram"]}
                alt="Link to our telegram channel"
                width={32}
                height={32}
              />
            </a>
            <a href="https://github.com/prepaidgas" target="_blank">
              <img
                className="filter_scale"
                src={SOCIAL_ICONS_PATHS["github"]}
                alt="Link to github page"
                width={32}
                height={32}
              />
            </a>
            <a href="https://twitter.com/prepaidgas_io" target="_blank">
              <img
                className="filter_scale"
                src={SOCIAL_ICONS_PATHS["twitter"]}
                alt="Link to github page"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
