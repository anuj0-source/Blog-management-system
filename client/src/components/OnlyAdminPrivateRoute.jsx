import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function OnlyAdminPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();

  if (currentUser === undefined) {
    // You can show a loading spinner here if needed
    return null;
  }

  return currentUser && currentUser.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" replace state={{ from: location }} />
  );
}
