import { useSelector } from "react-redux";
import { SUB_STEP_STATUS } from "../constants/sub-step.enum";
import { RootState } from "../../../store/app.store";
import { useParams } from "react-router-dom";

export default function SubStep({
  status,
  no,
  title,
}: {
  status: string;
  no: number;
  title: string;
}) {
  const stepCircleColor: string =
    status === SUB_STEP_STATUS.PENDING
      ? "border-[white]"
      : status === SUB_STEP_STATUS.COMPLETED
      ? "border-[#FECD08]"
      : status === SUB_STEP_STATUS.REMAINING
      ? "border-[#0E5F59]"
      : "border-red[#0E5F59]";

  const stepBgColor: string =
    status === SUB_STEP_STATUS.PENDING
      ? "bg-[#0E5F59]"
      : status === SUB_STEP_STATUS.COMPLETED
      ? "bg-[#0E5F59]"
      : status === SUB_STEP_STATUS.REMAINING
      ? "bg-[white]"
      : "bg-[white]";

  const titleColor: string =
    status === SUB_STEP_STATUS.PENDING
      ? "text-[#FECD08]"
      : status === SUB_STEP_STATUS.COMPLETED
      ? "text-[#FECD08]"
      : status === SUB_STEP_STATUS.REMAINING
      ? "text-[#0E5F59]"
      : "text-[white]";

  const currentRoute = useSelector(
    (state: RootState) => state.currentRoute.currentRoute
  );
  //console.log(currentRoute);
  //console.log(no);
  const { id } = useParams();
  //console.log(id);
  return (
    <div
      className={`flex ${stepBgColor} px-[2em] rounded-[1.5em] items-center h-[6.5em]`}
      style={{ boxShadow: "0 0 5px rgb(100, 100, 100, 0.25)" }}
    >
      <div
        className={`border ${stepCircleColor} border-solid h-[2em] w-[2em] mr-[1em] rounded-[1em] flex items-center justify-center bg-[white] text-[#0E5F59] text-[2em]`}
      >
        {no == 1 && currentRoute !== "questionnaire" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        ) : no == 2 && currentRoute == `questionnaire/schedule-interview/${id}` ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        ) : (
          no
        )}
      </div>
      <div className="">
        {status !== SUB_STEP_STATUS.REMAINING && (
          <div className=" text-[white] text-[15px] leading-[23px] font-normal">
            Step-{no}{" "}
          </div>
        )}

        <div className={`text-[1.8em] font-medium ${titleColor}`}>{title}</div>
      </div>
    </div>
  );
}
