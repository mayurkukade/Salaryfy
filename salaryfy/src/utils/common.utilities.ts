const generateRandomString = (length: number): string =>
  [...Array(length)]
    .map(() => (~~(Math.random() * 36)).toString(36))
    .join('');


function formatDate(inputDate: string): string {
  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];

  const [day, monthNum, year] = inputDate.split('-');
  const month = months[Number(monthNum) - 1];

  return `${year} ${month} ${day}`;
}

function isWithin48Hours(dateString: string): boolean {
  const currentDate = new Date();
  const givenDate = new Date(dateString);

  const currentTimestamp = currentDate.getTime();
  const givenTimestamp = givenDate.getTime();

  const timeDifference = givenTimestamp - currentTimestamp;
  const timeDifferenceInHours = timeDifference / (1000 * 60 * 60);

  return timeDifferenceInHours <= 48;
}
export const CommonUtilities = { generateRandomString, date: { formatDate, isWithin48Hours } }