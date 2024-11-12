var titleToNumber = function (columnTitle) {
  let result = 0;
  let power = 0;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const charValue = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    result += charValue * Math.pow(26, power);
    power++;
  }

  return result;
};

console.log(titleToNumber('AB'));
