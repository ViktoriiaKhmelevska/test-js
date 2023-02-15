function selectionSort(mas) {
  var n = mas.length;
  for (var i = 0; i < n - 1; i++) {
    var min = i;
    for (var j = i + 1; j < n; j++) {
      if (mas[j] < mas[min]) min = j;
    }
    var t = mas[min];
    mas[min] = mas[i];
    mas[i] = t;
  }
  return mas;
}

var a = [10, 5, 8, 9, 1, 3, 2];
a = selectionSort(a);
// alert(a);
console.log(a);
