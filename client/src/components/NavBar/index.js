import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SignOutButton from '../SignOut/index';
import logo from "./logo.png"
import profilePic from "./profilePic.jpg"


function NavBar(props) {
    return (
        <div>
            <div id="navBar">
                <nav className=" pink darken-1">
                    <div className="nav-wrapper">
                        <div className="container">
                            <a href="#" className="brandLogo left"><img id="navBarLogoImage" className="brand-logo" src={logo} /></a>
                            <a href="#" className="sidenav-trigger" data-target="slide_out_1"><i className="material-icons">menu</i></a>
                            <ul className="hide-on-med-and-down right">
                                <li>
                                    <Link to="/" className={window.location.pathname === "/" ? "active" : ""}>Home</Link>
                                </li>
                                <li><Link to="/orders" className={window.location.pathname === "/orders" ? "active" : ""}>Pedidos</Link></li>
                                <li><Link to="/about-us" className={window.location.pathname === "/about-us" ? "active" : ""}>Sobre nosotros</Link></li>
                                <li>
                                    <a href="#" data-target="slide_out_2" className="sidenav-trigger show-on-large">
                                        <img id="navBarUserImage" className="circle" src={profilePic} />
                                    </a>
                                </li>
                                <li>
                                    <SignOutButton />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <ul id="slide_out_2" className="sidenav">
                <div className="user-view">
                    <div className="background">
                        <img src="./assets/images/pinkBG.jpg" />
                    </div>
                    <a href="/profile"><img id="sideBarUserImage2" className="circle" src="./assets/images/profilePic.jpg" /></a>
                    <a href="#name"><span id="sideBarUserName2" className="white-text name">Martín Sosa Rodríguez</span></a>
                    <li><div className="divider"></div></li>
                    <li><a className="waves-effect" href="/profile" id="profile-button"><i className="material-icons">edit</i>Ver información de usuario</a></li>
                </div>
            </ul>
            <ul id="slide_out_1" className="sidenav">
                <div className="user-view">
                    <div className="background">
                        <img src="./assets/images/pinkBG.jpg" />
                    </div>
                    <a href="#user"><img id="sideBarUserImage1" className="circle" src="./assets/images/profilePic.jpg" /></a>
                    <a href="#name"><span id="sideBarUserName2" className="white-text name">Martín Sosa Rodríguez</span></a>
                    <li><div className="divider"></div></li>
                    <li><a className="waves-effect" href="" id="edit-button"><i className="material-icons">edit</i>Editar información</a></li>
                </div>
                <li><a className="waves-effect" href="/"><i className="material-icons">home</i>Inicio</a></li>
                <li><a className="waves-effect" href="/orders"><i className="material-icons">list</i>Pedidos</a></li>
                <li><a className="waves-effect" href="/about-us"><i className="material-icons">pan_tool</i>Sobre nosotros</a></li>
            </ul>
        </div>
    );
}


export default NavBar;