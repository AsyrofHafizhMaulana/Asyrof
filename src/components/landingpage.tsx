import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Zio from "../assets/Media/Zio.jpeg";
import "../assets/css/landingpage.css";
import DecryptedText from './DecryptedText/DecryptedText';
import GradientText from "./GradientText/GradientText";

const Home: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-text">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="subtitle custom-class"
        >
          Asyrof Hafizh Maulana
        </GradientText>

        <h1 className="typewriter-heading">
          <Typewriter
            words={[
              "Web Developer",
              "UX Designer",
              "Graphic Designer",
              "Cybersecurity",
            ]}
            loop={0}
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={2000}
            cursor={false}
          />
        </h1>

        <p className="description">
          <DecryptedText text="" />

          <DecryptedText
            text=" "
            speed={100}
            maxIterations={20}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />

          <div className="description-wrapper">
            <DecryptedText
              text="Saya adalah profesional multidisiplin dengan keahlian di bidang desain grafis, ilustrasi digital, cybersecurity, dan UI/UX design. Berbekal latar belakang teknik komputer, saya menggabungkan kreativitas dan teknologi untuk menghasilkan solusi yang menarik, aman, dan mudah digunakan"
              animateOn="view"
              revealDirection="center"
            />
          </div>
        </p>

        <div className="stats">
          <span>
            <strong>7</strong> Tahun Pengalaman Sebagai Design Grafis dan Illustrator
          </span>
          <span>
            <strong>5000+</strong> Ilustrasi dan Design Lainnya
          </span>
        </div>
      </div>
      <div className="hero-image">
        <img src={Zio} alt="zio" />
      </div>
    </section>
  );
};

export default Home;