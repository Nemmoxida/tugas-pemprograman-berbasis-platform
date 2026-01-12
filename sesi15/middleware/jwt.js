import jwt from "jsonwebtoken";
import user from "../users/user.js";
import bcrypt from "bcrypt";

export default function signIn() {
  const respond = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ status: 400, message: "No username or password detected" });
    }

    const foundUser = user.find((user) => user.username == username);
    if (!foundUser) {
      return res
        .status(400)
        .json({ statusCode: 400, message: "No user exist" });
    }

    const passwordValidation = bcrypt.compareSync(password, foundUser.password);
    if (passwordValidation == false) {
      return res
        .status(400)
        .json({ statusCode: 401, message: "Wrong Password" });
    }

    const token = generateToken(username);
    return res.status(200).json({
      statusCode: 200,
      message: "Logic success",
      data: { token: token },
    });
  };

  return respond;
}

function generateToken(username) {
  console.log(process.env.JWT_KEY);
  const token = jwt.sign({ username: username }, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  return token;
}
