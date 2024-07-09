import Icon from "../ui/icons";

const EmailPhoneDetails = () => {
  return (
    <div className="flex p-4 font-semibold min-h-[50px] border-y border-[#E9ECEF] flex-col md:flex-row md:justify-between md:items-center gap-y-3">
      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-x-2">
          <i className="bx bx-envelope text-[17px] text-[#656E7A]"></i>
          <a className="text-primary" href="">
            williamsample@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-x-2">
          <i className="bx bx-phone-call text-[17px] text-[#656E7A]"></i>
          <a className="text-primary" href="">
            +91 9021232326
          </a>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-x-2">
          <i className="bx bx-user-circle text-[17px] text-[#656E7A]"></i>
          <span>Phyllis Yang</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Icon name="TimeIcon" />
          <span>Jul 14, 2023, 4:04 pm</span>
        </div>
      </div>
    </div>
  );
};

export default EmailPhoneDetails;
