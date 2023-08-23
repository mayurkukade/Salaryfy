import { SUB_STEP_STATUS } from "../constants/sub-step.enum";

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

  return (
    <div
      className={`flex ${stepBgColor} px-[2em] rounded-[1.5em] items-center h-[6.5em]`}
      style={{ boxShadow: "0 0 5px rgb(100, 100, 100, 0.25)" }}
    >
      <div
        className={`border ${stepCircleColor} border-solid h-[2em] w-[2em] mr-[1em] rounded-[1em] flex items-center justify-center bg-[white] text-[#0E5F59] text-[2em]`}
      >
        {no}
      </div>
      <div className="">
        {status !== SUB_STEP_STATUS.REMAINING && (
          <div className="font-medium text-[white] text-[1.3em]">Step-{no}</div>
        )}
        <div className={`text-[1.8em] font-medium ${titleColor}`}>{title}</div>
      </div>
    </div>
  );
}
