import React from "react";
import "./style.css";

function Summary () {
    return (
        <div>
            
                <div class="row">
                    <div class="col s6">
                            <p id="description"> No esperes a visitar a mamá para disfrutar de tu comida preferida, 
                                regístrate en Mi Fondita, personaliza tu menú del día y recíbelo en 
                                tu casa u oficina.
                            </p>
                    </div>
                    <div class="col s6">
                        <div id="mkt">
                            <img src={require("./MiFonditaPublicidad1.jpg")} />
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Summary