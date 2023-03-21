"use client"; // this is a client component 👈🏽
import React from "react"
import Hero from "../components/Hero";
import Contact from "../components/Contact";


const contact = () => {
  return (
    <div>
      <Hero
        heading='Contact'
        message='Submit the form below for more images'
        buttonText='Proceed'
      />
      <Contact />
    </div>
  );
};

export default contact;
