'use strict';
const nodemailer = require('nodemailer');
require('dotenv').config();

this.enviar_mail = (pcorreo, pnombre, pcontrasena) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    });
    let mail_options = {
        from: 'GalloPinto Dev',
        to: ` ${pcorreo}`,
        subject: `Bienvenido ${pnombre}`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
            <tr height="200px">  
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">Bienvenido ${pnombre}</h1>
                    <p  style="color: #fff; text-align:center">
                        
                        a la aplicación <span style="color: #e84393">Megacines</span> 
                    </p>
                </td>
            </tr>
            <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">Su contraseña es: ${pcontrasena}</p>
                </td>
            </tr>
            <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">¡Tu película favorita te espera!</p>
                </td>
            </tr>
            </table>
        
        `
    };
    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo se envió con éxito: ' + info.response);
        }
    });
};
module.export = this;