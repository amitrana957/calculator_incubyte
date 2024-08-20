const delimiterPrefix = "//";
const delimiterSuffix = "\\n";

const findDelimiter = (text: string): string | null => {
  let response = null;

  // Check if // exists in the starting of input
  if (text.indexOf(delimiterPrefix) == 0) {
    // Get substring between // and first occurance of \n
    response = text.substring(
      text.indexOf(delimiterPrefix) + 2,
      text.indexOf(delimiterSuffix)
    );
  }

  return response;
};

export const add = (numbers: string): number => {
  const defaultDelimiter = ",";
  const delimiters = [defaultDelimiter, delimiterPrefix, "\\n"];

  let output = 0;
  if (!numbers) return output;

  // find new delimiter based on //[anything]\n and push to delimiters array if found
  const changedDelimiter = findDelimiter(numbers);
  if (changedDelimiter) delimiters.push(changedDelimiter);

  // Find and replace all delimiters to single and split string to convert to array
  delimiters.map((i) => (numbers = numbers.replaceAll(i, defaultDelimiter)));

  // Return error is negative number found
  if (numbers.includes("-"))
    throw Error(
      "Negative numbers are not allowed: " +
        numbers
          .split(defaultDelimiter)
          .filter((i) => i.includes("-"))
          .join(",")
    );

  // Split to array and apply reduce to return addition of each valid number
  return numbers.split(defaultDelimiter).reduce((acc: any, curr: any) => {
    let currentNumber = parseInt(curr);
    if (isNaN(currentNumber)) return acc + 0;
    else return acc + currentNumber;
  }, 0);
};
