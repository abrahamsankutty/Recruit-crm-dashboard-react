import type { FormProps } from "antd";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import { usePersonDetailModalStore } from "../../store/modal/UpdatePersonDetailModal";
import { usePersonDetailStore } from "../../store/PersonDetailStore";
import { PersonDetailsType } from "../../types/PersonDetailsType";

const UpdatePersonDetailsModal = () => {
  const { closeUpdatePersonDetailModal, updatePersonDetailModalOpen } =
    usePersonDetailModalStore();

  const personDetails = usePersonDetailStore();

  const handleOk = () => {
    closeUpdatePersonDetailModal();
  };

  const handleCancel = () => {
    closeUpdatePersonDetailModal();
  };

  const onFinish: FormProps<PersonDetailsType>["onFinish"] = (data) => {
    personDetails.updateCurrentOrganization(data?.currentOrganization || "");
    personDetails.updateSummary(data?.summary || "");
    personDetails.updateSkills(data?.skills || "");
    personDetails.updateCurrentEmploymentStatus(
      data?.currentEmploymentStatus || ""
    );
    personDetails.updateAvailableFrom(
      data?.availableFrom
        ? new Date(data.availableFrom).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : personDetails?.availableFrom
    );
    personDetails.updateDateOfBirth(
      data?.dateOfBirth
        ? new Date(data.dateOfBirth).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : personDetails?.dateOfBirth
    );
    personDetails.updateCurrentSalary(data?.currentSalary || "");
    personDetails.updateRelevantExperience(data?.relevantExperience || "");
    personDetails.updateNoticePeriod(data?.noticePeriod || "");
    personDetails.updateSalaryExpectation(data?.salaryExpectation || "");
    personDetails.updateFullAddress(data?.fullAddress || "");
    personDetails.updateStatus(data?.status || "");
    personDetails.updateSalaryType(data?.salaryType || "");
    personDetails.updateResume(data?.resume || "");
    personDetails.updateTotalExperience(data?.totalExperience || "");
    personDetails.updateLanguageSkills(data?.languageSkills || "");
    closeUpdatePersonDetailModal();
  };
  const onFinishFailed: FormProps<PersonDetailsType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Edit William Sample Details"
      open={updatePersonDetailModalOpen}
      onOk={handleOk}
      footer={null}
      width={1000}
      onCancel={handleCancel}
      className="!max-w-[95%]"
    >
      <Form
        layout="vertical"
        name="personDetails"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex flex-col mt-4 gap-x-5 md:flex-row">
          <Form.Item<PersonDetailsType>
            label="Current Organization"
            name="currentOrganization"
            className="flex-1"
            initialValue={personDetails.currentOrganization}
          >
            <Input />
          </Form.Item>
          <Form.Item<PersonDetailsType>
            label="Summary"
            className="flex-1"
            name="summary"
            initialValue={personDetails.summary}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-x-5 md:flex-row">
          <Form.Item<PersonDetailsType>
            label="Skills"
            name="skills"
            className="flex-1"
            initialValue={personDetails.skills}
          >
            <Input />
          </Form.Item>
          <Form.Item<PersonDetailsType>
            label="Current Employment Status"
            className="flex-1"
            name="currentEmploymentStatus"
            initialValue={personDetails.currentEmploymentStatus}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-x-5 md:flex-row">
          <Form.Item
            label="Available From"
            name="availableFrom"
            className="flex-1"
          >
            <DatePicker
              className="w-full"
              placeholder="Jul, 14, 2023"
              format={{
                format: "MMM, DD, YYYY",
              }}
              value={personDetails.availableFrom}
            />
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            className="flex-1"
            name="dateOfBirth"
          >
            <DatePicker
              className="w-full"
              value={personDetails.dateOfBirth}
              placeholder="Jul, 14, 2023"
              format={{
                format: "MMM, DD, YYYY",
              }}
            />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-x-5 md:flex-row">
          <Form.Item<PersonDetailsType>
            label="Current Salary"
            name="currentSalary"
            className="flex-1"
            initialValue={personDetails.currentSalary}
          >
            <Input />
          </Form.Item>
          <Form.Item<PersonDetailsType>
            label="Relevant Experience"
            className="flex-1"
            name="relevantExperience"
            initialValue={personDetails.relevantExperience}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-x-5 md:flex-row">
          <Form.Item<PersonDetailsType>
            label="Notice Period"
            name="noticePeriod"
            className="flex-1"
            initialValue={personDetails.noticePeriod}
          >
            <Input />
          </Form.Item>
          <Form.Item<PersonDetailsType>
            label="Salary Expectation"
            className="flex-1"
            name="salaryExpectation"
            initialValue={personDetails.salaryExpectation}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-x-5 md:flex-row">
          <Form.Item<PersonDetailsType>
            label="Full Address"
            name="fullAddress"
            className="flex-1"
            initialValue={personDetails.fullAddress}
          >
            <Input />
          </Form.Item>
          <Form.Item<PersonDetailsType>
            label="Status"
            className="flex-1"
            name="status"
            initialValue={personDetails.status}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-x-5 md:flex-row">
          <Form.Item<PersonDetailsType>
            label="Resume"
            name="resume"
            className="flex-1"
            initialValue={personDetails.resume}
          >
            <Input />
          </Form.Item>
          <Form.Item<PersonDetailsType>
            label="Salary Type"
            className="flex-1"
            name="salaryType"
            initialValue={personDetails.salaryType}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-x-5 md:flex-row">
          <Form.Item<PersonDetailsType>
            label="Total Experience"
            name="totalExperience"
            className="flex-1"
            initialValue={personDetails.totalExperience}
          >
            <Input />
          </Form.Item>
          <Form.Item<PersonDetailsType>
            label="Language Skills"
            className="flex-1"
            name="languageSkills"
            initialValue={personDetails.languageSkills}
          >
            <Input />
          </Form.Item>
        </div>

        <Form.Item className="mb-0 ">
          <div className="flex justify-end gap-x-4">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="default" onClick={handleCancel} htmlType="button">
              Cancel
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdatePersonDetailsModal;
