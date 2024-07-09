import { usePersonDetailStore } from "../../store/PersonDetailStore";

const PersonDetails = () => {
  const data = usePersonDetailStore();
  return (
    <div className="flex flex-col pt-4 pb-6 gap-y-1">
      <div className="flex flex-col px-4 md:flex-row gap-y-1">
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Current Organization</div>
          <div className="text-[#495057] flex-1">
            {data.currentOrganization}
          </div>
        </div>
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Summary</div>
          <div className="text-[#495057] flex-1">{data.summary}</div>
        </div>
      </div>
      <div className="flex flex-col px-4 md:flex-row gap-y-1">
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Skills</div>
          <div className="text-[#495057] flex-1">{data.skills}</div>
        </div>
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Current Employment Status</div>
          <div className="text-[#495057] flex-1">
            {data.currentEmploymentStatus}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 md:flex-row gap-y-1">
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Available From</div>
          <div className="text-[#495057] flex-1">
            {data.availableFrom.toString()}
          </div>
        </div>
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Date of Birth</div>
          <div className="text-[#495057] flex-1">
            {data.dateOfBirth.toString()}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 md:flex-row gap-y-1">
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Current Salary</div>
          <div className="text-[#495057] flex-1">{data.currentSalary}</div>
        </div>
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Relevant Experience</div>
          <div className="text-[#495057] flex-1">{data.relevantExperience}</div>
        </div>
      </div>
      <div className="flex flex-col px-4 md:flex-row gap-y-1">
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Notice Period</div>
          <div className="text-[#495057] flex-1">{data.noticePeriod}</div>
        </div>
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Salary Expectation</div>
          <div className="text-[#495057] flex-1">{data.salaryExpectation}</div>
        </div>
      </div>
      <div className="flex flex-col px-4 md:flex-row gap-y-1">
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Full Address</div>
          <div className="text-[#495057] flex-1">{data.fullAddress}</div>
        </div>
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Status</div>
          <div className="text-[#495057] flex-1">{data.status}</div>
        </div>
      </div>
      <div className="flex flex-col px-4 md:flex-row gap-y-1">
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Resume</div>
          <div className="text-[#495057] flex-1">{data.resume}</div>
        </div>
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Salary Type</div>
          <div className="text-[#495057] flex-1">{data.salaryType}</div>
        </div>
      </div>
      <div className="flex flex-col px-4 md:flex-row gap-y-1">
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Total Experience</div>
          <div className="text-[#495057] flex-1">{data.totalExperience}</div>
        </div>
        <div className="flex items-center flex-1 h-8">
          <div className="flex-1 font-semibold">Language Skills</div>
          <div className="text-[#495057] flex-1">{data.languageSkills}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
