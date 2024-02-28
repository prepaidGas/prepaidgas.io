import {
  LogoTwitter,
  LogoGithub,
  PaperPlane,
  LogoMedium,
  LogoLinkedin,
} from "react-ionicons";
import { MAIN_ICON_COLOR } from "@/constants";

export default function SocialIcon({
  className = "",
  socialNetwork,
  width = "0px",
  height = "0px",
  color = "",
}: {
  className?: string;
  socialNetwork: string;
  width?: string;
  height?: string;
  color?: string;
}) {
  const renderIcon = (socialName: string) => {
    const colorToApply = color ? color : MAIN_ICON_COLOR;
    switch (socialName) {
      case "twitter":
        return (
          <LogoTwitter
            cssClasses={className}
            color={colorToApply}
            height={height}
            width={width}
          />
        );
      case "github":
        return (
          <LogoGithub
            cssClasses={className}
            color={colorToApply}
            height={height}
            width={width}
          />
        );
      case "telegram":
        return (
          <PaperPlane
            cssClasses={className}
            color={colorToApply}
            height={height}
            width={width}
          />
        );
      case "medium":
        return (
          <LogoMedium
            cssClasses={className}
            color={colorToApply}
            height={height}
            width={width}
          />
        );
      case "linkedin":
        return (
          <LogoLinkedin
            cssClasses={className}
            color={colorToApply}
            height={height}
            width={width}
          />
        );
      default:
        break;
    }
  };

  return <div className={className}>{renderIcon(socialNetwork)}</div>;
}
