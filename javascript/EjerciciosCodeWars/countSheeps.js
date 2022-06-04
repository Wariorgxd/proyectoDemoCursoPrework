const arrayOfSheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheeps) {
  let contadorTrue = 0;
  let contadorFalse = 0;
  let contadorNull = 0;
  let contadorUndefined = 0;
  for (let i = 0; i < arrayOfSheeps.length; i++) {
    if (arrayOfSheeps[i] == true) {
      contadorTrue++;
    }
    if (arrayOfSheeps[i] == false) {
      contadorFalse++;
    }
    if (arrayOfSheeps[i] == null) {
      contadorNull++;
    }
    if (arrayOfSheeps[i] == undefined) {
      contadorUndefined++;
    }
  }
  return contadorTrue;
}

console.log(countSheeps(arrayOfSheeps));

