/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
  let sum = 0;
  for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
  let count = 0;
  while (a > 0.1) {
    a /= 2;
    count++;
  }
  return count;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
  let i = 2; // Начинаем с третьего символа (индекс 2)
  let chars = message.split('');
  do {
    if (i < chars.length) {
      chars[i] = '_';
      i += 3;
    }
  } while (i < chars.length);
  return chars.join('');
}