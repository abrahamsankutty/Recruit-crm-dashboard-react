import { Button } from "antd";
import AssignedPerson from "./AssignedPerson";

const AssignedJobs = () => {
  return (
    <section>
      <div className="flex flex-col justify-between pl-2 font-semibold sm:items-center sm:flex-row gap-y-3">
        <p className="text-[#343A40]">Assigned Job to William Sample</p>
        <div className="flex gap-x-3 ">
          <Button className="text-white border-primary  bg-primary h-[35px] px-3 font-semibold">
            Assign To Job
          </Button>
          <Button className=" h-[35px] px-3 border-[#D0D5DD]  font-semibold">
            View All Assigned Jobs
          </Button>
        </div>
      </div>
      <AssignedPerson />
      <AssignedPerson />
      <AssignedPerson />
    </section>
  );
};

export default AssignedJobs;
