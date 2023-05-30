export const getRandomNumber = (previousNumber) => {
  const numbers = [1, 2];

  const filteredNumbers = numbers.filter((number) => number !== previousNumber);
  const randomIndex = Math.floor(Math.random() * filteredNumbers.length);

  return filteredNumbers[randomIndex];
};
