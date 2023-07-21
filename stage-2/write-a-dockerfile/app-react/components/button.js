import Link from "next/link";
import Image from "next/image";
import { colours, fonts } from '../styles.js';

export const CustomButton = ({ link, style, text, arrow }) => (
    <div className="buttonWrapper" id='button'>
        <Link href={link || '#button' } className="buttonLink">
            <button className={`customButton ${style}`}>
                <div className="buttonContent">
                    <p className="buttonText">{text}</p>
                    <div className="buttonArrowWrapper">
                        <Image 
                            src={ arrow == 'down' ? "/arrowDown.svg" : "/arrow.svg" }
                            height="22px" 
                            width="25%" 
                            className="buttonArrow"
                        />
                    </div>
                </div>
            </button>
        </Link>
    <style jsx>{`
        .buttonLink {
            text-decoration: none;
        }
        
        .customButton {
            ${fonts.buttonText.full}
            width: 230px;
            height: 50px;
            border-radius: 4px;
            text-decoration: none;
            color: ${colours.black};
        }

        .buttonContent {
            padding: 9px 10px;
        }

        .buttonArrow {
            float: right:
            display: inline-block;
        }

        .buttonText {
            width: 70%;
            float: left;
            text-align: left;
            color: inherit;
        }

        .buttonArrowWrapper {
            margin-top: 2px;
        }

        /////////// Alternative Button Styling ///////////

        .alternative {
            background: ${colours.alternative};
            border: 2px solid ${colours.dark};
        }

        .alternative:hover {
            background: ${colours.black};
            color: ${colours.alternative};
        }

        .alternative:hover .buttonArrowWrapper {
            filter: invert(98%) sepia(91%) saturate(6202%) hue-rotate(167deg) brightness(97%) contrast(107%);
        }

        ///////////////////////////////////////////////////////



        /////////// Secondary Light Button Styling ///////////

        .secondaryLight {
            background: ${colours.secondaryLight};
            border: 2px solid ${colours.dark};
        }

        .secondaryLight:hover {
            background: ${colours.black};
            color: ${colours.secondaryLight};
        }

        .secondaryLight:hover .buttonArrowWrapper {
            filter: invert(82%) sepia(38%) saturate(467%) hue-rotate(199deg) brightness(102%) contrast(106%);
        }

        ///////////////////////////////////////////////////////

        /////////// Primary Button Styling ///////////
        
        .primary {
            background: ${colours.primary};
            border: 2px solid ${colours.black};
            border-radius: 4px;
            width: 225px;
            height: 50px;
        }

        .primary:hover {
            background: ${colours.dark};
            border-color: ${colours.primary};
            color: ${colours.primary};
        }

        .primary .buttonText {
            width: 80%;
        }

        .primary .buttonContent {
            padding-top: 9px;
        }


        .primary:hover .buttonArrowWrapper {
            filter: invert(77%) sepia(65%) saturate(4192%) hue-rotate(119deg) brightness(101%) contrast(107%);
        }
        
        ///////////////////////////////////////////////////////

        /////////// Primary Center Button Styling ///////////

        .primaryCenter{
            background: ${colours.primary};
            border: 2px solid ${colours.primary};
            width: 305px;
            height: 50px;
        }

        .primaryCenter .buttonText {
            width: 85%;
        }

        .primaryCenter:hover {
            background: ${colours.black};
            color: ${colours.primary};
            border: 2px solid ${colours.primary};
        }

        .primaryCenter:hover .buttonArrowWrapper {
            filter: invert(77%) sepia(65%) saturate(4192%) hue-rotate(119deg) brightness(101%) contrast(107%);
        }

        ///////////////////////////////////////////////////////

        /////////// Primary2 Button Styling ///////////
        
        .primary2 {
            background: ${colours.primary2};
            border: 2px solid ${colours.black};
            width: 190px;
            height: 50px;
        }

        .primary2:hover {
            background: ${colours.dark};
            border-color: ${colours.primary2};
            color: ${colours.primary2};
        }


        .primary2:hover .buttonArrowWrapper {
            filter: brightness(0) saturate(100%) invert(84%) sepia(46%) saturate(401%) hue-rotate(102deg) brightness(97%) contrast(96%);
        }
        
        ///////////////////////////////////////////////////////

        /////////// Inverse Button Styling ///////////
        
        .inverse, .inverse2 {
            background: ${colours.black};
            border: 2px solid ${colours.primary};
            border-radius: 4px;
            color: ${colours.primary};
            width: 175px;
            height: 50px;
        }

        .inverse .buttonArrowWrapper, .inverse2 .buttonArrowWrapper {
            filter: invert(65%) sepia(97%) saturate(1636%) hue-rotate(115deg) brightness(100%) contrast(101%);
        }

        .inverse:hover, .inverse2:hover  {
            background: ${colours.primary};
            border-color: ${colours.black};
            color: ${colours.black};
        }

        .inverse .buttonText, .inverse2 .buttonText  {
            width: 75%;
        }

        .inverse .buttonContent, .inverse2 .buttonContent  {
            padding-top: 9px;
        }

        .inverse:hover .buttonArrowWrapper, .inverse2:hover .buttonArrowWrapper {
            filter: invert(13%) sepia(38%) saturate(364%) hue-rotate(174deg) brightness(88%) contrast(96%);
        }
        
        ///////////////////////////////////////////////////////


        @media screen and (max-width: 1050px) {
            .inverse2 {
                width: 100%;
            }
        }

        @media screen and (max-width: 800px) {

            .customButton {
                ${fonts.buttonText.mobile}
                padding-top: 4px;
            }

            /////////// alternative & primary2 Button Styling ///////////

            .alternative, .primary2 {
                width: 100%;
                margin: auto;
                text-align: center;
                height: 50px;
            }

            .alternative .buttonText, .primary2 .buttonText {
                text-align: center;
                ${fonts.buttonText.mobile}
                
            }


            .alternative .buttonContent, .primary2 .buttonContent {
                padding-left: 20%;
                padding-top: 11px;
            }

            ///////////////////////////////////////////////////////

            /////////// Primary2 Center Button Styling ///////////

            ///////////////////////////////////////////////////////


            /////////// Secondary Light Button Styling ///////////

            .secondaryLight {
                width: 100%;
                margin: auto;
                text-align: center;
            }

            .secondaryLight .buttonText {
                text-align: center;
            }

            .secondaryLight .buttonContent {
                padding-left: 25%;
            }

            ///////////////////////////////////////////////////////

            /////////// Primary Center Button Styling ///////////

            .primaryCenter {
                width: 100%;
            }

            .primaryCenter .buttonText {
                width: 82%;
                ${fonts.buttonText.mobile}
                text-align: center;
                padding-left: 15%;
            }

            .primaryCenter .buttonContent, .primaryCenter:hover .buttonContent {
                padding: 9px 10px;
            }

            ///////////////////////////////////////////////////////

            /////////// Inverse Button Styling ///////////

            .inverse {
                width: 155px;
            }
        
        }

        @media screen and (max-width: 400px) {
        
        }
        

        `}
    </style>
    </div>
)

    