import { AppRadioButton } from "../../../components/app-radio.button.component";
import BottomPageNavigationBar from "../components/bottom-navigation-bar.component";
import UserJobDetails from "../components/job-details.component";
import QuestionnaireTopBarStep from "../components/questionnaire-topbar-step.component";
import SubSteps from "../components/sub-steps.component";

export default function ScreeningQuestions() {

  return (
    <div className='w-100 flex flex-col items-center h-[100%]'>
      <QuestionnaireTopBarStep />
      <div className='max-w-[120em] w-[100%] mb-[2em] flex flex-col h-[100%]'>
        <div className='text-[1.4em]'>Job Details</div>
        {/* <UserJobDetails /> */}

        {/* STEPS */}
        <div className='py-[2em] px-[3em] h-[100%]'>
          {/* <SubSteps /> */}
          <Questions />
          <BottomPageNavigationBar/>
        </div>
      </div>
    </div>
  );
}

function Questions() {
  return (
    <>
      <div className='font-semibold text-[1.8em] text-[#5B5B5B] mb-[1em]'>Fill the details below</div>
      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <YesNoResponse className='text-[1.5em] ml-[1.5em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <YesNoResponse className='text-[1.5em] ml-[1.5em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <YesNoResponse className='text-[1.5em] ml-[1.5em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <YesNoResponse className='text-[1.5em] ml-[1.5em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <RatingResponse className='ml-[2em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <RatingResponse className='ml-[2em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <RatingResponse className='ml-[2em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />

      <Question question='Do you currently live in the city for which you want to apply the job for?' />
      <RatingResponse className='ml-[2em] mb-[1em]' />
      <QuestionSeparator className='mb-[2em]' />
    </>
  );
}

export function Question({ question }: { question: string }) {
  return (
    <div className='flex'>
      <div className='mt-[0.25em] mr-[1em] h-[100%]'>
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.273438" width="12.2727" height="12.2727" rx="2" fill="#FECD08" />
          <path d="M15 11.1815L4.77273 17.0862L4.77273 5.27674L15 11.1815Z" fill="#0E5F59" />
        </svg>
      </div>
      <div className='text-[1.5em] font-medium'>
        <div className='mb-[0.5em]'>{question}</div>
      </div>
    </div>
  );
}

export function RatingResponse({ className }: { className?: string }) {
  function Star({ className, active }: { className?: string, active?: boolean }) {
    return (<>
      {active && <div className={className}><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 0L12.7945 4.96546L18.535 6.56434L14.8307 11.232L15.084 17.1857L9.5 15.105L3.91604 17.1857L4.16933 11.232L0.464963 6.56434L6.20546 4.96546L9.5 0Z" fill="#FECD08" />
      </svg></div>}

      {
        !active && <div className={className}><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L12.7945 4.96546L18.535 6.56434L14.8307 11.232L15.084 17.1857L9.5 15.105L3.91604 17.1857L4.16933 11.232L0.464963 6.56434L6.20546 4.96546L9.5 0Z" fill="#D7E8F0" />
        </svg></div>
      }

    </>);
  }
  return (
    <div className={'flex ' + className}>
      <Star className='mr-[1em]' active={true} />
      <Star className='mr-[1em]' active={true} />
      <Star className='mr-[1em]' active={true} />
      <Star className='mr-[1em]' active={true} />
      <Star className='' active={false} />
    </div>
  );
}

export function QuestionSeparator({ className }: { className?: string }) {
  return <div className={'bg-[#0E5F59] h-[1px] opacity-[0.2] w-[100%] ' + className}></div>
}

export function YesNoResponse({ className }: { className?: string }) {
  return (
    <div className={'flex ' + className}>
      <div className='flex items-center mr-[0.5em]'>
        <span className='mr-[0.5em]'>
          <AppRadioButton active={true} />
        </span>
        <span>Yes</span>
      </div>
      <div className='flex items-center'>
        <span className='mr-[0.5em]'>
          <AppRadioButton active={false} />
        </span>
        <span>No</span>
      </div>
    </div>
  );
}
