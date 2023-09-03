"use client";
import Image from "next/image";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { useTheme, useSetTheme } from "./theme.store";
import { useState, useEffect } from "react";
export default function Home() {
  const theme = useTheme();
  useEffect(() => {
    try {
      const localTheme = JSON.parse(localStorage.getItem("theme"));
      if (localTheme) {
        document.documentElement.setAttribute(
          "data-mode",
          localTheme.state.theme
        );
        document.documentElement.className = localTheme.state.theme;
      }
    } catch (err) {
      console.log("error loading the color theme");
    }
  }, [theme]);
  const setTheme = useSetTheme();
  return (
    <div className="overflow-hidden dark:bg-gray-900 bg-white flex flex-col">
      <button onClick={setTheme}>
        <div className="fixed top-8 right-8 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-700 text-white  t-white flex flex-wrap justify-center items-center">
          mode
        </div>
      </button>
      <div className="h-[7rem] w-screen bg-white text-black dark:bg-gray-900 istok flex md:justify-start md:pl-24 font-bold justify-center items-center dark:text-white text-4xl">
        <span className="text-blue-500">txt</span>.live
      </div>
      <div className="md:h-[40rem] md:p-4 w-screen flex  md:flex-row flex-col md:items-center justify-center">
        <div className="h-full md:w-1/2 w-full  flex flex-col items-center justify-center">
          <div className="dark:text-white text-black font-bold text-2xl istok mb-6">
            Your Link
          </div>
          <div className="flex flex-wrap">
            <div className="md:w-[24rem] w-[10rem] dark:bg-white bg-gray-100 shadow-md rounded-xl p-4 mr-4">
              copy your link
            </div>
            <button>
              <div className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-700 text-white  t-white flex flex-wrap justify-center items-center">
                <HiOutlineDocumentDuplicate />
              </div>
            </button>
          </div>
          <div className="mt-6 pl-4 pr-4 dark:text-white  text-gray-600 text-lg istok ">
            Copy the link or scan the code below to visit this page on other
            devices
          </div>
          <div className="mt-8 mb-8 w-[15rem] h-[15rem] hover:scale-110 ease-in-out duration-300 dark:bg-white  bg-gray-100 shadow-md rounded-xl "></div>
        </div>
        <div className="md:h-full h-[35rem] md:w-1/2 md:p-6 p-4 w-full  flex flex-col items-center justify-center">
          <textarea
            placeholder="Type here.."
            className="h-[30rem] w-full rounded-lg dark:bg-slate-800 bg-slate-200 md:p-6 p-6 text-gray-300 font-regular "
          ></textarea>
          <button>
            <div className="mt-4 md:w-[20rem] p-2 h-12 rounded-lg bg-blue-500 hover:bg-blue-700 text-white   flex flex-wrap justify-center items-center">
              copy to clip board &nbsp;
              <HiOutlineDocumentDuplicate />
            </div>
          </button>
        </div>
      </div>
      <ul className="md:h-24 flex md:flex-row flex-wrap gap-8 dark:text-white  text-gray-600 text-lg istok  md:justify-end justify-center items-center md:items-center  px-8 bg-gray-100  dark:bg-gray-800">
        <li>About</li>
        <li>Contact us</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
}
