"use client";
import CustomInput from "@/components/Input";
import Polaroid from "@/components/Polaroid";
import {
  HeartIcon,
  PlusIcon,
  StarIcon as StarIconOutline,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="bg-blue-200 h-full">
      <div className="border border-b-[1px] h-14 bg-white shadow-md flex items-center">
        <h1 className="ml-5 mr-2 font-indieFlower text-2xl">Ashley and Owen</h1>
        <HeartIcon className="w-5 h-5" />
      </div>
      <div className="w-full flex justify-center mt-6">
        <div className="w-full md:w-[85vw] lg:w-[95vw] xl:w-[75vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 justify-items-center">
          <Polaroid />
          <Polaroid />
          <Polaroid />
          <Polaroid />
          <Polaroid />
          <Polaroid />
        </div>
      </div>
      <button
        className="bg-slate-50 rounded-full w-14 h-14 flex items-center justify-center shadow-xl z-50 bottom-4 right-4 fixed active:shadow-inner active:bg-slate-100"
        onClick={() => {
          document
            .getElementById("create-modal")!
            .classList.replace("h-0", "h-[50vh]");
        }}
      >
        <PlusIcon className="w-6 h-6" />
      </button>
      <div
        id="create-modal"
        className="bg-slate-50 w-full h-0 transition-all bottom-0 fixed z-50"
      >
        <div className="w-full flex items-center">
          <button
            className="ml-auto mt-2 mr-2 w-7 h-7"
            onClick={() => {
              document
                .getElementById("create-modal")!
                .classList.replace("h-[50vh]", "h-0");
            }}
          >
            <XMarkIcon className="w-7 h-7" />
          </button>
        </div>
        <div className="flex w-full justify-center">
          <div className="w-[75vw] font-indieFlower">
            <h2 className="text-2xl">Create Polaroid!</h2>
            <input accept="image/*" type="file" className="w-full mb-10 mt-6" />
            <CustomInput
              placeholder={"What are we doing?"}
              value={""}
              handleChange={() => {}}
            />
            <div className="my-6">
              <label>How would you rate it?</label>
              <div className="flex">
                <StarIconOutline className="w-8 h-8" />
                <StarIconOutline className="w-8 h-8" />
                <StarIconOutline className="w-8 h-8" />
                <StarIconOutline className="w-8 h-8" />
                <StarIconOutline className="w-8 h-8" />
              </div>
            </div>
            <div className="w-full flex items-center">
              <button className="border border-black px-2.5 py-1 ml-auto">
                Create!
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}