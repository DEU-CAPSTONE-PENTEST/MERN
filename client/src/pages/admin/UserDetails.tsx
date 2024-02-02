import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UserDetails Page</h1>
      {id}
    </div>
  );
};

export default UserDetails;
