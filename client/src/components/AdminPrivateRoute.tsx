import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AdminPrivateRouteProps {
  children: ReactNode;
}

// Eğer routes.tsx dosyasındaki authmap den gelen child varsa burada yetkileri kontrol edilir
const AdminPrivateRoute: React.FC<AdminPrivateRouteProps> = ({ children }) => {
  const user = true;
  const isAdmin = true;
  if (!user || !isAdmin) {
    return <Navigate to="/auth/login" />;
  }
  return <>{children}</>;
};

export default AdminPrivateRoute;
