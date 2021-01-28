import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ReactComponent as Logo} from './Logo.svg';
import {ReactComponent as Oxx} from './Oxx.svg';
import {ReactComponent as LeftB} from './Left.svg';
import {ReactComponent as RightB} from './Right.svg';
import Pho from './Pho.png'
import { render } from '@testing-library/react';

function App(){
  return (
  <div>
    <div>
      <span onClick>Меню</span>
      <span onClick style={{left: "580px"}}>Галерея</span>
      <span onClick style={{left: "710px"}}>Банкеты</span>
      <span onClick style={{left: "840px"}}>Акции</span>
      <span onClick style={{left: "970px"}}>Контакты</span>
    </div>
    <rect className="square"></rect>
    <div className="text">Yeah!</div>
    <img clasName="pho" src={Pho} alt="Pho"></img>
    <div className="left"> <LeftB/> </div>
    <div className="right"> <RightB/> </div>
    <div className="logo"> <Logo/> </div>
    <div className="oxx"> <Oxx/> </div>
  </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))