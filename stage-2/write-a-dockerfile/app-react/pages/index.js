import "bootstrap/dist/css/bootstrap.css";
import Splash from "../components/splash";

import { colours, fonts } from "../styles";

export default function Home( ) {
 

  return (
    <div className="container">
      <main>
        <Splash />

      </main>

      <style jsx global>{`
        html,
        body,
        main {
          height: 100%;
          width: 100%;
          padding: 0;
          margin: 0;
          font-family: "Proxima Nova";
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        .title {
          ${fonts.subHeading.full}
          color: ${colours.white};
          text-align: center;
          padding: 50px;
        }

        .container {
          padding: 0;
          margin: auto;
          min-height: 100vh;
          max-width: 1600px;
          background: ${colours.black};
          alight-items: center;
          position: relative;
          z-index: 1;
        }

        .elipse2 {
          float: left;
          max-width: 300px;
          width: 50vw;
          max-width: 300px;
          min-width: 200px;
          position: absolute;
          top: 70rem;
          z-index: 0;
          opacity: 0.5;
        }

        .elipse4 {
          float: right;
          max-width: 600px;
          width: 30vw;
          top: 155rem;
          z-index: 0;
          opacity: 0.8;
          position: absolute;
          right: 0;
        }

        @media screen and (max-width: 1200px) {
          .circle {
            height: 500px;
            width: 500px;
            margin-left: 50vw;
          }

          .arc {
            width: 600px;
            height: 600px;
            margin-top: -25px;
            margin-left: 45vw;
            border: 6px solid ${colours.dark2};
          }

          .arc2 {
            width: 700px;
            height: 700px;
            margin-left: 40vw;
            margin-top: -70px;
          }
        }

        @media screen and (max-width: 800px) {
          .circle {
            height: 350px;
            width: 350px;
            margin-top: 20px;
            margin-left: 33vw;
          }

          .arc {
            width: 400px;
            height: 400px;
            margin-top: 0px;
            margin-left: 30vw;
          }

          .arc2 {
            width: 450px;
            height: 450px;
            margin-left: 26vw;
            margin-top: -25px;
          }

          .elipse2 {
            display: none;
          }

          .elipse4 {
            display: none;
          }
        }

        @media screen and (max-width: 600px) {
          .circle {
            height: 300px;
            width: 300px;
            margin-top: 25px;
            margin-left: 27vw;
          }

          .arc {
            width: 350px;
            height: 350px;
            margin-top: 0px;
            margin-left: 23vw;
          }

          .arc2 {
            width: 400px;
            height: 400px;
            margin-left: 19vw;
            margin-top: -25px;
          }

        } 
        

        @media screen and (max-width: 400px) {
          .circle {
            margin-left: 3vw;
          }

          .arc {
            margin-left: -3vw;
          }

          .arc2 {
            margin-left: -10vw;
            margin-top: -25px;
          }
        }
      `}</style>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
    },
    revalidate: 10,
  };
};
