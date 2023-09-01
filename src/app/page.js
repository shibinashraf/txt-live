import Image from "next/image";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

export default function Home() {
  return (
    <div className="min-h-screen w-screen main-bg flex flex-col">
      <div className="flex md:justify-start justify-center md:pl-16 items-center h-[7rem] istok w-full fixed top-0 text-4xl font-bold text-white">
        <span className="text-blue-500">txt</span>.live
      </div>
      <div className="md:h-screen w-full flex md:flex-row flex-col items-center ">
        <div className="h-screen md:w-1/2 w-full  flex flex-col  items-center justify-center">
          <div className="text-white font-bold text-2xl istok mb-6">
            Your Link
          </div>
          <div className="flex flex-wrap">
            <div className="md:w-[24rem] bg-white rounded-xl p-4 mr-4">
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
          <div className="mt-8 w-[15rem] h-[15rem] bg-white rounded-xl p-4 mr-4"></div>
        </div>
        <div className="h-screen md:w-1/2 w-[95%] flex flex-row items-center justify-center">
          <div className="md:h-[90%] md:w-[90%] w-full h-full rounded-lg grey-bg md:p-6 p-2 text-gray-300 font-regular ">
            <button>
              <div className="position relative md:top-6 md:right-6 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-700 text-white  t-white flex justify-center items-center">
                <HiOutlineDocumentDuplicate />
              </div>
            </button>
            Type here
          </div>
        </div>
      </div>
    </div>
  );
}
