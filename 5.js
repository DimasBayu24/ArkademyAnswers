function hargasahamperhari(arr) {
  let maxDiff = -1;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min && maxDiff < arr[i] - min) {
      maxDiff = arr[i] - min;
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  if (maxDiff ==-1) console.log("tidak bisa mendapat profit pada hari-hari ini")
  else
  return maxDiff;
}

console.log("keuntungan paling besar adalah " + hargasahamperhari([100, 90, 50, 100]));