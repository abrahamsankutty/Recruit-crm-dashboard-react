import { ArrowRightIcon } from "../../../assets/images/svg/ArrowRight";
import { DotIcon } from "../../../assets/images/svg/Dot";
import { FacebookLogo } from "../../../assets/images/svg/FacebookLogo";
import { GithubLogo } from "../../../assets/images/svg/GithubLogo";
import { LinkedinLogo } from "../../../assets/images/svg/LinkedlnLogo";
import { RecruitLogo } from "../../../assets/images/svg/Recruit-logo";
import { RecruitMobileLogo } from "../../../assets/images/svg/Recruit-logo-mobile";
import { TimeIcon } from "../../../assets/images/svg/Time";
import { TwitterLogo } from "../../../assets/images/svg/TwitterLogo";
import { VectorLogo } from "../../../assets/images/svg/VectorLogo";

type Props = {
  name: string;
  className?: string;
};
export default function Icon({ name, className }: Props) {
  switch (name) {
    case "DotIcon":
      return <DotIcon className={className} />;
    case "RecruitLogo":
      return <RecruitLogo className={className} />;
    case "ArrowRightIcon":
      return <ArrowRightIcon className={className} />;
    case "TimeIcon":
      return <TimeIcon className={className} />;
    case "VectorLogo":
      return <VectorLogo className={className} />;
    case "FacebookLogo":
      return <FacebookLogo className={className} />;
    case "TwitterLogo":
      return <TwitterLogo className={className} />;
    case "LinkedinLogo":
      return <LinkedinLogo className={className} />;
    case "GithubLogo":
      return <GithubLogo className={className} />;
    case "RecruitMobileLogo":
      return <RecruitMobileLogo className={className} />;
  }
}
