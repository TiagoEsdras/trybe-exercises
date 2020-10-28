const myRemove = (arr, item) => {
  const newArray = [];
  arr.forEach(element => {
    if (element !== item) {
      newArray.push(element);
    }    
  });
  return newArray;
}
module.exports = myRemove;