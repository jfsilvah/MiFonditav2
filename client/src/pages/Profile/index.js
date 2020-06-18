import React from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import Mapa from "../../components/Mapa/Mapa";
import { withAuthorization } from '../../components/Session';

function Profile(props) {
  return (
    <div className="mainContainer">
      <NavBar />
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col s6 s6">
            <div className="card">
              <div className="card-image">
                <img id="photo" src={require('./Profile_avatar_placeholder_large.png')} />
              </div>
              <div>
                 <p>Nombre de Usuario</p>
                 <p>e-mail@example.com</p>
                 <p>55-1234-5678</p>
                 <p>Direccion principal</p>
              </div>
            </div>
          </div>

          <div class="col s6 s6">
            <div class="card">
              <Mapa />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const condition = authUser => !!authUser;
export default withAuthorization(condition)(Profile);