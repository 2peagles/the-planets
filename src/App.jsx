import React, {useState} from 'react';
import {Nav,Tab, Carousel }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { planetData } from './data/planet';
import './App.css'
function App() {
 const[menu, setMenu]=useState(false);
  const handleClick = () =>setMenu(!menu);
  return (
    <main className='app'>
        <Tab.Container  defaultActiveKey='first'>
          <Nav>
            <Nav.Item> <Nav.Link>the planets</Nav.Link></Nav.Item>
            <div className={!menu ? 'hidden' : 'visible'}>
             <Nav.Item className='mobilenavone'><Nav.Link eventKey="home" >Mercury</Nav.Link> </Nav.Item>
             {/* <Nav.Item><Nav.Link eventKey="venus" >Venus</Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link eventKey="earth">Earth</Nav.Link> </Nav.Item>
             <Nav.Item><Nav.Link eventKey="mars">Mars</Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link eventKey="jupiter">Jupiter</Nav.Link> </Nav.Item>
             <Nav.Item><Nav.Link eventKey="saturn">Saturn</Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link eventKey="uranus">Uranus</Nav.Link> </Nav.Item>
             <Nav.Item><Nav.Link eventKey="neptune">Neptune</Nav.Link></Nav.Item> */}
              {planetData.map((planet, index) => (
              <Nav.Item  key={index}>
                <Nav.Link eventKey={planet.name}>{planet.name}</Nav.Link>
              </Nav.Item>
            ))}
            </div>
            <div className='menu mobile'>
              <button onClick={handleClick} className=''>
                  {!menu ? <img src='/img/Group.svg' alt='open main menu' /> : <img src='/img/icon-hamburger.svg' alt='close main menu' />}
               </button>
            </div>
          </Nav>

          <Tab.Content>
              {planetData.map((planet, index) => (
            <React.Fragment key={index}>
            <Tab.Pane eventKey={planet.name} className='grid planetimgs'>
               <Carousel slide={false} className='mercuryslider'>
                <Carousel.Item className='sliderimgcontainer'>
                 <img  className="carouselimg" src={planet.images[0].src} alt="First slide"/>
              </Carousel.Item>
               <Carousel.Item>
                 <img className="carouselimg" src={planet.images[1].src} alt="Second "/>
                </Carousel.Item>
              <Carousel.Item>
                <img  className="carouselimg" src={planet.images[0].src}  alt="First slide"/>
                <Carousel.Caption>
                   <img className="" src={planet.captionImage}  alt="Third slide" />
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </Tab.Pane>
            <Tab.Pane eventKey={planet.name} className='grid sliderinfo'>
              <div>
                  <span>Mercury</span>
                  <p>{planet.description}</p>
                  {/* <p>Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.</p> */}
                  <p>Source : Wikipedia </p>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey={planet.name} className='grid planetfacts'>
                {planet.facts.map((fact, idx) => (
                  <div key={idx}>
                    <span>{fact.label}</span>
                    <p>{fact.value}</p>
                  </div>
                ))}
              </Tab.Pane>

          </React.Fragment>
          ))}
          </Tab.Content>
       </Tab.Container>
    </main>
  )
}

export default App
