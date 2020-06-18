import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { PasswordForgetLink } from '../../components/PasswordForget';
import { SignUpLink } from '../../components/SignUp';
import { withFirebase } from '../../components/Firebase';
import "./style.css";

const SignInPage = () => (
    <div>
        <SignInForm />
    </div>
);
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <div className="mainContainer">
                <div className="blur"></div>
                    <div className="row login">
                        <div className="col s12 m8 l6 xl6 offset-m2 offset-l3 offset-xl3">
                            <div className="card">
                                <div className="card-action pink darken-1 white-text center-align">
                                    <h3>Inicio de sesión</h3>
                                </div>
                                <div className="card-content left-align">
                                    <div className="formField">
                                        <label for="username">Usuario</label>
                                        <input 
                                            type="text" 
                                            id="username"
                                            name="email"
                                            value={email}
                                            onChange={this.onChange}
                                            style={{marginLeft:'0px'}}
                                        />
                                    </div><br/>
                                    <div className="form-field left-align">
                                        <label for="password">Contraseña</label>
                                        <input 
                                            type="password" 
                                            id="password"
                                            name="password"
                                            value={password}
                                            onChange={this.onChange}
                                            style={{marginLeft:'0px'}}
                                        />
                                    </div><br/>
                                    <div className="form-field center-align">
                                        <button className="pink darken-1 waves-effect waves-light" type="submit" onClick={this.onSubmit}>Continuar</button>
                                    </div><br/>
                                    <div className="center-align">
                                        <PasswordForgetLink/>
                                        <br/>
                                        <SignUpLink/>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
           
        );
    }
}

{/* <form onSubmit={this.onSubmit}>
                                        <input
                                            name="email"
                                            value={email}
                                            onChange={this.onChange}
                                            type="text"
                                            placeholder="Email Address"
                                        />
                                        <input
                                            name="password"
                                            value={password}
                                            onChange={this.onChange}
                                            type="password"
                                            placeholder="Password"
                                        />
                                        <PasswordForgetLink />
                                        <SignUpLink />
                                        <button className="pink darken-1 waves-effect waves-light" disabled={isInvalid} type="submit">
                                            Sign In
                                        </button>
                                        <br /><br />
                                        {error && <p>{error.message}</p>}
                                    </form> */}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };