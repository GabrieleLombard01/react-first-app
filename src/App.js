import React, {Component} from 'react';
import NavBar from "./components/AppNavBar";
import Card from './components/AppCards';
import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  render(){
	return (
    <>
      <NavBar/>
      <div className="container" style={{maxWidth: '1000px'}}>
        <h1 className="text-center fw-bold fs-3 pt-2">Cosa desideri mangiare?</h1>
        <hr/>
        <div className="row mx-auto">
          <Card
          figure={california}
          name="California"
          price={1.99}/>
          <Card
          figure={dragon}
          name="Dragon"
          price={1.00}/>
          <Card
          figure={dynamite}
          name="Dynamite"
          price={1.50}/>
          <Card
          figure={philadelphia}
          name="Philadelphia"
          price={2.99}/>
          <Card
          figure={rainbow}
          name="Rainbow"
          price={0.99}/>
          <Card
          figure={shrimp}
          name="Shrimp"
          price={1.25}/>
        </div>
      </div>
    </>
	);
 }
}

export default App;
