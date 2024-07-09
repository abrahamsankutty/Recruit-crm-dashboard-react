import { UserAvatar } from "../ui/Avatar";

const Profile = () => {
  return (
    <div className="head__profile">
      <UserAvatar />
      <div className="head__profile-content">
        <div className="head__profile-name">Phyllis Yang</div>
        <div className="head__profile-desc">Silicon Links Inc</div>
      </div>
    </div>
  );
};

export default Profile;
