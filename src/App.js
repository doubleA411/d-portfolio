import {
  ArrowRightIcon,
  ArrowDownIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import dq from "./assets/dq.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div className=" flex flex-col m-7  gap-20">
      <div className="flex items-center justify-evenly text-xs font-bold">
        <p className="text-3xl text-black font-extrabold">D</p>
        <p className="hidden md:block">About</p>
        <p className="hidden md:block">Skills</p>
        <p className="hidden md:block">Projects</p>
        <p className="hidden md:block">Blogs</p>
        <p className="hidden md:block">Testimonials</p>
      </div>

      <div className="flex flex-col items-center font-extrabold gap-20">
        <p className="text-black text-center font-extrabold text-lg  mt-12 md:text-2xl md:text-left md:w-[700px] md:mt-24">
          IM D, AN AI ENGINEER Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam dignissim lorem at tortor placerat.
        </p>
        <div className=" bg-black text-white text-[10px] font-extrabold p-3">
          RESUME
        </div>
        <p className="text-[12px]">SCROLL DOWN</p>
        <ArrowDownIcon />
      </div>
      <div className="mb-[100px]"></div>
      <div className="flex flex-col items-center">
        <div className=" bg-black flex flex-col items-center p-12 gap-10 relative lg:w-[900px] md:w-[700px] md:h-[500px]">
          <div className="bg-white w-[92px] h-[92px] rounded-full md:absolute md:top-[-70px] md:shadow-lg md:w-[120px] md:h-[120px]"></div>
          <p className="text-white text-center text-sm xs:text-md md:mt-10 md:font-bold md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dignissim lorem at tortor placerat, eu facilisis dolor cursus.
            Aenean risus ipsum, sodales sit amet aliquet eu
          </p>
        </div>
      </div>
      <div className="mb-[200px]"></div>
      <div className="flex flex-col gap-10 items-center">
        <p className="text-black text-center font-extrabold text-lg">SKILLS</p>
        <div className="flex text-sm bg-black text-white p-4 justify-between w-[250px]">
          <p>SKILL 1</p>
          <p>80%</p>
        </div>
        <div className="flex text-sm bg-black text-white p-4 justify-between w-[250px]">
          <p>SKILL 1</p>
          <p>80%</p>
        </div>
        <div className="flex text-sm bg-black text-white p-4 justify-between w-[250px]">
          <p>SKILL 1</p>
          <p>80%</p>
        </div>
        <div className="flex text-sm bg-black text-white p-4 justify-between w-[250px]">
          <p>SKILL 1</p>
          <p>80%</p>
        </div>
        <div className="flex text-sm bg-black text-white p-4 justify-between w-[250px]">
          <p>SKILL 1</p>
          <p>80%</p>
        </div>
      </div>
      <div className="mb-[200px]"></div>
      <div className="flex flex-col gap-10 items-center">
        <p className="text-black text-center font-extrabold text-lg">
          PROJECTS
        </p>
        <div className="flex text-sm bg-black text-white p-4 justify-between w-[250px]">
          <p>TITLE 1</p>
          <div className="flex bg-white items-center p-1">
            <ArrowRightIcon className="text-black" />
          </div>
        </div>
        <div className="flex text-sm bg-black text-white p-4 justify-between w-[250px]">
          <p>TITLE 2</p>
          <div className="flex bg-white items-center p-1">
            <ArrowRightIcon className="text-black" />
          </div>
        </div>
        <div className="flex text-sm bg-black text-white p-4 justify-between w-[250px]">
          <p>TITLE 3</p>
          <div className="flex bg-white items-center p-1">
            <ArrowRightIcon className="text-black" />
          </div>
        </div>
        <div className="flex text-sm bg-black text-white p-4 justify-between w-[250px]">
          <p>TITLE 4</p>
          <div className="flex bg-white items-center p-1">
            <ArrowRightIcon className="text-black" />
          </div>
        </div>
      </div>
      <div className="mb-[200px]"></div>
      <div className="flex flex-col items-center gap-10">
        <p className="text-black text-center font-extrabold text-lg md:text-2xl">
          TESTIMONIALS
        </p>

        <div className="hidden  md:flex md:justify-evenly md:gap-3 xl:flex-row md:flex-col">
          <div className="bg-black flex flex-col w-[400px] h-[295px] p-8 text-white gap-12 text-left relative">
            <img className="absolute top-0 right-0 m-5" src={dq} alt="" />
            <div className="flex items-center gap-3">
              <div className="bg-white w-[50px] h-[50px] rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm">NAME</p>
                <p className="text-[10px] text-slate-500">role</p>
              </div>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dignissim
            </p>
          </div>
          <div className="bg-black flex flex-col w-[400px] h-[295px] p-8 text-white gap-12 text-left relative">
            <img className="absolute top-0 right-0 m-5" src={dq} alt="" />
            <div className="flex items-center gap-3">
              <div className="bg-white w-[50px] h-[50px] rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm">NAME</p>
                <p className="text-[10px] text-slate-500">role</p>
              </div>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dignissim
            </p>
          </div>
          <div className=" bg-black flex flex-col w-[400px] h-[295px] p-8 text-white gap-12 text-left relative">
            <img className="absolute top-0 right-0 m-5" src={dq} alt="" />
            <div className="flex items-center gap-3">
              <div className="bg-white w-[50px] h-[50px] rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm">NAME</p>
                <p className="text-[10px] text-slate-500">role</p>
              </div>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dignissim
            </p>
          </div>
        </div>
        <Carousel className="w-[287px] h-[295px] md:hidden">
          <div className="bg-black flex flex-col w-[287px] h-[295px] p-8 text-white gap-12 text-left">
            <div className="flex items-center gap-3">
              <div className="bg-white w-[50px] h-[50px] rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm">NAME</p>
                <p className="text-[10px] text-slate-500">role</p>
              </div>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dignissim
            </p>
          </div>
          <div className="bg-black flex flex-col w-[287px] h-[295px] p-8 text-white gap-12 text-left">
            <div className="flex items-center gap-3">
              <div className="bg-white w-[50px] h-[50px] rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm">NAME</p>
                <p className="text-[10px] text-slate-500">role</p>
              </div>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dignissim
            </p>
          </div>
          <div className="bg-black flex flex-col w-[287px] h-[295px] p-8 text-white gap-12 text-left">
            <div className="flex items-center gap-3">
              <div className="bg-white w-[50px] h-[50px] rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm">NAME</p>
                <p className="text-[10px] text-slate-500">role</p>
              </div>
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dignissim
            </p>
          </div>
        </Carousel>
      </div>
      <div className="mb-[200px]"></div>
      <div className="flex flex-col gap-3 items-center">
        <p className="text-black text-center font-extrabold text-lg mb-34">
          MY BLOGS
        </p>
        <Carousel className="w-[300px] h-[400px]">
          <div className="bg-black flex flex-col w-[300px] h-[400px] p-5 text-white justify-between">
            <div className=" h-36 bg-white"></div>
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-ellipsis">TITLE</p>
              <ArrowRightIcon />
            </div>
          </div>
          <div className="bg-black flex flex-col w-[300px] h-[400px] p-5 text-white justify-between">
            <div className=" h-36 bg-white"></div>
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-ellipsis">TITLE</p>
              <ArrowRightIcon />
            </div>
          </div>
        </Carousel>
      </div>
      <div className="mb-[100px]"></div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center bg-black h-[372px] justify-evenly w-[298px] lg:w-[900px] md:w-[700px]">
          <div></div>
          <p className="text-white text-center md:w-96 md:text-2xl">
            TELL ME ABOUT YOUR NEXT PROJECT
          </p>
          <div className="bg-white">
            <p className="text-black text-[10px] font-extrabold p-2">
              GET IN TOUCH
            </p>
          </div>
        </div>
      </div>
      <p className="text-[10px] text-center md:text-md">
        Copyright 2023 All Rights Reserved
      </p>
      <div className="flex flex-col items-center">
        <div className="flex gap-10 items-center">
          <GitHubLogoIcon className="md:w-8 md:h-8" />
          <InstagramLogoIcon className="md:w-8 md:h-8" />
          <LinkedInLogoIcon className="md:w-8 md:h-8" />
        </div>
      </div>
    </div>
  );
}

export default App;
