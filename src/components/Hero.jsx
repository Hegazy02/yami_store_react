import React from "react";
import HeroBanner from "../assets/hero_banner.jpg";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroBanner})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Explore The World</h1>
          <p className="mb-5">
            Yawi provides a products for you to live a better life.
          </p>
          <button className="btn btn-primary"><a href="#products">Shop Now</a></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
