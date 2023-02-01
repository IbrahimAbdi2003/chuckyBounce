function chunkArrayInGroups(arr, size) {
    var result = [];
    let i = 0;
    while (i < arr.length) {
      result.push(arr.slice(i, i + size));
      i += size;
    }
    return result;
  }
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var size = 3;
  console.log(chunkArrayInGroups(array, size));

  function bouncer(arr) {
    return arr.filter(Boolean);
  }