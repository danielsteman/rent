"use client";

import { useState } from "react";

const Navbar = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <nav className="bg-slate-800 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex space-x-4">
          <a href="#" className="text-xl font-bold mr-auto">
            Logo
          </a>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="17.5"
              viewBox="0 0 448 512"
              fill="white"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </button>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="17.5"
              viewBox="0 0 448 512"
              fill="white"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

interface IMenuItem {
  text: string;
}

const MenuItem: React.FC<IMenuItem> = ({ text }) => {
  return (
    <div className="flex flex-row">
      <div className="mr-auto">{text}</div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
          fill="white"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </div>
    </div>
  );
};

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <Navbar toggleMenu={toggleMenu} />
      <div className="relative ">
        {isMenuOpen && (
          <div className=" bg-slate-700 flex flex-row justify-start absolute top-0 left-0 w-full z-10">
            <div className="flex flex-col gap-4 p-4 w-full">
              <MenuItem text="Meer informatie" />
              <MenuItem text="Advies" />
              <MenuItem text="Contact" />
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Your Landing Page
          </h1>
          <p className="text-lg">
            This is a full-height landing page example using flex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
