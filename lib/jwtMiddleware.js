const jwt = require('jsonwebtoken');
const users = require('../models/users');
const archives = require('../models/archives');

const jwtMiddleware = (req, res, next) => {
  const accessToken = req.headers.authorization || req.cookies.accessToken;

  console.log('사용자의 accessToken:', accessToken);

  if (!accessToken) return next();

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    const archived = archives.getArchivesByEmail(decoded.email);

    console.log(`😀 사용자 인증 성공`, decoded);

    req.user = {
      _id: decoded._id,
      email: decoded.email,
      nickname: decoded.nickname,
      archived,
    };

    // 토큰의 남은 유효 기간이 3.5일 미만이면 재발급
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      console.log('토큰 재발급');
      const user = users.findUserByEmail(decoded.email);
      const accessToken = users.generateToken(user.email, user.nickname);

      res.cookie('accessToken', accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    }

    return next();
  } catch (e) {
    console.error('😱 사용자 인증 실패..', e);

    return next();
  }
};

module.exports = jwtMiddleware;
