import SocialIcon from "../SocialIcon";

export default function ContactUsSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="" id="contact_us">
      <div className="flex flex-col items-center">
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
        <footer className="text-color-charcoal-gray flex justify-center">
          <div className="px-5 py-7 flex flex-col-reverse gap-4 md:flex-row md:gap-0 items-center w-full md:justify-between max-w-[1024px]">
            <p className="text-color-charcoal-gray text-base text-opacity-50 md:text-2xl font-light shrink-0 text-center md:text-left">
              prepaidGas © {currentYear}
            </p>
            {/* <div className="flex gap-4 shrink-0">
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
                      <a
                        href="https://twitter.com/prepaidgas_io"
                        target="_blank"
                      >
                        <SocialIcon
                          className="filter_scale !w-5 !h-5"
                          socialNetwork="twitter"
                          color={COLOR_SCHEME.COOL_GRAY}
                        />
                      </a>
                    </div> */}
          </div>
        </footer>
      </div>
    </section>
  );
}
