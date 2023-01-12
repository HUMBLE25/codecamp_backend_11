function evenOdd(num) {
  if (num === 0) {
    return "zero"; //엣지 케이스
  } else if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOdd(12));
console.log(evenOdd(15));
console.log(evenOdd(0));
