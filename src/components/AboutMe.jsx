import { SiCss3, SiGithub, SiJavascript, SiTailwindcss } from "react-icons/si"
import {  DiDjango,  DiFirebase,  DiHtml5, DiJavascript, DiLaravel, DiMongodb, DiPython, DiReact } from "react-icons/di"
import { FaReact, FaVuejs } from "react-icons/fa"
import { BiCaretRight } from "react-icons/bi"
import { useState } from "react"
import { Dropdown } from "flowbite-react"
import { RiFirebaseFill } from "react-icons/ri"
import { CgCPlusPlus } from "react-icons/cg"

const AboutMe = () => {
    const [ textVersion, setTextVersion ] = useState("Summarized")
  
    const dropDownTheme = {
        "arrowIcon": "ml-2 h-4 w-4",
        "content": "py-1 focus:outline-none",
        "floating": {
          "animation": "transition-opacity",
          "arrow": {
            "base": "absolute z-10 h-2 w-2 rotate-45",
            "style": {
              "dark": "bg-gray-900 dark:bg-gray-700",
              "light": "bg-white",
              "auto": "bg-white dark:bg-gray-700"
            },
            "placement": "-4px"
          },
          "base": "z-10 w-fit divide-y divide-gray-100  rounded shadow focus:outline-none",
          "content": "py-1 text-sm text-gray-700 ",
          "divider": "my-1 h-px bg-gray-100 dark:bg-gray-600",
          "header": "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
          "hidden": "invisible opacity-0",
          "item": {
            "container": "bg-red-500",
            "base": "flex w-full  hover:text-text-default bg-background-default focus:bg-primary-default cursor-pointer items-center justify-start px-4 py-2 text-sm  focus:outline-none ",
            "icon": "mr-2 h-4 w-4"
          },
          "style": {
            "auto": "border border-gray-200"
          },
          "target": "w-fit"
        },
        "inlineWrapper": "flex items-center"
      }

    return (
        <div className="space-y-12 text-text-default" id="section1">
            <div className="flex justify-between">
                <h2 className="text-xl text-center uppercase font-heading md:text-left text-text-800">About Me</h2>
                <Dropdown label={textVersion} theme={dropDownTheme} color="blue" >
                    <Dropdown.Item onClick={() => setTextVersion("Summarized")}>Summarized</Dropdown.Item>
                    <Dropdown.Item onClick={() => setTextVersion("Technical")}>Technical</Dropdown.Item>
                </Dropdown>
            </div>
            {textVersion === "Summarized" ? 
            <>
            <p className="mx-auto mt-3 text-sm leading-8 text-justify indent-8 md:max-w-full md:px-0 md:leading-8 md:text-base ">
                <span className="text-lg text-accent-default">Approach problem-solving </span>with <span className="text-lg text-accent-default">enthusiasm</span> and <span className="text-lg text-accent-default">passion! </span>  
                I like building web technologies with the intention of being able to see myself as a fan or a consumer of it. <span className="text-lg text-accent-default">No cutting corners</span>, and aim to <span className="text-lg text-accent-default">deliver the best website experience possible</span>.  
                {/* see web development as a field that lets me leverage and apply my passion for learning almost immediately. I am incredibly confident in my skills at the following:     */}
            </p>
            <div className="grid justify-between grid-cols-4 gap-2">
                <div className="flex flex-col gap-2 p-2 text-xs rounded place-items-center">
                    <DiHtml5 size={24}/>
                    <p>HTML</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <SiCss3 size={24}/>
                    <p>CSS</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <SiJavascript size={24}/>
                    <p>JavaScript</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <FaReact size={24}/>
                    <p>React</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <SiTailwindcss size={24}/>
                    <p>Tailwind</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <DiDjango size={24}/>
                    <p>Django</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <DiLaravel size={24}/>
                    <p>Laravel</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <SiGithub size={24}/>
                    <p>Github</p>
                </div>
            </div>
            <p className="mx-auto mt-3 text-sm leading-8 text-justify md:px-0 md:max-w-full md:leading-8 md:text-base indent-8">
                Outside of programming, I'm quite the reader and a Japanese media enthusiast. Plays a bit of DOTA and learns a bit of Nihongo on the side!
            </p>
            </>
            :
            <>
            
            <p className="mx-auto mt-3 text-sm leading-8 text-justify indent-8 md:max-w-full md:px-0 md:leading-8 md:text-base ">
                I started out with the programming basics by learning C++ and trained my problem solving skills from sites like LeetCode and Codewars. I find that it actually helped me mold a mindset for ensuring I always look at the best answers and to always look at possible alternatives in pursuit of better performance. 
                Afterwards, I focused more on wanting to build websites and eventually found my way through learning Django. I relearned my web fundamentals with TheOdinProject and worked on a bunch of projects, ensuring I learn something new and relevant for each.
            </p>
            <p className="mx-auto mt-3 text-sm leading-8 text-justify indent-8 md:max-w-full md:px-0 md:leading-8 md:text-base ">
                That said, I am more experienced and tested with the following:
            </p>
            <div className="grid justify-between grid-cols-4 gap-2">
                <div className="flex flex-col gap-2 p-2 text-xs rounded place-items-center">
                    <DiHtml5 size={24}/>
                    <p>HTML</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <SiCss3 size={24}/>
                    <p>CSS</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <SiJavascript size={24}/>
                    <p>JavaScript</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <FaReact size={24}/>
                    <p>React</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <SiTailwindcss size={24}/>
                    <p>Tailwind</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <DiDjango size={24}/>
                    <p>Django</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <DiLaravel size={24}/>
                    <p>Laravel</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <SiGithub size={24}/>
                    <p>Github</p>
                </div>
            </div>
            <p className="mx-auto mt-3 text-sm leading-8 text-justify indent-8 md:max-w-full md:px-0 md:leading-8 md:text-base ">
                And in terms of programming language fundamentals, The ones I used a lot were
            </p>
            <div className="flex gap-2 justify-evenly">
                <div className="flex flex-col gap-2 p-2 text-xs rounded place-items-center">
                    <CgCPlusPlus size={24}/>
                    <p>C++</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <DiPython size={24}/>
                    <p>Python</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <SiJavascript size={24}/>
                    <p>JavaScript</p>
                </div>
                
            </div>
            <p className="mx-auto mt-3 text-sm leading-8 text-justify indent-8 md:max-w-full md:px-0 md:leading-8 md:text-base ">
                I did have some experiences with the following 
            </p>
            <div className="flex gap-2 justify-evenly">
                <div className="flex flex-col gap-2 p-2 text-xs rounded place-items-center">
                    <DiMongodb size={24}/>
                    <p>MongoDB</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <RiFirebaseFill size={24}/>
                    <p>Firebase</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm rounded place-items-center">
                    <FaVuejs size={24}/>
                    <p>Vue</p>
                </div>
            </div>
            </>
            }
            
        </div>
    )
}

export default AboutMe