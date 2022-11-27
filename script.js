const sumofString = "1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80";
const newStr = sumofString.replace(/([_<>'*^-])/g, ",");

const findSum = (newStr) => {
  const tempArr = [];
  for (let i = 0; i < newStr.length; i++) {
    if (!isNaN(Number(newStr[i]))) {
      tempArr.push(Number(newStr[i]));
    }
  }
  const sum = tempArr.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  return sum;
};

findSum(newStr.split(","));
