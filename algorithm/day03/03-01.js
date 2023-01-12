function boolean(input1, input2) {
  //내 코드
  // if (input1 === false && input2 === false) {
  //   return false;
  // } else return true;

  if (!input1 && !input2) {
    return false;
  } else return true;

  // 정훈멘토님
  // if (input1 || input2) {
  //   return true;
  // } else {
  //   return false;
  // }
}

console.log(boolean(false, false));
console.log(boolean(true, false));
console.log(boolean(true, true));
