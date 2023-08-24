export default function Chip({ className, label, onClick }: { className?: string, label: string, onClick?: () => void }) {

  function chipClicked() { if (onClick) onClick(); }

  return (
    <>
      <div onClick={chipClicked} className={'flex w-[max-content] items-center px-[1em] py-[0.25em] rounded-[1em] bg-[#005F59] ' + (className || '')}>
        <div className='mr-[0.5em] text-white'>{label}</div>
        <div>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.71826 1.71924L15.1567 15.1577L1.71826 1.71924ZM1.71826 15.1577L15.1567 1.71924L1.71826 15.1577Z" fill="#F2F2F2" />
            <path d="M1.71826 1.71924L15.1567 15.1577M1.71826 15.1577L15.1567 1.71924" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </>
  );
}