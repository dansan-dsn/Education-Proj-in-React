import React from "react";
import Slider from "../componets/Slider";
import News from "../componets/News";
import SchoolForm from "../componets/SchoolForm";
import Navbar from "../componets/Navbar";
import Activity from "../componets/Activities";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <News />
      <SchoolForm />
      <Activity />
    </div>
  );
};
