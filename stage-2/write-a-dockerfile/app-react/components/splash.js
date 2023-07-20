import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import { colours } from '../styles';

export default class Splash extends Component {
    render() {

        return (
            <div>
                <div id="main" tabIndex="-1" className="splash" >
                    <img className='elipse3' src="../background/elipse3.svg" />
                    <img src="../splashBackground.svg" className="splashBackground" />
        
                    <div className="splashTextContainer">
                        <h1 className="splashHeader" >Transform Your</h1>
                        <h1 className="splashHeader secondary" >Route To Live</h1>
                        <p className="splashSubheading" >We are an engineering consultancy specialising in Cloud Platforms, Quality Engineering and Developer Experience</p>
                        
                        <a href="/test">
                            <button type="button" className="inverse" >Start The Test &#160;&#160;&#160;&#10132;</button>
                        </a>
                    </div>
                </div>
                
                <style jsx>{`

                a {
                    text-decoration: none;
                }
                
                .splash {
                    position: relative;
                    background: ${colours.black};
                    background-size: cover;
                    padding-top: 85px;
                }

                .splashHeader.secondary {
                    color: ${colours.primary};
                }

                .splashTextContainer {
                    height: 100%;
                    width: 55%;
                    margin-left: 100px;
                    margin-top: 100px;
                    position: relative;
                    z-index: 2;
                    padding: 50px;
                    padding-right: 25px;
                    min-height: 700px;
                }
                
                .splashHeader {
                    position: relative;
                    z-index: 2;
                    font-size: 72px;
                    font-weight: 900;
                    color: ${colours.white};
                    text-align: left;
                }

                .splashSubheading {
                    position: relative;
                    z-index: 2;
                    font-weight: 300;
                    font-size: 18px;
                    max-width: 450px;
                    padding-bottom: 1vw;
                    color: ${colours.light};
                }

                .splashtags {
                    font-size: 18px;
                    position: relative;
                    font-weight: 700;
                    z-index: 2;
                }

                .button, .inverse {
                    font-weight: 500;
                    font-size: 18px;
                    margin-top: 70px;
                    height: 50px;
                    width: 200px;
                    margin-right: 1.5vw;
                    border-radius: 4px;
                    position: relative;
                    z-index: 2;
                }

                .wrapper {
                    display: grid; 
                    grid-template-columns: 250px 6fr;
                    grid-template-rows: 20px 1fr;
                    position: relative;
                    z-index: 1;
                    float: right;
                    right: -30px;
                    padding-top: 30px;
                }
        
                .splashPic {
                    max-height: 800px;
                    float: right;
                    position: absolute;
                    right: 0;
                    width: 40vw;
                    margin-right: 45px;
                }

                .splashPicMobile {
                    display: none;
                }

                .splashBackground {
                    position: absolute;
                    height: 100%;
                    overflow: hidden;
                }


                .elipse3 {
                    position: absolute;
                    right: 0;
                    float: right;
                    margin-top: -120px;
                    max-width: 300px;
                    min-width: 250px;
                    opacity: 0.3;
                  }
        

                .button {
                    background: ${colours.primary};
                    border: ${colours.primary};
                    color: ${colours.black};
                }

                .inverse {
                    background: ${colours.black};
                    border: 2px solid ${colours.primary};
                    color: ${colours.primary};
                }
                
                .button:hover {
                    background: ${colours.black};
                    color: ${colours.primary};
                    border: 2px solid ${colours.primary};
                }
                
                .inverse:hover {
                    background: ${colours.primary};
                    color: ${colours.dark};
                    border: 2px solid ${colours.primary};
                }


                @media screen and (max-width: 1200px) {
                    
                    .splashHeader {
                        font-size: 70px;
                    }

                    .splashBackground {
                        height: 90vw;
                        min-height: 800px;
                    }

                    .splashSubheading, .splashtags {
                        font-size: 18px;
                    }

                    .button, .inverse {
                        font-size: 18px;
                        height: 50px;
                        width: 180px;
                    }

                    .splashTextContainer {
                        width: 60%;
                        margin-left: 25px;
                    }
                    
              
                }

                @media screen and (max-width: 800px) {
                    
                    .splashHeader {
                        font-size: 65px;
                        width: 100%;
                    }

                    .splashBackground {
                        display: none;
                    }

                    .splashTextContainer {
                        width: 100%;
                        margin-left: 25px;
                        height: 550px;
                    }

                    .splashSubheading, .splashtags {
                        font-size: 16px;
                        width: 100%
                    }

                    .button, .inverse {
                        align-items: center;
                    }

                    .wrapper {
                        opacity: 0.4;
                    }

                    .splashPicMobile {
                        display: block;
                        max-height: 700px;
                        float: right;
                        position: absolute;
                        right: 0;
                        width: 40vw;
                        padding-top: 200px;
                        margin-top: 100px;
                        margin-right: 25px;
                    }

                    .splashPic {
                        display: none;
                    }

                 }

                 @media screen and (max-width: 600px) {

                    .splash {
                        height: 700px;
                        overflow: hidden;
                    }
                    
                    .splashHeader {
                        font-size: 44px;
                    }

                    .splashSubheading, .splashtags {
                        font-size: 16px;
                        padding-top: 20px;
                        padding-bottom: 60px;
                    }
                    
                    .splashTextContainer {
                        width: 90%;
                        margin-left: 20px;
                        margin-top: 0px;
                        padding-left: 25px;
                        height: 100px;
                    }

                    .wrapper {
                        float: left;
                        right: 1000px;
                        opacity: 0.2;
                    }

                    .button, .inverse {
                        padding-top: 0px;
                        margin-top: 15px;
                        display: block;
                    }

                    .splashPicMobile {
                        max-height: 550px;
                        min-width: 200px;
                        margin-top: 70px;
                        margin-right: 0;
                        
                    }

                    .elipse3 {
                        right: -100px;
                    }

              
                 }


                 @media screen and (max-width: 400px) {
                  
                    .splashHeader {
                        font-size: 35px;
                    }

                    .splashSubheading, .splashtags {
                        font-size: 16px;
                    }
                   
                    .splashTextContainer {
                        padding: 0px;
                        padding-top: 30px;
                        margin-top: 0px;
                    }

                    .splash {
                        height: 700px;
                    }

               

                    .inverse {
                        display: block;
                    }
                    
                 }


                `}</style>            
            </div>
        );
    }
};
