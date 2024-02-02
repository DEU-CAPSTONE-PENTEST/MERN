import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface UserPrivateRouteProps {
  children: ReactNode;
}
// Eğer routes.tsx dosyasındaki authmap den gelen child varsa burada yetkileri kontrol edilir
const UserPrivateRoute: React.FC<UserPrivateRouteProps> = ({ children }) => {
  const user = true;
  const isAdmin = false;
  if (!user) {
    return <Navigate to="/auth/login" />;
  }
  if (isAdmin) {
    return <Navigate to="/auth/register" />;
  }
  return <>{children}</>;
};

export default UserPrivateRoute;
