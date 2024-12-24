export default function HeroSection() {
  return (
    <section className="font-raleway w-full p-16">
      <div className="flex flex-col gap-10 md:gap-4 relative">
        <p className="text-5xl sm:text-6xl md:text-8xl max-w-[750px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-color-charcoal-gray to-color-cool-gray relative text-center md:text-left">
          Buy Gas now
          <span className="bg1 bg-color-emerald blur-[60px] top-[-20%] sm:top-[-15%] left-[10%] md:left-[-10%] w-[10rem] h-[10rem] md:w-[12rem] md:h-[12rem]"></span>
          <br />
          use it later
        </p>
        <p className="text-xl md:text-2xl font-light mx-0 sm: md:max-w-[500px] text-center md:text-left">
          The PrepaidGas protocol is a decentralized and permissionless system
          that enables a Gas futures market. It allows L2s to purchase Gas in
          advance to trade or utilize it as required in the future
        </p>
        <div className="flex flex-col md:flex-row items-center mt-4 gap-2 md:gap-6">
          <a target="_blank" href="https://app.prepaidgas.io/">
            <button className="btn font-raleway">
              <p>Launch app</p>
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
            href="https://docs.prepaidgas.io/"
            target="_blank"
            className="w-[200px] h-[60px] flex justify-center items-center filter_scale"
          >
            <span className="text-xl font-semibold text-color-emerald">
              documentation
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
