import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const scrollIntoView = (sectionId) => {
        const section = document.getElementById(sectionId)
        section.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div className="max-w-screen-xl min-h-screen px-6 py-12 mx-auto text-white md:px-12 md:py-20 sm:text-center md:text-left">
            <div className="md:flex md:justify-between md:gap-10">
                <header className="text-center md:text-left md:sticky md:top-0 md:flex md:flex-col md:max-h-screen md:w-1/3 md:pt-20">
                    <div>
                        <h1 className="text-6xl font-bold text-blue-500 md:text-4xl lg:text-5xl">Arc</h1>
                        <p className="overflow-hidden text-lg md:mt-3 text-slate-400">I Build Full Stack Web Applications.</p>
                        <p className="h-10 text-lg text-slate-600 md:mt-3">Graduating from College Soon</p>
                        <nav className="hidden mt-3 md:block">
                            <button onClick={() => scrollIntoView("section1")} className="flex items-center gap-2 px-2 py-3">
                                <span className="w-4 h-2 bg-blue-800 rounded"></span> 
                                <p className="uppercase">About Me</p>
                            </button>
                            <button onClick={() => scrollIntoView("section2")} className="flex items-center gap-2 px-2 py-3">
                                <span className="w-4 h-2 bg-blue-800 rounded"></span> 
                                <p className="uppercase">About Me</p>
                            </button>
                            <button  onClick={() => scrollIntoView("section3")} className="flex items-center gap-2 px-2 py-3">
                                <span className="w-4 h-2 bg-blue-800 rounded"></span> 
                                <p className="uppercase">About Me</p>
                            </button>
                        </nav>
                    </div>
                    <div className="flex justify-center gap-4 mt-4 md:mt-16 md:flex-col">
                        <div className="flex items-center gap-4">
                            <i className="fa-brands fa-github fa-lg"></i>
                            <p className="hidden md:block">Github</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="fa-brands fa-linkedin-in fa-lg"></i>
                            <p className="hidden md:block">LinkedIn</p>
                        </div>
                    </div>
                </header>
                <main className="flex flex-col gap-40 pt-12 mt-20 text-sm md:mt-0 md:w-2/3 md:flex-1 md:text-left">
                    <div className="grid gap-8 text-slate-200" id="section1">
                        <h2 className="text-xl font-bold text-center uppercase md:text-left text-slate-500">About Me</h2>
                        <p className="px-[1.5rem] indent-8 md:max-w-full mx-auto text-justify mt-3 text-sm leading-8 md:px-0 md:leading-8 md:text-base ">I am a 4th-year college student expecting to graduate in a semester after OJT/Internships. I learned about HTML and CSS back when I was in grade 9 and that made me interested in programming in general. I had grown up to love knowing all the nerdy stuff, like a kid who discovers a manual for a potential lego masterpiece.</p>
                        <p className="px-[1.5rem] mx-auto md:px-0 md:max-w-full text-justify mt-3 text-sm leading-8 md:leading-8 md:text-base indent-8">Fast forward to where I am right now, I am looking forward to contribute for the better and to continually improve.</p>
                        <div className="flex justify-center gap-4 md:justify-start">
                            <button className="px-4 py-3 mt-6 bg-transparent border border-white rounded">Contact Me</button>
                            <button className="px-4 py-3 mt-6 bg-blue-800 rounded hover:bg-blue-700">Download CV</button>
                        </div>
                    </div>
                    <div className="grid gap-4 leading-relaxed text-slate-600" id="section2">
                        <h2 className="text-xl">Projects</h2>
                        <div>Section under construction...</div>
                    </div>
                    
                </main>
            </div>
        </div>
    )
}

export default Home