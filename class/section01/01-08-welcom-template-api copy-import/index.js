import {
  checkEmail,
  makingTemplate,
  sendWelcomeTemplateToEmail,
} from "./email.js";

function createUser({ name, age, school, email }) {
  //1.이메일이 정상인지 확인(1-존재 여부,2-"@"포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) return;
  //2.가입환영 템플릿 만들기
  const getTemplate = makingTemplate({ name, age, school });
  //3.이메일에 가입환영 템플릿 전송하기
  sendWelcomeTemplateToEmail(email, getTemplate); //이부분 복습
}

const name = "철수";
const age = 8;
const school = "다람쥐초등학교";
const email = "q@q.com";
// const createdAt = "2021-10-05"; //닐찌를 만드는 도구가있다. new Date()이용 함수로 만들어준다고?

createUser({ name, age, school, email });
//함수 실행이 안되는건아니고 매개변수와 전달인자간에 문제가 발생했다.

//날짜는 언제든지 사용하는것이니까 굳이 email.js가 아닌 다른파일에 넣어둔다
