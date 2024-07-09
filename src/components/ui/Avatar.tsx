import { Avatar } from "antd";

type AvatarType = {
  className?: string;
  children?: React.ReactNode;
};

export const UserAvatar: React.FC<AvatarType> = ({ className }) => {
  return (
    <Avatar
      size={34}
      className={`${className}`}
      src="../src/assets/images/profile.png"
    >
      Ph
    </Avatar>
  );
};
