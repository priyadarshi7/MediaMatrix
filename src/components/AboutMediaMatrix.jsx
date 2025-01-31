'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import './AboutMediaMatrix.css'; // Import the CSS file

export default function AboutMediaMatrix() {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    AOS.init({ once: true });
  }, []); // Add an empty dependency array to run once on mount

  return (
    <section className="about-us" id="AboutUs" style={{ backgroundColor }}>
      <div className="about-us-content">
        <h1 className="about-us-title" data-aos="fade-up" data-aos-duration="1000">
          ABOUT US
        </h1>
        <div className="about-us-flex">
          <div className="about-us-text" data-aos="fade-up" data-aos-duration="1000">
            <p>
              Media Matrix is a flagship event organized by the Media & IT Cell of IIIT-NR,
              bringing together creative minds and problem solvers across multiple
              disciplines. With a diverse range of tracks such as Ad Making, Cryptic Hunt,
              Turing Test, Debate, eSports, Quiz, Designathon, and Pitching, Media Matrix
              challenges participants to showcase their creativity, communication skills,
              analytical thinking, and technical prowess.
              Whether it's crafting compelling narratives, solving complex puzzles, or designing innovative solutions,
              Media Matrix offers a platform for all.
            </p>
            <p className="about-us-highlight">
              Dive into Media Matrix and experience the intersection of creativity, media,
              and competition!
            </p>
          </div>
          <div className="about-us-logo" data-aos="fade-up" data-aos-duration="1000">
            <div className="image-container">
              <img
                src="src/assets/logo.png"
                alt="Media Matrix Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
