"use client";
import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const work = () => {
  return (
    <div>
      <Hero
        heading='My Work'
        message='this is some of my work'
        buttonText='click me!'
      />
      <Portfolio />
    </div>
  );
};

export default work;
