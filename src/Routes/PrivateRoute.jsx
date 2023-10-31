import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg text-error mx-auto"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
