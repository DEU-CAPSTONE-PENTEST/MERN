import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { checkCookie } from "./app/features/auth/authSlice";
function App() {
  const { userToken } = useSelector((state) => state.auth);
  useEffect(() => {
    checkCookie();
  }, [userToken]);
  return (
    <>
      {/* useRoutes ile routes dosyasındaki tanımlanan sayfaları görüntülemek için kullanılır */}
      {useRoutes(routes)}
    </>
  );
}

export default App;
