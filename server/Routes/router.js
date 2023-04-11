const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer")
const users = require("../models/userModel");
//const file = require("../resume/My_resume_rohit.pdf");


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});



router.post("/register", async (req, res) => {

    let data = req.body;
    let { fname, lname, email, mobile, message } = data;
    if (!fname || !lname || !email || !mobile || !message) {
        res.status(401).send({ status: false, message: "all fields are mandatory" })
    }
    try {
        let checkUser = await users.findOne({ email: email })
        if (checkUser) {
            return res.status(409).send({ status: 409, message: "response already submitted" })
        } else {

            let saveUser = await users.create(data)

            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "sending email using nodejs",
                text: "Your Response Has Been Submitted"
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("error" + error)
                } else {
                    console.log("Email sent" + info.response);
                  return  res.status(201).json({ status: 201, message: "Email sent SUccesfully" })
                }
            });
            return res.status(201).send({ status: 201, saveUser })
        }
    } catch (err) {
       return res.status(500).json({ status: false, message: err })
    }
})

router.get("/download", (req,res)=>{
   return res.download("./resume/My_resume_rohit.pdf")
    
})
 

module.exports = router;