//07번
const number = "01012345678";

//"010","1234","5678"로 나눈 배열로 만들어라
// 처음 생각 난건 slice이고 배열로 만들어라에서 split이 생각났다.
//이들을 나눌 기준이 length가 되는게 나을거 같다.
// slice를 이용한다.
// console.log(number.slice(0, 3));
// console.log(number.slice(3, 7));
// console.log(number.slice(7, 11));
let num1 = number.slice(0, 3);
let num2 = number.slice(3, 7);
let num3 = number.slice(7, 11);
let arr = [num1, num2, num3];
console.log(arr);
