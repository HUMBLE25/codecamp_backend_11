function checkPhone(myPhone) {
  if (myPhone.length < 10 || myPhone.length > 11) {
    console.log("에러발생!!! 핸드폰번호를 제대로 입력해주세요");
    return false; //Early-exit 패턴
  } else {
    return true;
  }
}
function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}
function sendTokenToSMS(myPhone, result) {
  console.log(myPhone + "번호로 인증번호" + result + "룰 전송합니다.");
}
// 현재 위에 에러안나게

//좋은 예
function createTokenOfPhone(myPhone) {
  //qqq는 매개변수(parameter)라한다
  //핸드폰 번호가 넘어가서 함수가 실행되어야함

  //1.휴대폰번호 자리수 맞느닞 확인하기(10자리~11자리)
  const isValid = checkPhone(myPhone);
  if (isValid === false) return;

  //2.인증번호 6자리 핸드폰 토큰 6자리 만들기
  const myToken = getToken();

  //3.핸드폰 번호에 토큰 전송하기 (뒤에서 한다.)
  sendTokenToSMS(myPhone, myToken);
}

createTokenOfPhone("01012345678");
//소괄호 안에 들어가는 것을 여기선 "01012345678"이 인자(argument)라 한다.
