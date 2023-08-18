import { Button } from "@mui/material";
import QuestionnaireTopBarStep from "../../questionnaire/components/questionnaire-topbar-step.component";
import './graduate-fresher.style.css'
export default function GraduateFresher() {
  return (
    <div className="p-[2em] gap-[2em] flex flex-col">
      <TopHeading />
      <div className="flex"><QuestionnaireTopBarStep /></div>

      <div className="overflow-x-auto overflow-y-hidden app-scrollbar">
        <div className="min-w-[90em] grid grid-cols-[repeat(4,1fr)] text-[#0E5F59] font-medium text-[1.6em] [&>*:nth-child(4n+1)]:bg-[#0E5F5919]
      [&>*:nth-child(4n+1)]:text-[black] [&>*:nth-child(n+2):nth-child(-n+4)]:bg-[#0E5F59]
      [&>*:nth-child(n+2):nth-child(-n+4)]:text-white [&>*:nth-child(n+2):nth-child(-n+4)]:text-[1.25em]
      [&>*:nth-child(n+2):nth-child(-n+4)]:font-bold [&>*:nth-child(n+2):nth-child(-n+4)]:flex
      [&>*:nth-child(n+2):nth-child(-n+4)]:gap-[0.5em] [&>*:nth-child(n+2):nth-child(-n+4)]:items-center
      [&>*]:p-[1em] [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:text-center [&>div]:flex-col [&>div]:gap-[1em] [&>*:nth-child(4n+1)]:items-start
      [&>*]:border [&>*]:border-solid [&>*]:border-[#0E5F5955] [&>*:nth-child(n+1):nth-child(-n+4)]:border-t-0
      [&>*:nth-last-child(-n+4)]:border-b-0 [&>*:nth-child(4n+1)]:border-l-0 [&>*:nth-last-child(4n-3)]:border-r-0
      border-[2px] border-solid border-[#0E5F5955] rounded-[1em] overflow-hidden">
          <div></div>
          <span><div><Icon /></div><div>Placement Drive</div></span>
          <span><div><Icon2 /></div><div>Instant Placement</div></span>
          <span><div><Icon3 /></div><div>Skill Placement</div></span>
          <div>Recommended for</div>
          <div>10th/12th pass-out student</div>
          <div>10th/12th pass-out student or UG/PG completed student</div>
          <div>10th/12th pass-out student or UG/PG completed student</div>
          <div>Get a new job</div>
          <div>Within 48 hours</div>
          <div>Within 15 days</div>
          <div>Course duration + 15 days</div>
          <div>Salary</div>
          <div>Upto 4 LPA</div>
          <div>Upto 6 LPA</div>
          <div>Upto 12 LPA</div>
          <div>New Skills</div>
          <div><WrongIcon /></div>
          <div><WrongIcon /></div>
          <div>Data Science, Full Stack Developer, Business Analyst, Data Analyst, Digital Marketing etc.</div>
          <div>Personality Development</div>
          <div><WrongIcon /></div>
          <div><WrongIcon /></div>
          <div><RightIcon /></div>
          <div>Resume Building</div>
          <div><WrongIcon /></div>
          <div><WrongIcon /></div>
          <div><RightIcon /></div>
          <div>Mock Interviews</div>
          <div><WrongIcon /></div>
          <div><WrongIcon /></div>
          <div><RightIcon /></div>
          <div>Career Counselling</div>
          <div><WrongIcon /></div>
          <div><WrongIcon /></div>
          <div><RightIcon /></div>
          <div></div>
          <ViewPlanButton />
          <ViewPlanButton />
          <ViewPlanButton />
        </div>
      </div>

      <div>
        <div className="w-[max-content] flex flex-col">
          <div className="bg-[#0E5F59]">
            <div className="text-white font-bold text-[2.2em]">JOB GUARANTEE PROGRAM</div>
            <div className="bg-white text-[#0E5F59] text-[1.5em]">Placement duration: 1 month</div>
          </div>

          <div className="mt-[1em] flex flex-col border-[2px] px-[2em] border-solid border-[#38AB23] rounded-[1.5em]">
            <div className="-translate-y-[50%] h-[2em] flex justify-center items-center text-white text-[1.6em]"><span className="bg-[#38AB23] px-[1em] rounded-[0.5em]">Skilled Package</span></div>
            <div className="gap-[1em] [&>div>span:nth-child(1)]:text-[2em] [&>div>span:nth-child(1)]:text-[#005F59] [&>div>span:nth-child(1)]:font-bold [&>div>span:nth-child(2)]:text-[#5B5B5B] [&>div>span:nth-child(2)]:text-[1.5em]">
              <div><span>1. Job guarantee program:&nbsp;</span><span>50 to 100 learning hours</span></div>
              <div><span>2. Skills:&nbsp;</span><span>Python, Analytics, Power BI, Tableau, ML, etc</span></div>
              <div><span>3. Live Projects:&nbsp;</span><span>Get real world experience</span></div>
              <div><span>4. Community:&nbsp;</span><span>Connect, learn & grow with your peers</span></div>
              <div><span>5. Hackathons:&nbsp;</span><span>Participate in real life competition</span></div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

function TopHeading() {
  return (
    <div className="flex justify-between py-[1em] px-[0.5em] text-[#005F59] text-[1.6em] border border-solid border-[#FECD08] rounded-[5px]">
      <div>
        <div className="text-[3em] font-bold">Fresher</div>
        <div className="">It will only take your 30sec for profile creation</div>
      </div>
      <div className="flex gap-[0.5em]">
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_14_8195)">
              <rect x="8" y="5" width="9" height="13" fill="#FECD08" />
              <path d="M12 0C5.3828 0 0 5.38331 0 12C0 18.6167 5.3828 24 12 24C18.6172 24 24 18.6167 24 12C24 5.38331 18.6172 0 12 0ZM16.7705 12.4204L9.77053 16.9204C9.68992 16.9725 9.59597 17.0001 9.50002 17C9.41798 17 9.33497 16.9795 9.26077 16.939C9.18182 16.896 9.11593 16.8326 9.07003 16.7553C9.02414 16.6781 8.99994 16.5899 9 16.5V7.5C9 7.31691 9.09961 7.14891 9.26077 7.06102C9.41897 6.97411 9.6172 6.97945 9.77053 7.07958L16.7705 11.5796C16.9131 11.6714 17 11.8301 17 12C17 12.1699 16.9131 12.3286 16.7705 12.4204Z" fill="#005F59" />
            </g>
            <defs>
              <clipPath id="clip0_14_8195">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>How it works?</div>
      </div>
    </div>
  );
}

function WrongIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 13L1 1M1 13L13 1" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function RightIcon() {
  return <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.86998 18L7.77447 17.8373C6.31559 15.3516 2.43883 10.0767 2.39967 10.0238L2.34375 9.94779L3.66454 8.64248L7.84545 11.5619C10.4779 8.14595 12.9337 5.79973 14.5357 4.42962C16.2881 2.93087 17.4287 2.24089 17.4403 2.23428L17.4662 2.21875H19.7066L19.4926 2.40934C13.9886 7.31175 8.02286 17.7313 7.96344 17.836L7.86998 18Z" fill="#005F59" /></svg>;
}

function Icon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_14_4946)">
        <path d="M31.5199 22.6667H29.749V21.6042C29.749 20.2371 28.637 19.125 27.2699 19.125H23.7282C22.3611 19.125 21.249 20.2371 21.249 21.6042V22.6667H19.4782C19.1468 22.6667 18.8187 22.7336 18.5137 22.8634C18.2087 22.9931 17.933 23.183 17.7031 23.4218L25.499 27.489L33.295 23.4218C33.065 23.183 32.7893 22.9931 32.4843 22.8634C32.1794 22.7336 31.8513 22.6667 31.5199 22.6667ZM23.374 22.6667V21.6042C23.374 21.5102 23.4114 21.4202 23.4778 21.3537C23.5442 21.2873 23.6343 21.25 23.7282 21.25H27.2699C27.3638 21.25 27.4539 21.2873 27.5203 21.3537C27.5867 21.4202 27.624 21.5102 27.624 21.6042V22.6667H23.374Z" fill="white" />
        <path d="M25.9916 29.6284C25.84 29.7073 25.6716 29.7486 25.5007 29.7486C25.3298 29.7486 25.1614 29.7073 25.0098 29.6284L17 25.4492V31.5196C17 32.8867 18.1121 33.9988 19.4792 33.9988H31.5208C32.8879 33.9988 34 32.8867 34 31.5196V25.4492L25.9916 29.6284Z" fill="white" />
        <path d="M12.75 14.1667C8.84425 14.1667 5.66667 10.9891 5.66667 7.08333C5.66667 3.17758 8.84425 0 12.75 0C16.6558 0 19.8333 3.17758 19.8333 7.08333C19.8333 10.9891 16.6558 14.1667 12.75 14.1667ZM6.72917 17C3.0175 17 0 20.0175 0 23.7292V28.6875C0 29.2683 0.481667 29.75 1.0625 29.75H14.1667V25.1458C14.1667 22.4825 16.15 20.2867 18.7142 19.9042C19.0825 18.8275 19.7767 17.9208 20.6692 17.2692C19.2525 16.864 19.176 17 6.72917 17Z" fill="#FECD08" />
        <path d="M12.75 14.1667C8.84425 14.1667 5.66667 10.9891 5.66667 7.08333C5.66667 3.17758 8.84425 0 12.75 0C16.6558 0 19.8333 3.17758 19.8333 7.08333C19.8333 10.9891 16.6558 14.1667 12.75 14.1667ZM6.72917 17C3.0175 17 0 20.0175 0 23.7292V28.6875C0 29.2683 0.481667 29.75 1.0625 29.75H14.1667V25.1458C14.1667 22.4825 16.15 20.2867 18.7142 19.9042C19.0825 18.8275 19.7767 17.9208 20.6692 17.2692C19.2525 16.864 19.176 17 6.72917 17Z" fill="#FECD08" />
        <path d="M12.75 14.1667C8.84425 14.1667 5.66667 10.9891 5.66667 7.08333C5.66667 3.17758 8.84425 0 12.75 0C16.6558 0 19.8333 3.17758 19.8333 7.08333C19.8333 10.9891 16.6558 14.1667 12.75 14.1667ZM6.72917 17C3.0175 17 0 20.0175 0 23.7292V28.6875C0 29.2683 0.481667 29.75 1.0625 29.75H14.1667V25.1458C14.1667 22.4825 16.15 20.2867 18.7142 19.9042C19.0825 18.8275 19.7767 17.9208 20.6692 17.2692C19.2525 16.864 19.176 17 6.72917 17Z" fill="#FECD08" />
        <path d="M25.9916 29.6284C25.84 29.7073 25.6716 29.7486 25.5007 29.7486C25.3298 29.7486 25.1614 29.7073 25.0098 29.6284L17 25.4492V31.5196C17 32.8867 18.1121 33.9988 19.4792 33.9988H31.5208C32.8879 33.9988 34 32.8867 34 31.5196V25.4492L25.9916 29.6284Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_14_4946">
          <rect width="34" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
}

function Icon2() {
  return (
    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.8325 8.41646V6.03581C28.8325 5.08873 28.4563 4.18044 27.7866 3.51076C27.1169 2.84107 26.2086 2.46484 25.2615 2.46484H15.7389C14.7919 2.46484 13.8836 2.84107 13.2139 3.51076C12.5442 4.18044 12.168 5.08873 12.168 6.03581V8.41646C12.168 8.73215 12.2934 9.03491 12.5166 9.25814C12.7398 9.48137 13.0426 9.60678 13.3583 9.60678C13.674 9.60678 13.9767 9.48137 14.2 9.25814C14.4232 9.03491 14.5486 8.73215 14.5486 8.41646V6.03581C14.5486 5.72012 14.674 5.41736 14.8973 5.19413C15.1205 4.9709 15.4232 4.84549 15.7389 4.84549H25.2615C25.5772 4.84549 25.88 4.9709 26.1032 5.19413C26.3264 5.41736 26.4518 5.72012 26.4518 6.03581V8.41646C26.4518 8.73215 26.5772 9.03491 26.8005 9.25814C27.0237 9.48137 27.3265 9.60678 27.6422 9.60678C27.9579 9.60678 28.2606 9.48137 28.4838 9.25814C28.7071 9.03491 28.8325 8.73215 28.8325 8.41646Z" fill="#FECD08" />
      <path d="M38.3542 12.028C38.3542 11.0805 37.9781 10.1723 37.3079 9.50333C36.9766 9.1715 36.583 8.90828 36.1498 8.72874C35.7166 8.5492 35.2522 8.45687 34.7832 8.45703H6.2155C5.268 8.45703 4.35979 8.83317 3.69082 9.50333C3.359 9.83469 3.09578 10.2282 2.91624 10.6615C2.7367 11.0947 2.64437 11.5591 2.64453 12.028L3.87325 29.8444C3.87325 30.7919 4.24939 31.7002 4.91954 32.3691C5.25091 32.7009 5.64446 32.9642 6.07768 33.1437C6.5109 33.3232 6.97527 33.4156 7.44422 33.4154H33.5545C34.502 33.4154 35.4102 33.0393 36.0792 32.3691C36.411 32.0378 36.6742 31.6442 36.8538 31.211C37.0333 30.7778 37.1256 30.3134 37.1255 29.8444L38.3542 12.028Z" fill="#FECD08" />
      <path d="M25.3124 13.0312H19.0138C18.9053 13.0313 18.8 13.0682 18.7155 13.136C18.6309 13.2038 18.5723 13.2983 18.5492 13.4038L16.7179 21.7865C16.7028 21.8556 16.7034 21.9271 16.7198 21.9959C16.7361 22.0646 16.7677 22.1289 16.8123 22.1839C16.8568 22.239 16.9132 22.2834 16.9773 22.3139C17.0414 22.3445 17.1115 22.3604 17.1825 22.3605H20.3752L18.923 27.8515C18.8958 27.9547 18.9054 28.064 18.95 28.161C18.9946 28.258 19.0716 28.3366 19.1678 28.3837C19.2641 28.4307 19.3737 28.4432 19.4782 28.419C19.5826 28.3949 19.6755 28.3356 19.741 28.2512L25.982 20.2827C26.0363 20.2127 26.0697 20.129 26.0785 20.041C26.0873 19.9531 26.0712 19.8645 26.0319 19.7852C25.9927 19.7059 25.9319 19.6391 25.8564 19.5925C25.781 19.5458 25.6939 19.5211 25.605 19.5211H22.8208L25.7375 13.7159C25.7737 13.6438 25.7909 13.5637 25.7872 13.4831C25.7836 13.4026 25.7594 13.3243 25.7168 13.2557C25.6742 13.1872 25.6147 13.1305 25.5439 13.0912C25.4731 13.052 25.3934 13.0313 25.3124 13.0312Z" fill="white" stroke="#005F59" />
    </svg>
  );
}

function Icon3() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8579 39.8755V36.6636C16.5474 36.6636 14.6685 34.7847 14.6685 32.4741C14.6685 30.1636 16.5474 28.2847 18.8579 28.2847V25.1426H13.0033L13.5014 23.7434C13.5812 23.5202 13.6217 23.2849 13.6211 23.0479C13.6211 21.8931 12.6811 20.9531 11.5264 20.9531C10.3716 20.9531 9.43164 21.8931 9.43164 23.0479C9.43164 23.2872 9.47151 23.5214 9.55132 23.7434L10.0494 25.1426H4.125C4.6447 32.9693 11.0312 39.3558 18.8579 39.8755Z" fill="#FECD08" />
      <path d="M11.5264 18.8581C13.8369 18.8581 15.7158 20.737 15.7158 23.0475H18.8579V17.1929L20.2571 17.691C21.5469 18.1503 23.0463 17.109 23.0474 15.716C23.0463 14.3219 21.5479 13.2725 20.2571 13.7409L18.8579 14.2391V8.4375C11.0312 8.9572 4.6447 15.2208 4.125 23.0475H7.33691C7.33691 20.737 9.21581 18.8581 11.5264 18.8581ZM35.5627 25.1422H32.4736C32.4736 27.4528 30.5947 29.3317 28.2842 29.3317C25.9736 29.3317 24.0947 27.4528 24.0947 25.1422H20.9526V30.9969L19.5534 30.4987C18.2585 30.0334 16.7621 31.0797 16.7632 32.4738C16.7621 33.8679 18.2596 34.9142 19.5534 34.4488L20.9526 33.9507V39.8752C28.7794 39.3555 35.043 32.969 35.5627 25.1422Z" fill="#FECD08" />
      <path d="M35.6162 12.5737V8.38428H31.4268C31.4268 6.07372 29.5479 4.125 27.2373 4.125C24.9268 4.125 23.0479 6.07372 23.0479 8.38428H20.9531V11.5264C23.2637 11.5264 25.1426 13.4053 25.1426 15.7158C25.1426 18.0264 23.2637 19.9053 20.9531 19.9053V23.0474H26.8077L26.3096 24.4466C26.2298 24.6697 26.1893 24.9051 26.1899 25.1421C26.1899 26.2968 27.1299 27.2368 28.2847 27.2368C29.4394 27.2368 30.3794 26.2968 30.3794 25.1421C30.3794 24.9027 30.3395 24.6685 30.2597 24.4466L29.7616 23.0474H35.6162V20.9526C37.9268 20.9526 39.8755 19.0737 39.8755 16.7632C39.8755 14.4526 37.9268 12.5737 35.6162 12.5737Z" fill="white" />
    </svg>

  );
}

function ViewPlanButton() {
  return (
    <div>
      <Button variant='contained' color='secondary'><SelectTextIcon /></Button>
      <div className='underline'>View Plan Details</div>
    </div>
  );
}

function SelectTextIcon() {
  return (
    <svg width="7em" viewBox="0 0 106 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.166 20.2025C13.3426 20.2025 12.5868 20.1012 11.8984 19.8988C11.21 19.6828 10.5891 19.3656 10.0356 18.9472C9.48222 18.5287 8.98954 18.0225 8.55761 17.4286L10.2786 15.4849C10.94 16.4028 11.5879 17.0372 12.2223 17.3881C12.8567 17.7391 13.5721 17.9146 14.3685 17.9146C14.8274 17.9146 15.2459 17.8471 15.6238 17.7121C16.0017 17.5636 16.2987 17.3679 16.5147 17.1249C16.7306 16.8685 16.8386 16.5783 16.8386 16.2543C16.8386 16.0248 16.7914 15.8156 16.6969 15.6267C16.6159 15.4242 16.4877 15.2487 16.3122 15.1002C16.1367 14.9383 15.9207 14.7898 15.6643 14.6548C15.4078 14.5198 15.1176 14.4051 14.7937 14.3106C14.4697 14.2161 14.112 14.1284 13.7206 14.0474C12.9782 13.8989 12.3303 13.7032 11.7769 13.4602C11.2235 13.2038 10.7578 12.8933 10.3798 12.5289C10.0019 12.1509 9.72518 11.7325 9.54971 11.2736C9.37423 10.8011 9.2865 10.268 9.2865 9.67405C9.2865 9.08014 9.41473 8.53347 9.67119 8.03405C9.94115 7.53462 10.3056 7.10269 10.7645 6.73824C11.2235 6.3738 11.7566 6.09034 12.364 5.88787C12.9714 5.6854 13.6261 5.58417 14.328 5.58417C15.1244 5.58417 15.833 5.67865 16.4539 5.86763C17.0883 6.0566 17.6417 6.34005 18.1142 6.718C18.6001 7.08244 18.9983 7.52788 19.3087 8.0543L17.5675 9.77529C17.2975 9.35685 16.9938 9.01265 16.6564 8.74269C16.3189 8.45924 15.9545 8.25002 15.5631 8.11504C15.1716 7.96656 14.7599 7.89232 14.328 7.89232C13.8421 7.89232 13.4169 7.95981 13.0524 8.09479C12.7015 8.22977 12.4248 8.42549 12.2223 8.68195C12.0198 8.92492 11.9186 9.22187 11.9186 9.57282C11.9186 9.84278 11.9793 10.0857 12.1008 10.3017C12.2223 10.5042 12.391 10.6864 12.607 10.8484C12.8365 11.0104 13.1267 11.1521 13.4776 11.2736C13.8286 11.395 14.2268 11.503 14.6722 11.5975C15.4146 11.746 16.0827 11.9485 16.6766 12.2049C17.2705 12.4479 17.7767 12.7448 18.1952 13.0958C18.6136 13.4332 18.9308 13.8247 19.1468 14.2701C19.3627 14.702 19.4707 15.188 19.4707 15.7279C19.4707 16.6593 19.248 17.4624 18.8026 18.1373C18.3706 18.7987 17.7565 19.3116 16.9601 19.676C16.1637 20.027 15.2324 20.2025 14.166 20.2025ZM26.9206 20.2025C25.8003 20.2025 24.8082 19.9663 23.9443 19.4938C23.094 19.0214 22.4258 18.3802 21.9399 17.5704C21.4675 16.747 21.2313 15.8089 21.2313 14.756C21.2313 13.9192 21.3662 13.1565 21.6362 12.4681C21.9061 11.7797 22.2773 11.1858 22.7498 10.6864C23.2357 10.1735 23.8094 9.78204 24.4708 9.51208C25.1457 9.22862 25.8813 9.08689 26.6777 9.08689C27.3796 9.08689 28.0342 9.22187 28.6416 9.49183C29.249 9.76179 29.7755 10.133 30.2209 10.6054C30.6663 11.0643 31.0038 11.6178 31.2332 12.2657C31.4762 12.9001 31.5909 13.5952 31.5774 14.3511L31.5572 15.2217H22.9117L22.4461 13.521H29.4718L29.1478 13.8652V13.4197C29.1073 13.0013 28.9723 12.6369 28.7429 12.3264C28.5134 12.0025 28.2165 11.7527 27.852 11.5773C27.5011 11.3883 27.1096 11.2938 26.6777 11.2938C26.0163 11.2938 25.4561 11.422 24.9972 11.6785C24.5518 11.935 24.2143 12.3062 23.9848 12.7921C23.7554 13.2645 23.6406 13.8584 23.6406 14.5738C23.6406 15.2622 23.7824 15.8629 24.0658 16.3758C24.3628 16.8887 24.7745 17.2869 25.3009 17.5704C25.8408 17.8403 26.4685 17.9753 27.1839 17.9753C27.6833 17.9753 28.1422 17.8943 28.5606 17.7323C28.9791 17.5704 29.4313 17.2802 29.9172 16.8617L31.1523 18.5827C30.7878 18.9202 30.3694 19.2104 29.8969 19.4533C29.438 19.6828 28.9521 19.865 28.4392 20C27.9262 20.135 27.4201 20.2025 26.9206 20.2025ZM33.8033 20V5.01725H36.314V20H33.8033ZM44.0436 20.2025C42.9232 20.2025 41.9311 19.9663 41.0673 19.4938C40.2169 19.0214 39.5487 18.3802 39.0628 17.5704C38.5904 16.747 38.3542 15.8089 38.3542 14.756C38.3542 13.9192 38.4891 13.1565 38.7591 12.4681C39.0291 11.7797 39.4003 11.1858 39.8727 10.6864C40.3586 10.1735 40.9323 9.78204 41.5937 9.51208C42.2686 9.22862 43.0042 9.08689 43.8006 9.08689C44.5025 9.08689 45.1571 9.22187 45.7645 9.49183C46.372 9.76179 46.8984 10.133 47.3438 10.6054C47.7892 11.0643 48.1267 11.6178 48.3562 12.2657C48.5991 12.9001 48.7139 13.5952 48.7004 14.3511L48.6801 15.2217H40.0347L39.569 13.521H46.5947L46.2707 13.8652V13.4197C46.2302 13.0013 46.0952 12.6369 45.8658 12.3264C45.6363 12.0025 45.3394 11.7527 44.9749 11.5773C44.624 11.3883 44.2325 11.2938 43.8006 11.2938C43.1392 11.2938 42.579 11.422 42.1201 11.6785C41.6747 11.935 41.3372 12.3062 41.1077 12.7921C40.8783 13.2645 40.7635 13.8584 40.7635 14.5738C40.7635 15.2622 40.9053 15.8629 41.1887 16.3758C41.4857 16.8887 41.8974 17.2869 42.4238 17.5704C42.9637 17.8403 43.5914 17.9753 44.3068 17.9753C44.8062 17.9753 45.2651 17.8943 45.6836 17.7323C46.102 17.5704 46.5542 17.2802 47.0401 16.8617L48.2752 18.5827C47.9107 18.9202 47.4923 19.2104 47.0199 19.4533C46.5609 19.6828 46.075 19.865 45.5621 20C45.0492 20.135 44.543 20.2025 44.0436 20.2025ZM55.4818 20.2025C54.483 20.2025 53.5854 19.9595 52.789 19.4736C51.9926 18.9877 51.3649 18.3263 50.906 17.4894C50.4471 16.6525 50.2176 15.7076 50.2176 14.6548C50.2176 13.602 50.4471 12.6571 50.906 11.8202C51.3649 10.9834 51.9926 10.322 52.789 9.83603C53.5854 9.3501 54.483 9.10714 55.4818 9.10714C56.4402 9.10714 57.3108 9.28936 58.0937 9.65381C58.8766 10.0183 59.484 10.5244 59.9159 11.1723L58.5391 12.8326C58.3366 12.5491 58.0802 12.2927 57.7697 12.0632C57.4593 11.8337 57.1286 11.6515 56.7776 11.5165C56.4267 11.3815 56.0757 11.3141 55.7248 11.3141C55.1309 11.3141 54.5977 11.4625 54.1253 11.7595C53.6663 12.0429 53.3019 12.4411 53.0319 12.9541C52.762 13.4535 52.627 14.0204 52.627 14.6548C52.627 15.2892 52.762 15.8561 53.0319 16.3555C53.3154 16.855 53.6933 17.2532 54.1658 17.5501C54.6382 17.8471 55.1646 17.9956 55.745 17.9956C56.096 17.9956 56.4334 17.9416 56.7574 17.8336C57.0948 17.7121 57.412 17.5434 57.709 17.3274C58.0059 17.1114 58.2827 16.8415 58.5391 16.5175L59.9159 18.198C59.457 18.7919 58.8226 19.2779 58.0127 19.6558C57.2163 20.0202 56.3727 20.2025 55.4818 20.2025ZM62.9745 20V6.61676H65.4648V20H62.9745ZM60.8688 11.638V9.32986H67.7932V11.638H60.8688Z" fill="#005F59" />
      <path d="M104.871 13.8711C105.352 13.39 105.352 12.61 104.871 12.1289L97.0312 4.28906C96.5502 3.80796 95.7701 3.80796 95.2891 4.28906C94.808 4.77015 94.808 5.55015 95.2891 6.03125L102.258 13L95.2891 19.9688C94.808 20.4498 94.808 21.2299 95.2891 21.7109C95.7701 22.192 96.5502 22.192 97.0312 21.7109L104.871 13.8711ZM73 14.2319H104V11.7681H73V14.2319Z" fill="#005F59" />
    </svg>
  );
}