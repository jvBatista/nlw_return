import nodemailer from "nodemailer";
import { MailAdaptor, SendMailData } from "../mailAdaptor";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "418025012b660c",
        pass: "a9551630363df9"
    }
});

export class NodemailerMailAdaptor implements MailAdaptor {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "João Victor Batista <jvtexbat@hotmail.com>",
            subject,
            html: body
        });
    };
}