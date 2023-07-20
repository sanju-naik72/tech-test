import React, { Component, useState } from "react";
import Link from "next/link";
import { colours, fonts } from "../styles";

const widthSizeChange = 800;

export default class NavBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = { nav: 'navLink', navContainer: 'navLinks', hamburger:'hamburgerMenu', bar1: 'bar1', bar2: 'bar2', bar3: 'bar3'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        if (this.state.nav == 'navLink' & window.innerWidth <= widthSizeChange ) {
            this.setState({ nav: 'navLinkVisible', navContainer: 'navLinksVisible', hamburger:'hamburgerMenuClicked', bar1: 'change bar1', bar2: 'change bar2', bar3: 'change bar3' })
        } else {
            this.setState({nav: 'navLink', navContainer: 'navLinks', hamburger:'hamburgerMenu', bar1: 'bar1', bar2: 'bar2', bar3: 'bar3'})
        }
    }

  render() {
    return (
      <div className="navContainer">
        <div className="navBar">
          <a className="logo-wrapper" href="/">
            <img className="logo" src="../logo.svg" />
          </a>
          

          <h3 className="logo-strapline">Home of the QCE</h3>

        </div>
       
        <style jsx>{`

                    .navContainer {
                      background-color: ${colours.black};
                      height: 105px;
                      width: 100vw;
                      position: fixed;
                      z-index: 100;
                      padding-top: 20px;
                    }

                    .navLinkText {
                        color: ${colours.white};
                        text-decoration: none;
                        height: 100%;
                        width: 100%;
                    }

                    .logo-strapline {
                        color: ${colours.white};
                        ${fonts.logoStrapLine.full}
                        letter-spacing: 3px;
                        text-decoration: none;
                        padding-left: 75px;
                        padding-top: 0px;
                    }

                    .logo-wrapper {
                        text-decoration: none;
                    }

                    .link {
                        text-decoration: none;
                    }

                    .navBar {
                        padding: 15px 25px 10px 25px;
                        font-family: 'Proxima Nova';
                        max-width: 1650px;
                        margin: auto;
                        margin-bottom: 85px;
                    }

                    .logo {
                        height: 43px;
                        width: 235px;
                        margin-top: -5px;
                        margin-left: 20px;
                        display: inline;
                    }

                    
                    .navButton {
                        ${fonts.navButton.full}
                        position: inline;
                        background: ${colours.primary};
                        border: ${colours.primary};
                        color: ${colours.black};
                        height: 45px;
                        width: 170px;
                        margin-right: 0px;
                        margin-left: 30px;
                        border-radius: 4px;
                    }
                    
                    .navButton:hover {
                        background: ${colours.black};
                        border: 2px solid ${colours.primary};
                        color: ${colours.primary};
                    }

                    .navLinkVisible, .navLink {
                        color: ${colours.white};
                        ${fonts.navButton.full}
                        display: inline;
                        margin-right: 30x;
                        margin-left: 30px;
                        height: 50px;
                    }

                    .navLinkVisible:hover, .navLink:hover {
                        border-bottom: 3px solid;
                        border-color: ${colours.alternative};
                        padding-bottom: 8px; 
                    }

                    .navLinks {
                        display: inline;
                        float: right;
                        background: ${colours.black};
                        margin: 0;
                        padding 0;
                    }

                    @media screen and (max-width: 1000px) {
                       
                        .logo {
                            height: 30px;
                            width: 164px;
                            margin-top: 0px;
                            margin-left: 0px;
                        }

                        .logo-strapline {
                          ${fonts.logoStrapLine.mobile}
                            letter-spacing: 2px;
                            padding-left: 36px;
                        }

                        .navLinks {
                            margin-top: 5px;
                        }

                        .navLink {
                          margin-left: 20px;
                        }

                        .navButton {
                            position: inline;
                            height: 35px;
                            width: 130px;
                        }
                    }


                     @media screen and (max-width: ${widthSizeChange}px) {

                        .logo {
                            margin-bottom: 25px;
                        }

                        .logo-strapline {
                            position: relative;
                            margin-top: -25px;
                            width: 70%;
                        }

                        .navBar {
                            padding: 20px 25px 5px 25px;
                        }

                        .navLinkText {
                            padding: 10px 120px 20px 10px;
                        }
                        
                        .hamburgerMenu {
                            display: inline-block;
                            background: ${colours.black};
                            // border: 2px solid ${colours.primary};
                            border-radius: 4px;
                            padding: 4px 8px 4px 8px;
                            position: relative;
                            z-index: 11;
                            float: right;
                            right: 0;
                            margin-top: -50px;
                        }

                        .hamburgerMenu:active {
                            border: none;
                        }

                        .hamburgerMenuClicked {
                            display: inline-block;
                            padding: 4px 8px 4px 8px;
                            position: absolute;
                            top: 22px;
                            z-index: 11;
                            right: 0;
                            margin-right: 25px;
                        }

                        .bar1, .bar2, .bar3 {
                            width: 30px;
                            height: 2px;
                            background-color: ${colours.white};
                            margin: 5px 0;
                            transition: 0.4s;
                        }

                        .change.bar1 {
                            webkit-transform: rotate(-45deg) translate(-2x, 5px);
                            transform: rotate(-45deg) translate(-2px, 5px);
                            background-color: ${colours.white};
                        }
                        
                        .change.bar2 {
                            opacity: 0;
                        }
                        
                        .change.bar3 {
                            webkit-transform: rotate(45deg) translate(-5px, -8px);
                            transform: rotate(45deg) translate(-5px, -8px);
                            background-color: ${colours.white};
                        }

                        .navLinks {
                            display: none;
                        }
                        
                        .navLinkText {
                          ${fonts.navButton.mobile}

                            font: inherit;
                            margin: 0;
                            padding: 0;
                        }

                        .navLinksVisible {
                            display: inherit;
                            background: ${colours.black};
                            // background-image: url("../background/elipse2.svg"), url("../background/elipse3.svg");
                            background-image: url("../background/elipse3.svg");
                            background-repeat: no-repeat;
                            // background-position: 0% -10%, 100% 130%;
                            background-position: 100% 130%;
                            // background-size: 30vh, 40vh;
                            background-size: 40vh;
                            position: absolute;
                            z-index: 10;
                            float: right;
                            right: 0;
                            top: 0;
                            height: 100vh;
                            width: 100vw;
                            padding-top: 80px;
                            margin-top: 0px;
                        }

                        .navLink {
                            visibility: hidden;
                        }

                        .buttonText {
                            text-decoration: none;
                        }

                        .navLinkVisible, .navButton {
                            color: ${colours.white};
                            display: block;
                            ${fonts.mainHeading.mobile}
                            text-align: center;
                            margin-top: 10px;
                            margin-bottom: 10px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                            padding-left: 0;
                            margin-left: 0;
                        }

                        .navButton {
                          background: none;
                          text-decoration: none;
                          border: none;
                          width: 160px;
                          margin: auto;
                          margin-bottom: 10px;
                          height: 50px;
                          padding-right: 0px;
                      }
    
                        .navButton:hover, .navLinkVisible:hover, .navLink:hover, .navLinkText:hover {
                            border: none;
                            text-decoration: none;
                            background: none;
                            padding-bottom: 8px; 
                        }

                        .navButton:hover, .navLinkText:hover  {
                            color: ${colours.white};
                            border-bottom: 3px solid ${colours.alternative};  
                        }

                        .navButton:hover {
                          border-spacing: 15px;
                        }

                    }
                
                `}</style>
      </div>
    );
  }
}
