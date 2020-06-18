import React from "react";
import "./style.css";
import logo from "./logo.png"

function AboutContainer() {
    return (
        <div>
            <div class="col s12 m7">
                <div class="card horizontal">
                        <div class="card-stacked">
                            <h3>Quienes somos</h3>
                            <div class="card-content">
                            <p> En Mi Fondita Express sabemos lo deliciosa que es la comida casera y lo difícil que puede ser encontrarla
                                cuando estamos fuera de nuestros hogares, así que nosotros la ponemos al alcance de un click. </p>
                            <br/>
                            <p> Somos un servicio que entrega comidas completas, personalizadas, a precios accesibles y con un
                                costo de envío mínimo para que lleguen a tu oficina o domicilio. </p>
                            </div>
                        </div>
                        <br/>
                        <div class="card-stacked">
                            <img src={logo} style={{width:'400px',height:'auto'}}/>
                        </div>
                        
                        <div class="card-stacked">
                            <h3>Cómo funciona</h3>
                            <div class="card-content">
                            <p><span> 1.Regístrate</span></p>
                            <p><span> 2.¿Desayuno o comida?</span></p>
                            <p><span> 3.Personaliza tu menú</span></p>
                            <p><span> 4.Envía tu orden</span></p>
                            <p><span> 5.Recibe tu pedido</span></p>
                            <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
          };

export default AboutContainer;