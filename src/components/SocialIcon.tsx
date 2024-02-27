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
  width,
  height,
  color = "",
}: {
  className?: string;
  socialNetwork: string;
  width: string;
  height: string;
  color?: string;
}) {
  const renderIcon = (socialName: string) => {
    const colorToApply = color ? color : MAIN_ICON_COLOR;
    switch (socialName) {
      case "twitter":
        return (
          <LogoTwitter color={colorToApply} height={height} width={width} />
        );
      case "github":
        return (
          <LogoGithub color={colorToApply} height={height} width={width} />
        );
      case "telegram":
        return (
          <PaperPlane color={colorToApply} height={height} width={width} />
        );
      case "medium":
        return (
          <LogoMedium color={colorToApply} height={height} width={width} />
        );
      case "linkedin":
        return (
          <LogoLinkedin color={colorToApply} height={height} width={width} />
        );
      default:
        break;
    }
  };

  return <div className={className}>{renderIcon(socialNetwork)}</div>;
}
