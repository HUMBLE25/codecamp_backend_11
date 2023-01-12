import { getToday } from "./utils.js";
export function checkEmail(email) {
  if (email === undefined || !email.includes("@")) {
    console.log("에러발생!!! 이메일 주소를 제대로 입력해주세요");
    return false;
  } else {
    return true;
  }
}

export function makingTemplate({ name, age, school }) {
  const myTemplate = `
      <html>
          <body>
              <h1>철수님 가입을 환영합니다!!!</h1>
              <hr/>
              <div>이름: ${name}</div>
              <div>나이: ${age}</div>
              <div>학교: ${school}</div>
              <div>가입일: ${getToday()}</div>
          </body>
      </html>
      
      `;
  //   console.log(mytemplate)
  return myTemplate;
}

export function sendWelcomeTemplateToEmail(email, myTemplate) {
  console.log(
    email + "이메일로 가입환영템플릿" + myTemplate + "룰 전송합니다."
  );
}
