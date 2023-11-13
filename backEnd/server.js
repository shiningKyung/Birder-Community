// import * as mysql from 'mysql2';

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: ''
})

app.get('/', (re, res) => {
    return res.json("From Backend Side");
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM userTable";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

// 로그인
app.post("/login", (req, res) => {
    console.log("/login", req.body);
    var id = req.body.id;
    var pw = req.body.pw;
  
    const sqlQuery =
      "select * from usertable where id =? and password =?;";
    db.query(sqlQuery, [id, pw], (err, result) => {
      res.send(result);
      // console.log(result[0]);
      // if (result[0].cnt === 1) {
      //   res.send({ message: "success" });
      // } else {
      //   res.send({ message: "fail" });
      // }
    });
});

// 회원가입
app.post("/signup", (req, res) => {
    console.log("/signup", req.body);

    const sqlQuery = "INSERT INTO usertable (id, username, password) VALUES (?);";
    const values = [
        req.body.id,
        req.body.username,
        req.body.pw,
    ];

    db.query(sqlQuery, [values], (err, result) => {
      res.send(result);
    });
});

// 탐조이야기 글 목록
app.get('/logbook', (req, res) => {
    const sql = "SELECT * FROM logbook_board_tbl;";
    console.log(sql);
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

// 탐조이야기 검색
app.post('/logbook', (req, res) => {
    let srhTitle = req.body.srhTitle
    const srhSql = "SELECT * FROM logbook_board_tbl WHERE title LIKE '%"+srhTitle+"%';";

    db.query(srhSql, (err, data) => {
        if (err) return res.json(err);
        console.log(srhSql);
        return res.json("검색 성공")
    });
});

// 탐조이야기 글 작성
app.post('/writeLogbook', (req, res) => {
    const q = "INSERT INTO logbook_board_tbl (title, username, location, image, body) VALUES (?);";
    const values = [
        req.body.title,
        req.body.username,
        //'now()',
        req.body.location,
        req.body.image,
        req.body.body,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("logbook has been created successfully!")
    });
});


app.listen(8081, () => {
    console.log("listening");
})


// cors에러 모듈설치해서 해결
let corsOptions = {
  origin: 'http://localhost:8081',      // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
  methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOptions))
