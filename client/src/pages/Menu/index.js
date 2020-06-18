import React, { Component } from "react";
import "./style.css";
import FoodContainer from "../../components/FoodContainer"
import Wrapper from "../../components/Wrapper"
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import { Row, Col, Divider } from 'antd';
import { Button } from 'antd';
import { withAuthorization } from '../../components/Session';
import { renderComponent } from "recompose";
import { Link } from "react-router-dom";
import {Animated} from "react-animated-css";
var bool = false;

class Menu extends Component {
  
state = {
  fullMenu: [],
  entradas: [],
  guarniciones: [],
  platillos: [],
  postres: [],
  bebidas: [],
  complementos: [],
  entrada: "",
  guarnicion: "",
  platillo: "",
  postre: "",
  bebida: "",
  complemento: "",
}

componentDidMount = () =>{
  this.loadFoodCatalog();
}
loadFoodCatalog = () =>{
  console.log("Holaaa");
  API.getMenu(this.props.match.params.type).then(res => {
    console.log(res.data);
    var entradas = res.data.filter(food => food.Category === "entrada");
    var guarniciones = res.data.filter(food => food.Category === "guarnicion");
    var platillos = res.data.filter(food => food.Category === "platillo");
    var postres = res.data.filter(food => food.Category === "postre");
    var bebidas = res.data.filter(food => food.Category === "bebida");
    var complementos = res.data.filter(food => food.Category === "complemento");
    this.setState({fullMenu: res.data, entradas: entradas, guarniciones: guarniciones, platillos: platillos, postres:postres, bebidas: bebidas, complementos: complementos})
  }).catch(err => console.log(err));
}

handleClick = (name,value,id) => {
  switch(name) {
    case "entrada":
      if(value !== this.state.entrada){
        this.setState({entrada: value});
      }else{
        this.setState({entrada: ""});
      }
      break;
    case "guarnicion":
      if(value !== this.state.guarnicion){
        this.setState({guarnicion: value});
      }else{
        this.setState({guarnicion: ""});
      }
      break;
    case "platillo":
      if(value !== this.state.platillo){
        this.setState({platillo: value});
      }else{
        this.setState({platillo: ""});
      }
      break;
    case "postre":
      if(value !== this.state.postre){
        this.setState({postre: value});
      }else{
        this.setState({postre: ""});
      }
      break;
    case "bebida":
      if(value !== this.state.bebida){
        this.setState({bebida: value});
      }else{
        this.setState({bebida: ""});
      }
      break;
    case "complemento":
      if(value !== this.state.complemento){
        this.setState({complemento: value});
      }else{
        this.setState({complemento: ""});
      }
      break;
    default:
      console.log("invalid parameter");
  }
 
  // console.log(this.state.entrada)
  // console.log(this.state.entrada)
  // console.log(name,value);
}

onSubmit = () =>{ 
  var tempArray = [this.state.entrada,this.state.guarnicion,this.state.platillo,this.state.postre,this.state.bebida,this.state.complemento]
  var submitArray = tempArray.filter(element => element !== "");
  console.log(submitArray);
  API.createOrder(submitArray).then(alert("success")).catch()
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
          <Animated animationIn="tada" animationOut="fadeOut" animationInDelay={0.8} animationInDuration={1000} isVisible={true}>
            <h1 id="menuTitle">{this.props.match.params.type}</h1>
          </Animated>
          {this.state.fullMenu.length > 0 ? (
            <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} isVisible={true}>
              <div className="menuContainer">
            {this.state.entradas.length ? (

              <Wrapper >
              <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Entradas</Divider>
              {this.state.entradas.map(food => (
                <FoodContainer
                  handleClick={this.handleClick}
                  status={food.status}
                  id={food.id}
                  key={food.id}
                  name={food.Category}
                  value={food.FoodName}
                  image={food.Picture}
                  clicked={food.FoodName === this.state.entrada ? (true) :(false)}
                  
                />
              ))}
            </Wrapper>
              ) : (
                <></>
              )}
              {this.state.guarniciones.length ? (
                <Wrapper >
                <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Guarniciones</Divider>
                {this.state.guarniciones.map(food => (
                  <FoodContainer
                    handleClick={this.handleClick}
                    status={food.status}
                    id={food.id}
                    key={food.id}
                    name={food.Category}
                    value={food.FoodName}
                    image={food.Picture}
                    clicked={food.FoodName === this.state.guarnicion ? (true) :(false)}
                  />
                ))}
              </Wrapper>
                ) : (
                  <></>
                )}
                {this.state.platillos.length ? (
                  <Wrapper >
                  <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Plato principal</Divider>
                  {this.state.platillos.map(food => (
                    <FoodContainer
                      handleClick={this.handleClick}
                      status={food.status}
                      id={food.id}
                      key={food.id}
                      name={food.Category}
                      value={food.FoodName}
                      image={food.Picture}
                      clicked={food.FoodName === this.state.platillo ? (true) :(false)}
                    />
                  ))}
                </Wrapper>
                  ) : (
                    <></>
                  )}
                  {this.state.postres.length ? (
                    <Wrapper >
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Postres</Divider>
                    {this.state.postres.map(food => (
                      <FoodContainer
                        handleClick={this.handleClick}
                        status={food.status}
                        id={food.id}
                        key={food.id}
                        name={food.Category}
                        value={food.FoodName}
                        image={food.Picture}
                        clicked={food.FoodName === this.state.postre ? (true) :(false)}
                      />
                    ))}
                </Wrapper>
                  ) : (
                    <></>
                  )}
                {this.state.bebidas.length ? (
                  <Wrapper >
                  <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Bebidas</Divider>
                  {this.state.bebidas.map(food => (
                    <FoodContainer
                      handleClick={this.handleClick}
                      status={food.status}
                      id={food.id}
                      key={food.id}
                      name={food.Category}
                      value={food.FoodName}
                      image={food.Picture}
                      clicked={food.FoodName === this.state.bebida ? (true) :(false)}
                    />
                  ))}
                  </Wrapper>
                    ) : (
                      <></>
                    )}
                {this.state.complementos.length ? (
                  <Wrapper >
                  <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Complementos</Divider>
                  {this.state.complementos.map(food => (
                    <FoodContainer
                      handleClick={this.handleClick}
                      status={food.status}
                      id={food.id}
                      key={food.id}
                      name={food.Category}
                      value={food.FoodName}
                      image={food.Picture}
                      clicked={food.FoodName === this.state.complemento ? (true) :(false)}
                    />
                  ))}
                </Wrapper>
                  ) : (
                    <></>
                  )}
            <br/>
            <Button type="primary" size='large'block onClick={this.onSubmit} style={{height:'15vh'}}>
              <Link to="/">Generar Orden</Link>
            </Button>
          </div>
            </Animated>
          ):(
            <h1 className='noResults'></h1>
          )}
      </div>
    );
  }
}


const condition = authUser => !!authUser;
export default withAuthorization(condition)(Menu);