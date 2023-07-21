import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { colours, fonts } from "../styles";
import { CustomButton } from "./button";

const MainBanner = ({
  image,
  feeder,
  title,
  text,
  buttonText,
  buttonLink,
  background = colours.black,
  isButtonInversed,
  isBannerBackgroundVisible,
  minHeight,
  titleLarge,
  bannerStyle,
  smallImage,
  arrow,
}) => {
  return (
    <div id="main" tabIndex="-1" >
      {image && <img className={`banner-image ${bannerStyle}`} src={image} />}
      {smallImage && <img className={`banner-image-small ${bannerStyle ? bannerStyle : ''}`} src={smallImage} />}
      <div className={`banner ${bannerStyle ? bannerStyle : ''}`}>
        <div className="bannerText">
          <h4 className="feeder">&#8212;&#160; {feeder}</h4>
          <h1 className={`bannerHeader ${titleLarge ? 'titleLarge' : ''}`}>{title}</h1>
          <p className="bannerBody">{text}</p>
          {buttonText && (
              <div className={`buttonWrapper ${bannerStyle ? bannerStyle : ''}`}>
                <CustomButton
                    link={buttonLink}
                    style={isButtonInversed ? 'inverse' : 'primary'}
                    text={buttonText}
                    arrow={arrow}
                />
              </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .banner-image {
          float: right;
          position: absolute;
          right: 0;
          width: 40vw;
          max-width: 650px;
          min-width: 200px;
          padding-top: 50px;
          max-height: 700px;
          margin-right: 25px;
        }

        .banner-image.story {
          height: 600px;
          margin-top: 50px;
        }

        .banner-image.services {
          width: 550px;
          padding-top: 120px;
        }

        .banner-image.insights {
          margin-right: 0;
          margin-top: 50px;
          height: 500px;
        }

        .banner-image.join {
          width: 600px; 
          max-width: 700px;
          max-height: 800px;
        }

        .banner-image-small {
          display: none;
        }

        .banner {
          ${isBannerBackgroundVisible &&
          `
            background-image: url("../backgroundBranch.svg");
            background-repeat: no-repeat;
            background-position: -55px 70px;
            `}

          background-color: ${background};
          color: ${colours.white};
          padding: 50px;
          padding-top: 85px;
          min-height: ${minHeight || '270px'};
        }

        .feeder {
          color: ${colours.secondary};
          ${fonts.paragraphText.full}

          letter-spacing: 4px;
          padding-top: 40px;
        }

        .bannerText {
          margin-left: 50px;
          position: relative;
          z-index: 2;
        }

        .bannerHeader {
          ${fonts.banner.full}
          max-width: 650px;
        }

        .titleLarge {
          ${fonts.banner.large}
        }

        .bannerBody {
          ${fonts.paragraphTextLight.full}
          color: ${colours.light};
          max-width: 50%;
        }
         
        .buttonWrapper {
          padding-top: 70px;
          padding-bottom: 30px;
        }

        .buttonWrapper.story {
          padding-bottom: 100px;
          padding-top: 100px;
        }


        @media (max-width: 1200px) {
          .banner {
            max-height: 600px;
          }

          .banner-image.services {
            width: 50vw;
            padding-top: 70px;
          }

          .banner-image.join {
            width: 50vw; 
           
          }

          .bannerHeader {
            max-width: 400px;
            ${fonts.banner.mobile}
          }

          .titleLarge {
            ${fonts.banner.large}
          }

          .bannerBody {
            ${fonts.paragraphTextLight.mobile}
            max-width: 55%;
          }

          .banner.text {
            padding-top: 5%;
          }
        }

        @media (max-width: 800px) {

          .banner {
            padding-left: 25px;
            padding-right: 25px;
          }

          .bannerHeader {
            width: 100%;
          }

          .banner.story {
            height: 700px;
            max-height: 800px;
          }

          .titleLarge {
            ${fonts.banner.full}
          }
          
          .banner-image {
            margin-top: 100px;
            width: 200px;
          }

          .banner-image.services {
            margin-top: 250px;
            width: 400px;
            margin-right: 0;
          }

          .banner-image.insights, .banner-image.story, .banner-image.join {
            display: none;
          }

          .banner-image-small.insights {
            display: block;
            float: right;
            position: absolute;
            right: 0;
            width: 250px;
            max-width: 550px;
            min-width: 200px;
            padding-top: 150px;
            max-height: 600px;
          }

          .banner-image-small.story {
            display: block;
            float: right;
            position: absolute;
            right: 10px;
            width: 250px;
            margin-top: 350px;
          }

          .banner-image-small.join {
            display: block;
            float: right;
            position: absolute;
            right: 10px;
            width: 300px;
            margin-top: 360px;
          }

          .buttonWrapper {
            padding-top: 20px;
            padding-bottom: 30px;
          }

          .buttonWrapper.services {
            padding-bottom: 100px;
          }

          .banner {
            background-image: none;
            min-height: 200px;
          }

          .bannerText {
            margin-left: 0px;
          }

          .bannerBody {
            max-width: 100%;
          }

          .feeder {
            ${fonts.paragraphText.mobile}
          }

          .banner.services {
            min-height: 650px;
          }
        }

        @media (max-width: 500px) {
          .banner-image.services {
            margin-top: 330px;
            width: 300px;
          }

          .buttonWrapper.story {
            padding-top: 35px;
          }

          .banner-image-small.join {
            padding-top: 170px;
            margin-top: 100px;
          }
        }

        @media (max-width: 430px) {
          .banner-image-small.join {
            padding-top: 350px;
          }
        }

        @media (max-width: 400px) {
         
          .inverse {
            width: 100%;
            margin-top: 40px;
          }

          .banner {
            padding: 25px;
            padding-top: 75px;
          }

          .bannerHeader {
            padding-bottom: 15px;
          }

          .bannerBody {
            padding-bottom: 0px;
            max-width: 100%;
          }

          .banner-image.services {
            margin-top: 380px;
            // width: 300px;
          }

          .banner.services {
            min-height: 700px;
          }

          .buttonWrapper.story {
            padding-top: 40px;
          }
          
        }

        @media (max-width: 350px) {
          
          .banner-image.services {
            margin-top: 430px;
          }
        }
         
      `}</style>
    </div>
  );
};

export default MainBanner;
