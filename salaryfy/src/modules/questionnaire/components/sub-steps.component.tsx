import { SUB_STEP_STATUS } from "../constants/sub-step.enum";
import { SubStepArrow } from "../pages/personal-details.page";
import SubStep from "./sub-step.component";

export default function SubSteps() {
  return (<>
    <div style={{ background: 'linear-gradient(45deg, #FFCE09 50%, transparent)' }} className='mb-[1em] text-[#0E5F59] text-[1.5em] px-[1em] rounded-[1em] py-[0.25em]'><span>3 steps selection process for&nbsp;</span><span className='font-bold'>Lenskart</span></div>
    <div className='flex justify-between mb-[2em]'>
      <SubStep status={SUB_STEP_STATUS.PENDING} no={1} title='Upload your Resume' />
      <SubStepArrow />
      <SubStep status={SUB_STEP_STATUS.REMAINING} no={2} title='Screening Quesions' />
      <SubStepArrow />
      <SubStep status={SUB_STEP_STATUS.REMAINING} no={3} title='Confirming Interview Slot' />
    </div>
  </>
  );
}