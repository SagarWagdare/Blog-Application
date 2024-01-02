const connectionData = require("../../models/connectionModel");

const contactUser = async (req,res) => {
  const { firstname, lastname, email, message } = req.body;
  try {
     await connectionData.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: message,
    });

   return res
      .status(201)
      .json({ success: true, message: "Thanks for connecting with  us!" });
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Some error occured!, pls try after sometime",
      });
  }
};

module.exports = { contactUser };
