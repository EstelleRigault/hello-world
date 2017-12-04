import React from "react";
import Link from "gatsby-link";

import AvocadoSVG from "./svg/AvocadoSVG";
import HelloSVG from "./svg/HelloSVG";

const IndexPage = () => (
  <div className="genesis containment-policy">
    <section className="signature-dish">
      <div className="flex-flex-baby">
        <div className="entitled">
          <h1 className="you-had-me-at">
            <HelloSVG />
          </h1>
          <p className="subliminal-message">
            Get the freshest insider crypto trading tips and portfolio recipes
          </p>
        </div>
        <div className="tupperware-container">
          <AvocadoSVG />
        </div>
      </div>
    </section>
    <section className="pushing-all-my-buttons-baby">
      <p className="use-by-date">
        Start your Tuesday and Thursday mornings with a message from your
        favourite avocado.
      </p>
      <div className="button lets-be-friends">Facebook button</div>
      <p className="interesting-quip">
        Running machines that run machines costs money and something something
        millenials side of avo $3:
      </p>
      <div className="button magic-internet-money-button">
        Read a tip, give a tip
      </div>
    </section>
    <footer className="footer-the-door">
      <p className="famous-last-words">
        Made with code in a dark room on my own.
      </p>
    </footer>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
);

export default IndexPage;
