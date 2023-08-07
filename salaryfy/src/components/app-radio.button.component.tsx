export function AppRadioButton({ active }: { active?: boolean }) {
  const radioButtonColor = active ? '#005F59' : '#5B5B5B';
  return (
    <svg className='cursor-pointer' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em">
      <circle cx="10" cy="10" r="9" stroke={radioButtonColor} strokeWidth="2" fill="none" />
      {active && <circle cx="10" cy="10" r="5" fill="#005F59" opacity="1" />}
    </svg>
  )
}