import React, { JSXElementConstructor, ReactElement } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function SideBar() {
  enum SIDE_TAB_PAGES {
    FRESHER_DASHBOARD = "/questionnaire/fresher-dashboard",
    FRESHER_PROFILE_UPLOAD = "/questionnaire/fresher-profile-upload",
    FRESHER_ROADMAP = "/questionnaire/fresher-roadmap",
  }

  const location = useLocation();
  const navigate = useNavigate();
  const [pageActive, setPageActive] = React.useState({
    fresherDashboard: false,
    profileUpload: false,
    roadMap: false,
  });

  function updateLocation() {
    const newPagesActive = { ...pageActive };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(newPagesActive).map(([key]: [string, boolean]) => {
      newPagesActive[key as keyof typeof newPagesActive] = false;
    });
    switch (location.pathname) {
      case SIDE_TAB_PAGES.FRESHER_DASHBOARD:
        newPagesActive.fresherDashboard = true;
        break;
      case SIDE_TAB_PAGES.FRESHER_PROFILE_UPLOAD:
        newPagesActive.profileUpload = true;
        break;
      case SIDE_TAB_PAGES.FRESHER_ROADMAP:
        newPagesActive.roadMap = true;
        break;
    }
    setPageActive(() => newPagesActive);
  }

  function onTabIconClick(link: string) {
    navigate(link);
  }

  React.useEffect(() => {
    updateLocation();
  }, [location]);

  function IconHolder({
    children,
    active,
    onClick,
  }: {
    children: React.ReactNode;
    active: boolean;
    onClick: () => void;
  }) {
    return (
      <div
        onClick={onClick}
        className={`cursor-pointer h-[6em] w-[7em] flex items-center justify-center bg-[${
          active ? "#005F59" : "white"
        }]`}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(
            child as ReactElement<
              Record<string, boolean>,
              string | JSXElementConstructor<Record<string, boolean>>
            >,
            { active }
          )
        )}
      </div>
    );
  }
  function IconMobileHolder({
    children,
    active,
    onClick,
  }: {
    children: React.ReactNode;
    active: boolean;
    onClick: () => void;
  }) {
    return (
      <div
        className="cursor-pointer h-[6em] w-[7em] flex justify-center items-center bg-[white]"
        onClick={onClick}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(
            child as ReactElement<
              Record<string, boolean>,
              string | JSXElementConstructor<Record<string, boolean>>
            >,
            { active }
          )
        )}
      </div>
    );
  }
  function HomeIcon({ active }: { active?: boolean }) {
    //console.log({ active });
    return (
      <svg
        width="25"
        height="27"
        viewBox="0 0 25 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={active ? "white" : "#005F59"}
          d="M12.8513 0.275426C12.7642 0.18812 12.6607 0.118852 12.5468 0.0715898C12.4329 0.0243277 12.3108 0 12.1875 0C12.0642 0 11.9421 0.0243277 11.8282 0.0715898C11.7143 0.118852 11.6108 0.18812 11.5238 0.275426L0.273752 11.5254C0.186748 11.6126 0.117789 11.7162 0.0708172 11.8301C0.0238452 11.9439 -0.000218531 12.066 1.4953e-06 12.1892V25.3142C1.4953e-06 25.5628 0.0987735 25.8013 0.274589 25.9771C0.450404 26.1529 0.688861 26.2517 0.937501 26.2517H9.375C9.62364 26.2517 9.8621 26.1529 10.0379 25.9771C10.2137 25.8013 10.3125 25.5628 10.3125 25.3142V17.8142H14.0625V25.3142C14.0625 25.5628 14.1613 25.8013 14.3371 25.9771C14.5129 26.1529 14.7514 26.2517 15 26.2517H23.4375C23.6861 26.2517 23.9246 26.1529 24.1004 25.9771C24.2762 25.8013 24.375 25.5628 24.375 25.3142V12.1892C24.3752 12.066 24.3512 11.9439 24.3042 11.8301C24.2572 11.7162 24.1883 11.6126 24.1013 11.5254L21.5625 8.98855V2.81418C21.5625 2.56554 21.4637 2.32708 21.2879 2.15126C21.1121 1.97545 20.8736 1.87668 20.625 1.87668H18.75C18.5014 1.87668 18.2629 1.97545 18.0871 2.15126C17.9113 2.32708 17.8125 2.56554 17.8125 2.81418V5.23855L12.8513 0.275426ZM1.875 24.3767V12.5773L12.1875 2.2648L22.5 12.5773V24.3767H15.9375V16.8767C15.9375 16.628 15.8387 16.3896 15.6629 16.2138C15.4871 16.0379 15.2486 15.9392 15 15.9392H9.375C9.12636 15.9392 8.88791 16.0379 8.71209 16.2138C8.53627 16.3896 8.4375 16.628 8.4375 16.8767V24.3767H1.875Z"
        />
      </svg>
    );
  }
  function PageIcon({ active }: { active?: boolean }) {
    return (
      <svg
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke={active ? "white" : "#005F59"}
          d="M13 1H3.4C2.76348 1 2.15303 1.25286 1.70294 1.70294C1.25286 2.15303 1 2.76348 1 3.4V22.6C1 23.2365 1.25286 23.847 1.70294 24.2971C2.15303 24.7471 2.76348 25 3.4 25H17.8C18.4365 25 19.047 24.7471 19.4971 24.2971C19.9471 23.847 20.2 23.2365 20.2 22.6V8.2M13 1L20.2 8.2M13 1V8.2L20.2 8.2M15.3987 14.1999H5.79869M15.3987 19H5.79869M8.19869 9.39989H5.79869"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  function LinesIcon({ active }: { active?: boolean }) {
    return (
      <svg
        width="19"
        height="24"
        viewBox="0 0 19 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 22V9.5"
          stroke={active ? "white" : "#005F59"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 22V2"
          stroke={active ? "white" : "#005F59"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 22V14.5"
          stroke={active ? "white" : "#005F59"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  function HomeMobileIcon({ active }: { active?: boolean }) {
    return (
      <svg
        width="43"
        height="44"
        viewBox="0 0 43 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={active ? "#005F59" : "#B3B3B3"}
          stroke={active ? "#005F59" : "#B3B3B3"}
          d="M10.0719 20.3011L10.0721 20.3009L20.2991 10.0738L10.0719 20.3011ZM10.0719 20.3011C9.96957 20.4037 9.88849 20.5254 9.83326 20.6593C9.77807 20.7931 9.74977 20.9365 9.75 21.0813M10.0719 20.3011L10.2489 20.4777C10.1698 20.557 10.1071 20.6511 10.0644 20.7546C10.0217 20.8581 9.9998 20.9691 10 21.0811M32.0869 20.3008L32.0872 20.3011C32.1895 20.4037 32.2706 20.5254 32.3258 20.6593C32.3811 20.7932 32.4094 20.9367 32.4091 21.0815M32.0869 20.3008L32.1591 33.0129C32.1591 33.2389 32.0693 33.4557 31.9095 33.6155C31.7496 33.7754 31.5329 33.8652 31.3068 33.8652H23.6364C23.4103 33.8652 23.1936 33.7754 23.0337 33.6155C22.8739 33.4557 22.7841 33.2389 22.7841 33.0129V26.4447H22.5341M32.0869 20.3008L29.8523 18.0678V12.5583C29.8523 12.266 29.7361 11.9856 29.5294 11.7789C29.3227 11.5722 29.0423 11.4561 28.75 11.4561H27.0455C26.7531 11.4561 26.4727 11.5722 26.266 11.7789C26.0593 11.9856 25.9432 12.266 25.9432 12.5583V14.1586L21.86 10.0738L32.0869 20.3008ZM32.4091 21.0815L32.1591 21.0811H32.4091V21.0815ZM32.4091 21.0815V33.0129C32.4091 33.3052 32.293 33.5856 32.0862 33.7923C31.8795 33.999 31.5992 34.1152 31.3068 34.1152H23.6364C23.344 34.1152 23.0637 33.999 22.8569 33.7923C22.6502 33.5856 22.5341 33.3052 22.5341 33.0129V26.4447M22.5341 26.4447V26.1947H19.625V26.4447M22.5341 26.4447H19.625M19.625 26.4447H19.375V33.0129C19.375 33.2389 19.2852 33.4557 19.1254 33.6155C18.9655 33.7754 18.7488 33.8652 18.5227 33.8652H10.8523C10.6262 33.8652 10.4095 33.7754 10.2496 33.6155C10.0898 33.4557 10 33.2389 10 33.0129V21.0811M19.625 26.4447V33.0129C19.625 33.3052 19.5089 33.5856 19.3022 33.7923C19.0954 33.999 18.8151 34.1152 18.5227 34.1152H10.8523C10.5599 34.1152 10.2796 33.999 10.0728 33.7923C9.86613 33.5856 9.75 33.3052 9.75 33.0129V21.0813M9.75 21.0813C9.75 21.0814 9.75 21.0814 9.75 21.0815L10 21.0811M9.75 21.0813V21.0811H10M21.502 9.83417C21.6358 9.88971 21.7574 9.97108 21.8598 10.0736L21.502 9.83417ZM21.502 9.83417C21.3681 9.7786 21.2245 9.75 21.0795 9.75M21.502 9.83417L21.0795 9.75M21.0795 9.75C20.9346 9.75 20.791 9.7786 20.6571 9.83417M21.0795 9.75L20.6571 9.83417M20.6571 9.83417C20.5233 9.8897 20.4017 9.97106 20.2994 10.0736L20.6571 9.83417ZM11.9545 31.9106V21.5375L21.0795 12.4125L30.2045 21.5375V31.9106H24.7386V25.3424C24.7386 25.0501 24.6225 24.7697 24.4158 24.563C24.2091 24.3563 23.9287 24.2402 23.6364 24.2402H18.5227C18.2304 24.2402 17.95 24.3563 17.7433 24.563C17.5366 24.7697 17.4205 25.0501 17.4205 25.3424V31.9106H11.9545Z"
          strokeWidth="0.5"
        />
      </svg>
    );
  }
  function PageMobileIcon({ active }: { active?: boolean }) {
    return (
      <svg
        width="42"
        height="47"
        viewBox="0 0 42 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke={active ? "#005F59" : "#B3B3B3"}
          d="M23.2004 11.7061L14.0057 11.7061C13.3961 11.7061 12.8114 11.9482 12.3803 12.3793C11.9492 12.8104 11.707 13.3951 11.707 14.0047L11.707 32.3941C11.707 33.0038 11.9492 33.5885 12.3803 34.0195C12.8114 34.4506 13.3961 34.6928 14.0057 34.6928H27.7978C28.4074 34.6928 28.9921 34.4506 29.4232 34.0195C29.8542 33.5885 30.0964 33.0038 30.0964 32.3941L30.0964 18.6021M23.2004 11.7061L30.0964 18.6021M23.2004 11.7061V18.6021L30.0964 18.6021M25.4978 24.3487H16.3031M25.4978 28.9461L16.3031 28.9461M18.6018 19.7513H16.3031"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  function LinesMobileIcon({ active }: { active?: boolean }) {
    return (
      <svg
        width="18"
        height="23"
        viewBox="0 0 18 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 21.3635L16 9.26123"
          stroke={active ? "#005F59" : "#B3B3B3"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21.3636L9 2"
          stroke={active ? "#005F59" : "#B3B3B3"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 21.3634L2 14.1021"
          stroke={active ? "#005F59" : "#B3B3B3"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <>
      <div className="top-[0] pt-[10em] fixed h-[100%] w-[100%] z-50 flex items-end lg:items-start pointer-events-none">
        <div className="gap-[2em] flex-col bg-[white] w-[max-content]  hidden lg:flex h-[max-content] pointer-events-auto">
          <IconHolder
            onClick={() => onTabIconClick(SIDE_TAB_PAGES.FRESHER_DASHBOARD)}
            active={pageActive.fresherDashboard}
          >
            <HomeIcon />
          </IconHolder>
          <IconHolder
            onClick={() =>
              onTabIconClick(SIDE_TAB_PAGES.FRESHER_PROFILE_UPLOAD)
            }
            active={pageActive.profileUpload}
          >
            <PageIcon />
          </IconHolder>
          <IconHolder
            onClick={() => onTabIconClick(SIDE_TAB_PAGES.FRESHER_ROADMAP)}
            active={pageActive.roadMap}
          >
            <LinesIcon />
          </IconHolder>
        </div>
        <div
          className="flex lg:hidden flex-row bg-[white] flex-grow justify-around py-[1em] pointer-events-auto"
          style={{ boxShadow: "0px -8px 10px -5px rgba(0, 0, 0, 0.3)" }}
        >
          <IconMobileHolder
            onClick={() => onTabIconClick(SIDE_TAB_PAGES.FRESHER_DASHBOARD)}
            active={pageActive.fresherDashboard}
          >
            <HomeMobileIcon />
          </IconMobileHolder>
          <IconMobileHolder
            onClick={() =>
              onTabIconClick(SIDE_TAB_PAGES.FRESHER_PROFILE_UPLOAD)
            }
            active={pageActive.profileUpload}
          >
            <PageMobileIcon />
          </IconMobileHolder>
          <IconMobileHolder
            onClick={() => onTabIconClick(SIDE_TAB_PAGES.FRESHER_ROADMAP)}
            active={pageActive.roadMap}
          >
            <LinesMobileIcon />
          </IconMobileHolder>
        </div>
      </div>
      <div className="ml-6">
      <Outlet />
      </div>
      
    </>
  );
}
