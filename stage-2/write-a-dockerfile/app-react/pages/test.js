import "bootstrap/dist/css/bootstrap.css";
import { colours, fonts } from "../styles";
import MainBanner from "../components/mainBanner";

const title = "Solve The Challenge";
const feeder = "JOIN US";

export default function Contact() {
  const data = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [23, 50, 63, 90, 10, 30, 155, 23, 18],
    [133, 60, 23, 92, 6, 7, 168, 16, 19],
    [30, 43, 29, 10, 50, 40, 99, 51, 12],
  ];

  return (
    <div className="background">
      <div className="contactPage">
        <main>
          <MainBanner
            feeder={feeder}
            title={title}
            titleLarge={true}
            background={colours.dark}
          />
          <div className="container">
            <div className="description">
              <p>
                Use a browser based testing tool to read the integer table on
                the right and create a data structure.
              </p>
              <p>
                Once you have the data, write a function to go through each row
                and return the index where the sum of integers at the index on
                the left is equal to the sum of integers on the right.
              </p>

              <p>If there is no index return null</p>
              <p>You should avoid reading from the first table row</p>
              <p>For example given the table</p>
              <p>10, 15, 5, 7, 1, 24, 36, 2</p>
              <p>
                index 5 (with the value of 24) would be the center to return
              </p>
              <p>as 10 + 15 + 5 + 7 + 1 = 38 </p>
              <p>and 36 + 2 = 38</p>
            </div>
            <center>
              <div testId="the-table" className="table">
                <table>
                  {data.map((row, i) => (
                    <tr testId={`row-${i}`}>
                      {row.map((cell, i) => (
                        <td testId={`cell-${i}`} key={cell}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </table>
              </div>
            </center>
          </div>
        </main>
        <style jsx>{`
          .* {
            font-family: "Proxima Nova";
          }

          .container {
            display: flex;
          }

          .description {
            margin-left: 10px;
            max-width: 600px;
            padding-right: 50px;
          }

          td,
          tr {
            color: ${colours.white};
            ${fonts.secondaryTitle.full}
          }

          .contactPage {
            padding: 0;
            height: 1500px;
            margin: auto;
            max-width: 1600px;
            alight-items: center;
            position: relative;
            z-index: 1;
            background: ${colours.dark};
          }

          .contactUsContainer {
            background: ${colours.dark};
            margin-top: -50px;
          }

          h1,
          h2,
          h3,
          p {
            color: ${colours.white};
          }

          p {
            ${fonts.paragraphText.full}
            color: ${colours.light};
          }

          .table {
            padding-top: 50px;
            flex: 1;
            padding-bottom: 100px;
            background: ${colours.dark};
          }

          @media screen and (max-width: 1000px) {
            .description {
              min-width: 500px;
            }

            .container {
              display: block;
            }

            .table {
              flex: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
