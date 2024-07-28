import { SiCss3, SiGithub, SiJavascript, SiTailwindcss } from "react-icons/si"
import {  DiDjango,  DiHtml5, DiJavascript, DiLaravel, DiReact } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { BiCaretRight } from "react-icons/bi"
import { useState } from "react"

const AboutMe = () => {
    const { textVersion, setTextVersion } = useState("summarized")
    return (
        <div className="space-y-8 text-text-default" id="section1">
            <h2 className="text-xl text-center uppercase font-heading md:text-left text-text-800">About Me</h2>
            <p className="mx-auto mt-3 text-sm leading-8 text-justify indent-8 md:max-w-full md:px-0 md:leading-8 md:text-base ">
                <span className="text-lg text-accent-default">Approach problem-solving </span>with <span className="text-lg text-accent-default">enthusiasm</span> and <span className="text-lg text-accent-default">passion! </span>  
                I like building web technologies with the intention of being able to see myself as a fan or a consumer of it. <span className="text-lg text-accent-default">No cutting corners</span>, and aim to <span className="text-lg text-accent-default">deliver the best website experience possible</span>.  
                {/* see web development as a field that lets me leverage and apply my passion for learning almost immediately. I am incredibly confident in my skills at the following:     */}
            </p>
            <div className="grid justify-between grid-cols-4 gap-2">
                <div className="flex flex-col gap-2 p-2 text-xs border rounded place-items-center">
                    <DiHtml5 size={24}/>
                    <p>HTML</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm border rounded place-items-center">
                    <SiCss3 size={24}/>
                    <p>CSS</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm border rounded place-items-center">
                    <SiJavascript size={24}/>
                    <p>JavaScript</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm border rounded place-items-center">
                    <FaReact size={24}/>
                    <p>React</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm border rounded place-items-center">
                    <SiTailwindcss size={24}/>
                    <p>Tailwind</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm border rounded place-items-center">
                    <DiDjango size={24}/>
                    <p>Django</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm border rounded place-items-center">
                    <DiLaravel size={24}/>
                    <p>Laravel</p>
                </div>
                <div className="flex flex-col gap-2 p-2 text-sm border rounded place-items-center">
                    <SiGithub size={24}/>
                    <p>Github</p>
                </div>
            </div>
            <div className="flex items-center justify-end mt-2 text-accent-default">
                <span>Show All </span> 
                <BiCaretRight />
            </div>
            <p className="mx-auto mt-3 text-sm leading-8 text-justify md:px-0 md:max-w-full md:leading-8 md:text-base indent-8">
                Outside of programming, I'm quite the reader and a Japanese media enthusiast. Plays a bit of DOTA and learns a bit of Nihongo on the side!
            </p>
        </div>
    )
}

export default AboutMe