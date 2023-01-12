function temperature(num) {
  //내 코드
  // if (num <= 18) {
  //   return "조금 춥네요";
  // } else if (num >= 24) {
  //   return "조금 덥습니다.";
  // } else {
  //   return "날씨가 좋네요";
  // }

  //  정훈메토님
  if (num >= 24) {
    return "조금 덥습니다.";
  } else if (num >= 19) {
    return "날씨가 좋네요";
  } else {
    return "조금 춥네요";
  }
}

console.log(temperature(13));
console.log(temperature(23));
console.log(temperature(27));
