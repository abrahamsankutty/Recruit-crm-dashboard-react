import Header from "../components/header/Header";
import Sidenav from "../components/Sidenav";
import PersonDetails from "../components/personal-details/PersonDetails";
import UpdatePersonDetailsModal from "../components/modal/UpdatePersonDetailsModal";
import PageHead from "../components/personal-details/PageHead";
import DetailsTabs from "../components/Tabs/Tabs";
import EmailPhoneDetails from "../components/personal-details/EmailPhoneDetails";
import ProfileCard from "../components/personal-details/ProfileCard";
import Aside from "../components/personal-details/Aside";

const Dashboard = () => {
  return (
    <div className="flex-col-reverse dashboard md:flex-row">
      <Sidenav />
      <div className="flex flex-col dashboard__content">
        <Header />
        <div className="flex md:ml-[56px] flex-col lg:flex-row pb-14 md:pb-0">
          <div className="flex-1">
            <PageHead />
            <ProfileCard />
            <EmailPhoneDetails />
            <PersonDetails />
            <DetailsTabs />
          </div>
          <Aside />
        </div>
      </div>
      <UpdatePersonDetailsModal />
    </div>
  );
};

export default Dashboard;
