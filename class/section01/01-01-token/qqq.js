console.log("안녕하세요!!");

//함수를 실행시키는 방식
function getToken() {
  // Math.random()0부터 9사이의 임의의수를만듦
  // Math.floor(Math.random() * 1000000); 에러가 생길수 잇음
  //0.001234562435이런 숫자면 에러가 생김 문제는 001이라는 수는 없다.
  // 4글자만 남겨진다.
  //이때String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  //로 해결하낟.

  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
}
// 실제로는 한줄이다.
getToken();
