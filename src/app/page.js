import Image from "next/image";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

export default function Home() {
  return (
    <div className="overflow-hidden main-bg flex flex-col">
      <div className="h-[7rem] w-screen main-bg istok flex md:justify-start md:pl-24 font-bold justify-center items-center text-white text-4xl">
        <span className="text-blue-500">txt</span>.live
      </div>
      <div className="md:h-[40rem] w-screen flex  md:flex-row flex-col md:items-center justify-center">
        <div className="h-full md:w-1/2 w-full  flex flex-col items-center justify-center">
          <div className="text-white font-bold text-2xl istok mb-6">
            Your Link
          </div>
          <div className="flex flex-wrap">
            <div className="md:w-[24rem] w-[10rem] bg-white rounded-xl p-4 mr-4">
              copy your link
            </div>
            <button>
              <div className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-700 text-white  t-white flex flex-wrap justify-center items-center">
                <HiOutlineDocumentDuplicate />
              </div>
            </button>
          </div>
          <div className="mt-6 pl-4 pr-4 text-white  text-sm istok ">
            Copy the link or scan the code below to visit this page on other
            devices
          </div>
          <div className="mt-8 mb-8 w-[15rem] h-[15rem] hover:scale-110 ease-in-out duration-300 bg-white rounded-xl "></div>
        </div>
        <div className="md:h-full h-[35rem] md:w-1/2 md:p-6 p-4 w-full  flex flex-col items-center justify-center">
          <textarea
            placeholder="Type here.."
            className="h-[30rem] w-full rounded-lg grey-bg md:p-6 p-6 text-gray-300 font-regular "
          ></textarea>
          <button>
            <div className="mt-4 md:w-[20rem] p-2 h-12 rounded-lg bg-blue-500 hover:bg-blue-700 text-white  t-white flex flex-wrap justify-center items-center">
              copy to clip board &nbsp;
              <HiOutlineDocumentDuplicate />
            </div>
          </button>
        </div>
      </div>
      <ul className="md:h-12 flex md:flex-row flex-wrap gap-8 text-white istok md:justify-end justify-center items-center p-8 bg-gray-800">
        <li>About</li>
        <li>Contact us</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
}
