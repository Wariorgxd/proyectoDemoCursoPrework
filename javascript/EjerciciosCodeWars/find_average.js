function find_average(array) {
  // your code here
  if (array.length === 0) {
    return 0;
  } else {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma = suma + array[i];
    }
    return suma / array.length;
  }
}
