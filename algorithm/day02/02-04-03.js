//11번
const classmates = [
  {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  },
  {
    name: "영희",
    age: 8,
    school: "토끼초등학교",
  },
  {
    name: "짱구",
    age: 8,
    school: "다람쥐초등학교",
  },
];
// 영희의 school정보를 "다람쥐초등학교로 바꾼다"
//재할당을 하면되지 않을까?
classmates[1]["school"] = "다람쥐초등학교";
console.log(classmates);
