import { Tabs } from "antd";
import type { TabsProps } from "antd";
import AssignedJobs from "./AssignedJobs";

const DetailsTabs: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "All Details",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Assigned Jobs",
      children: <AssignedJobs />,
    },
    {
      key: "3",
      label: "Related Emails",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Candidate Questions",
      children: "Content of Tab Pane 4",
    },
    {
      key: "5",
      label: "Hotlists",
      children: "Content of Tab Pane 5",
    },
    {
      key: "6",
      label: "Related Deals",
      children: "Content of Tab Pane 6",
    },
    {
      key: "7",
      label: "Contact(s) Pitched",
      children: "Content of Tab Pane 7",
    },
  ];
  return (
    <div className="overflow-auto">
      <Tabs defaultActiveKey="2" items={items} />
    </div>
  );
};

export default DetailsTabs;
