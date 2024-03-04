import { useSelector } from "react-redux";

const UserDashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div className="">UserDashboard Page</div>

      <h1 className=" p-10">
        {userInfo.firstname}-{userInfo.lastname}
      </h1>
    </>
  );
};

export default UserDashboard;
