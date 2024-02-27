"use client";
import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import { Poppins, Raleway, Nunito } from "next/font/google";

interface AccordionItem {
  title: string;
  body: string;
  pathToImage: string;
}

interface RoadmapItem {
  title: string;
  body: string;
  checked: boolean;
}

interface TeamMember {
  name: string;
  about: string;
  profilePicName: any;
  socials?: SocialLink[];
}

interface SocialLink {
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

const accordionData: AccordionItem[] = [
  {
    title: "Creating a Gas Order",
    body: "The user creates an order specifying the amount of Gas they want to purchase. They set a timeframe for when they need it, propose a price in their chosen token, and specify the security deposit required to ensure the transaction will be executed.",
    pathToImage: "/images/Image_placeholder.png",
  },
  {
    title: "Executor Accepts Order",
    body: "An executor reviews and selects orders they are willing to fulfill. They commit to sending the transaction on behalf of the user when requested. To guarantee this commitment, the executor locks in the security deposit specified by the user",
    pathToImage: "/images/Image_placeholder.png",
  },
  {
    title: "Transaction Request Processing",
    body: `Within the order's timeframe (e.g., 1 month), the user signs a transaction request, setting a deadline. This signature is sent to the executor (and other relevant parties if needed). The executor then includes the signature in the blockchain.`,
    pathToImage: "/images/Image_placeholder.png",
  },
  {
    title: "Transaction Execution or Executor Liquidation",
    body: `The executor carries out the transaction. If they fail to do so, any party can execute the transaction and claim part of the executor's security deposit. Alternatively, the user can choose to not proceed with the transaction and receive the part of executor's security deposit.`,
    pathToImage: "/images/Image_placeholder.png",
  },
];

const SOCIAL_ICONS_PATHS = {
  twitter: "/images/x-twitter.svg",
  github: "/images/github.svg",
  telegram: "/images/telegram.svg",
  medium: "/images/medium.svg.png",
  linkedin: "/images/linkedin.svg",
};

const TeamMemberData: TeamMember[] = [
  {
    name: "Maksym",
    about: "Oversees development and strategic goals",
    profilePicName: "/images/profile/Maksym.jpeg",
    socials: [
      {
        name: "twitter",
        iconPath: SOCIAL_ICONS_PATHS["twitter"],
        url: "https://twitter.com/web3skeptic",
      },
      {
        name: "github",
        iconPath: SOCIAL_ICONS_PATHS["github"],
        url: "https://github.com/web3skeptic",
      },
    ],
  },
  {
    name: "Stepan",
    about: "Designing and securing the protocol core",
    //profilePicName: "/images/profile/sekmak.jpeg",
    profilePicName: "/images/profile/Stepan_new.jpg",
    socials: [
      {
        name: "github",
        iconPath: SOCIAL_ICONS_PATHS["github"],
        url: "https://github.com/SteMak",
      },
      {
        name: "medium",
        iconPath: SOCIAL_ICONS_PATHS["medium"],
        url: "https://medium.com/@SteMak",
      },
      {
        name: "linkedin",
        iconPath: SOCIAL_ICONS_PATHS["linkedin"],
        url: "https://linkedin.com/in/SteMak",
      },
    ],
  },

  {
    name: "Tim",
    about: "Talking to the community and growing prepaidGas",
    profilePicName: "/images/profile/Tim.jpg",
    socials: [
      {
        name: "twitter",
        iconPath: SOCIAL_ICONS_PATHS["twitter"],
        url: "https://x.com/timmyjellyjelly",
      },
      {
        name: "linkedin",
        iconPath: SOCIAL_ICONS_PATHS["linkedin"],
        url: "https://www.linkedin.com/in/timretkoceri/",
      },
    ],
  },
  {
    name: "Nikita",
    about: "Ensuring a seamless and user-friendly interface",
    profilePicName: "/images/profile/Nikita_new.jpg",
    socials: [
      {
        name: "github",
        iconPath: SOCIAL_ICONS_PATHS["github"],
        url: "https://github.com/nikita-romashchenko",
      },
    ],
  },
];

const roadmapData: RoadmapItem[] = [
  {
    title: "Mar 24",
    body: "Smart contract implementation with meta-transaction support (ERC-2771)",
    checked: false,
  },
  {
    title: "April 24",
    body: "Develop basic bot to accept Gas orders",
    checked: false,
  },
  {
    title: "Q2 24",
    body: "Basic interface for the Gas purchasers",
    checked: false,
  },
  {
    title: "Jul 24",
    body: "Deploy smart contracts to the testnet",
    checked: false,
  },
  {
    title: "Aug 24",
    body: "Audit the smart contracts and verify their reliability",
    checked: false,
  },
  {
    title: "Q4 24",
    body: "Add Account Abstraction (EIP-4337) support",
    checked: false,
  },
  {
    title: "Q1 25",
    body: "Multichain Solution that enables trading Gas across different L2s",
    checked: false,
  },
  {
    title: "Q2 25",
    body: "Plaguing for with Ethers.js and web3.js libraries",
    checked: false,
  },
];

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main
      className={`${poppins.variable} ${raleway.variable} ${nunito.variable} font-nunito text-color-charcoal-gray`}
    >
      <div className="p-5">
        <header className="font-poppins">
          <div className="container">
            <div className="header_wrapper text-color-emerald">
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
                <a onClick={() => setIsSidebarOpen(false)} href="#description">
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
        <section className="heading">
          <div className="container">
            <div className="hero flex-col lg:flex-row lg:items-center">
              <div className="hero_left m-0 w-full text-center  lg:flex-1 lg:grow-[1.5] lg:w-[12.4em] lg:text-right">
                <h1 className="border-b-2 border-l-0 border-solid border-color-charcoal-gray lg:border-b-0 lg:border-r-2 text-transparent bg-clip-text bg-gradient-to-r from-color-vibrant-pink to-color-charcoal-gray">
                  Buy Gas now
                  <br />
                  use it later
                </h1>
              </div>
              <div className="hero_right pt-4 lg:pt-0 lg:pl-[20px] grow text-center lg:flex-1 lg:grow lg:text-left">
                <p className="">
                  The PrepaidGas protocol is a decentralized and permissionless
                  system that enables a Gas futures market. It allows L2s to
                  purchase Gas in advance to trade or utilize it as required in
                  the future.
                </p>
              </div>
            </div>
            <div className="hero_btns lg:ml-[80px]">
              <button
                //   className={`main_btn flex justify-center items-center font-raleway text-2xl font-extrabold rounded-md p-2 bg-gradient-to-l from-color-vibrant-pink to-color-charcoal-gray`}
                // >
                className={`main_btn flex justify-center items-center font-raleway text-2xl font-extrabold rounded-md p-2  bg-color-vibrant-pink hover:bg-color-sky-blue text-color-vibrant-pink hover:text-color-sky-blue`}
              >
                <div className="bg-color-soft-white h-full w-full p-[24px] rounded-md">
                  {/* <p className="text-transparent bg-clip-text bg-gradient-to-l from-color-vibrant-pink to-color-charcoal-gray"> */}
                  <p>Get Started</p>
                </div>
              </button>
              {/*<button className="secondary_btn">Request Demo</button>*/}
            </div>
          </div>
        </section>
        <section className="description" id="description">
          <div className="container">
            <h2 className="section_title">How does it work?</h2>
            <div className="accordion">
              {accordionData.map((item, index) => (
                <Accordion
                  key={`accordion_item-${index}`}
                  title={`Step ${index + 1}: ${item.title}`}
                  body={item.body}
                  pathToImg={item.pathToImage}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="roadmap mt-[100px]" id="roadmap">
          <div className="container">
            <h2 className="section_title">Roadmap</h2>
            <div className="roadmap_body mx-0 md:mx-[10%] lg:mx-[20%]">
              {roadmapData.map((item) => (
                <>
                  <h3>{item.title}</h3>
                  <div className="roadmap_item">
                    <input type="checkbox" disabled checked={item.checked} />
                    <p>{item.body}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>

        <section className="team" id="team">
          <div className="container">
            <h2 className="section_title">Team</h2>
            <div className="team_cards_wrapper">
              <div className="team_cards">
                {TeamMemberData.map((item, index) => (
                  <div
                    key={`team_cards_item-${index}`}
                    className="team_cards_item mx-1"
                  >
                    <img
                      src={item.profilePicName}
                      alt=""
                      className="rounded-[50%] w-auto md:w-[180px] lg:w-auto max-w-[250px] p-3"
                    />
                    <h3 className="text-color-emerald">{item.name}</h3>
                    <p className="text-center">{item.about}</p>
                    <div className="team_card_links hidden">
                      {item.socials?.map((i, index) => (
                        <a
                          key={`link-to-social-${item.name}-${index}`}
                          href={i.url}
                          target="_blank"
                        >
                          <img
                            src={i.iconPath}
                            alt={i.name}
                            width={30}
                            height={30}
                          />
                        </a>
                      ))}
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

        <section className="contact_us" id="contact_us">
          <div className="container">
            <h2 className="section_title">Contact us</h2>
            <div className="contact_info">
              <p>
                For inquiries, please contact us through our Telegram channel,
                Twitter, or by submitting an issue on GitHub.
              </p>
              <div className="contact_logos gap-20 my-12">
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
      <footer className="bg-color-charcoal-gray text-color-cool-gray">
        <div className="container">
          <p>
            PrepaidGas © {currentYear} years after Christ's birth | 13.8 billion
            years after the appearance of the universe
          </p>
        </div>
      </footer>
    </main>
  );
}
