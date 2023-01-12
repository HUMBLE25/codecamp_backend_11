//주민번호 뒷자리를 가리는 함수 “210510-1******”
//주민번호가 -로 구성되어야한다. 아니면 에러메시지 띄운다.
//”에러 발생!!! 형식이 올바르지 않습니다!!!”
//주민번호는 앞 6자리, 뒤 7자리로 구성되어야 합니다.
// ”에러 발생!!! 개수를 제대로 입력해 주세요!!!”
//뒤 7자리 중, 끝 6자리는 *로 변경해서 콘솔에 출력해 주세요.
//콘솔에 띄운다.

//주민번호를 입력받는다.
//주민번호의 형식을 판단한다. 맞으면 *처리,아니면 에러메시지,종료
//맞은 경우*처리하는 함수실행.
//아니면 에러메시지,종료하는 함수실행.
//매개변수와 전달인자를 이용하여 깔끔히 완성하자.

//주민번호 형식 판단함수
//전부 쪼갠다. 그리고 - 있는지 없는지 확인한다.
// 있으면 true반환

function makingHyphenError(num) {
  const hyphenCheckArr = num.split("");
  if (hyphenCheckArr[6] !== "-") {
    console.log("에러발생!!!형식이 올바르지 않습니다!!!");
    return false;
  } else {
    return true;
  }
}

function makingLengthError(num) {
  const lengthCheckArr = num.split("-");
  if (lengthCheckArr[0].length !== 6 || lengthCheckArr[1].length !== 7) {
    console.log("에러 발생!!!개수를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

function makingBlur(num) {
  //   //padEnd와 slice를 이용해서 해결해보자.
  // const sliceNumber = number.slice(0, 8);
  // console.log(sliceNumber);
  // const EndNumber = String(sliceNumber.padEnd(14, "*"));
  let blurMakeArr = num.split("");
  for (let i = 0; i < 6; i++) {
    blurMakeArr.pop();
  }
  for (let i = 0; i < 6; i++) {
    blurMakeArr.push("*");
  }
  let result = blurMakeArr.join("");
  console.log(result);
}

function customRegistrationNumber(num) {
  const isValid = makingHyphenError(num);
  if (isValid == false) return;

  const isValid2 = makingLengthError(num);
  if (isValid2 == false) return;

  makingBlur(num);
}

customRegistrationNumber("2105101010101");
customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-10101010");
