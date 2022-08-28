import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//jew token
// JWT_KEY="MUKESHISGOODBOY"

// Resistering a new user
export const resisterUser = async(req, res) => {
    // const { email, password, firstname, lastname, year, branch } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass;
    const newUser = new UserModel(req.body);
    const { email } = req.body;
    try {
        const oldUser = await UserModel.findOne({ email });
        if (oldUser) {
          return res.status(400).json({ message: "username is already registered!" })
        }
        const user = await newUser.save();
        const token = jwt.sign({
          email: user.email, id: user._id
        }, "MUKESHISGOODBOY", { expiresIn: "1h" })
    
        res.status(200).json({user, token});
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
}

// Login user

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if(!validity){
        res.status(400).json("Wrong Password")
      }else{
        const token = jwt.sign({
          email: user.email, id: user._id
        }, "MUKESHISGOODBOY", { expiresIn: "1h" })
        res.status(200).json({user, token});
      }
    } else {
      res.status(404).json("User does not exists.")
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}