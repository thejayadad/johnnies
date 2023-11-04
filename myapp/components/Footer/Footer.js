'use client'
import React from 'react';
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8 border-t border-gray-200">
      <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
        <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Components
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">Seafood Menu</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">Order Online</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">Special Offers</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Contacts
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">Facebook</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">Instagram</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">Twitter</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Customization
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">Settings</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">Themes</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">Plugins</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
          <a href="#">
            <FaTiktok className="text-xl transition-colors duration-200 hover:text-gray-800  text-black" />
          </a>
          <a href="#">
            <FaFacebook className="text-xl transition-colors duration-200 hover:text-gray-800  text-blue-500" />
          </a>
          <a href="#">
            <FaTwitter className="text-xl transition-colors duration-200 hover:text-gray-800 text-blue-200" />
          </a>
          <a href="#">
            <FaYoutube className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white text-red-500" />
          </a>
        </div>
        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          By thejayadad
        </div>
      </div>
    </footer>
  );
}

export default Footer;
