import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
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
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
  useEffect(() => {
    if (token) {
      const userDetails: TokenPayload = jwt_decode(token);

      const userName: string = userDetails.fullName;
      const userId: string = userDetails.userId;

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
        {/* <div className="w-[200px] md:w-[329px] h-[63.126px] shrink-0 flex">
          <div className=" md:w-[63.475px] md:h-[55.154px] shrink-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="56"
              viewBox="0 0 64 56"
              fill="none"
            >
              <path
                d="M52.6692 19.5342C54.5182 19.5349 56.3259 18.9871 57.8636 17.9603C59.4013 16.9335 60.6 15.4738 61.308 13.7657C62.0161 12.0576 62.2017 10.1779 61.8413 8.36428C61.481 6.5507 60.5909 4.88472 59.2837 3.57704C57.9764 2.26936 56.3107 1.37871 54.4973 1.01775C52.6838 0.656791 50.8041 0.841729 49.0957 1.54918C47.3874 2.25662 45.9272 3.4548 44.8999 4.99216C43.8726 6.52953 43.3242 8.33703 43.3242 10.1861C43.3251 12.6645 44.3098 15.0413 46.062 16.7941C47.8143 18.547 50.1907 19.5325 52.6692 19.5342Z"
                fill="#FECD08"
              />
              <path
                d="M62.8287 31.3691C62.3581 30.4984 61.7445 29.7129 61.0134 29.0457C59.8414 27.9628 58.5417 27.0269 57.1431 26.2588C56.7756 26.0575 56.4113 25.8593 56.0405 25.6643C55.4013 25.3448 54.6535 25.0252 53.8513 24.6544L53.733 24.6033L53.4806 24.4914C53.1865 24.3668 52.8893 24.2326 52.5921 24.1079L51.6333 23.702L50.6745 23.3025L50.5531 23.2482C50.7384 23.3217 50.927 23.3984 51.1188 23.4687C50.927 23.3952 50.7384 23.3217 50.5531 23.2418L50.3581 23.1651L50.112 23.066L49.9426 22.9989C49.9267 22.9989 49.9139 22.9989 49.8915 22.9797C49.7413 22.9158 49.5719 22.8583 49.4345 22.788L48.8624 22.5611L48.1785 22.2543L48.0602 22.2063C44.1036 20.5988 40.1726 18.9528 36.1138 17.5978C32.726 16.46 29.3 15.4565 25.7493 14.9579C23.6304 14.6639 21.5051 14.5488 19.3861 15.0027C17.2001 15.4693 15.4519 16.5495 14.5315 18.6844C13.8444 20.2824 13.7836 21.9443 13.9274 23.6349C14.1658 25.9839 14.695 28.2942 15.5031 30.5126C15.535 30.6149 15.6341 30.7427 15.5446 30.8322L19.4948 33.1429C19.5939 31.4618 19.7633 29.7967 20.4536 28.2243C21.2398 26.4442 22.6204 25.4151 24.4869 24.9964C26.6122 24.5234 28.7279 24.7503 30.8372 25.1019C33.1707 25.5281 35.4778 26.0883 37.7469 26.7797C37.8218 26.7907 37.8937 26.8169 37.958 26.857C38.0224 26.897 38.0777 26.9499 38.1206 27.0123C38.1635 27.0747 38.1931 27.1453 38.2074 27.2197C38.2218 27.2941 38.2206 27.3706 38.2039 27.4445C38.0677 29.4535 37.4741 31.4048 36.4685 33.1493C34.5254 36.7 31.6746 39.4389 28.5394 41.9126C25.6451 44.1518 22.5512 46.1202 19.2967 47.7931C19.1976 47.8475 19.0921 47.8794 18.9771 47.9242L18.8556 47.8219C19.0793 47.5023 19.3094 47.1827 19.5332 46.8631C21.4507 44.1913 23.3683 41.5163 25.2859 38.8381C25.7045 38.2532 25.7013 38.2213 25.1197 37.809C23.4035 36.5785 21.684 35.3321 19.9582 34.1176C19.7679 33.9995 19.6201 33.8237 19.5363 33.6159C19.6003 34.1049 18.1909 41.1935 18.1909 41.1935C16.5513 36.5434 15.5446 30.8162 15.5446 30.8162C15.4295 30.9281 15.3209 30.7715 15.225 30.7172C15.1306 30.6566 15.0399 30.5904 14.9534 30.519L8.44319 25.8785C7.91906 25.5014 7.8871 25.5109 7.51317 26.0383L0.33506 36.0608C-0.137941 36.7255 -0.137941 36.7255 0.514033 37.189C5.82571 40.9943 11.1363 44.7985 16.4459 48.6017C16.9253 48.9437 16.9157 48.998 16.3979 49.2409C16.3601 49.2622 16.3205 49.2804 16.2797 49.2952C12.2748 51.2001 8.16328 52.8723 3.96566 54.3033C2.7512 54.7156 1.53354 55.1119 0.245573 55.5401C0.460938 55.6691 0.704444 55.7436 0.955075 55.7574C3.43194 56.1186 5.912 56.0003 8.39206 55.8182C13.7811 55.3624 19.1349 54.5574 24.4198 53.4084C29.5333 52.3431 34.584 51.037 39.5718 49.4902C43.6786 48.7679 49.051 46.2591 52.6241 44.4214L52.6976 44.3831C54.5256 43.4243 55.8679 42.67 56.2994 42.4207C56.2994 42.4207 56.3314 42.4207 56.3409 42.3952C56.3643 42.3862 56.386 42.3732 56.4049 42.3568C56.4178 42.3531 56.4298 42.3465 56.44 42.3376C56.9801 42.018 57.5075 41.6633 58.038 41.299C59.6775 40.1516 61.2148 38.886 62.3366 37.2049C63.5734 35.3577 63.8994 33.4081 62.8287 31.3691ZM47.453 28.3809L46.6604 42.9321L42.8253 46.2239L40.9684 41.1711L47.0599 28.2115L45.0113 24.7631L48.7569 22.5259L50.9941 26.2716L47.453 28.3809Z"
                fill="#005F59"
              />
            </svg>
          </div>
          <div className="w-[240.492px] h-[36.369px] shrink-0">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="241"
                height="37"
                viewBox="0 0 241 37"
                fill="none"
              >
                <path
                  d="M160.055 29.5863C158.807 29.5863 157.819 29.1443 157.091 28.2603C156.389 27.3503 156.142 26.2713 156.35 25.0233C156.558 23.7753 157.169 22.7353 158.183 21.9032C159.197 21.0452 160.341 20.6163 161.615 20.6163C162.863 20.6163 163.838 21.0713 164.54 21.9813C165.242 22.8652 165.489 23.9313 165.281 25.1793C165.073 26.4533 164.488 27.5063 163.526 28.3383C162.564 29.1703 161.407 29.5863 160.055 29.5863Z"
                  fill="#FFCD05"
                />
                <path
                  d="M176.075 29.5473C172.903 29.5473 170.459 28.5203 168.743 26.4663C167.027 24.3863 166.416 21.8512 166.91 18.8612C167.404 15.9493 168.743 13.5703 170.927 11.7242C173.111 9.87825 175.646 8.95525 178.532 8.95525C180.586 8.95525 182.315 9.43625 183.719 10.3982C185.149 11.3342 186.241 12.5693 186.995 14.1032L180.443 17.5353C180.001 16.4433 179.143 15.8973 177.869 15.8973C176.907 15.8973 176.075 16.2092 175.373 16.8333C174.671 17.4573 174.229 18.2633 174.047 19.2513C173.865 20.2133 174.021 21.0193 174.515 21.6693C175.035 22.2933 175.75 22.6053 176.66 22.6053C177.986 22.6053 179.026 22.0332 179.78 20.8892L185.435 24.4773C184.447 26.1413 183.121 27.4023 181.457 28.2603C179.819 29.1182 178.025 29.5473 176.075 29.5473Z"
                  fill="#FFCD05"
                />
                <path
                  d="M203.907 26.6613C201.827 28.5853 199.188 29.5473 195.99 29.5473C192.792 29.5473 190.361 28.4553 188.697 26.2713C187.059 24.0873 186.487 21.5912 186.981 18.7832C187.449 16.0792 188.736 13.7652 190.842 11.8412C192.948 9.91725 195.613 8.95525 198.837 8.95525C201.957 8.95525 204.349 10.0603 206.013 12.2703C207.703 14.4543 208.301 16.9372 207.807 19.7192C207.313 22.4233 206.013 24.7373 203.907 26.6613ZM194.43 21.7473C194.95 22.3713 195.691 22.6833 196.653 22.6833C197.615 22.6833 198.447 22.3713 199.149 21.7473C199.877 21.0973 200.332 20.2653 200.514 19.2513C200.696 18.2373 200.54 17.4183 200.046 16.7943C199.552 16.1442 198.824 15.8192 197.862 15.8192C196.9 15.8192 196.055 16.1442 195.327 16.7943C194.599 17.4183 194.144 18.2373 193.962 19.2513C193.78 20.2653 193.936 21.0973 194.43 21.7473Z"
                  fill="#FFCD05"
                />
                <path
                  d="M234.687 8.95525C236.845 8.95525 238.496 9.67025 239.64 11.1003C240.81 12.5303 241.174 14.5452 240.732 17.1453L238.665 29.0013H231.45L233.361 18.1203C233.621 16.6383 233.088 15.8973 231.762 15.8973C230.332 15.8973 229.409 16.7292 228.993 18.3932L227.16 29.0013H219.945L221.856 18.1203C222.116 16.6383 221.583 15.8973 220.257 15.8973C218.801 15.8973 217.878 16.7812 217.488 18.5492L215.655 29.0013H208.44L211.872 9.50125H219.087L218.775 11.2952C220.335 9.73525 222.142 8.95525 224.196 8.95525C226.38 8.95525 227.901 9.81325 228.759 11.5293C230.423 9.81325 232.399 8.95525 234.687 8.95525Z"
                  fill="#FFCD05"
                />
                <path
                  d="M11.2639 29.6252C8.29988 29.6252 5.90788 29.0273 4.08788 27.8313C2.29387 26.6093 1.07188 24.9193 0.421875 22.7612L7.16888 19.2903C8.00088 21.3703 9.58687 22.4102 11.9269 22.4102C13.7729 22.4102 14.7869 21.9293 14.9689 20.9673C15.0209 20.6553 14.9689 20.3822 14.8129 20.1483C14.6569 19.9143 14.3839 19.7062 13.9939 19.5243C13.6039 19.3423 13.2399 19.1863 12.9019 19.0562C12.5639 18.9263 12.0829 18.7702 11.4589 18.5882C10.8609 18.4062 10.3929 18.2633 10.0549 18.1593C5.21887 16.4693 3.17788 13.4792 3.93188 9.18925C4.37388 6.74525 5.56987 4.78225 7.51988 3.30025C9.46988 1.81825 11.8489 1.07725 14.6569 1.07725C16.9969 1.07725 18.9989 1.62325 20.6629 2.71525C22.3269 3.80725 23.5879 5.38025 24.4459 7.43425L17.8549 10.9442C17.1789 9.17625 15.9439 8.29225 14.1499 8.29225C12.7979 8.29225 12.0179 8.76025 11.8099 9.69625C11.7059 10.2682 11.9399 10.7362 12.5119 11.1003C13.0839 11.4643 14.2539 11.9452 16.0219 12.5433C17.1399 12.9073 18.0629 13.2843 18.7909 13.6743C19.5449 14.0383 20.2989 14.5583 21.0529 15.2343C21.8329 15.9102 22.3529 16.7812 22.6129 17.8472C22.8989 18.9132 22.9249 20.1612 22.6909 21.5912C22.2229 24.2432 20.9879 26.2453 18.9859 27.5972C17.0099 28.9492 14.4359 29.6252 11.2639 29.6252Z"
                  fill="#005F59"
                />
                <path
                  d="M40.4679 9.50125H47.6829L44.2509 29.0013H37.0359L37.3479 27.2852C35.8399 28.7932 34.0199 29.5473 31.8879 29.5473C29.2879 29.5473 27.3249 28.5333 25.9989 26.5053C24.6989 24.4773 24.2439 22.0333 24.6339 19.1733C25.0239 16.3392 26.1289 13.9342 27.9489 11.9583C29.7949 9.95625 32.0699 8.95525 34.7739 8.95525C37.2699 8.95525 39.0379 9.86525 40.0779 11.6852L40.4679 9.50125ZM34.6569 22.9172C35.7229 22.9172 36.6069 22.5923 37.3089 21.9423C38.0369 21.2923 38.5049 20.4342 38.7129 19.3682L38.7519 19.2513C38.9339 18.1853 38.7779 17.3143 38.2839 16.6383C37.7899 15.9362 37.0099 15.5852 35.9439 15.5852C34.8779 15.5852 33.9679 15.9233 33.2139 16.5993C32.4599 17.2753 31.9919 18.1593 31.8099 19.2513C31.6279 20.3173 31.7839 21.2013 32.2779 21.9032C32.7719 22.5793 33.5649 22.9172 34.6569 22.9172Z"
                  fill="#005F59"
                />
                <path
                  d="M47.4272 29.0013L49.6502 16.3653L52.4192 0.53125H59.6342L56.8262 16.4823L54.6422 29.0013H47.4272Z"
                  fill="#005F59"
                />
                <path
                  d="M74.4024 9.50125H81.6174L78.1854 29.0013H70.9704L71.2824 27.2852C69.7744 28.7932 67.9544 29.5473 65.8224 29.5473C63.2224 29.5473 61.2594 28.5333 59.9334 26.5053C58.6334 24.4773 58.1784 22.0333 58.5684 19.1733C58.9584 16.3392 60.0634 13.9342 61.8834 11.9583C63.7294 9.95625 66.0044 8.95525 68.7084 8.95525C71.2044 8.95525 72.9724 9.86525 74.0124 11.6852L74.4024 9.50125ZM68.5914 22.9172C69.6574 22.9172 70.5414 22.5923 71.2434 21.9423C71.9714 21.2923 72.4394 20.4342 72.6474 19.3682L72.6864 19.2513C72.8684 18.1853 72.7124 17.3143 72.2184 16.6383C71.7244 15.9362 70.9444 15.5852 69.8784 15.5852C68.8124 15.5852 67.9024 15.9233 67.1484 16.5993C66.3944 17.2753 65.9264 18.1593 65.7444 19.2513C65.5624 20.3173 65.7184 21.2013 66.2124 21.9032C66.7064 22.5793 67.4994 22.9172 68.5914 22.9172Z"
                  fill="#005F59"
                />
                <path
                  d="M91.3068 13.2842C91.8788 11.9582 92.7368 10.9312 93.8808 10.2032C95.0508 9.47525 96.3898 9.11125 97.8978 9.11125L96.5328 16.9113C94.9988 16.7033 93.5818 16.9893 92.2818 17.7693C90.9818 18.5493 90.1628 19.8753 89.8248 21.7473L89.8638 21.4353L88.5378 29.0013H81.3228L84.7548 9.50125H91.9698L91.3068 13.2842Z"
                  fill="#005F59"
                />
                <path
                  d="M112.5 9.50125H121.002L111.213 28.4163C107.989 34.6823 103.27 37.4772 97.056 36.8013L98.265 29.9763C99.617 29.9763 100.644 29.8463 101.346 29.5863C102.048 29.3523 102.633 28.8973 103.101 28.2213L98.7719 9.50125H106.65L108.288 19.8752L112.5 9.50125Z"
                  fill="#005F59"
                />
                <path
                  d="M134.235 7.55125C133.299 7.47325 132.532 7.61625 131.934 7.98025C131.362 8.34425 131.011 8.85125 130.881 9.50125H133.884L132.675 16.3653H129.672L127.449 29.0013H120.234L122.457 16.3653H120.195L121.404 9.50125H123.666C124.186 6.58925 125.434 4.41825 127.41 2.98825C129.386 1.53225 132.038 0.895249 135.366 1.07725L134.235 7.55125Z"
                  fill="#005F59"
                />
                <path
                  d="M148.377 9.50125H156.879L147.09 28.4163C143.866 34.6823 139.147 37.4772 132.933 36.8013L134.142 29.9763C135.494 29.9763 136.521 29.8463 137.223 29.5863C137.925 29.3523 138.51 28.8973 138.978 28.2213L134.649 9.50125H142.527L144.165 19.8752L148.377 9.50125Z"
                  fill="#005F59"
                />
              </svg>
              <div className="w-[20px] h-[20px] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                    fill="#0E5F59"
                  />
                  <path
                    d="M8.30156 7V8.54H6.50156V14H4.90156V8.54H3.10156V7H8.30156Z"
                    fill="white"
                  />
                  <path
                    d="M16.002 7V14H14.402V9.93L12.592 12.9H12.412L10.602 9.93V14H9.00195V7H10.602L12.502 10.11L14.402 7H16.002Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <div className="w-[238.402px] h-[6.552px] shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="239"
                height="8"
                viewBox="0 0 239 8"
                fill="none"
              >
                <path
                  d="M4.34794 1.88822H1.82794V3.38222H4.27594V4.57022H1.82794V7.00022H0.585938V0.700219H4.34794V1.88822Z"
                  fill="#0E5F59"
                />
                <path
                  d="M10.7767 7.00022L10.3987 5.86622H7.88768L7.50968 7.00022H6.16868L8.37368 0.700219H9.91268L12.1267 7.00022H10.7767ZM8.28368 4.70522H10.0117L9.14768 2.13122L8.28368 4.70522Z"
                  fill="#0E5F59"
                />
                <path
                  d="M16.5038 7.12622C15.8798 7.12622 15.3548 6.98822 14.9288 6.71222C14.5028 6.43022 14.2028 6.04922 14.0288 5.56922L15.0908 4.94822C15.3368 5.59022 15.8198 5.91122 16.5398 5.91122C16.8878 5.91122 17.1428 5.84822 17.3048 5.72222C17.4668 5.59622 17.5478 5.43722 17.5478 5.24522C17.5478 5.02322 17.4488 4.85222 17.2508 4.73222C17.0528 4.60622 16.6988 4.47122 16.1888 4.32722C15.9068 4.24322 15.6668 4.15922 15.4688 4.07522C15.2768 3.99122 15.0818 3.88022 14.8838 3.74222C14.6918 3.59822 14.5448 3.41822 14.4428 3.20222C14.3408 2.98622 14.2898 2.73422 14.2898 2.44622C14.2898 1.87622 14.4908 1.42322 14.8928 1.08722C15.3008 0.745219 15.7898 0.574219 16.3598 0.574219C16.8698 0.574219 17.3168 0.700219 17.7008 0.952219C18.0908 1.19822 18.3938 1.54322 18.6098 1.98722L17.5658 2.59022C17.3138 2.05022 16.9118 1.78022 16.3598 1.78022C16.1018 1.78022 15.8978 1.84022 15.7478 1.96022C15.6038 2.07422 15.5318 2.22422 15.5318 2.41022C15.5318 2.60822 15.6128 2.77022 15.7748 2.89622C15.9428 3.01622 16.2608 3.14822 16.7288 3.29222C16.9208 3.35222 17.0648 3.40022 17.1608 3.43622C17.2628 3.46622 17.3978 3.51722 17.5658 3.58922C17.7398 3.65522 17.8718 3.71822 17.9618 3.77822C18.0578 3.83822 18.1658 3.91922 18.2858 4.02122C18.4058 4.12322 18.4958 4.22822 18.5558 4.33622C18.6218 4.44422 18.6758 4.57622 18.7178 4.73222C18.7658 4.88222 18.7898 5.04722 18.7898 5.22722C18.7898 5.80922 18.5768 6.27122 18.1508 6.61322C17.7308 6.95522 17.1818 7.12622 16.5038 7.12622Z"
                  fill="#0E5F59"
                />
                <path
                  d="M25.2933 0.700219V1.88822H23.5923V7.00022H22.3503V1.88822H20.6583V0.700219H25.2933Z"
                  fill="#0E5F59"
                />
                <path
                  d="M35.5087 1.88822H32.9887V3.38222H35.4367V4.57022H32.9887V7.00022H31.7467V0.700219H35.5087V1.88822Z"
                  fill="#0E5F59"
                />
                <path
                  d="M43.4697 6.18122C42.8337 6.81122 42.0597 7.12622 41.1477 7.12622C40.2357 7.12622 39.4617 6.81122 38.8257 6.18122C38.1957 5.54522 37.8807 4.76822 37.8807 3.85022C37.8807 2.93222 38.1957 2.15822 38.8257 1.52822C39.4617 0.892219 40.2357 0.574219 41.1477 0.574219C42.0597 0.574219 42.8337 0.892219 43.4697 1.52822C44.1057 2.15822 44.4237 2.93222 44.4237 3.85022C44.4237 4.76822 44.1057 5.54522 43.4697 6.18122ZM39.6987 5.33522C40.0887 5.71922 40.5717 5.91122 41.1477 5.91122C41.7237 5.91122 42.2067 5.71922 42.5967 5.33522C42.9867 4.94522 43.1817 4.45022 43.1817 3.85022C43.1817 3.25022 42.9867 2.75522 42.5967 2.36522C42.2067 1.97522 41.7237 1.78022 41.1477 1.78022C40.5717 1.78022 40.0887 1.97522 39.6987 2.36522C39.3087 2.75522 39.1137 3.25022 39.1137 3.85022C39.1137 4.45022 39.3087 4.94522 39.6987 5.33522Z"
                  fill="#0E5F59"
                />
                <path
                  d="M50.5076 7.00022L49.2386 4.81322H48.2936V7.00022H47.0516V0.700219H49.5716C50.1536 0.700219 50.6486 0.904219 51.0566 1.31222C51.4646 1.72022 51.6686 2.21222 51.6686 2.78822C51.6686 3.17822 51.5576 3.54122 51.3356 3.87722C51.1136 4.20722 50.8196 4.45622 50.4536 4.62422L51.8486 7.00022H50.5076ZM48.2936 1.86122V3.72422H49.5716C49.8056 3.72422 50.0066 3.63422 50.1746 3.45422C50.3426 3.26822 50.4266 3.04622 50.4266 2.78822C50.4266 2.53022 50.3426 2.31122 50.1746 2.13122C50.0066 1.95122 49.8056 1.86122 49.5716 1.86122H48.2936Z"
                  fill="#0E5F59"
                />
                <path
                  d="M55.5522 7.00022L53.7882 0.700219H55.0932L56.2992 5.37122L57.6132 0.700219H58.6752L59.9982 5.37122L61.2042 0.700219H62.5092L60.7452 7.00022H59.3322L58.1442 2.84222L56.9652 7.00022H55.5522Z"
                  fill="#0E5F59"
                />
                <path
                  d="M68.6741 7.00022L68.2961 5.86622H65.7851L65.4071 7.00022H64.0661L66.2711 0.700219H67.8101L70.0241 7.00022H68.6741ZM66.1811 4.70522H67.9091L67.0451 2.13122L66.1811 4.70522Z"
                  fill="#0E5F59"
                />
                <path
                  d="M75.8468 7.00022L74.5778 4.81322H73.6328V7.00022H72.3908V0.700219H74.9108C75.4928 0.700219 75.9878 0.904219 76.3958 1.31222C76.8038 1.72022 77.0078 2.21222 77.0078 2.78822C77.0078 3.17822 76.8968 3.54122 76.6748 3.87722C76.4528 4.20722 76.1588 4.45622 75.7928 4.62422L77.1878 7.00022H75.8468ZM73.6328 1.86122V3.72422H74.9108C75.1448 3.72422 75.3458 3.63422 75.5138 3.45422C75.6818 3.26822 75.7658 3.04622 75.7658 2.78822C75.7658 2.53022 75.6818 2.31122 75.5138 2.13122C75.3458 1.95122 75.1448 1.86122 74.9108 1.86122H73.6328Z"
                  fill="#0E5F59"
                />
                <path
                  d="M82.1761 0.700219C83.0401 0.700219 83.7601 1.00322 84.3361 1.60922C84.9181 2.21522 85.2091 2.96222 85.2091 3.85022C85.2091 4.73822 84.9181 5.48522 84.3361 6.09122C83.7601 6.69722 83.0401 7.00022 82.1761 7.00022H79.6741V0.700219H82.1761ZM82.1761 5.81222C82.7221 5.81222 83.1661 5.63222 83.5081 5.27222C83.8501 4.90622 84.0211 4.43222 84.0211 3.85022C84.0211 3.26822 83.8501 2.79722 83.5081 2.43722C83.1661 2.07122 82.7221 1.88822 82.1761 1.88822H80.9161V5.81222H82.1761Z"
                  fill="#0E5F59"
                />
                <path
                  d="M93.6412 7.12622C92.6512 7.12622 91.9582 6.72722 91.5622 5.92922L92.6332 5.31722C92.8312 5.71322 93.1672 5.91122 93.6412 5.91122C93.9712 5.91122 94.2172 5.83322 94.3792 5.67722C94.5412 5.52122 94.6222 5.30822 94.6222 5.03822V0.700219H95.8552V5.03822C95.8552 5.69822 95.6482 6.21122 95.2342 6.57722C94.8202 6.94322 94.2892 7.12622 93.6412 7.12622Z"
                  fill="#0E5F59"
                />
                <path
                  d="M104.03 6.18122C103.394 6.81122 102.62 7.12622 101.708 7.12622C100.796 7.12622 100.022 6.81122 99.3862 6.18122C98.7562 5.54522 98.4412 4.76822 98.4412 3.85022C98.4412 2.93222 98.7562 2.15822 99.3862 1.52822C100.022 0.892219 100.796 0.574219 101.708 0.574219C102.62 0.574219 103.394 0.892219 104.03 1.52822C104.666 2.15822 104.984 2.93222 104.984 3.85022C104.984 4.76822 104.666 5.54522 104.03 6.18122ZM100.259 5.33522C100.649 5.71922 101.132 5.91122 101.708 5.91122C102.284 5.91122 102.767 5.71922 103.157 5.33522C103.547 4.94522 103.742 4.45022 103.742 3.85022C103.742 3.25022 103.547 2.75522 103.157 2.36522C102.767 1.97522 102.284 1.78022 101.708 1.78022C101.132 1.78022 100.649 1.97522 100.259 2.36522C99.8692 2.75522 99.6742 3.25022 99.6742 3.85022C99.6742 4.45022 99.8692 4.94522 100.259 5.33522Z"
                  fill="#0E5F59"
                />
                <path
                  d="M111.419 3.73322C111.971 4.05122 112.247 4.53122 112.247 5.17322C112.247 5.70722 112.058 6.14522 111.68 6.48722C111.302 6.82922 110.837 7.00022 110.285 7.00022H107.612V0.700219H110.096C110.636 0.700219 111.089 0.868219 111.455 1.20422C111.827 1.53422 112.013 1.95722 112.013 2.47322C112.013 2.99522 111.815 3.41522 111.419 3.73322ZM110.096 1.86122H108.854V3.24722H110.096C110.288 3.24722 110.447 3.18122 110.573 3.04922C110.705 2.91722 110.771 2.75222 110.771 2.55422C110.771 2.35622 110.708 2.19122 110.582 2.05922C110.456 1.92722 110.294 1.86122 110.096 1.86122ZM110.285 5.83922C110.495 5.83922 110.669 5.77022 110.807 5.63222C110.945 5.48822 111.014 5.30822 111.014 5.09222C111.014 4.88222 110.945 4.70822 110.807 4.57022C110.669 4.42622 110.495 4.35422 110.285 4.35422H108.854V5.83922H110.285Z"
                  fill="#0E5F59"
                />
                <path
                  d="M121.809 7.12622C120.861 7.12622 120.078 6.81122 119.46 6.18122C118.842 5.55122 118.533 4.77422 118.533 3.85022C118.533 2.92022 118.842 2.14322 119.46 1.51922C120.078 0.889219 120.861 0.574219 121.809 0.574219C122.379 0.574219 122.904 0.709219 123.384 0.979219C123.87 1.24322 124.248 1.60322 124.518 2.05922L123.447 2.68022C123.291 2.39822 123.069 2.17922 122.781 2.02322C122.493 1.86122 122.169 1.78022 121.809 1.78022C121.197 1.78022 120.702 1.97222 120.324 2.35622C119.952 2.74022 119.766 3.23822 119.766 3.85022C119.766 4.45622 119.952 4.95122 120.324 5.33522C120.702 5.71922 121.197 5.91122 121.809 5.91122C122.169 5.91122 122.493 5.83322 122.781 5.67722C123.075 5.51522 123.297 5.29622 123.447 5.02022L124.518 5.64122C124.248 6.09722 123.873 6.46022 123.393 6.73022C122.913 6.99422 122.385 7.12622 121.809 7.12622Z"
                  fill="#0E5F59"
                />
                <path
                  d="M130.618 0.700219H131.851V7.00022H130.618V4.39022H128.278V7.00022H127.036V0.700219H128.278V3.20222H130.618V0.700219Z"
                  fill="#0E5F59"
                />
                <path
                  d="M138.827 7.00022L138.449 5.86622H135.938L135.56 7.00022H134.219L136.424 0.700219H137.963L140.177 7.00022H138.827ZM136.334 4.70522H138.062L137.198 2.13122L136.334 4.70522Z"
                  fill="#0E5F59"
                />
                <path
                  d="M146.188 0.700219H147.43V7.00022H146.485L143.785 3.14822V7.00022H142.543V0.700219H143.488L146.188 4.54322V0.700219Z"
                  fill="#0E5F59"
                />
                <path
                  d="M156.537 3.61622V4.10222C156.537 5.00222 156.249 5.73122 155.673 6.28922C155.097 6.84722 154.353 7.12622 153.441 7.12622C152.469 7.12622 151.662 6.81122 151.02 6.18122C150.384 5.54522 150.066 4.77122 150.066 3.85922C150.066 2.94122 150.381 2.16422 151.011 1.52822C151.647 0.892219 152.433 0.574219 153.369 0.574219C153.957 0.574219 154.494 0.709219 154.98 0.979219C155.466 1.24322 155.844 1.59722 156.114 2.04122L155.052 2.65322C154.902 2.39522 154.674 2.18522 154.368 2.02322C154.068 1.86122 153.732 1.78022 153.36 1.78022C152.76 1.78022 152.265 1.97822 151.875 2.37422C151.491 2.76422 151.299 3.25922 151.299 3.85922C151.299 4.45322 151.494 4.94522 151.884 5.33522C152.28 5.71922 152.802 5.91122 153.45 5.91122C153.93 5.91122 154.326 5.80622 154.638 5.59622C154.956 5.38022 155.172 5.08622 155.286 4.71422H153.378V3.61622H156.537Z"
                  fill="#0E5F59"
                />
                <path
                  d="M160.417 5.81222H163.072V7.00022H159.175V0.700219H163.027V1.88822H160.417V3.22922H162.802V4.39922H160.417V5.81222Z"
                  fill="#0E5F59"
                />
                <path
                  d="M170.95 5.81222H173.605V7.00022H169.708V0.700219H173.56V1.88822H170.95V3.22922H173.335V4.39922H170.95V5.81222Z"
                  fill="#0E5F59"
                />
                <path
                  d="M181.032 7.00022H179.619L178.395 4.94822L177.171 7.00022H175.767L177.693 3.76922L175.866 0.700219H177.27L178.395 2.59022L179.52 0.700219H180.924L179.097 3.76022L181.032 7.00022Z"
                  fill="#0E5F59"
                />
                <path
                  d="M185.833 0.700219C186.439 0.700219 186.949 0.904219 187.363 1.31222C187.777 1.72022 187.984 2.22122 187.984 2.81522C187.984 3.40922 187.777 3.91022 187.363 4.31822C186.949 4.72622 186.439 4.93022 185.833 4.93022H184.726V7.00022H183.484V0.700219H185.833ZM185.833 3.76922C186.097 3.76922 186.316 3.67922 186.49 3.49922C186.664 3.31322 186.751 3.08522 186.751 2.81522C186.751 2.53922 186.664 2.31122 186.49 2.13122C186.316 1.95122 186.097 1.86122 185.833 1.86122H184.726V3.76922H185.833Z"
                  fill="#0E5F59"
                />
                <path
                  d="M191.789 5.81222H194.444V7.00022H190.547V0.700219H194.399V1.88822H191.789V3.22922H194.174V4.39922H191.789V5.81222Z"
                  fill="#0E5F59"
                />
                <path
                  d="M200.531 7.00022L199.262 4.81322H198.317V7.00022H197.075V0.700219H199.595C200.177 0.700219 200.672 0.904219 201.08 1.31222C201.488 1.72022 201.692 2.21222 201.692 2.78822C201.692 3.17822 201.581 3.54122 201.359 3.87722C201.137 4.20722 200.843 4.45622 200.477 4.62422L201.872 7.00022H200.531ZM198.317 1.86122V3.72422H199.595C199.829 3.72422 200.03 3.63422 200.198 3.45422C200.366 3.26822 200.45 3.04622 200.45 2.78822C200.45 2.53022 200.366 2.31122 200.198 2.13122C200.03 1.95122 199.829 1.86122 199.595 1.86122H198.317Z"
                  fill="#0E5F59"
                />
                <path
                  d="M204.358 0.700219H205.6V7.00022H204.358V0.700219Z"
                  fill="#0E5F59"
                />
                <path
                  d="M209.763 5.81222H212.418V7.00022H208.521V0.700219H212.373V1.88822H209.763V3.22922H212.148V4.39922H209.763V5.81222Z"
                  fill="#0E5F59"
                />
                <path
                  d="M218.694 0.700219H219.936V7.00022H218.991L216.291 3.14822V7.00022H215.049V0.700219H215.994L218.694 4.54322V0.700219Z"
                  fill="#0E5F59"
                />
                <path
                  d="M225.847 7.12622C224.899 7.12622 224.116 6.81122 223.498 6.18122C222.88 5.55122 222.571 4.77422 222.571 3.85022C222.571 2.92022 222.88 2.14322 223.498 1.51922C224.116 0.889219 224.899 0.574219 225.847 0.574219C226.417 0.574219 226.942 0.709219 227.422 0.979219C227.908 1.24322 228.286 1.60322 228.556 2.05922L227.485 2.68022C227.329 2.39822 227.107 2.17922 226.819 2.02322C226.531 1.86122 226.207 1.78022 225.847 1.78022C225.235 1.78022 224.74 1.97222 224.362 2.35622C223.99 2.74022 223.804 3.23822 223.804 3.85022C223.804 4.45622 223.99 4.95122 224.362 5.33522C224.74 5.71922 225.235 5.91122 225.847 5.91122C226.207 5.91122 226.531 5.83322 226.819 5.67722C227.113 5.51522 227.335 5.29622 227.485 5.02022L228.556 5.64122C228.286 6.09722 227.911 6.46022 227.431 6.73022C226.951 6.99422 226.423 7.12622 225.847 7.12622Z"
                  fill="#0E5F59"
                />
                <path
                  d="M232.316 5.81222H234.971V7.00022H231.074V0.700219H234.926V1.88822H232.316V3.22922H234.701V4.39922H232.316V5.81222Z"
                  fill="#0E5F59"
                />
                <path
                  d="M237.764 4.88522L237.521 2.50022V0.700219H238.916V2.50022L238.682 4.88522H237.764ZM238.763 6.89222C238.613 7.04222 238.433 7.11722 238.223 7.11722C238.013 7.11722 237.833 7.04222 237.683 6.89222C237.533 6.74222 237.458 6.56222 237.458 6.35222C237.458 6.14222 237.533 5.96222 237.683 5.81222C237.833 5.66222 238.013 5.58722 238.223 5.58722C238.433 5.58722 238.613 5.66222 238.763 5.81222C238.913 5.96222 238.988 6.14222 238.988 6.35222C238.988 6.56222 238.913 6.74222 238.763 6.89222Z"
                  fill="#0E5F59"
                />
              </svg>
            </div>
          </div>
        </div> */}
        <img
          className="w-[95%] md:w-[70%] bg-[#fff] "
          src={navlogo}
          alt="logo"
        />
      </Link>

      <ul className="hidden md:flex space-x-2 ">
        <li className="p-1 w-[97px] h-[13px] shrink-0 text-darkGreen text-[16px] font-medium ">
          Dashboard
        </li>
        <li className="p-1 w-[97px] h-[13px] shrink-0 text-darkGreen text-[16px] font-medium ">
          Contact
        </li>
        <li className="p-1 w-[97px] h-[13px] shrink-0 text-darkGreen text-[16px] font-medium ">
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
                  {userNameSelect[0]}
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logoutHandleSubmit}>Logout</MenuItem>
              </Menu>
            </Stack>
          ) : (
            <div className="p-1 w-[100px] h-[36px] shrink-0  bg-darkGreen rounded-lg mr-5">
              <Link to={"/login"}>
                <div className="text-center text-white cursor-pointer text-[1.6em]">
                  Sign In
                </div>
              </Link>
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
