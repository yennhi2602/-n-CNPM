import userModel from "../models/User.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
      const { name, email, password } = req.body;

      // Kiểm tra các trường bắt buộc
      if (!name || !email || !password) {
          return res.status(400).json({ error: "All fields are required" });
      }

      // Kiểm tra email đã tồn tại
      const user = await userModel.findOne({ email });
      if (user) {
          return res.status(400).json({ error: "User already exists" });
      }

      // Mã hóa mật khẩu
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Tạo và lưu user mới
      const newUser = new userModel({
          name,
          email,
          password: hashedPassword,
      });
      await newUser.save(); // Chỉ gọi .save() một lần

      // Phản hồi thành công
      res.status(201).json({
          success: true,
          message: "User registered",
      });
  } catch (error) {
      console.log(error);
      res.status(500).json({
          success: false,
          message: "Problem in register API",
          error: error.message,
      });
  }
};
// login controller
export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      const isMatch =  bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      
      });
    
      return res.status(200).send({
        success: true,
        message: "Logged in successfully",
        token,
       user:{
        id: user._id,
        email: user.email,
        role: user.role,
       },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
         success:false,
         message:"Problem in login API" ,
        });
    }
  };
  