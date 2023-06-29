import React, {useState} from 'react';
import {Nav,Tab}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
 const[menu, setMenu]=useState(false);
  const handleClick = () =>setMenu(!menu);
  return (
    <main className='app'>
        <Tab.Container  defaultActiveKey='first'>
          <Nav>
            <Nav.Item> <Nav.Link>the planets</Nav.Link></Nav.Item>
             <Nav.Item ><Nav.Link eventKey="home" className={!menu ? 'hidden' : 'visible'}>Mercury</Nav.Link> </Nav.Item>
             <Nav.Item><Nav.Link eventKey="venus" className={!menu ? 'hidden' : 'visible'}>Venus</Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link eventKey="earth"className={!menu ? 'hidden' : 'visible'}>Earth</Nav.Link> </Nav.Item>
             <Nav.Item><Nav.Link eventKey="mars"className={!menu ? 'hidden' : 'visible'}>Mars</Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link eventKey="jupiter"className={!menu ? 'hidden' : 'visible'}>Jupiter</Nav.Link> </Nav.Item>
             <Nav.Item><Nav.Link eventKey="saturn"className={!menu ? 'hidden' : 'visible'}>Saturn</Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link eventKey="uranus"className={!menu ? 'hidden' : 'visible'}>Uranus</Nav.Link> </Nav.Item>
             <Nav.Item><Nav.Link eventKey="neptune" className={!menu ? 'hidden' : 'visible'}>Neptune</Nav.Link></Nav.Item>
            <div className='menu mobile'>
              <button onClick={handleClick} className=''>
                  {!menu ? <img src='/img/icon-hamburger.svg' alt='open main menu' /> : <img src='/img/icon-source.svg' alt='close main menu' />}
               </button>
            </div>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey='home' className='grid planetimgs'>planet img  </Tab.Pane>
            <Tab.Pane eventKey='home' className='grid secondarynav'>planet nav</Tab.Pane>
            <Tab.Pane eventKey='home' className='grid planetfacts'>
              <div>
                <span>ROTATION TIME</span>
                <p>58.6 days</p>
              </div>
              <div>
                <span>ROTATION TIME</span>
                <p>58.6 days</p>
              </div>
              <div>
                <span>ROTATION TIME</span>
                <p>58.6 days</p>
              </div>
              <div>
                <span>ROTATION TIME</span>
                <p>58.6 days</p>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey='venus' className='grid planetimgs'>planet img v</Tab.Pane>
            <Tab.Pane eventKey='venus' className='grid secondarynav'>planet nav</Tab.Pane>
            <Tab.Pane eventKey='venus' className='grid planetfacts'>planet facts</Tab.Pane>

               <Tab.Pane eventKey='earth' className='grid planetimgs'>planet img v</Tab.Pane>
            <Tab.Pane eventKey='earth' className='grid secondarynav'>planet nav</Tab.Pane>
            <Tab.Pane eventKey='earth' className='grid planetfacts'>planet facts</Tab.Pane>

               <Tab.Pane eventKey='mars' className='grid planetimgs'>planet img v</Tab.Pane>
            <Tab.Pane eventKey='mars' className='grid secondarynav'>planet nav</Tab.Pane>
            <Tab.Pane eventKey='mars' className='grid planetfacts'>planet facts</Tab.Pane>

               <Tab.Pane eventKey='jupiter' className='grid planetimgs'>planet img v</Tab.Pane>
            <Tab.Pane eventKey='jupiter' className='grid secondarynav'>planet nav</Tab.Pane>
            <Tab.Pane eventKey='jupiter' className='grid planetfacts'>planet facts</Tab.Pane>

               <Tab.Pane eventKey='saturn' className='grid planetimgs'>planet img v</Tab.Pane>
            <Tab.Pane eventKey='saturn' className='grid secondarynav'>planet nav</Tab.Pane>
            <Tab.Pane eventKey='saturn' className='grid planetfacts'>planet facts</Tab.Pane>

               <Tab.Pane eventKey='uranus' className='grid planetimgs'>planet img v</Tab.Pane>
            <Tab.Pane eventKey='uranus' className='grid secondarynav'>planet nav</Tab.Pane>
            <Tab.Pane eventKey='uranus' className='grid planetfacts'>planet facts</Tab.Pane>

               <Tab.Pane eventKey='neptune' className='grid planetimgs'>planet img v</Tab.Pane>
            <Tab.Pane eventKey='neptune' className='grid secondarynav'>planet nav</Tab.Pane>
            <Tab.Pane eventKey='neptune' className='grid planetfacts'>planet facts</Tab.Pane>
          </Tab.Content>
       </Tab.Container>
    </main>
  )
}

export default App
