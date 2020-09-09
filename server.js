require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: 'fernandolongo137@gmail.com',
    to: 'dfl.diego92@gmail.com',
    subject: 'Probando envio de emails',
    text: 'Envio realizado!!!'
};

transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log("Se ha producido un error", err);
    } else {
        console.log("Email enviado con exito");
    }
});