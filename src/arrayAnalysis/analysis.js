// const object = analyze([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

function analysis(list){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let averageNum = list.reduce(reducer) / list.length

  return {
    average: averageNum,
    min: Math.min(...list),
    max: Math.max(...list),
    length: list.length, 
  }
}

module.exports = analysis;