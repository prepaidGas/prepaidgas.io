import { RefObject, useEffect, useState } from "react";
import { useRef } from "react";

interface AccordionProps {
  title: string;
  body: string;
  pathToImg: string;
}

export default function AccordionItem({
  title,
  body,
  pathToImg,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const accordionBodyRef = useRef<HTMLDivElement>(null);

  const handleOpening = () => {
    if (descriptionRef.current === null || accordionBodyRef.current === null)
      return;

    if (isOpen) {
      accordionBodyRef.current.style.maxHeight =
        descriptionRef.current.scrollHeight + "px";
      descriptionRef.current.style.display = "flex";
    } else {
      accordionBodyRef.current.style.maxHeight = 0 + "px";
      descriptionRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    console.log(isOpen);
    //handleOpening();
  }, [isOpen]);

  return (
    <div className="accordion_item my-auto">
      <div
        className="mx-[5%] md:mx-[10%] lg:mx-[20%] z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="accordion_item_name ">
          <img
            src="/docs/images/arrow_down.svg"
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
        className={`flex flex-col items-center justify-start lg:justify-center lg:items-start lg:flex-row lg:gap-4 transition-all duration-[500ms]  ${
          isOpen
            ? `max-h-[300px] opacity-100 overflow-y-scroll`
            : "max-h-0 opacity-0"
        }`}
      >
        <img
          className={`h-[10rem] w-[10rem] lg:h-[15rem] lg:w-[15rem] ${
            isOpen ? "flex" : "pointer-events-none"
          }`}
          src="/docs/images/img_placeholder.png"
          alt=""
        />
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

// export default function AccordionItem({
//   title,
//   body,
//   pathToImg,
// }: AccordionProps) {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const descriptionRef = useRef<HTMLParagraphElement>(null);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => console.log(isOpen), [isOpen]);

//   return (
//     <div className="accordion_item" onClick={handleClick}>
//       <p className="accordion_item_name">
//         <img
//           className={`transition-all ${
//             isOpen ? "rotate-180" : "transform-none"
//           }`}
//           src="/docs/images/arrow_down.svg"
//           alt=""
//         />{" "}
//         {title}
//       </p>
//       <p
//         ref={descriptionRef}
//         className={`accordion_item_content transition-all ${
//           isOpen
//             ? `max-h-[${descriptionRef?.current?.scrollHeight}px] opacity-100`
//             : "max-h-none opacity-[0.01]"
//         }`}
//       >
//         <img src={pathToImg} alt="" />
//         {body}
//       </p>
//     </div>
//   );
// }
