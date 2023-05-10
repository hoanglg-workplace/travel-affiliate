import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="About_wrapeer">
      <section class="about">
        <div class="main">
          {/* <img src={avt} alt="My Photo" /> */}
          <div class="abt-text">
            <h1>
              About <span>Us</span>
            </h1>
            <p>
              Travel Affiliate is a travel website project developed by Lý Gia
              Hoàng.
            </p>
            <a
              href="https://www.facebook.com/hoanglg.work"
              class="connectbtn"
              target="_blank"
              rel="noreferrer"
            >
              Connect with me!
            </a>

            <div class="connect-section">
              <div class="social-icons">
                <a
                  href="https://www.facebook.com/hoanglg.work"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/hoanglg.work/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/hoanglg-work/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://github.com/hoanglg-workplace"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
