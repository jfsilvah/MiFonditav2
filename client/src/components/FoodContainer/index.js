import React from "react";
import "./style.css";

function FoodContainer(props) {

  var style = {}
  if(props.clicked === true){
    style={borderStyle: 'solid',borderWidth: '5px',borderColor: '#cc0066'}
  } else{
    style={borderStyle: 'solid',borderWidth: '0px',borderColor: 'black'}
  }

  return (
    <div className="card foodCard">
      <div className="img-container" status={props.status}>
        <img id='menuImage' alt={props.name} src={props.image} onClick={() => props.handleClick(props.name,props.value,props.id)} style={style}/>
      </div>
    </div>
  );
}

export default FoodContainer;