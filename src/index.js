import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css';
import Navbar from './components/Navbar';
import Swipper from './components/Swipper';
import AOS from 'aos';
import "aos/dist/aos.css";
import {ReactComponent as Arrow} from './arrow.svg'
import {ReactComponent as WA} from './Whatsapp.svg';
import {ReactComponent as VK} from './VK.svg';
import {ReactComponent as Ins} from './Instagram.svg';
import {ReactComponent as FB} from './FB.svg';
import Pho from './Pho.png';
import Yandex from './yandex-eda.png';
import Delivery from './delivery-club.png'

function App(){

  useEffect(() => {
    AOS.init({
      duration : 1500
    });
  }, []);

  return (
  <div className="App">
    <header>
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact />
      </Switch>
      </Router>
    </header>
    <div id="main" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <div className="phoContainer"><img className="pho" src={Pho} alt="Pho"></img></div>
      <div className="square">
        <div className="text">Национальная уличная еда, приготовленная с учетом современных <br></br>гастрономических решений!</div> 
      </div>
    </div>
    <Swipper></Swipper>
    <div id="delivery" data-aos="zoom-out">
      <div>
        <img className="deliveryClub" src={Delivery} alt="DeliveryClub"></img>
        <div className="arrow" data-aos="fade-down"> <Arrow/> </div>
      </div>
      <div>
        <img className="yandex" src={Yandex} alt="YandexEda"></img>
        <div className="arrow" data-aos="fade-down"> <Arrow/> </div>
      </div>
    </div>
    <div id="review">
        <button>Оставить Отзыв</button>
    </div>
    <footer>
      <div id="social">
        <div className="wa"> <WA/> </div>
        <div className="vk"> <VK/> </div>
        <div className="ins"> <Ins/> </div>
        <div className="fb"> <FB/> </div>
      </div>
      <div id="menu">
        <div>Меню</div>
        <div>Галерея</div>
        <div>Доставка</div>
        <div>Акции</div>  
        <div>Контакты</div>
      </div>
      <div id="telNum">+7 (999) 123-45-67</div>
    </footer>
  </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))