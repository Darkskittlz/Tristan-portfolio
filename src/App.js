import './Styles/App.css';
import React from 'react';
import Layout from './components/layouts/article';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Homepage from './components/Homepage';
import Navbar from './components/navbar';
import Works from './components/Works';
import Posts from './components/Posts';
import BlogPost from './components/posts/Blog1';
import BlogPost2 from './components/posts/Blog2';
import BlogPost3 from './components/posts/Blog3';
import APMusic from './components/works/APMusic';
import Backgrounds from './components/works/Backgrounds';
import Bandingo from './components/works/Bandingo';
import Collab from './components/works/Collab';
import DarkMeowFi from './components/works/DarkMeowFi';
import DarkMeowShop from './components/works/DarkMeowShop';
import ECommerce from './components/works/ECommerce';
import EmberJS from './components/works/Ember';
import Lofi from './components/works/Lofi';
import MatiasSanes from './components/works/MatiasSanes';
import SPAPortfolio from './components/works/SPAPortfolio'; 
import ThreejsPortfolio from './components/works/ThreejsPortfolio'; 
import Tutorials from './components/Tutorials';
import Youtube from './components/tutorials/Youtube';
import Wednesday from './components/works/Wednesday';
import UkraineMap from './components/works/UkraineMap';
import WeatherApp from './components/works/WeatherApp';
import Vue from './components/works/Vue';
import ModelPortfolio from './components/works/ModelPortfolio';
import Galaxy from './components/works/Galaxy';
import Starboard from './components/works/Starboard';


const NavContainer = styled.div`
    width: 100%;
    justify-content: center;
    z-index: 2;
    
    @media (max-width: 960px){
        width: 50%;
        margin-left: 12%;
        z-index: 2;
        position: relative;
    }
`

const App = ({ Component, pageProps, router }) => {
  return (
      <div className="app">
          <div className='main'>
                <Layout>
                <NavContainer>
                    <Navbar />
                </NavContainer>
                  <div className='routes'>
                      <Routes>
                        <Route path='/' element={<Homepage />} />                            
                        <Route path='/Works' element={<Works />} />                            
                        <Route path='/Works/APMusic' element={<APMusic />} />                            
                        <Route path='/Works/Backgrounds' element={<Backgrounds />} />                            
                        <Route path='/Works/Bandingo' element={<Bandingo />} />                            
                        <Route path='/Works/Collab' element={<Collab />} />                            
                        <Route path='/Works/DarkMeowFi' element={<DarkMeowFi />} />                            
                        <Route path='/Works/DarkMeowShop' element={<DarkMeowShop />} />                            
                        <Route path='/Works/ECommerce' element={<ECommerce />} />                            
                        <Route path='/Works/Ember' element={<EmberJS />} />                            
                        <Route path='/Works/Galaxy' element={<Galaxy />} />                            
                        <Route path='/Works/Lofi' element={<Lofi />} />                            
                        <Route path='/Works/MatiasSanes' element={<MatiasSanes />} />                            
                        <Route path='/Works/ModelPortfolio' element={<ModelPortfolio />} />                            
                        <Route path='/Works/SPAPortfolio' element={<SPAPortfolio />} />                            
                        <Route path='/Works/Starboard' element={<Starboard />} />                            
                        <Route path='/Works/ThreejsPortfolio' element={<ThreejsPortfolio />} />                            
                        <Route path='/Works/UkraineMap' element={<UkraineMap />} />                            
                        <Route path='/Works/Vue' element={<Vue />} />                            
                        <Route path='/Works/Wednesday' element={<Wednesday />} />                            
                        <Route path='/Works/WeatherApp' element={<WeatherApp />} />                            
                        <Route path='/Posts' element={<Posts />} />                            
                        <Route path='/Posts/Blog1' element={<BlogPost />} />                            
                        <Route path='/Posts/Blog2' element={<BlogPost2 />} />    
                        <Route path='/Posts/Blog3' element={<BlogPost3 />} />    
                        <Route path='/Tutorials' element={<Tutorials />} />                       
                        <Route path='/Tutorials/Youtube' element={<Youtube />} />                        
                      </Routes>                       
                  </div>
              </Layout>
          </div>
      </div>
  )
}

export default App;
