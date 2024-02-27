import { RefObject, useEffect, useState } from "react";
import { useRef } from "react";

export interface AccordionItem {
  title: string;
  body: string;
  pathToImage: string;
}

export default function AccordionItem({
  title,
  body,
  pathToImage,
}: AccordionItem) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const accordionBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="accordion_item my-auto">
      <div
        className="mx-[5%] md:mx-[10%] lg:mx-[20%] z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="accordion_item_name filter_scale_lower">
          <img
            src="/images/arrow_down.svg"
            alt=""
            className={`transition-all duration-[500ms]  ${
              isOpen ? "rotate-180" : "transform-none"
            }`}
          />
          {title}
        </p>
      </div>
      <div
        ref={accordionBodyRef}
        className={`flex flex-col items-center justify-start lg:justify-center lg:items-start lg:flex-row lg:gap-4 transition-all duration-[500ms] ${
          isOpen
            ? `max-h-[1000px] opacity-100 overflow-hidden`
            : "max-h-0 opacity-0"
        }`}
      >
        <p
          ref={descriptionRef}
          className={`text-center text-xl lg:text-left accordion_item_content ${
            isOpen ? "flex" : "pointer-events-none"
          }`}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
