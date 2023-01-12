const monthList = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function days(month) {
  //내코드
  //   if (month === 1) {
  //     return "1월 : 31일";
  //   } else if (month === 2) {
  //     return "2월 : 28일";
  //   } else if (month === 3) {
  //     return "3월 : 31일";
  //   } else if (month === 4) {
  //     return "4월 : 30일";
  //   } else if (month === 5) {
  //     return "5월 : 31일";
  //   } else if (month === 6) {
  //     return "6월 : 30일";
  //   } else if (month === 7) {
  //     return "7월 : 31일";
  //   } else if (month === 8) {
  //     return "8월 : 31일";
  //   } else if (month === 9) {
  //     return "9월 : 30일";
  //   } else if (month === 10) {
  //     return "10월 : 31일";
  //   } else if (month === 11) {
  //     return "11월 : 30일";
  //   } else if (month === 12) {
  //     return "12월 : 31일";
  //   }
  //정훈 멘토님
  //   if (
  //     month === 1 ||
  //     month === 3 ||
  //     month === 5 ||
  //     month === 7 ||
  //     month === 8 ||
  //     month === 10 ||
  //     month === 12
  //   ) {
  //     return 31;
  //   } else if (month === 2) {
  //     return 28;
  //   } else if (month === 4 || month === 6 || month === 9 || month === 11) {
  //     return 30;
  //   }

  return monthList[month];
}
//new Dated이용할 수 있지않나?
//||연산자 사용? 어떻게 하지?
//적어도를 이용해야하나? 뭘 어떻게 해야하지?
//하나씩 전부 입력해야하나?
//아니면 new Date를 이용해야하나?
//||를 어떻게 이용하나??????
// 같은 값을 반환하는 경우는 묶을 수있다.

console.log(days(1));
console.log(days(2));
console.log(days(3));
console.log(days(4));
console.log(days(5));
console.log(days(6));
console.log(days(7));
console.log(days(8));
console.log(days(9));
console.log(days(10));
console.log(days(11));
console.log(days(12));
