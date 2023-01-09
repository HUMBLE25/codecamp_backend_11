//최소횟수
//로봇은 최대2층올라가수 있고 최소1층올ㅏ가룻 있더.
//2층씩 올라가면 되겠지
//1층에서 3층 한번,1층에서 7층 3번 1+2*획수
//100= 1+2*횟수
//횟수는 49회이다. 99층까 올라 갈수 있다 2층씩 49회 1층 1회하면 100층에 도달할수 있다. 최소 50회이다.
// 반복문 이용가능

// let answer=0;
// const limit =100;
// for(let i=1;i<limit;i=i+2){
//   answer =answer+1;
// }
// return answer

//메소드 활용.
const limit = 100;
const answer = Math.floor(limit / 2);
return answer;
