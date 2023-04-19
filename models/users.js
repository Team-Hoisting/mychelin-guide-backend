const jwt = require('jsonwebtoken');

// username -> nickname
// userid -> email
// 계정 4개 만들기
// 이미지 변경 방법
let users = [
  {
    email: 'test@naver.com',
    password: 'test123',
    nickname: 'test계정',
    myLink: '',
    isCertified: false,
    voteOrder: [],
  },
];

const generateNextId = () => Math.max(...users.map((user) => user._id), 0) + 1;

const generateToken = (email, nickname) => {
  const { _id } = findUserByEmail(email);

  const token = jwt.sign({ _id, email, nickname }, process.env.JWT_SECRET_KEY, {
    expiresIn: '7d',
  });

  return token;
};

const findById = (_id) => users.find((user) => user._id === _id);

const findUserByEmail = (email) => users.find((user) => user.email === email);

const findUser = (email, password) =>
  users.find((user) => user.email === email && user.password === password);

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
  findUserByEmail,
  findUser,
  getUsers,
  generateToken,
};
