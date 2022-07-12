import React from "react";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Frouits from "./Frouits";
import Spreading from "./Spreading";
import Countries from "./Countries";
import Country from "./Country";
import Event from "./Event";

export default function index() {
  return (
    <>
      <Carousel />
      <Hero />
      <Frouits />
      <Spreading />
      {/* <Countries /> */}
      <Country />
      <Event />
    </>
  );
}
