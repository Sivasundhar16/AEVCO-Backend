import User from "../schema/userschema.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Enter All the filed" });
    }

    const existingMail = await User.findOne({ email });
    if (existingMail) {
      return res.status(400).json({ message: "User Already Exist" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Passwrod must be contain Atleast 6 characters",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = new User({
      email: email,
      password: hashPassword,
    });

    await user.save();

    //started jwt part

    const token = jwt.sign({ userid: user._id }, process.env.SECRET_KEY, {
      expiresIn: "5d",
    });

    res.cookie("jwt-aevco", token, {
      httpOnly: true,
      maxAge: 5 * 24 * 60 * 1000,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log("Error in Login", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};