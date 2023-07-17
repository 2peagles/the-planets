import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import './App.css';

function App() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);

  return (
    <main className='app'>
      <Tab.Container defaultActiveKey='Mercury'>
        <Nav>
          <button id='logo'>
            <Nav.Link>the planets</Nav.Link>
          </button>
          <div className={!menu ? 'hidden' : 'visible'}>
            {data.map((planet, index) => (
              <button key={index}>
                <Nav.Link eventKey={planet.name}>{planet.name}</Nav.Link>
              </button>
            ))}
          </div>
          <div className='menu mobile'>
            <button onClick={handleClick} className='menubtn'>
              {!menu ? (
                <img src='/img/Group.svg' alt='open main menu' />
              ) : (
                <img src='/img/icon-hamburger.svg' alt='close main menu' />
              )}
            </button>
          </div>
        </Nav>

        <Tab.Content>
          {data.map((planet, index) => (
            <React.Fragment key={index}>
              {(() => {
                const [selectedButton, setSelectedButton] = useState(1);
                const [selectedImage, setSelectedImage] = useState(planet.images.planet);

                const handleButtonClick = (buttonNumber, newImage) => {
                  setSelectedButton(buttonNumber);
                  setSelectedImage(newImage);
                };

                return (
                  <>
                    <Tab.Pane eventKey={planet.name} className='planetslider'>
                      <div>
                        <div key={planet.name}>
                          <img src={selectedImage} alt='Planet' className='visibleimg' />
                          <img src={selectedImage} alt='Internal Structure' />
                          <img src={selectedImage} alt='Geology' />
                        </div>
                      </div>
                      <div className='planetinfo'>
                        <div>
                          <h1>{planet.name}</h1>
                          {selectedButton === 1 && <p>{planet.overview.content}</p>}
                          {selectedButton === 2 && <p>{planet.structure.content}</p>}
                          {selectedButton === 3 && <p>{planet.geology.content}</p>}

                           {selectedButton === 1 && <a href={planet.overview.source} target="_blank"  rel="noreferrer" > <img src='/assets/icon-source.svg' alt='overview' /></a>}
                          {selectedButton === 2 && <a href={planet.structure.source}  target="_blank"  rel="noreferrer" > <img src='/assets/icon-source.svg' alt='overview' /></a>}
                          {selectedButton === 3 && <a href={planet.geology.source} target="_blank" rel="noreferrer">  <img src='/assets/icon-source.svg' alt='overview' /></a>}
                        </div>
                        <button
                          onClick={() => handleButtonClick(1, planet.images.planet)}
                          className='menubtn'
                        >
                          <span>01</span> OVERVIEW
                        </button>
                        <button
                          onClick={() => handleButtonClick(2, planet.images.internal)}
                          className='menubtn'
                        >
                          <span>02</span> Internal Structure
                        </button>
                        <button
                          onClick={() => handleButtonClick(3, planet.images.geology)}
                          className='menubtn'
                        >
                          <span>03</span> Surface Geology
                        </button>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey={planet.name} className='planetfacts'>
                      <div>
                        <span>rotation</span>
                        <p>{planet.rotation}</p>
                      </div>
                      <div>
                        <span>revolution</span>
                        <p>{planet.revolution}</p>
                      </div>
                      <div>
                        <span>radius</span>
                        <p>{planet.radius}</p>
                      </div>
                      <div>
                        <span>temperature</span>
                        <p>{planet.temperature}</p>
                      </div>
                    </Tab.Pane>
                  </>
                );
              })()}
            </React.Fragment>
          ))}
        </Tab.Content>
      </Tab.Container>
    </main>
  );
}

export default App;
