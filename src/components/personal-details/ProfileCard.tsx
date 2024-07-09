import { Button } from "antd";
import Icon from "../ui/icons";
import { usePersonDetailModalStore } from "../../store/modal/UpdatePersonDetailModal";

const ProfileCard = () => {
  const { openUpdatePersonDetailModal } = usePersonDetailModalStore();
  return (
    <div className="flex flex-col justify-between p-4 md:flex-row gap-y-4">
      <div className="flex items-center gap-x-2">
        <div className="w-16 h-16 bg-[#CCE8DC] flexc rounded-full">
          <i className="bx bxs-user text-[30px] text-[#31A171]"></i>
        </div>
        <div>
          <div className="flex items-center gap-x-2">
            <span className="text-[18px] font-semibold">William Sample</span>
            <div className="flex gap-x-[5px]">
              <Icon name="FacebookLogo" />
              <Icon name="TwitterLogo" />
              <Icon name="LinkedinLogo" />
              <Icon name="GithubLogo" />
              <Icon name="VectorLogo" />
            </div>
          </div>
          <div className="text-[#495057] flex gap-x-6">
            <span>Senior Product Manager</span>
            <span>United States</span>
            <span>Dallas</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <span className="h-[30px] px-2 border border-[#F6C1C1] bg-[#FCEAEA] text-[#E03131] font-bold flexc rounded-md">
          Contact Linked
        </span>
        <Button className="w-[30px] h-[30px]">
          <i className="bx bxs-star !text-[18px] text-[#656E7A]"></i>
        </Button>
        <Button className="w-[30px] h-[30px]">
          <i className="bx bxs-hot !text-[18px] text-[#656E7A]"></i>
        </Button>
        <Button
          className="w-[30px] h-[30px]"
          onClick={openUpdatePersonDetailModal}
        >
          <i className="bx bx-pencil !text-[18px] text-[#656E7A]"></i>
        </Button>
        <Button className="w-[30px] h-[30px]">
          <i className="bx bx-dots-vertical-rounded !text-[18px] text-[#656E7A]"></i>
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
