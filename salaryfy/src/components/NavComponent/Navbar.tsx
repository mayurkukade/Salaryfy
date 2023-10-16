import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link} from "react-router-dom";
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
import navlogo from "../../../assets/Logos/navbar-logo.png";
// import { useGetUploadedFilesQuery } from "../../features/api-integration/user-profile/user-profile.slice";
import { QuestionnaireHttpClient } from "../../modules/questionnaire/services/questionnaire.service";
import {
  
  useLazyGetUploadedFilesQuery,
} from "../../features/api-integration/user-profile/user-profile.slice";
import { concatMap } from "rxjs";
import { DocumentTypeResponse } from "../../modules/questionnaire/constants/user-uploaded-documents.interface";
import { FILE_UPLOAD_TYPES } from "../../modules/questionnaire/constants/file-upload.enum";

interface TokenPayload {
  fullName: string;
  userId: string;
}

import { useGetUserProfilePhotoQuery } from "../../features/api-integration/user-profile/user-profile.slice";
// import { useGetUploadedFilesQuery } from "../../features/api-integration/user-profile/user-profile.slice";

const Navbar = () => {
  const httpClient: QuestionnaireHttpClient = new QuestionnaireHttpClient();
  const userId = useSelector((state: RootState) => state.authSlice.userId);
  console.log(userId);
  const [getUploadedDocs] = useLazyGetUploadedFilesQuery();
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [nav, setNav] = useState(false);
  const [profile, setProfile] = useState<string>();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { data, isLoading, isError } = useGetUserProfilePhotoQuery(
    Number(userId)
  );
  console.log(data?.response);

  const profilePicture = data?.response.map((item: string) => {
    let content: string | JSX.Element;

    if (isLoading) {
      content = <p>loading...</p>;
    } else if (isError) {
      content = <p>error</p>;
    } else {
      content = <img src={item?.documentLink} alt="profile picture" />;
    }
    console.log(item);
    return (
      <>
        {content}
      </>
    );
  });

  const jobId = localStorage.getItem("jobId");
  console.log(jobId);
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
  // const userNameSelect = useSelector(
  //   (state: RootState) => state.authSlice.userName
  // );

  const token = Cookies.get("jwtToken");
  const logoutHandleSubmit = () => {
    dispatch(clearToken());
    Cookies.remove("jwtToken");
    navigate("/login");
  };

  const logInHandler = () => {
    if (currentLocation === "") {
      navigate("/login");
    } else if (currentLocation === "placementdrive") {
      navigate("/login");
    } else {
      navigate("/login/" + jobId);
    }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }

    fetchUserProfilePhoto();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  function fetchUserProfilePhoto() {
    httpClient
      .request(getUploadedDocs(userId))
      .pipe(
        concatMap(
          async ({ data: { response } }) =>
            (response as unknown as Array<DocumentTypeResponse>).find(
              (doc) => doc.documentType === FILE_UPLOAD_TYPES.PROFILE_PHOTO
            ).documentLink
        )
      )
      .subscribe((link: string) => setProfilePhoto(() => link));
  }

  console.log(profilePhoto);
  useEffect(() => {
    if (token) {
      const userDetails: TokenPayload = jwt_decode(token);

      const userName: string = userDetails.fullName;
      const userId: string = userDetails.userId;
      setProfile(userName);
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
    setAnchorEl(null);
  }, [dispatch, currentLocation]);

  return (
    <nav className="flex justify-between  items-center h-24  w-full p-10 sticky top-[0px] bg-[#fff] shadow-xl z-[100]">
      <Link to="/" className="ml-[-30px]">
        <img
          className="w-[95%] md:w-[70%] bg-[#fff] "
          src={navlogo}
          alt="logo"
        />
      </Link>

      <ul className="hidden md:flex space-x-2 w-auto gap-12 ">
        <li className="p-1   shrink-0 text-darkGreen text-[18px] leading-[27px] font-medium ">
          <Link to={token ? "/questionnaire/fresher-dashboard" : "/login"}>
            {" "}
            Dashboard{" "}
          </Link>
        </li>

        <li className="p-1   shrink-0 text-darkGreen text-[18px] leading-[27px] font-medium ">
          <Link to="/contactus">Contact</Link>
        </li>
        <li className="p-1   shrink-0 text-darkGreen text-[18px] leading-[27px] font-medium ">
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
                <Avatar className="mr-1">
                {!profilePicture && profile && profile[0].toUpperCase()}
                  {/* { profilePhoto &&
                    <img src={ profilePhoto } />
                  }  */}
                  {profilePicture}
                  
                </Avatar>
                <span className="text-lg decoration-solid ">{profile}</span>
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
                <Link to="/questionnaire/fresher-dashboard">
                  <MenuItem onClick={handleClose}>Profile </MenuItem>
                </Link>
                <Link to="/questionnaire/fresher-profile-upload">
                  {" "}
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Link>
                <MenuItem onClick={logoutHandleSubmit}>Logout</MenuItem>
              </Menu>
            </Stack>
          ) : (
            <div
              className="p-1 w-[100px] h-[36px] shrink-0  bg-darkGreen rounded-lg mr-5"
              onClick={logInHandler}
            >
              <div className="text-center text-white cursor-pointer text-[1.6em]">
                Sign In
              </div>
            </div>
          )}
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden ">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r  border-r-gray-900 bg-[#005F59] ease-in-out duration-500 leading-[3.8rem] text-[1.5rem] text-[#FDCC07] p-6 "
            : "ease-in-out duration-500 hidden"
        }
      >
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1> */}
        <li>
          <Link to="/" className="p-4  border-b border-gray-600  ">
            Home
          </Link>
        </li>
        <li>
          <Link
            to={token ? "/questionnaire/fresher-dashboard" : "/login"}
            className="p-4 border-b border-gray-600 "
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/contactus" className="p-4 border-b border-gray-600 ">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="p-4 border-b border-gray-600 ">
            About Us
          </Link>
        </li>
        <li>
          {token ? (
            <Stack
              direction="row"
              spacing={2}
              className=" w-[100px] h-[36px] flex items-center ml-4 mt-4"
            >
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <span className="text-[2rem] decoration-solid text-yellow   min-w-[6rem]">
                  {profile}
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="yellow"
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
                <Link to="/questionnaire/fresher-dashboard">
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to="/questionnaire/fresher-profile-upload">
                  {" "}
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Link>
                <MenuItem onClick={logoutHandleSubmit}>Logout</MenuItem>
              </Menu>
            </Stack>
          ) : (
            <div
              className=" ml-3  shrink-0  bg-darkGreen rounded-lg "
              onClick={logInHandler}
            >
              Sign In
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
