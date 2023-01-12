//아래 함수를 백엔드 api함수
//매개변수(parameter)
function getWelcomeTemplate({ name, age, school, createdAt }) {
  const mytemplate = `
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
  console.log(mytemplate);
}

//변수에 담아서 보내주는 방법

const name = "철수";
const age = "13";
const school = "다람쥐초등학교";
const createdAt = "2020-10-10";

getWelcomeTemplate({ name, age, school, createdAt });
//브라우저 버튼
//전달인자(argument)
//이 전달인자에 이런식으로 써진이유는 sorthandproperty가 적용되었기 때문이다.
//키와 벨류가 같아서 키만 남았다.
