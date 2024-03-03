import { useSelector } from "react-redux";

const UserDashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div className="text-white">UserDashboard Page</div>

      <h1 className="text-white p-10">
        {userInfo.firstname}-{userInfo.lastname}
      </h1>
    </>
  );
};

export default UserDashboard;
