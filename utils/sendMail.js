const nodemailer = require("nodemailer");

module.exports = {
    newCustomer: function (email) {
        console.log("Entro a enviar correo");
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
                user: 'mifondit4@gmail.com',
                pass: 'vswgtplimqzfuwot'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        let helperOptions = {
            from: 'Mi Fondita Express <no-reply@mifonditaexpress.com>',
            replyTo: 'no-reply@mifonditaexpress.com',
            to: email,
            subject: '¡Bienvenido a tu cuenta Mi Fondita!',
            html: ` <html>
                    <head></head>
                    <body>
                        <div class="email--background">
                            <div class="email--container">
                                <div class="email--inner-container">
                                    <h3>¡Agradecemos tu preferencia!</h3>
                                    <p>Sabemos que es difícil conseguir opciones variadas de comida a domicilio. <br>
                                        Ahora, podrás disfrutar de más variedad en tu casa u oficina, a un clic de distancia.
                                        <ol>
                                           <li><a href="#" id="links">Inicia sesión</a> en la plataforma de Mi Fondita</li>
                                           <br>
                                           <li><a href="#" id="links">Elige</a> el menú que más te guste</li>
                                           <br>
                                           <li><a href="#" id="links">Confirma</a> tu pedido</li>
                                           <br>
                                           <li><a href="#" id="links">Disfruta</a> de tu comida</li>
                                        </ol>
                                    </p>
                                    <a href="#" class="cta">Iniciar sesion</a>
                                </div>
                            </div>
                        </div>
                        <style>
                            body {
                                font-family: sans-serif;
                                background: #fff;
                                margin-bottom: 15%;
                            }
                            p{
                                font-size: 16px;
                                line-height: 1.5;
                                margin-bottom: 30px;
                            }
                            .cta{
                                display: inline-block;
                                padding: 10px 20px;
                                color: #fff;
                                background: #E4007C;
                                text-decoration: none;
                                letter-spacing: 2px;
                                text-transform: uppercase;
                                border-radius: 5px;
                                font-size: 13px;
                            }
                            #links {
                                color: #E4007C;
                            }
                        </style>
                    </body>
                    </html>`
        };

        transporter.sendMail(helperOptions, (error, info) => {
            if (error) {
                return console.log(error);
            } else {
                console.log("message sent!");
            };
        });
    }
}