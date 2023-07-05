import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {

  const transporter = createTransport({
    service: "gmail",
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.MY_MAIL,
      pass: process.env.SMTP_PASS
    },
  });

  await transporter.sendMail({
    to,
    subject,
    text,
  });
};
