import Icon from "../ui/icons";
import Action from "./Action";
import Profile from "./Profile";

const Header = () => {
  return (
    <header className="head">
      <div className="head__logo_mob">
        <Icon name="RecruitMobileLogo" className="head__logo-icon" />
      </div>
      <div className="head__search">
        <i className="bx bx-search"></i>
        <input
          className="head__search-input"
          type="search"
          placeholder="Search Pipedrive"
        />
      </div>
      <div className="head__logo">
        <Icon name="RecruitLogo" className="head__logo-icon" />
      </div>
      <Action />
      <Profile />
    </header>
  );
};

export default Header;
