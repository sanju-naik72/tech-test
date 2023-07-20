import "../global.css";
import React from "react";
import Layout from "../components/layout";
import { colours } from "../styles";

export default (props) => {
  const { Component, pageProps } = props;

  return (
    <div className="background">
        <a className="skip-link" href="#main">
        Skip To Content
      </a>
      <Layout >
        <Component {...pageProps} />
      </Layout>
      <style jsx>{`
        html,
        main body a {
          padding: 0;
          margin: 0;
          font-family: "Proxima Nova", sans-serif;
          overflow-x: hidden;
        }

        main {
          max-width: 1000px;
        }

        .skip-link {
          left:-999px;
          position:absolute;
          top:auto;
          width:1px;
          height:1px;
          overflow:hidden;
          z-index:-999;
      }
      .skip-link:focus, .skip-link:active {
          color:${colours.primary};
          background-color:${colours.black};
          left: auto;
          top: auto;
          width: 30%;
          height: auto;
          overflow:auto;
          margin: 10px 35%;
          padding:5px;
          border-radius: 15px;
          border:4px solid ${colours.alternative};
          text-align:center;
          font-size:1.2em;
          z-index:999;
      }

        .background {
          background: ${colours.black};
        }
      `}</style>
    </div>
  );
};


