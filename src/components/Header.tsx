import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="box-border font-poppins w-full h-16 block fixed top-0 left-0 z-[1000] p-2">
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
          <a
            onClick={() => setIsSidebarOpen(false)}
            href="https://medium.com/@prepaidGas"
            target="_blank"
          >
            Blog
          </a>
        </div>
      </div>
    </header>
  );
}
