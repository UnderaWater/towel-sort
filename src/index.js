
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  for (let i in matrix) {
    result = (i % 2 == 0) ? result.concat(matrix[i]) : result.concat(matrix[i].reverse());
  }
  return result;

}
