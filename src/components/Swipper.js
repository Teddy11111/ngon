import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Swipper.css'
import TomYum from '../TomYum.png';
import MienXao from '../Mienxao.png';
import GoiCuon from '../Goicuon.png';

export default function Swipper() {  
    return (
      <div id="popular" data-aos="fade-up">
        <hr></hr>
        <div className="popular">Популярные блюда</div>

        <Carousel>
        <Carousel.Item>
            <div className="book">
            <div className="rectFood"></div>
                <div className="textFood">Кисло-сладкий суп на кокосовом молоке с креветками, кальмарами и шампиньонами. Продается с рисом на пару.</div>
                <img className="tomYum" src={TomYum} alt="TomYum"></img>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className="book">
                <div className="rectFood"></div>
                <div className="textFood">Жареная стеклянная лапша на воке с курицей/говядиной/креветками, овощами, древесными грибами и яйцом. </div>
                <img className="mienXao" src={MienXao} alt="MienXao"></img>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className="book">
                <div className="rectFood"></div>
                <div className="textFood">Фреш-ролл с креветками, курицей, манго, зелень в рисовой бумаге.</div>
                <img className="goiCuon" src={GoiCuon} alt="GoiCuon"></img>
            </div>
        </Carousel.Item>
      </Carousel>
      
      <button>Меню</button>
    </div>
    );
  }
  