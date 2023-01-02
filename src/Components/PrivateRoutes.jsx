import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


function PrivateRoute({ children }) {
  const context = useContext(AuthContext);
  if (!context.isAuth.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}
export default PrivateRoute;
