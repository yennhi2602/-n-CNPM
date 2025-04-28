import userModel from "../models/User.js";
export const registerController = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" })
      };
      const user = await userModel.findOne({ email });
      if (user) {
        return res.status(400).json({ 
            error: "User already exists"
         })
      }
    
      const newUser = new userModel({ 
        name,
         email,
          password, 
        });
   
    

      res.status(200).send({
        success: true,
        message: "User has been register",
      });

    } catch (error) {
        console.log(error);
        res.status(500).status(500).send({
            success: false,
            message:"Problem in register  API",
         });
      }
    };