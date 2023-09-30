import React from "react";
import * as types from '@/lib/types'
import { NotionPage } from "./NotionPage";
import { ContactFooter } from "./ContactFooter";

export const Wrapper: React.FC<types.PageProps> = (props) => {
  return (
    <div className="wrapper">
      <section id="Home" className="section wf-section">
        <div className="container w-container">
          <div className="w-layout-grid hero-grid">
            <div
              id="w-node-_4b16c07c-3c9f-a696-e117-df67aa9a0c58-3018ec44"
              className="hero-content"
            >
              <h1 className="hero-title">
                I'm Shuaijie <br />
                Li.
              </h1>
              <h5 className="hero-subtitle">
                A developer | designer | lifelong-learner.
              </h5>
              <a href="#footer" className="button w-button">
                Get in touch
              </a>
            </div>
            <div
              id="w-node-_610674c9-3b5d-09c2-160e-23020a125d05-3018ec44"
              className="hero-image-wrapper"
            >
              <img
                src="/about.svg"
                loading="eager"
                alt="Profile"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="wf-section">
        <div className="container w-container">
          <div className="divider" />
        </div>
      </div>
      <div id="Blog" className="section wf-section">
        <div className="container w-container">
          <div className="title-wrapper">
            <h3>Projects | Blog.</h3>
          </div>
          <NotionPage {...props} />

        </div>
      </div>
      <div className="wf-section">
        <div className="container w-container">
          <div className="divider" />
        </div>
      </div>
      <section id="Profile" className="section wf-section">
        <div className="container w-container">
          <div className="title-wrapper">
            <h3>Profile.</h3>
          </div>
          <div className="w-layout-grid about-grid">
            <div className="about-image-wrapper">
              <img
                src="/about.svg"
                loading="eager"
                alt="Profile"
                className="about-image"
              />
            </div>
            <div
              id="w-node-_04351288-5bc5-8015-58d4-32f71c94ea25-3018ec44"
              className="about-content"
            >
              <h5 className="about-title">Shuaijie Li</h5>
              <p className="about-content">
                Hi, I'm thrilled to introduce myself to you as a passionate CS
                student with a deep appreciation for the potential of
                technology. I began my journey into CS as a graduate student
                at UW-Madison. <br />
                <br />
                Through my experiences in research and collaborative projects,
                I have developed a passion for technology and a determination
                to continuously challenge myself. Ultimately, I aspire to
                become a full-stack engineer and create tools to enhance human
                capabilities and foster a harmonious relationship between
                people and the physical world.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="wf-section">
        <div className="container w-container">
          <div className="divider" />
        </div>
      </div>
      <section id="Resume" className="section wf-section">
        <div className="container w-container">
          <div className="w-layout-grid experience-grid">
            <div
              id="w-node-_2526f841-579c-b339-8fa8-fbe81b978f64-3018ec44"
              className="award-lists"
            >
              <div className="title-wrapper">
                <h3>Education.</h3>
              </div>
              <div className="award-item">
                <div className="award-title-wrapper">
                  <img
                    src="/webclip.png"
                    loading="lazy"
                    alt="a"
                    className="award-trophy"
                  />
                  <h6 className="award-title">
                    <strong>University of Wisconsin - Madison</strong>
                  </h6>
                </div>
                <p>
                  <em>Master of Science in Computer Sciences</em>
                </p>
              </div>
              <div className="award-item">
                <div className="award-title-wrapper">
                  <img
                    src="/webclip.png"
                    loading="lazy"
                    alt="a"
                    className="award-trophy"
                  />
                  <h6 className="award-title">
                    <strong>Southeast University</strong>
                  </h6>
                </div>
                <p>
                  <em>Bachelor of Architecture</em>
                </p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="title-wrapper">
              <h3>Skills.</h3>
            </div>
            <p className="skill-content">
              Software: Adobe Suite,  AutoCAD, Figma, Rhino, C4D, Unity 3D
              <br />
              Programming: C, C++, C#, Java, JavaScript, Python, Processing,
              SQL
            </p>
          </div>
        </div>
      </section>
      <div className="wf-section">
        <div className="container w-container">
          <div className="divider" />
        </div>
      </div>

      <ContactFooter />

    </div>
  );
}
