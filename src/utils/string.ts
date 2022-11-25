/**
 * GET A RANDOM STRING
 * @return a string
 */
const randomString = (): string => {
  return Math.random().toString(36).substring(2);
};

export { randomString };
