import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div id="personal-pitch">
          <div>
            Julia Jungyoun Kim, a software engineer experienced with : Ruby on
            Rails, Javascript, Java, C, React, Redux, SQL, CSS, and HTML.
          </div>
          <div>
            Creating something new and building something from scratch is what I
            am passionate about. I love to see the whole process and watch how
            it turns out.
          </div>
        </div>
        <div>
          <div>
            <span style={{ color: "#006aff" }}>Skills:</span>{" "}
            <span style={{ fontWeight: "bold" }}>
              Ruby, Rails, React, Redux, JavaScript, Java, C, PostgreSQL,
              MongoDB, Express, SCSS, HTML, AWS, Git{" "}
            </span>
          </div>
        </div>
        <div>
          <div>
            <span style={{ color: "#006aff" }}> What I like : </span> Bowling,
            BoardGame, Cooking, VideoGames, Baseball, Crafting
          </div>
        </div>

        <div>
          check out my other projects:
          <a href="https://weeasel.herokuapp.com/" style={{ color: "#006aff" }}>
            Weeseal <i className="fas fa-palette"></i>
            <i className="fas fa-paint-brush"></i>
          </a>
          <a
            href="https://juliajykim.github.io/TypeTypeRevolution/"
            style={{ color: "#006aff" }}>
            TypeTypeRevolution <i className="far fa-keyboard"></i>
          </a>
        </div>

        <div className="icons">
          <img src={window.logoURL} id="footer-logo" />
          <a href="https://www.linkedin.com/in/julia-kim-350712213/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/juliajykim/ZipHook">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://angel.co/u/juliajykim">
            <i className="fab fa-angellist"></i>{" "}
          </a>
        </div>
      </div>

      <img src={window.footerUrl} className="footer-img" />
    </div>
  );
};

export default Footer;
