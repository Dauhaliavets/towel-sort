
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (Array.isArray(matrix)) 
    ? matrix
      .map((item, ind) => (ind % 2 === 0) ? item : item.reverse())
      .reduce((acc, cur) => acc.concat(cur), []) 
    : [];
}
