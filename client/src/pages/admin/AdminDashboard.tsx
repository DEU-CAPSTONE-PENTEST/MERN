import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const users = [
    {
      name: "user1",
      id: "123",
    },
    {
      name: "user2",
      id: "456",
    },
  ];
  return (
    <div>
      <div>AdminDashboard Page</div>
      {users.map((user, index) => (
        <Link key={index} to={`/admin/dashboard/${user.id}`} className="navbar">
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default AdminDashboard;
