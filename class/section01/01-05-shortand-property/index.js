function qqq(aaa) {
  console.log(aaa); //객체
  console.log(aaa.name); //철수
  console.log(aaa.age); //12
  console.log(aaa.school); //다람쥐 초등학교
}

const name = "철수";
const age = 12;
const school = "다람쥐초등학교";

// const profile = {
//   name: name,
//   age: age,
//   school: school,
// };

const profile = { name, age, school }; //키와 벨류가 같아서,벨류를 생략함 => shorthand-property

// console.log(profile);

qqq(profile); //1.변수에 담아서 보내쥐
qqq({ name, age, school }); //2.그냥 그래도 통째로 보내주기
//=>결과는 1번과2번이 동일함.
//
