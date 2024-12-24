"use client";
import styles from "./styles/Home.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Script from "next/script";
import { Poppins, Raleway, Nunito } from "next/font/google";
import {
  COLOR_SCHEME,
  SOCIAL_ICONS_PATHS,
  TeamMemberData,
  accordionData,
} from "@/constants";

import SnapScrollPage from "@/components/SnapScrollPage";
import Mysection from "@/components/Sections/Mysection";
import Header from "@/components/Header";
import HeroSection from "@/components/Sections/HeroSection";
import HDIWSection from "@/components/Sections/HDIWSection";
import ContactUsSection from "@/components/Sections/ContactUsSection";

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
// @todo check if this Script thing works after i transfered Contact Us section to a
// different component

export default function Home() {
  const section1 = useRef<HTMLDivElement>(null);
  const section2 = useRef<HTMLDivElement>(null);
  const section3 = useRef<HTMLDivElement>(null);

  function scrollTo(section: any) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Script
        src="https://www.cognitoforms.com/f/iframe.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, contactForm has been populated`)
        }
      />
      {/* <main
        className={`${poppins.variable} ${raleway.variable} ${nunito.variable} font-nunito text-color-charcoal-gray px-5 flex flex-col items-center md:max-w-[1024px]"`}
      >
        <div className="p-5 flex flex-col items-center">
          <SnapScrollPage sections={[]} />
        </div>
      </main> */}
      <main
        className={`container ${styles.container} text-color-charcoal-gray`}
      >
        <div ref={section1}>
          <Mysection
            image={`/images/austin-neill-Be7DMcK7k3o-unsplash.jpg`}
            headline={`Lorem Ipsum Dolor Sit Amet`}
            goToSectionRef={section2}
            scrollTo={scrollTo}
            showArrow={true}
          >
            {<HeroSection />}
          </Mysection>
        </div>
        <div ref={section2}>
          <Mysection
            image={`/images/chris-chan-wA-dbT3FJnE-unsplash.jpg`}
            headline={`Lorem Ipsum Dolor Sit Amet`}
            goToSectionRef={section3}
            scrollTo={scrollTo}
            showArrow={true}
          >
            {/* {<HDIWSection />} */}
            {<span>kek</span>}
          </Mysection>
        </div>
        <div ref={section3}>
          <Mysection
            image={`/images/michael-olsen--djS1aPrSr4-unsplash.jpg`}
            headline={`Lorem Ipsum Dolor Sit Amet`}
            goToSectionRef={section1}
            scrollTo={scrollTo}
            showArrow={false}
          >
            {<ContactUsSection />}
          </Mysection>
        </div>
      </main>
    </>
  );
}
