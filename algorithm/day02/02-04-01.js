//09번
const student = {
  name: "철수",
  age: 8,
};

const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};

//객체에 객체를 넣는법은 bracket notation, dot notation이 있다.

student["school"] = school;
// 키와 변수로 사용되었다.

console.log(student);
