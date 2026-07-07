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

const sendResetPasswordEmail = async (to, email, token) => {
    const subject = "Reset your password" ;
    const html = `<p>Hi ${email},</p>
    <p>Please click the link below to reset your password:</p>
    <a href="${process.env.FRONTEND_URL}/reset-password?token=${token}">Reset Password</a>
    <p>If you did not request this, please ignore this email.</p>` ;
    await sendMail(email, subject, html);
}

const sendOrderConfirmationEmail = async (to, orderId) => {
    const subject = "Order Confirmation" ;
    const html = `<p>Hi,</p>
    <p>Your order with ID ${orderId} has been confirmed.</p>
    <p>Thank you for shopping with us!</p>` ;
    await sendMail(to, subject, html);
}

const 
export { transporter, sendEmail, sendVerificationEmail, sendResetPasswordEmail, sendOrderConfirmationEmail } ;