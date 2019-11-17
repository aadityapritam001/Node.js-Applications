// JavaScript source code
var express=require('express');
var nodemailer = require('nodemailer');
var server = express();

server.listen(2000, function(){
    console.log('server started at port',2000)
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aadityapritam00@gmail.com',
        pass: '************'
    }
});

var mailoptions = {
    from: 'aadityapritam00@gmail.com',
    to: 'aadityaraj.sistec@gmail.com',
    subject: 'mail using Node.js',
    text: 'hi, this mail is checking automatically by node.js'
};

transporter.sendMail(mailoptions, function (error, info) {
    if (error) { console.log(error,'Email not sent, something went wrong! '); }
    else {
        console.log('Email sent by Node.js:' + info.response);
    }
});
