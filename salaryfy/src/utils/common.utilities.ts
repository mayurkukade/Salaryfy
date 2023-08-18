const generateRandomString = (length: number): string =>
  [...Array(length)]
    .map(() => (~~(Math.random() * 36)).toString(36))
    .join('');

export const CommonUtilities = { generateRandomString }