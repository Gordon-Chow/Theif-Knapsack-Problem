
// bag can hold x
// there are some amount of stuff.
// add stuff in the bag until bag === x
// need to recurse until we find all possible combinations
//return the bag with the highest value that bag >= x


//this function should take in two params. X for the bag value. and an array of goods
// const bestLoot = (bagWeight,arrOfLoots) => {
//   console.log('yeah it was me');
//   console.log(bagWeight);
//   console.log(arrOfLoots);
//   let bag = 0;
//   let value = 0
//   for(var i = 0; i < arrOfLoots.length; i++) {
//     // console.log('ok')
//     if(bag + arrOfLoots[i][1] <= bagWeight) {
//       bag += arrOfLoots[i][1];
//       value += arrOfLoots[i][0];
//     }
//   }
//   console.log(value);
//   return value;
// }

const bestLoot = (maxBagWeight, arrOfLoots) => {
  let maxValue = 0;
  const bestLootlooper = (maxBagWeight, currentBagWeight, currentItem, arrOfLoots, rollingValue) => {
    if(arrOfLoots.length === 0) {
      if(currentBagWeight + currentItem[1] <= maxBagWeight) {
        currentBagWeight += currentItem[1]
        rollingValue += currentItem[0]
      }
      if(rollingValue > maxValue) {
        maxValue = rollingValue;
      }
      return;
    }
    if(currentBagWeight === maxBagWeight) {
      return;
    }
    if(currentBagWeight + currentItem[1] <= maxBagWeight) {
      currentBagWeight += currentItem[1]
      rollingValue += currentItem[0]
      for(var i = 0; i < arrOfLoots.length; i++) {
        bestLootlooper(maxBagWeight, currentBagWeight, arrOfLoots[i], arrOfLoots.slice(0,i).concat(arrOfLoots.slice(i+1, arrOfLoots.length)), rollingValue)
      }
      } else {
        for(var i = 0; i < arrOfLoots.length; i++) {
          bestLootlooper(maxBagWeight, currentBagWeight, arrOfLoots[i], arrOfLoots.slice(0,i).concat(arrOfLoots.slice(i+1, arrOfLoots.length)), rollingValue)
      }

    }
  }
  arrOfLootsMod = arrOfLoots.slice(1)
  // console.log(arrOfLootsMod)
  bestLootlooper(maxBagWeight, 0, arrOfLoots, arrOfLootsMod, 0)
  console.log(maxValue)
  return maxValue;
}

bestLoot(6, [[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,1],[8,1],[9,1]]);