// const express = require("express");//옛날 방식=>commonjs

import express from "express"; //요즘방식=>module

const app = express();

app.get("/25", function (req, res) {
  res.send("Hello world");
}); //get 방식의 api를 만든다.
//미들웨어 함수

app.listen(3000); //포트번호이다. listen은 기다린다라는 의미가 있다.t샌드버튼 누르는거 ㄹ기다린다.
//복붙하면 안됨
