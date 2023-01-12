//문제 설명
//문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
// 반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.
// **`입력 인자`**
// - str은 문자열입니다.
// **`주의 사항`**
// - for을 이용해서 문제를 풀어야 합니다.
// - 문자열도 배열입니다.
// - 대문자 "A" 문자열도 "a" 에 포함입니다.

function countLetter(str) {
  //수도코드
  //a가 몇번 등장하는지 구한다고?
  //a가 어떻게 확인할거지? a가 있는지?
  //split을 이용할까? 이것과 for of 문을 사용하장
  //문자열도 배열이고 대소문자 구분없라..
  //문자열도 배열이라는 특징을 이용하라고?
  //split을 이용안하고 for문과 문자열의 배열특징을 이용하자.
  //초기식은?0번째인덱스부터 확인하자.끝의 길이는 length를 이용하자.
  //증감식은 1씩 올리자.
  //내 코드
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      count += 1;
    }
  }
  return count;
  //정훈멘토님
  //let count = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === "a" || str[i] === "A") {
  //     count += 1;
  //   }
  // }
  // return count;
}

console.log(countLetter("I am from Korea"));
console.log(countLetter("A day without laughter is a day wasted."));
