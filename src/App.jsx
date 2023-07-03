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
        <Tab.Container  defaultActiveKey='Mercury'>
          <Nav>
            <Nav.Item id='logo'> <Nav.Link>the planets</Nav.Link></Nav.Item>
            <div className={!menu ? 'hidden' : 'visible'}>

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
            <Tab.Pane eventKey={planet.name} className=' planetimgs'>
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
            <Tab.Pane eventKey={planet.name} className='sliderinfo'>
              <div>
                  <span>{planet.name}</span>
                  <p>{planet.description}</p>
                  <p>Source: Wikipedia <img src='/img/icon-source.svg' alt='wikipedia site'/></p>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey={planet.name} className='planetfacts'>
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
