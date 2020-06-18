import React, { Component } from 'react';
import Mapa from "../../components/Mapa/Mapa"
import AddressInput from "../../components/AddressInput/AddressInput"
import API from "../../utils/API";
import "./style.css";
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase';
const SignUpPage = () => (
    <div>
        
        <SignUpForm />
    </div>
);
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    street: "",
    exterior: "",
    interior: "",
    zipCode: "",
    province: "",
    city: "",
    state: "",
    phoneNumber: "",
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                API.saveCustomer({
                    name: this.state.username,
                    street: this.state.street,
                    exterior: this.state.exterior,
                    interior: this.state.interior,
                    zipCode: this.state.zipCode,
                    province: this.state.province,
                    city: this.state.city,
                    state: this.state.state,
                    email: this.state.email,
                    phoneNumber: this.state.phoneNumber,
                    password: this.state.passwordOne
                }).then(res => {
                    console.log(res);
                    this.setState({ ...INITIAL_STATE });
                    this.props.history.push('/');
                }).catch(error => {this.setState({error});
                });
                //this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    onChange = event => {
        console.log(event.target);
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            street,
            exterior,
            interior,
            zipCode,
            province,
            city,
            state,
            phoneNumber,
            error
        } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <div className="mainContainer" >
                <div className="blur"></div>
                <div className="container">
                    <div className="row login">
                        <div className="col s12 14 offset-14">
                            <div className="card">
                                <div className="card-action pink darken-1 white-text center-align">
                                    <h3>Registro</h3>
                                </div>
                                <div className="card-content left-align">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-field">
                                           <label>¿Cuál es tu nombre?</label>
                                           <input
                                               name="username"
                                               value={username}
                                               onChange={this.onChange}
                                               type="text"
                                               placeholder="Nombre y Apellidos"
                                           />
                                        </div>
                                        <br />
                                        <div className="form-field">
                                           <label>Ingresa tus datos de contacto</label>
                                           <input
                                               name="email"
                                               value={email}
                                               onChange={this.onChange}
                                               type="text"
                                               placeholder="Correo electrónico"
                                           />
                                           <input
                                               name="passwordOne"
                                               value={passwordOne}
                                               onChange={this.onChange}
                                               type="password"
                                               placeholder="Contraseña"
                                           />
                                           <input
                                               name="passwordTwo"
                                               value={passwordTwo}
                                               onChange={this.onChange}
                                               type="password"
                                               placeholder="Confirma tu contraseña"
                                           />
                                           <input
                                               name="phoneNumber"
                                               className="contactInput"
                                               value={phoneNumber}
                                               onChange={this.onChange}
                                               type="text"
                                               placeholder="Número de teléfono"
                                               autocomplete="off"
                                           />
                                        </div>
                                        <br />
                                        <div className="form-field">
                                           <label>Ingresa tu dirección de entrega</label>
                                           <input
                                               name="street"
                                               className="contactInput"
                                               value={street}
                                               onChange={this.onChange}
                                               type="text"
                                               placeholder="Calle"
                                               autocomplete="off"
                                           />
                                           <input
                                               name="exterior"
                                               className="contactInput"
                                               value={exterior}
                                               onChange={this.onChange}
                                               type="text"
                                               placeholder="Número Exterior"
                                               autocomplete="off"
                                           />
                                           <input
                                               name="interior"
                                               className="contactInput"
                                               value={interior}
                                               onChange={this.onChange}
                                               type="text"
                                               placeholder="Número Interior / Despacho"
                                               autocomplete="off"
                                           />
                                           <input
                                               name="zipCode"
                                               className="contactInput"
                                               value={zipCode}
                                               onChange={this.onChange}
                                               type="text"
                                               placeholder="Código Postal"
                                               autocomplete="off"
                                           />
                                           <input
                                               name="province"
                                               className="contactInput"
                                               value={province}
                                               onChange={this.onChange}
                                               type="text"
                                               placeholder="Municipio / Delegación"
                                               autocomplete="off"
                                           />
                                           <input
                                               name="city"
                                               className="contactInput"
                                               value={city}
                                               onChange={this.onChange}
                                               type="text"
                                               placeholder="Ciudad"
                                               autocomplete="off"
                                           />
                                           <input
                                               name="state"
                                               className="contactInput"
                                               value={state}
                                               onChange={this.onChange}
                                               type="text"
                                               placeholder="Estado"
                                               autocomplete="off"
                                           />
                                        </div>
                                        <br />
                                        <div className="center-align">
                                            <button type="submit" className="pink darken-1">Registrarme</button>
                                            {error && <p>{error.message}</p>}
                                        </div>
                                        <br /><br />
                                        <div id="mapa">
                                            <map>
                                                <Mapa />
                                            </map>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
    </p>
);
const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };