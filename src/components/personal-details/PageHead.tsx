import { Button } from "antd";
import Icon from "../ui/icons";

const PageHead = () => {
  return (
    <div className="pagehead">
      <div className="pagehead__breadcrumb">
        <a href="#" className="pagehead__breadcrumb-link">
          Candidates
        </a>
        <span className="pagehead__breadcrumb-separator">
          <Icon name="ArrowRightIcon" />
        </span>
        <span className="pagehead__breadcrumb-current">Robert Hardy</span>
        <span className="pagehead__breadcrumb-id">ID - 231</span>
      </div>
      <div className="pagehead__actions">
        <Button className="pagehead__actions-button">
          Request Profile Update
        </Button>
        <Button className="pagehead__actions-button">Previous</Button>
        <Button className="pagehead__actions-button">Next</Button>
      </div>
    </div>
  );
};

export default PageHead;
