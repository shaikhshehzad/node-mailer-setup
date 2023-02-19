console.log("hello from node mailer");
const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 5000 ;
// v2
const cors = require("cors");
app.use(cors({
    origin: '*'
}));
// 
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello  !!!");
})
app.post('/',(req, res)=>{
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth :{
            user:"trailsatshehzad@gmail.com",
            pass: "rtmtzokfnowkifmn"
        }
    })

    const mailOptions = {
        from : req.body.email,
        to : "trailsatshehzad@gmail.com",
        subject : `message from ${req.body.Name}`,
        text : req.body.Description + `Customer email is  ${req.body.Email} `
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log("email sent " + info.response )
            let obj ={
                status : "200-ok",

            }
            res.send(obj);
        }

    })
})

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})
