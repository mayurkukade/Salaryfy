export default function QuestionnaireTopBarStep() {
  return (
    <div className='flex-grow max-w-[120em] w-[100%] flex mb-[2em]'>
      <Step progress={100} active={false} no={1} title='Select the job' className='' />
      <Step progress={5} active={true} no={2} title='Upload your Resume' className='mx-[2em]' />
      <Step progress={0} active={false} no={3} title='Get hired!' className='' />
    </div>
  );
}

function Step({ className, title, no, active, progress }: { className?: string, title: string, no: number, active: boolean, progress: number }) {
  if (progress > 100 || progress < 0) throw new Error('Progress value must be between 0 and 100');
  return (
    <div className={'flex flex-grow ' + className}>
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