import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "./(section)/Hero";

const HomePage = () => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="fixed" />
        <Hero/>
      </div>{" "}
    </main>
  );
};

export default HomePage;
