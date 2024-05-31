import { nanoid } from "nanoid";
import User from "../models/usersSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const userRegister = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });

    console.log(newUser);

    res.status(201).json({
      user: {
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (e) {
    next(e);
  }
};

export const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    const passwordMatch = bcrypt.compare(user.password, password);
    if (!passwordMatch) {
      res.status(401).json({ message: "Email or password is wrong" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    await User.findByIdAndUpdate(user._id, { token });

    res.status(201).json({
      user: {
        name: user.name,
        email: user.email,
        token: user.token,
      },
    });
  } catch (e) {
    next(e);
  }
};

export const userLogout = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};
export const getCurrentUser = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};
