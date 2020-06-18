import React from "react";
import NavBar from "../../components/NavBar"
import { Carousel } from 'antd';
import { Row, Col} from 'antd';
import { withAuthorization } from '../../components/Session';
import desayuno from './homeImages/desayuno.png'
import comida from './homeImages/comida.png'
import vegetariano from './homeImages/salad.png'
import slide1 from './homeImages/slide-desayunosrosa.jpg'
import slide2 from './homeImages/slide-emapques.jpg'
import slide3 from './homeImages/slide-pagotarjeta.jpg'
import slide4 from './homeImages/slide-vegerariano2.jpg'
import {Animated} from "react-animated-css";

import "./style.css";

function Home(props) {
  return (
  <div className="mainHomeContainer">
      <NavBar/>
        <Carousel autoplay>
            <div className="slideContainer">
            <img src={slide1}/>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={0.6} animationInDuration={1000} isVisible={true}>
              <h1 className="textCentered" style={{top:'33%',left:'60%',color: 'black', fontSize:'4vw'}}>{"¡Hola!"}</h1> 
            </Animated>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={1.4} animationInDuration={2000} isVisible={true}>
              <h3 className="textCentered" style={{top:'60%',left:'70%',color: 'black', fontSize:'3vw'}}>{"Bienvenido a tu fondita"}</h3> 
            </Animated>
            </div>
            <div className="slideContainer">
            <img src={slide2}/>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={0.2} animationInDuration={2000} isVisible={true}>
              <h2 className="textCentered" style={{left:'45%'}}>Recibe tu comida en recipientes biodegradables</h2> 
            </Animated>
            </div>
            <div className="slideContainer">
            <img src={slide4}/>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={0.2} animationInDuration={2000} isVisible={true}>
               <h1 className="textCentered" style={{left:'60%'}}>Comida que te consiente</h1>     
            </Animated>
            </div>
        </Carousel>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={0.1} animationInDuration={1000} isVisible={true}>
          <Row style={{marginTop:'20px'}}>
              <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 8, offset: 0 }}>
              <a href="/menu/desayuno"><button className="button" style={{boxShadow: '0px 4px 15px 2px #888888'}}><img src={desayuno} alt="menuImage" style={{width: '5vw', height: 'auto'}}/><br/><br/>Desayunos</button></a>
              </Col>
              <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 8, offset: 0 }}>
              <a href="/menu/comida"><button className="button" style={{boxShadow: '0px 4px 15px 2px #888888'}}><img src={comida} alt="menuImage" style={{width: '5vw', height: 'auto'}}/><br/><br/>Comidas</button></a>
              </Col>
              <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 8, offset: 0 }}>
              <a href="/menu/vegetariana"><button className="button" style={{boxShadow: '0px 4px 15px 2px #888888'}}><img src={vegetariano} alt="menuImage" style={{width: '5vw', height: 'auto'}}/><br/><br/>Menú Vegetariano</button></a>
              </Col>
          </Row>
        </Animated>
        <br/>
        <br/>
  </div>
  );
}

// {
//     <div className="container" style={{marginTop: '60px'}}>
//         <div className = "row">
//             <div className="col s12"><h2 style = {{fontSize: '50px',textAlign: 'center',fontFamily: 'Caveat, cursive'}}>¡Bienvenido!</h2></div>
//         </div>
//         <div className = "row">
//             <div className = "col s6" style={{marginRight: '10%'}}>
//                 <div className="card-panel blue-grey lighten-4">
//                     {/* <span className="white-text">I am a very simple card. I am good at containing small bits of information.
//                     I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
//                     </span> */}
//                     <a href="/menu/desayuno"><button className="button"><img src="https://i.pinimg.com/originals/ef/96/b7/ef96b7ca0f841d9ef0a0ac41a3a19374.jpg" alt="menuImage" style={{width: '100px', height: 'auto'}}/><br/><br/>Desayunos</button></a>
//                     <a href="/menu/comida"><button className="button"><img src="https://encolombia.com/wp-content/uploads/2019/05/Comidas-Bajas-en-Calor%C3%ADas-para-Toda-la-Semana-696x398.jpg" alt="menuImage" style={{width: '100px', height: 'auto'}}/><br/><br/>Comidas</button></a>
//                     <a href="/menu/vegetariana"><button className="button"><img src="https://cdn.ticbeat.com/src/uploads/2019/06/verano-810x540.jpg" alt="menuImage" style={{width: '100px', height: 'auto'}}/><br/><br/>Menú Vegetariano</button></a>
//                 </div>
//             </div>
//             <div className = "col s6">  
//                 <div className="card-panel teal">

//                     {/* <span className="white-text">I am a very simple card. I am good at containing small bits of information.
//                     I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
//                     </span> -->
//                     <div className="carousel carousel-slider">
//                         <a href="#one!" className="carousel-item "><img src="./images/a.jpg" style="width: 360px; height: auto;"></a>
//                         <a href="#two!" className="carousel-item "><img src="./images/b.jpg" style="width: 360px; height: auto;"></a>
//                         <a href="#three!" className="carousel-item "><img src="./images/c.jpg" style="width: 360px; height: auto;"></a>
//                         <a href="#four!" className="carousel-item "><img src="./images/d.jpg" style="width: 360px; height: auto;"></a>
//                         <a href="#five!" className="carousel-item "><img src="./images/e.jpg" style="width: 360px; height: auto;"></a>
            
//                     </div> */}
//                     <img src="./images/add1.jpeg" style={{width: '100%', height: 'auto'}}/>
//                 </div>
//             </div>
//           </div>
//     </div>
// }

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);