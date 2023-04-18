const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8888;

const api = require('../routes');
const jwtMiddleware = require('../lib/jwtMiddleware');

/**
 * 정적 파일 제공하기
 * 여러 개의 정적 자산 디렉토리 이용 가능
 * /static과 같은 파일에 대한 가상 경로 접두부 작성 가능
 * @see https://expressjs.com/ko/starter/static-files.html
 */
// app.use('/static', express.static(__dirname + '/public'));
// app.use('/static', express.static(__dirname + '/files'));
// const whiteList = ['http://127.0.0.1:5173'];

// const corsOptions = {
//   origin: true,
//   credentials: true,
// };

// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(jwtMiddleware);

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
