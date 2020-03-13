module.exports = function createDreamTeam(arr) {
  if (arr == null || arr == undefined) {
    return false;
  }
  if (typeof arr === "object") {
    result = '';
    for (i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        let arrr = arr[i].replace(/\s+/g, '');
        result = result + arrr[0].toUpperCase();
      }
    } return result.split('').sort().join('');
  } return false;
};