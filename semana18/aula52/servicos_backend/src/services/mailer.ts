import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from "nodemailer";
import { mailTemplate } from "../types/Mail";
import Mail from "nodemailer/lib/mailer";

export const config: SMTPTransport.Options = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "16f620590392b9",
        pass: "ec8eb8fc1bfb1e"
    }
}

let transporter = nodemailer.createTransport(config)

export const writeEmail = async(mail: mailTemplate) => {

    let mailContent: Mail.Options = {
        from: mail.from,
        to: mail.to,
        subject: mail.subject,
        text: mail.text,
        html: mail.html
    }

    transporter.sendMail(mailContent, (error: Error | null, info: any) => {
        if(error){
            throw new Error(error.message)
        } else{
            console.log("Email enviado!")
        }
    })
}