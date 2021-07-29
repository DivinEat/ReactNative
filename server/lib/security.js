const jwt = require("jsonwebtoken");

exports.createToken = function (user) {
  return new Promise((res, rej) => {
    console.log(process.env.JWT_SECRET);
    jwt.sign(
      user,
      process.env.JWT_SECRET,
      { algorithm: "HS256" },
      function (err, token) {
        if (err) rej(err);
        else res(token);
      }
    );
  });
};

exports.checkToken = function (token) {
  return new Promise((res, rej) => {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) rej(err);
      else res(decoded);
    });
  });
};
