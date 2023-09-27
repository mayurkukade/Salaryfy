import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  userIdSelection,
  userNameSelection,
} from "../../features/reducers/authReducers/auth-slice-reducer";
import { RootState } from "../../store/app.store";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { clearToken } from "../../features/reducers/authReducers/auth-slice-reducer";
import { useNavigate } from "react-router-dom";
import { cureentSelector } from "../../features/reducers/currentRouteReducers/current-route.reducer";
interface TokenPayload {
  fullName: string;
  userId: string;
}

import navlogo from "../../../assets/Logos/navbar-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [profile,setProfile] = useState<string>()
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const jobId = localStorage.getItem('jobId')
  console.log(jobId)
  const open = Boolean(anchorEl);
  console.log(window.location.href);
  const currentLocation = window.location.href.slice(22);
  console.log(currentLocation);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const userNameSelect = useSelector(
    (state: RootState) => state.authSlice.userName
  );

  const token = Cookies.get("jwtToken");
  const logoutHandleSubmit = () => {
    dispatch(clearToken());
    Cookies.remove("jwtToken");
    navigate("/login");
  };

  const logInHandler =()=>{
    if(currentLocation === ''){
      navigate('/login')
    }else if(currentLocation === 'placementdrive'){
      navigate('/login')
    }else{
      navigate('/login/'+jobId)
    }
  }
  useEffect(() => {
    if (token) {
      const userDetails: TokenPayload = jwt_decode(token);

      const userName: string = userDetails.fullName;
      const userId: string = userDetails.userId;
      setProfile(userName)
      console.log(userName);
      console.log(userDetails);
  
      dispatch(userNameSelection(userName));
      dispatch(userIdSelection(userId));
    }
  }, [dispatch, token]);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    dispatch(cureentSelector(currentLocation));
  }, [dispatch, currentLocation]);

  return (
    <nav className="flex justify-between  items-center h-24  w-full p-10 sticky top-[0px] bg-[#fff] z-[100]">
      <Link to="/" className="ml-[-30px]">
       
        <img
          className="w-[95%] md:w-[70%] bg-[#fff] "
          src={navlogo}
          alt="logo"
        />
      </Link>

      <ul className="hidden md:flex space-x-2 ">
        
        <li className="p-1  w-[125px] h-[13px] shrink-0 text-darkGreen text-[18px] leading-[27px] font-medium ">
        <Link to={token?'/questionnaire/fresher-dashboard':'/login'}> Dashboard     </Link>
        </li>
    
       
        <li className="p-1  w-[97px] h-[13px] shrink-0 text-darkGreen text-[18px] leading-[27px] font-medium ">
         <Link to="/contactus">Contact</Link> 
        </li>
        <li className="p-1 w-[97px] h-[13px] shrink-0 text-darkGreen text-[18px] leading-[27px] font-medium ">
         <Link to={"/aboutus"}>About us</Link> 
        </li>

        <li>
          {token ? (
            <Stack
              direction="row"
              spacing={2}
              className=" w-[100px] h-[36px] flex items-center "
            >
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar className="mr-2">U</Avatar>
                <span className="text-lg decoration-solid ">
                  {profile}
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
               <Link to="/questionnaire/fresher-dashboard"><MenuItem onClick={handleClose}>Profile</MenuItem></Link> 
               <Link to="/questionnaire/fresher-profile-upload"> <MenuItem onClick={handleClose}>My account</MenuItem></Link>
                <MenuItem onClick={logoutHandleSubmit}>Logout</MenuItem>
              </Menu>
            </Stack>
          ) : (
            <div className="p-1 w-[100px] h-[36px] shrink-0  bg-darkGreen rounded-lg mr-5" onClick={logInHandler}>
              
                <div className="text-center text-white cursor-pointer text-[1.6em]">
                  Sign In
                </div>
            
            </div>
          )}
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#005F59] ease-in-out duration-500 text-[1.5rem] text-[#FDCC07] p-6 "
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1> */}
        <li>
          <Link to="/" className="p-4 border-b border-gray-600  ">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/fresher-dashboard"
            className="p-4 border-b border-gray-600 "
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/contact" className="p-4 border-b border-gray-600 ">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="p-4 border-b border-gray-600 ">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/signup" className="p-4">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
