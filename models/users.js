const jwt = require('jsonwebtoken');

// username -> nickname
// userid -> email
// 계정 4개 만들기
// 이미지 변경 방법
let users = [
  {
    userid: 'test@naver.com',
    password: 'test123',
    username: 'test계정',
    myLink: '',
    isCertified: false,
    voteOrder: [],
  },
];

const generateNextId = () => Math.max(...users.map((user) => user._id), 0) + 1;

const generateToken = (userid, username) => {
  const { _id } = findUserByUserid(userid);

  const token = jwt.sign(
    { _id, userid, username },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '7d',
    },
  );

  return token;
};

const findById = (_id) => users.find((user) => user._id === _id);

const findUserByUserid = (userid) =>
  users.find((user) => user.userid === userid);

const findUser = (userid, password) =>
  users.find((user) => user.userid === userid && user.password === password);

const createUser = (user) => {
  const _id = generateNextId();

  const newUser = { _id, ...user };

  users = [...users, newUser];
  console.log('계정 리스트:', users);

  return newUser;
};

const getUsers = () => users;

module.exports = {
  createUser,
  findById,
  findUserByUserid,
  findUser,
  getUsers,
  generateToken,
};
