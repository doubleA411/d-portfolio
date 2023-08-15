import {
  ArrowRightIcon,
  ArrowDownIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import insta from "./assets/insta.png";
import fb from "./assets/fb.png";
import link from "./assets/link.png";

function App() {
  return (
    <div className=" flex flex-col items-center m-7 gap-20">
      <div className="flex">
        <p className="text-3xl text-black font-extrabold">D</p>
      </div>
      <p className="text-black text-center font-extrabold text-lg w-[297px] mt-12">
        IM D, AN AI ENGINEER Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Aliquam dignissim lorem at tortor placerat.
      </p>
      <div className=" bg-black text-white text-[10px] font-extrabold p-3">
        GET IN TOUCH
      </div>
      <div className="flex flex-col items-center font-extrabold gap-4">
        <p className="text-[12px]">SCROLL DOWN</p>
        <ArrowDownIcon />
      </div>
      <div className="mb-[100px]"></div>
      <div className=" bg-black flex flex-col items-center p-12 gap-10">
        <div className="bg-white w-[92px] h-[92px] rounded-full"></div>
        <p className="text-white text-center text-sm xs:text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dignissim lorem at tortor placerat, eu facilisis dolor cursus. Aenean
          risus ipsum, sodales sit amet aliquet eu
        </p>
      </div>
      <div className="mb-[200px]"></div>
      <div className="flex flex-col gap-10">
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
      <div className="flex flex-col gap-10">
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
      <div className="mb-[100px]"></div>
      <div className="flex flex-col items-center bg-black h-[372px] justify-evenly w-[298px]">
        <div></div>
        <p className="text-white text-center">
          TELL ME ABOUT YOUR NEXT PROJECT
        </p>
        <div className="bg-white">
          <p className="text-black text-[10px] font-extrabold p-2">
            GET IN TOUCH
          </p>
        </div>
      </div>
      <p className="text-[10px] text-center">
        Copyright 2023 All Rights Reserved
      </p>
      <div className="flex gap-10 items-center">
        <GitHubLogoIcon />
        <InstagramLogoIcon />
        <LinkedInLogoIcon />
      </div>
    </div>
  );
}

export default App;
