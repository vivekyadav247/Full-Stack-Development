import nodemailer from "nodemailer" ;

const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

const sendEmail = async (to, subject, html) => {
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject,
        html
    });
}

const sendVerificationEmail = async (to, email, token) => {
    const subject = "Verify your email" ;
    const html = `<p>Hi ${email},</p>
    <p>Please click the link below to verify your email:</p>
    <a href="${process.env.FRONTEND_URL}/verify-email?token=${token}">Verify Email</a>
    <p>If you did not request this, please ignore this email.</p>` ;
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject,
        html
    });
}

export { transporter, sendEmail, sendVerificationEmail };