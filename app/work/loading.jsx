"use client";
import React from "react";
import { Hearts } from  'react-loader-spinner'
import Hero from "../components/Hero";

const loading = () => {
  return (
    <div>
      <Hero />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/83 z-[2]">
      <Hearts
        height='80'
        width='80'
        color='#FF0000'
        ariaLabel='hearts-loading'
        wrapperStyle={{display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh'}}
        wrapperClass=''
        visible={true}
      />
    </div>
    </div>
  );
};

export default loading;
