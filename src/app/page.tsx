"use client";
import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import { Inter } from "next/font/google";

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

const inter = Inter({
  weight: ["400", "500", "600", "900"], // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
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
  useEffect(() => console.log(isSidebarOpen), [isSidebarOpen]);

  return (
    <main className={inter.className}>
      <div className="p-5">
        <header>
          <div className="container">
            <div className="header_wrapper">
              <div className="header_logo !bg-transparent !w-auto !h-auto text-xl md:text-xl lg:text-2xl font-[900] flex flex-row gap-3 items-center">
                <img
                  src="/images/logo.png"
                  alt="Prepaid gas logo"
                  className="w-[64px]"
                />
                prepaidGas
              </div>
              <div className="header_links">
                <a href="#description">How does it work?</a>
                <a href="#use_cases">Use cases</a>
                <a href="#contact_us">Contact us</a>
                <a href="#roadmap">Roadmap</a>
                <a href="#team">Team</a>
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
        <div className="bg1"></div>
        <section className="heading">
          <div className="container">
            <div className="hero flex-col lg:flex-row lg:items-center">
              <div className="hero_left m-0 w-full text-center  lg:flex-1 lg:grow-[1.5] lg:w-[12.4em] lg:text-right">
                <h1 className="border-b-2 border-l-0 border-solid border-custom-brown lg:border-b-0 lg:border-r-2">
                  Buy Gas now
                  <br />
                  use it later
                </h1>
              </div>
              <div className="hero_right pt-4 lg:pt-0 lg:pl-[20px] grow text-center lg:flex-1 lg:grow lg:text-left">
                <p>
                  The PrepaidGas protocol is a decentralized and permissionless
                  system that enables a Gas futures market. It allows
                  individuals to purchase Gas in advance to trade or utilize it
                  as required in the future.
                </p>
              </div>
            </div>
            <div className="hero_btns lg:ml-[80px]">
              <button className="main_btn">Get Started </button>
              {/*<button className="secondary_btn">Request Demo</button>*/}
            </div>
          </div>
        </section>
        <section className="description" id="description">
          <div className="container">
            <h2>How does it work?</h2>
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
        <section className="use_cases" id="use_cases">
          <div className="container">
            <h2>Use cases</h2>
            <div className="use_cases_content  flex-col gap-0 mt-10 md:gap-7 md:flex-row">
              <div className="use_cases_content_left ">
                <h3>Layer 2 Networks</h3>
                <p>
                  A significant portion of Gas costs are incurred by Layer 2
                  networks operating on the Ethereum blockchain. These networks
                  often have predictable and regular Gas consumption patterns.
                  However, they are susceptible to fluctuations in Ethereum Gas
                  prices, particularly in USD. Our solution offers
                  infrastructure that helps stabilize the cost of Layer 1
                  expenses, making financial planning more predictable for L2
                  networks.
                </p>
                {/*<a href="">Read more</a>*/}
              </div>
              <div className="use_cases_content_right md:gap-7 ">
                <div className="use_cases_second_block mt-5 md:mt-0">
                  <a href="">DAOs and Voting</a>
                  <p>
                    DAO (Decentralized Autonomous Organization) voting and
                    actions usually involve pre-planned procedures. The number
                    of voters and the associated costs are often predictable. We
                    offer a service for DAOs to purchase Gas in advance, which
                    can then be allocated to voters. This removes the need for
                    voters to top up their balances, enhancing user onboarding,
                    increasing adoption, and making governance costs more
                    predictable
                  </p>
                </div>
                <div className="use_cases_third_block mt-5 md:mt-0">
                  <a href="">Account Abstraction</a>
                  <p>
                    Account abstraction allows Gas fees to be paid in various
                    tokens. We recommend regular users purchase Gas in advance
                    using any token of their choice, to protect against Gas
                    price volatility. Additionally, users can delegate Gas to
                    others, simplifying the onboarding process by eliminating
                    the need for new users to initially fund their wallets. This
                    feature enhances user experience and financial security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact_us" id="contact_us">
          <div className="container">
            <h2>Contact us</h2>
            <div className="contact_info">
              <p>
                For inquiries, please contact us through our Telegram channel,
                Twitter, or by submitting an issue on GitHub.
              </p>
              <div className="contact_logos gap-[10%]">
                <a href="https://t.me/prepaidgas" target="_blank">
                  <img
                    src={SOCIAL_ICONS_PATHS["telegram"]}
                    alt="Link to our telegram channel"
                  />
                  <p>telegram</p>
                </a>
                <a href="https://github.com/prepaidgas" target="_blank">
                  <img
                    src={SOCIAL_ICONS_PATHS["github"]}
                    alt="Link to github page"
                  />
                  <p>github</p>
                </a>
                <a href="https://twitter.com/prepaidgas_io" target="_blank">
                  <img
                    src={SOCIAL_ICONS_PATHS["twitter"]}
                    alt="Link to github page"
                  />
                  <p>X/twitter</p>
                </a>
              </div>
              {/* <form className="contact_form">
              <input type="text" />
              <button type="submit">Get the demo</button>
            </form> */}
            </div>
          </div>
        </section>

        <section className="roadmap mt-[100px]" id="roadmap">
          <div className="container">
            <h2>Roadmap</h2>
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

              {/* todo: remove old roadmap if not needed */}
              {/* <div className="roadmap_item">
                <input type="checkbox" disabled checked />
                <p>
                  <b>Frontend Development</b>: Creation of a GasOrder explorer
                  interface
                </p>
              </div>
              <h3>Version 0.2</h3>
              <div className="roadmap_item">
                <input type="checkbox" disabled />
                <p>
                  <b>Multichain Solution</b>: Development of a system that
                  enables trading Gas on one chain (such as Layer 2 networks)
                  and using it on the Layer 1 Ethereum network
                </p>
              </div>
              <h3>Version 0.3</h3>
              <div className="roadmap_item">
                <input type="checkbox" disabled />
                <p>
                  <b>Library Integration</b>: Integration with Ethers.js and
                  web3.js libraries to broaden functionality and ease of use
                </p>
              </div>
              <h3>Version 0.4</h3>
              <div className="roadmap_item">
                <input type="checkbox" disabled />
                <p>
                  <b>Account Abstraction Support:</b>: Incorporation of Account
                  Abstraction (EIP-4337), enhancing user experience and
                  transaction flexibility.
                </p>
              </div> */}
            </div>
          </div>
        </section>
        <section className="team" id="team">
          <div className="container">
            <h2>Team</h2>
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
                    <h3>{item.name}</h3>
                    <p className="text-center">{item.about}</p>
                    <div className="team_card_links hidden lg:flex">
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
                    <div className="mt-4 flex flex-row gap-4 lg:hidden">
                      {item.socials?.map((i, index) => (
                        <a
                          key={`link-to-social-${item.name}-${index}`}
                          href={i.url}
                          target="_blank"
                        >
                          <img
                            className="max-w-[2rem]"
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
      </div>
      <footer>
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
