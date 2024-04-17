"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Script from "next/script";
import { Poppins, Raleway, Nunito } from "next/font/google";
import {
  COLOR_SCHEME,
  SOCIAL_ICONS_PATHS,
  TeamMemberData,
  accordionData,
  roadmapData,
} from "@/constants";
import Roadmap from "@/components/Roadmap/Roadmap";
import SocialIcon from "@/components/SocialIcon";

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
  const [activeTabWorkflow, setActiveTabWorkflow] = useState(0);

  const editorRef = useRef(null);

  return (
    <>
      <Script
        src="https://www.cognitoforms.com/f/iframe.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, contactForm has been populated`)
        }
      />
      <main
        className={`${poppins.variable} ${raleway.variable} ${nunito.variable} font-nunito text-color-charcoal-gray`}
      >
        <div className="p-5 flex flex-col items-center">
          <div className="lg:min-h-[100vh] w-full items-center flex flex-col">
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
                    <a href="#description" className="active_header">
                      How does it work?
                    </a>
                    {/* <a href="#use_cases">Use cases</a> */}
                    <a href="#roadmap">Roadmap</a>
                    <a href="#team">Team</a>
                    <a href="#contact_us">Contact us</a>
                    <a target="_blank" href="https://medium.com/@prepaidGas">
                      Blog
                    </a>
                  </div>
                  <div
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="mobile_button z-50"
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
                    className={`header_links_mobile z-40 flex !md:hidden transform transition duration-500 ease-in-out  ${
                      isSidebarOpen ? "translate-x-[0%]" : "translate-x-[100%]"
                    }`}
                  >
                    <a
                      onClick={() => setIsSidebarOpen(false)}
                      href="#description"
                    >
                      How does it work?
                    </a>
                    <a
                      onClick={() => setIsSidebarOpen(false)}
                      href="#use_cases"
                    >
                      Use cases
                    </a>
                    <a
                      onClick={() => setIsSidebarOpen(false)}
                      href="#contact_us"
                    >
                      Contact us
                    </a>
                    <a onClick={() => setIsSidebarOpen(false)} href="#roadmap">
                      Roadmap
                    </a>
                    <a onClick={() => setIsSidebarOpen(false)} href="#team">
                      Team
                    </a>
                    <a
                      onClick={() => setIsSidebarOpen(false)}
                      href="https://medium.com/@prepaidGas"
                      target="_blank"
                    >
                      Blog
                    </a>
                  </div>
                </div>
              </div>
            </header>
            <section className="mt-14 md:mt-[150px] md:ml-8 lg:mt-[175px] font-raleway w-full md:max-w-[1024px]">
              <div className="flex flex-col gap-10 md:gap-4 relative">
                <p className="text-5xl sm:text-6xl md:text-8xl max-w-[750px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-color-charcoal-gray to-color-cool-gray relative text-center md:text-left">
                  Buy Gas now
                  <span className="bg1 bg-color-emerald blur-[60px] top-[-20%] sm:top-[-15%] left-[10%] md:left-[-10%] w-[10rem] h-[10rem] md:w-[12rem] md:h-[12rem]"></span>
                  <br />
                  use it later
                </p>
                <p className="text-xl md:text-2xl font-light mx-0 sm: md:max-w-[500px] text-center md:text-left">
                  The PrepaidGas protocol is a decentralized and permissionless
                  system that enables a Gas futures market. It allows L2s to
                  purchase Gas in advance to trade or utilize it as required in
                  the future
                </p>
                <div className="flex flex-col md:flex-row items-center mt-4 gap-2 md:gap-6">
                  <a
                    target="_blank"
                    href="https://www.cognitoforms.com/Ppg14/JoinWaitlist"
                  >
                    <button className="btn font-raleway">
                      <p>Get started</p>
                    </button>
                  </a>

                  {/* <a
                    href="/prepaidGas_pitchdeck.pdf"
                    target="_blank"
                    className="w-[200px] h-[60px] flex justify-center items-center filter_scale"
                  >
                    <span className="text-xl font-semibold text-color-emerald">
                      view our pitch deck
                    </span>
                  </a> */}
                  <a
                    href="https://www.dropbox.com/scl/fi/kms4swyg67uu5h5ysi5t8/prepaidGas-Pitchdeck-Public.pptx?rlkey=4g5y8dcobvby6ta6m919ae5f9&dl=0"
                    target="_blank"
                    className="w-[200px] h-[60px] flex justify-center items-center filter_scale"
                  >
                    <span className="text-xl font-semibold text-color-emerald">
                      view our pitch deck
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <section id="description" className="mt-[100px] lg:mt-0">
            <div className="container">
              <h2 className="section_title">How does it work?</h2>
              <div className="wrapper">
                <div className="tabs mt-[10px] md:mt-5">
                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-1"
                      className="tab-switch"
                      checked={activeTabWorkflow === 0}
                      onChange={() => setActiveTabWorkflow(0)}
                    />
                    <label htmlFor="tab-1" className="tab-label">
                      Purchase Gas
                    </label>
                  </div>
                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-2"
                      className="tab-switch"
                      checked={activeTabWorkflow === 1}
                      onChange={() => setActiveTabWorkflow(1)}
                    />
                    <label htmlFor="tab-2" className="tab-label">
                      Manage Orders
                    </label>
                  </div>
                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-3"
                      className="tab-switch"
                      checked={activeTabWorkflow === 2}
                      onChange={() => setActiveTabWorkflow(2)}
                    />
                    <label htmlFor="tab-3" className="tab-label">
                      Request tx Executions
                    </label>
                  </div>
                </div>
                <div className="content">
                  <div
                    className={`tab-content ${
                      activeTabWorkflow == 0 ? "active" : ""
                    }`}
                  >
                    The user creates an order specifying the amount of Gas they
                    want to purchase, setting a timeframe, proposing a price,
                    and specifying the required security deposit.
                    <img src="/images/workflow/createOrder-min.png" alt="" />
                  </div>
                  <div
                    className={`tab-content ${
                      activeTabWorkflow == 1 ? "active" : ""
                    }`}
                  >
                    A user reviews orders they are willing to proceed with, gets
                    information on the status of the orders, and manages the
                    amount of gas remaining in their order. Additionally, they
                    have the ability to transfer gas to other users or utilize
                    it themselves.
                    <img src="/images/workflow/searchOrder-min.png" alt="" />
                  </div>
                  <div
                    className={`tab-content ${
                      activeTabWorkflow == 2 ? "active" : ""
                    }`}
                  >
                    The user signs a transaction request within the specified
                    timeframe, setting a deadline. This request is sent to the
                    executor and relevant parties. The executor includes the
                    signature in the blockchain.
                    <img
                      src="/images/workflow/requestTransaction-min.png"
                      alt=""
                    />
                  </div>
                </div>
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
            <div className="">
              <h2 className="section_title">Team</h2>
              <div className="team_cards_wrapper mt-8">
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
                      <div className="mt-0 mb-8 flex flex-row gap-4 lg:gap-0">
                        {item.socials?.map((i, index) => (
                          <a
                            key={`link-to-social-${item.name}-${index}`}
                            href={i.url}
                            target="_blank"
                            className="p-0 lg:p-3 filter_scale"
                          >
                            {/* <img
                            className="w-[2rem] h-[2rem] filter_scale"
                            src={i.iconPath}
                            alt={i.name}
                          /> */}
                            <SocialIcon
                              className="!w-12 !h-12 lg:!w-9 lg:!h-9"
                              socialNetwork={i.name}
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

          <section className="mt-8" id="contact_us">
            <div className="">
              <h2 className="section_title">Contact us</h2>
              <div className="mt-4">
                <iframe src="https://www.cognitoforms.com/f/ELMFvcHfXkGMVtmejURYxA/5"></iframe>
              </div>
              <div className="mt-12">
                <div className="contact_logos gap-10">
                  <a href="https://t.me/prepaidgas" target="_blank">
                    <SocialIcon
                      className="filter_scale !h-[64px] !w-[64px]"
                      socialNetwork="telegram"
                    />
                  </a>
                  <a href="https://github.com/prepaidgas" target="_blank">
                    <SocialIcon
                      className="filter_scale !h-[64px] !w-[64px]"
                      socialNetwork="github"
                    />
                  </a>
                  <a href="https://twitter.com/prepaidgas_io" target="_blank">
                    <SocialIcon
                      className="filter_scale !h-[64px] !w-[64px]"
                      socialNetwork="twitter"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="bg-color-charcoal-gray text-color-cool-gray flex justify-center">
          <div className="px-5 py-7 flex flex-col-reverse gap-4 md:flex-row md:gap-0 items-center w-full md:justify-between max-w-[1024px]">
            <p className="shrink-0 text-center md:text-left">
              PrepaidGas © {currentYear}
              <br></br>
              13.8 billion years after the appearance of the universe
            </p>
            <div className="flex gap-4 shrink-0">
              <a href="https://t.me/prepaidgas" target="_blank">
                <SocialIcon
                  className="filter_scale !w-5 !h-5"
                  socialNetwork="telegram"
                  color={COLOR_SCHEME.COOL_GRAY}
                />
              </a>
              <a href="https://github.com/prepaidgas" target="_blank">
                <SocialIcon
                  className="filter_scale !w-5 !h-5"
                  socialNetwork="github"
                  color={COLOR_SCHEME.COOL_GRAY}
                />
              </a>
              <a href="https://twitter.com/prepaidgas_io" target="_blank">
                <SocialIcon
                  className="filter_scale !w-5 !h-5"
                  socialNetwork="twitter"
                  color={COLOR_SCHEME.COOL_GRAY}
                />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
