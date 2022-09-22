import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  // objeto user
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading</h1>;
  // si no esta autenticado el usuario lo dirige al home
  if (!user) return <Navigate to="/login" />;

  //retorna los elementos
  return <>{children}</>;
}
