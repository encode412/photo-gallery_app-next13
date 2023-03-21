"use client";
import React from "react";
import { Hearts } from  'react-loader-spinner'
import Hero from "../components/Hero";

const loading = () => {
  return (
    <div>
      <Hero />
      <Hearts
        height='80'
        width='80'
        color='#FF0000'
        ariaLabel='hearts-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
};

export default loading;
