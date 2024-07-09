import { Button } from "antd";
import Notes from "../sidebar/Notes";

const Aside = () => {
  return (
    <div className="w-full lg:w-[436px] border-l border-[#E9ECEF] min-h-screen flex flex-col">
      <div className="sidebar">
        <div className="sidebar__icons">
          <Button className="icon icon--file border-[#e6f1ff]">
            <i className="bx bxs-note text-primary"></i>
          </Button>
          <Button className="icon icon--call border-[#e6f1ff]">
            <i className="bx bxs-phone-call text-primary"></i>
          </Button>
          <Button className="icon icon--check border-[#e6f1ff]">
            <i className="bx bxs-check-circle text-primary"></i>
          </Button>
          <Button className="icon icon--calendar border-[#e6f1ff]">
            <i className="bx bx-calendar-event text-primary"></i>
          </Button>
        </div>
        <div className="sidebar__tabs">
          <div className="tab tab--active">All</div>
          <div className="tab">Notes & Calls</div>
          <div className="tab">Tasks</div>
          <div className="tab">Meeting</div>
          <div className="tab">Files</div>
        </div>
      </div>
      <Notes />
    </div>
  );
};

export default Aside;
