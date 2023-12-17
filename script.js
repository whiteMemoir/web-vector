function showOperation(operation) {
  // Menyembunyikan semua operasi
  const allOperations = document.querySelectorAll('.operation');
  allOperations.forEach(op => op.style.display = 'none');

  // Menampilkan operasi yang dipilih
  const selectedOperation = document.getElementById(operation);
  selectedOperation.style.display = 'block';
}

function getVectorFromInput(containerId, vectorNumber) {
  const vectorInputs = document.querySelectorAll(`#${containerId} #vectorAdd${vectorNumber}`);
  return Array.from(vectorInputs).map(input => Number(input.value));
}

function performAddition() {
  const vector1 = getVectorFromInput('addition', 1);
  const vector2 = getVectorFromInput('addition', 2);
  console.log(vector1);
  console.log(vector2);

  // Kalkulasi hasil penjumlahan
  const resultAddition = vector1.map((v, i) => v + vector2[i]).join(', ');
  document.getElementById('resultAddition').innerText = `Hasil Penjumlahan: [${resultAddition}]`;
}

function performSubtraction() {
  const vector1 = getVectorFromInput('subtraction');
  const vector2 = getVectorFromInput('subtraction');

  // Kalkulasi hasil pengurangan
  const resultSubtraction = vector1.map((v, i) => v - vector2[i]).join(', ');
  document.getElementById('resultSubtraction').innerText = `Hasil Pengurangan: [${resultSubtraction}]`;
}

function performMultiplication() {
  const vector1 = getVectorFromInput('multiplication');
  const vector2 = getVectorFromInput('multiplication');

  // Kalkulasi hasil perkalian
  const resultMultiplication = vector1.map((v, i) => v * vector2[i]).join(', ');
  document.getElementById('resultMultiplication').innerText = `Hasil Perkalian: [${resultMultiplication}]`;
}

function performDotProduct() {
  const vector1 = getVectorFromInput('dotProduct');
  const vector2 = getVectorFromInput('dotProduct');

  // Kalkulasi hasil dot product
  const resultDotProduct = vector1.reduce((acc, v, i) => acc + v * vector2[i], 0);
  document.getElementById('resultDotProduct').innerText = `Hasil Dot Product: ${resultDotProduct}`;
}

function performElementwise() {
  const vector = getVectorFromInput('elementwise');

  // Contoh transformasi (dalam hal ini, mengalikan setiap elemen dengan 2)
  const resultElementwise = vector.map(v => v * 2);
  document.getElementById('resultElementwise').innerText = `Hasil Transformasi Elemen: [${resultElementwise}]`;
}
