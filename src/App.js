import {
  ArrowRightIcon,
  ArrowDownIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import dq from "./assets/dq.png";
import dk from "./assets/dk.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { HoverCard, Avatar, Box } from "@radix-ui/themes";
import { data, skills } from "./data";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function App() {
  const bounceAnimation = {
    y: [0, -20, 0], // Define keyframes for vertical motion
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeOut",
    },
  };

  return (
    <div className=" flex flex-col m-7 gap-20">
      <img className="h-10 w-10 lg:hidden" src={dk} alt="" />

      <div className="hidden lg:block sticky top-0 z-10 py-3">
        <div className="flex flex-col items-center relative">
          <div className="flex items-center justify-evenly text-xs font-extrabold bg-white rounded-full shadow-2xl p-3 w-[1000px] border-2">
            <img className="h-10" src={dk} alt="" />
            <Link to="about" spy={true} smooth={true}>
              <p className="hidden md:block cursor-pointer">ABOUT</p>
            </Link>
            <Link to="skills" spy={true} smooth={true}>
              <p className="hidden md:block cursor-pointer">SKILLS</p>
            </Link>
            <Link to="projects" spy={true} smooth={true}>
              <p className="hidden md:block cursor-pointer">PROJECTS</p>
            </Link>
            <Link>
              <p className="hidden md:block cursor-pointer">BLOGS</p>
            </Link>
            <Link to="test" spy={true} smooth={true}>
              <p className="hidden md:block cursor-pointer">TESTIMONIALS</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center font-extrabold gap-20">
        <p className="text-black text-center font-extrabold text-lg  mt-12 md:text-2xl md:text-left md:w-[700px] md:mt-24">
          IM D, AN AI ENGINEER Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam dignissim lorem at tortor placerat.
        </p>
        <div className=" bg-black text-white text-[10px] font-extrabold p-3 rounded-lg">
          RESUME
        </div>
        <p className="text-[12px]">SCROLL DOWN</p>
        <div className="flex justify-around">
          <motion.div
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100"
            transition={{
              repeatType: "mirror",
              repeat: Infinity,
              duration: 0.6,
              ease: "easeOut",
            }}
            animate={{ y: ["100%", "-50%"] }}
          >
            <ArrowDownIcon />
          </motion.div>
        </div>
      </div>
      <div class="about">
        <div className="mb-[100px]"></div>
      </div>

      <div className="flex flex-col items-center">
        <div className=" bg-black flex flex-col items-center p-12 gap-10 relative lg:w-[900px] md:w-[700px] md:h-[500px] rounded-xl">
          <div className="bg-white w-[92px] h-[92px] rounded-full md:absolute md:top-[-70px] md:shadow-lg md:w-[120px] md:h-[120px]"></div>
          <p className="text-white text-center text-sm xs:text-md md:mt-10 md:font-bold md:text-lg">
            Extremely motivated to constantly develop my skills and grow
            professionally. With a strong commitment to self-improvement, I
            actively seek out opportunities to enhance my knowledge and
            expertise. I thrive in dynamic environments where learning and
            adaptation are key, and I am confident in my ability to not only
            meet but exceed expectations when it comes to completing tasks on
            time.
          </p>
        </div>
      </div>
      <div id="skills" className="mb-[200px]"></div>
      <div className="flex flex-col gap-10 items-center">
        <p className="text-black text-center font-extrabold text-lg">SKILLS</p>
        <div className="flex gap-4 flex-wrap items-center justify-center lg:w-[900px]">
          {skills.map((i) => {
            return (
              <div className="flex text-sm bg-black text-white p-4 justify-between w-[250px] h-[100px]">
                <p>{i}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div id="projects" className="mb-[200px]"></div>
      <div className=" flex flex-col gap-10 items-center">
        <p className="text-black text-center font-extrabold text-lg md:text-2xl">
          PROJECTS
        </p>
        <div className="flex flex-col md:flex-wrap justify-center lg:flex-row gap-6">
          {data.map((i) => {
            return (
              <div className="gap-3 flex text-sm bg-black text-white p-4 justify-between w-[250px] md:w-[220px] lg:w-[300px]  flex-col md:items-center rounded-xl">
                <p className="text-xs font-extrabold md:text-md">{i.title}</p>
                <p className="hidden lg:block md:text-[10px] md:text-start ">
                  {i.desc.substring(0, 500)}...
                </p>
                <div className="flex bg-white items-center p-3 md:w-[100px] md:justify-center rounded-xl">
                  <a href={i.url}>
                    <ArrowRightIcon className="text-black" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="test" className="mb-[200px]"></div>
      <div className="flex flex-col items-center gap-10">
        <p className="text-black text-center font-extrabold text-lg md:text-2xl">
          TESTIMONIALS
        </p>

        <div className="hidden  md:flex md:justify-evenly md:gap-3 xl:flex-row md:flex-col">
          <div className="bg-black flex flex-col w-[400px] h-[295px] p-8 text-white gap-12 text-left relative rounded-xl">
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
          <div className="bg-black flex flex-col w-[400px] h-[295px] p-8 text-white gap-12 text-left relative rounded-xl">
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
          <div className=" bg-black flex flex-col w-[400px] h-[295px] p-8 text-white gap-12 text-left relative rounded-xl">
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
        <div className="flex flex-col items-center bg-black h-[372px] justify-evenly w-[298px] lg:w-[900px] md:w-[700px] rounded-xl">
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
          <HoverCard.Root>
            <HoverCard.Trigger>
              <GitHubLogoIcon className="md:w-8 md:h-8" />
            </HoverCard.Trigger>
            <HoverCard.Content>
              <div className="flex gap-4">
                <Avatar
                  size="3"
                  fallback="DA"
                  radius="full"
                  src="https://github.com/DHIWAHAR-K.png"
                />

                <div className="flex flex-col">
                  <p className="font-extrabold">Dhiwahar</p>
                  <p className="text-sm text-slate-400 font-light">@dhiwahar</p>
                  <p className="mt-3 text-sm">
                    I'm a passionate AI engineeer with interesting <br />{" "}
                    projects and blogs
                  </p>
                </div>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>{" "}
          <InstagramLogoIcon className="md:w-8 md:h-8" />
          <LinkedInLogoIcon className="md:w-8 md:h-8" />
        </div>
      </div>
    </div>
  );
}

export default App;
