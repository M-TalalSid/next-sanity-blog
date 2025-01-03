import React from 'react';
import Link from 'next/link';
import tasweer from "../../../public/profile.png";
import Image from 'next/image';

const About = () => {
  return (
    <div className="about flex flex-col md:flex-row items-center bg-gray-400 p-8 md:p-16">
      {/* Left Section for Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image width={1000} height={1000}
          src={tasweer} // Replace this with your image path
          alt="tasweer"
          className="rounded-md h-2/4 w-2/4"
        />
      </div>
      {/* Right Section for Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">ABOUT ME</h1>
        <h2 className="text-2xl text-purple-600 font-semibold mb-4">Talal Shoaib - Front-End Developer</h2>
        <p className="text-lg text-gray-600 mb-6">
          I have Built This Blog Website To Share Engaging Content With My Audience. 
          This Website Leverages Modern Technologies Like Sanity (Headless - CMS) To Fetch And Manage Data Efficiently. 
          My Aim Is To Create A Seamless Reading Experience With Dynamic And Up-To-Date Posts.
        </p>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link href="https://behance.net">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-behance"></i>
            </div>
          </Link>
          <Link href="https://facebook.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-facebook"></i>
            </div>
          </Link>
          <Link href="https://twitter.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-twitter"></i>
            </div>
          </Link>
          <Link href="https://instagram.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-instagram"></i>
            </div>
          </Link>
          <Link href="https://linkedin.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-linkedin"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
