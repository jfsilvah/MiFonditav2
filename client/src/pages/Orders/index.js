import React, {Component} from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import Container from "../../components/Container";
import API from "../../utils/API";
import { Link, Route } from "react-router-dom";
import { withAuthorization } from '../../components/Session';
import {Animated} from "react-animated-css";
var dateFormat = require('dateformat');

class Orders extends Component {

  state = {
    orders: [],

  }

  componentDidMount = () =>{
    this.loadOrders();
  }
  loadOrders = () =>{
    console.log("Holaaa");
    API.getOrders().then(res => {
      console.log(res);
      var tempArray = res.data
      this.setState({orders: tempArray.reverse()})
    }).catch(err => console.log(err));
  }

  handleInputChange = event => {
    const {name,value} = event.target;
    this.setState({
      [name]: value
    });
  };

  render(){
    return (
      <div className="mainContainer">
          <NavBar/>
          <br/>
          <br/>
          {this.state.orders.length ? (
             <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={0.1} animationInDuration={800} isVisible={true}>
                  <Container>
                      {this.state.orders.map(order => {
                            return (
                              <div className="row">
                                <div className="col s10 10 offset-s1">
                                    <div className="card orderCard left-align">
                                        <div className="card-content blue-text text-darken-2">
                                            <div className="card__meta">
                                                <time>{dateFormat(order.OrderDate, "dddd, mmmm d, yyyy - h:MM TT")}</time>
                                            </div>
                                            <span className="card-title"style={{color: '#37474f',fontWeight:'bold'}}>Orden #{order.id}</span>
                            
                                            <span>Estatus de la orden: {order.OrderStatus}</span>
                                        </div>
                                        <div className="card-action">
                                            <span style={{fontWeight:'bold'}}>Monto total a pagar: ${order.totalPrice}</span>
                                            <br/>
                                            <br/>
                                            <Link to={`orders/detail/${order.id}`} role="button" className="btn btn-link light-blue darken-1 card-action-right" style={{color: 'black',fontWeight:'bold'}}> Detalle de la orden</Link>
                                            <br/>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            );
                          })}
                  </Container>
             </Animated>
            
            ) : (
              <h3 className='noResults'></h3>
            )}
      </div>
    );
  }
  
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Orders);