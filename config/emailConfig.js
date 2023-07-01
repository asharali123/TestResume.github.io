const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "asharali03063457443@gmail.com", // generated ethereal user
        pass: "bjdwvmoeydxogwbv", // generated ethereal password
    },
});
//a17014024@gmail.com
//strong_password
module.exports = transporter