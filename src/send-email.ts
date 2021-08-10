import schedule from 'node-schedule';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const email = process.env.USER_EMAIL || 'test@ex.com';
const pass = process.env.USER_PASS || '123';

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: email,
        pass: pass
    }
});

const mailOptions = {
    from: 'xxx@gmail.com',
    to: 'yyy@gmail.com',
    subject: 'Lesson Reminder',
    html: '<p>Message from NodeJS</p>'
};

schedule.scheduleJob('*/5 * * * * *', function(){
    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err, 'err')
        } else {
            console.log(info);
        }
    });
});
