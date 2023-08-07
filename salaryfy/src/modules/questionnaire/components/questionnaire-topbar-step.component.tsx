import { Box } from "@mui/material";

export default function QuestionnaireTopBarStep() {
  return (
    <>

      <Box className="flex-grow justify-center" sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
        <div className='flex-grow max-w-[120em] w-[100%] flex mb-[2em] gap-[2em]'>
          <StepDesktop progress={100} active={true} no={1} title='Select the job' />
          <StepDesktop progress={5} active={true} no={2} title='Upload your Resume' />
          <StepDesktop progress={0} active={false} no={3} title='Get hired!' />
        </div>
      </Box>

      <Box className="flex-grow justify-center w-[100%]" sx={{ display: { xs: 'flex', md: 'flex', lg: 'none' } }}>
        <div className='flex-grow max-w-[120em] w-[100%] flex mb-[2em] gap-[2em]'>
          <StepMobile progress={100} active={true} no={1} title='Select the job' />
          <StepMobile progress={65} active={true} no={2} title='Upload your Resume' />
          <StepMobile progress={0} active={false} no={3} title='Get hired!' />
        </div>
      </Box>

    </>
  );
}

function StepMobile({ className, title, no, active, progress }: { className?: string, title: string, no: number, active: boolean, progress: number }) {
  if (progress > 100 || progress < 0) throw new Error('Progress value must be between 0 and 100');
  return (
    <div className={'flex flex-grow flex-col  justify-start items-center ' + (className || '')}>
      <div className='text-[1.5em] text-[#005F59] mb-[0.5em]'>STEP</div>
      <div className="">
        <CircularProgressBarSVG color='#0E5F59' bgColor={ active ? '#FECD08' : 'white' } value={progress}>
          <div className="h-[100%] w-[100%] text-[#0E5F59] font-semibold text-[2.5em] flex items-center justify-center">{no}</div>
        </CircularProgressBarSVG>
      </div>
      <div className="text-[2em] text-[#0E5F59] font-semibold w-[7em] flex-grow">{title}</div>
    </div>
  );
}

function StepDesktop({ className, title, no, active, progress }: { className?: string, title: string, no: number, active: boolean, progress: number }) {
  if (progress > 100 || progress < 0) throw new Error('Progress value must be between 0 and 100');
  return (
    <div className={'flex flex-grow ' + (className || '')}>
      <div className='flex flex-col items-center mr-[1.5em]' >
        <div className='text-[1.5em] text-[#005F59] mb-[0.5em]'>STEP</div>
        <div className={`w-[6.5em] h-[6.5em] rounded-[50%] ${active ? 'bg-[#FECD08]' : 'bg-[#005F59]'} ${active ? 'text-[#005F59]' : 'text-[#fff]'} flex justify-center items-center`}>
          <span className='text-[2em]'>{no}</span>
        </div>
      </div>
      <div className='flex-grow flex items-center flex-col justify-center'>
        <div className='text-[1.8em] font-medium text-[#005F59] mb-[0.5em] w-[100%]'>
          {title}
        </div>
        <div className='border rounded-[0.5em] w-[100%] h-[1em] bg-[#DFEAE9] relative'>
          <div className='h-[1em] rounded-[0.5em] bg-[#005F59] absolute' style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

const CircularProgressBarSVG = ({ value, bgColor, color, children }) => {
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const progress = (100 - value) * circumference / 100;

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: 'rotate(0deg)', maxHeight: '100px', maxWidth: '100px' }}>
      <g transform={`rotate(90 50 50)`}>
        <circle cx="50" cy="50" r={radius} fill={bgColor} stroke={"#DFEAE9"} strokeWidth="8" />
        <circle cx="50" cy="50" r={radius} fill="transparent" stroke={color} strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={progress} />
      </g>
      {children && (
        <foreignObject x="20" y="20" width="60" height="60">
          {children}
        </foreignObject>
      )}
    </svg>
  );
};