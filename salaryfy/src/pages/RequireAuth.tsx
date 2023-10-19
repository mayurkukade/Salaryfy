import { useNavigate,Outlet } from "react-router-dom"
import { useEffect } from "react";
import Cookies from "js-cookie";
const RequireAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get('jwtToken')

    if (!token) {
      // Token is not found or expired, navigate to the login page
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default RequireAuth
