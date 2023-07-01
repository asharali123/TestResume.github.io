const transporter = require("../config/emailConfig.js")
let msg = ""
class Controller {
    static call = (req, resp) => {

        resp.render("index", { msg });
    }

    static getData = async (req, resp) => {
        const { name, email, subject, message } = req.body;
        //console.log(name);
        try {
            let info = await transporter.sendMail({
                to: "asharali03063457443@gmail.com", // list of receivers
                subject: subject, // Subject line
                html: `
                email: ${email} <br/>
                name: ${name}<br/><br/>
                <p>${message}</p>
                `, // html body
            });
            resp.redirect("/thank-you")
        } catch (error) {
            console.log(error);
            resp.end();
        }
    }

    static thankYou = (req, resp) => {
        resp.render("thank-you")
    }
}

module.exports = Controller;