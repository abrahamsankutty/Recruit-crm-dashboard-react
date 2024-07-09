import { Button } from "antd";

const Action = () => {
  return (
    <div className="head__btn-group">
      <Button className="head__btn-group-btn md:hidden">
        <i className="bx bx-search"></i>
      </Button>
      <Button className="head__btn-group-btn head__btn-group-btn--active">
        <i className="bx bx-plus"></i>
      </Button>
      <div className="px-1 flexc">
        <div className=" h-7 w-[2px] bg-[#C8CCD2]"></div>
      </div>
      <Button className="head__btn-group-btn">
        <i className="bx bx-gift"></i>
      </Button>
      <Button className="head__btn-group-btn">
        <i className="bx bx-envelope"></i>
      </Button>
      <Button className="head__btn-group-btn">
        <i className="bx bx-bell"></i>
      </Button>
    </div>
  );
};

export default Action;
