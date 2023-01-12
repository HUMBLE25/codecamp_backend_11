function checkEmail(email) {
  if (email === undefined || !email.includes("@")) {
    console.log("에러발생!!! 이메일 주소를 제대로 입력해주세요");
    return false;
  } else {
    return true;
  }
}

function makingTemplate({ name, age, school, email, createdAt }) {
  const myTemplate = `
    <html>
        <body>
            <h1>철수님 가입을 환영합니다!!!</h1>
            <hr/>
            <div>이름: ${name}</div>
            <div>나이: ${age}</div>
            <div>학교: ${school}</div>
            <div>가입일: ${createdAt}</div>
        </body>
    </html>
    
    `;
  return myTemplate;
}

function sendWelcomeTemplateToEmail(email, myTemplate) {
  console.log(
    email + "이메일로 가입환영템플릿" + myTemplate + "룰 전송합니다."
  );
}

function createUser({ name, age, school, email, createdAt }) {
  //1.이메일이 정상인지 확인(1-존재 여부,2-"@"포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) return;
  //2.가입환영 템플릿 만들기
  const getTemplate = makingTemplate({ name, age, school, createdAt });
  //3.이메일에 가입환영 템플릿 전송하기
  sendWelcomeTemplateToEmail(email, getTemplate); ///이부분ㄴ 복습
}

const name = "철수";
const age = 8;
const school = "다람쥐초등학교";
const email = "q@Q.com";
const createdAt = "2021-10-05"; //닐찌를 만드는 도구가있다. new Date()이용 함수로 만들어준다고?

createUser({ name, age, school, email, createdAt });
