import React from "react";

function ContactForm () {
    return (
      <div class="col s12 m7">
          <div class="card horizontal">
              <div class="card-stacked">
                  <div class="card-content">
                      <h3> Contáctanos </h3>
                      <br/>
                      <form class="col s12">
                          <div class="row">
                            <div class="input-field col s6">
                              <input type="text" autocomplete="off"/>
                              <label> Nombre </label>
                            </div>
                            <div class="input-field col s6">
                              <input type="text" autocomplete="off"/>
                              <label> Correo Electrónico </label>
                            </div>
                            <div class="input-field col s12"/>
                                <label> Escribe tu mensaje aquí </label>
                                <textarea id="textarea1" class="materialize-textarea"></textarea>
                            </div>
                            <div>
                              <a class="pink darken-1 white-text center-align btn"><i class="material-icons right">message</i> Enviar </a>
                            </div>
                        </form>

                  </div>
              </div>
          </div>
      </div>
    )
};

export default ContactForm