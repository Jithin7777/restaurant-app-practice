import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "./(section)/Hero";
import Welcome from './(section)/Welcome'

const HomePage = () => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="fixed" />
        <Hero/>
        <Welcome/>
      </div>{" "}
    </main>
  );
};

export default HomePage;
