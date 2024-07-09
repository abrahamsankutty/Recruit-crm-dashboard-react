import Icon from "./ui/icons";

const Sidenav = () => {
  return (
    <nav className="nav">
      <div className="nav__item">
        <a className="nav__item-content">
          <i className="bx bx-category-alt"></i>
        </a>
      </div>
      <div className="nav__item">
        <a className="nav__item-content nav__item-content--active">
          <i className="bx bx-user"></i>
        </a>
      </div>
      <div className="nav__item">
        <a className="nav__item-content">
          <i className="bx bx-buildings"></i>
        </a>
      </div>
      <div className="nav__item">
        <a className="nav__item-content">
          <i className="bx bx-user-pin"></i>
        </a>
      </div>
      <div className="nav__item">
        <a className="nav__item-content">
          <i className="bx bx-briefcase"></i>
        </a>
      </div>
      <div className="nav__item">
        <a className="nav__item-content">
          <i className="bx bx-envelope"></i>
        </a>
      </div>
      <div className="nav__item">
        <a className="nav__item-content">
          <i className="bx bx-calendar-event"></i>
        </a>
      </div>
      <div className="nav__split">
        <div className="nav__split-item"></div>
      </div>
      <div className="nav__item">
        <a className="nav__item-content">
          <i className="bx bx-dollar-circle"></i>
        </a>
      </div>
      <div className="nav__item">
        <a className="nav__item-content">
          <i className="bx bx-pie-chart-alt"></i>
        </a>
      </div>
      <div className="nav__item">
        <a className="nav__item-content">
          <i className="bx bx-credit-card"></i>
        </a>
      </div>
      <div className="nav__item">
        <a className="nav__item-content">
          <i className="bx bx-cog"></i>
        </a>
      </div>
      <div className="nav__item">
        <a className="nav__item-content">
          <Icon name="DotIcon" />
        </a>
      </div>
    </nav>
  );
};

export default Sidenav;
