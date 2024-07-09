import { Avatar, Button, Switch } from "antd";

const AssignedPerson = () => {
  return (
    <div className="flex rounded-md border border-[#E9ECEF] py-3 px-4 mt-6 justify-between flex-col sm:flex-row gap-y-3">
      <div className="flex items-center">
        <Avatar
          size={40}
          className="mr-2 bg-[#FBDDB3] text-[#F08C00] font-semibold"
        >
          M
        </Avatar>
        <div className="flex flex-col gap-y-1">
          <p className="font-semibold text-black">Senior Product Manager</p>
          <p className="text-[12px] font-medium">Recruit CRM</p>
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-x-2">
          <i className="bx bx-user-circle text-[16px] text-[#495057]"></i>
          <span>William Sample</span>
        </div>
        <div className="flex items-center gap-x-2">
          <i className="bx bx-time-five text-[16px] text-[#495057]"></i>
          <span>Jul 10, 2023</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="font-medium border border-[#F1F3F5] bg-[#F8F9FA] text-[#495057] h-6 px-2 rounded-md flexc">
          Assigned
        </span>
      </div>
      <div className="flex items-center justify-between md:w-[180px]">
        <Button className="h-[35px] px-3 border-[#CED4DA] font-semibold text-[#343A40] flexc">
          View Files
        </Button>
        <Switch defaultChecked />
      </div>
    </div>
  );
};

export default AssignedPerson;
