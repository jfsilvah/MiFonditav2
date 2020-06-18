import React, {Component} from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import Container from "../../components/Container";
import API from "../../utils/API";
import { Button, DatePicker, Card, Avatar } from 'antd';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import imag from '../../assets/images/comida/pan.jpeg'
import {Animated} from "react-animated-css";
var dateFormat = require('dateformat');
const { Meta } = Card;


class OrdersDetail extends Component {

  state = {
    orderInfo: {},
    testID: -1
  }

  componentDidMount = () =>{
    this.loadOrder();
  }
  loadOrder = () =>{
    API.getOrder(this.props.match.params.id).then(res => {
      console.log(res);
      this.setState({orderInfo: res.data[0], testID: res.data[0].id})
      console.log(this.state.orderInfo)
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
          {this.state.testID !== -1 ? (
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={800} isVisible={true}>
                <Container>
                  <div style={{margin:'0 3vw 0 3vw'}}>
                    <Card title={`Detalle orden #${this.state.orderInfo.id}`} align="start"  extra={<a href="#">Editar información</a>} style={{ width:'100%'}}>
                      <Row>
                        <Col xs={24} sm={12} md={12} lg={4} xl={6}>
                          <div>Precio total: ${this.state.orderInfo.OrderLines[0].OrderPrice} MXN</div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={4} xl={6}>
                          <div>Estatus: {this.state.orderInfo.OrderStatus}</div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                          <div>Fecha de pedido:  {dateFormat(this.state.orderInfo.createdAt, "m/d/yy, h:MM TT")}</div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                          <div>Última actualización: {dateFormat(this.state.orderInfo.updatedAt, "m/d/yy, h:MM TT")}</div>
                        </Col>
                      </Row>
                      <br/>
                      <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}></Divider>
                      <h6 align="start" style={{fontSize:'12px'}}>Lista de selección:</h6>
                      <br/>
                      <Card>
                        {this.state.orderInfo.OrderLines.map(order => {
                          return (
                            <div>
                              <Row>
                              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Meta style={{width:'100%'}}
                                  avatar={<Avatar src={`../${order.Food.Picture}`} style={{width:'10vw',height:'auto',borderRadius:'15px',boxShadow: '0 8px 16px 0 rgba(0,0,0,0.5)'}} />}
                                  title={order.Food.FoodName}
                                  description={`Categoría: ${order.Food.Category}`}
                                />
                              </Col>
                            </Row>
                            <br/>
                            </div>
                          );
                        })}
                      </Card>
                      <br/>
                    </Card>
                  </div>
              </Container>
            </Animated>
            ) : (
              <h3 className='noResults'></h3>
            )}
      </div>
    );
  }
  
}


export default OrdersDetail;