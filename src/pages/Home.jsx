import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const scrollIntoView = (sectionId) => {
        const section = document.getElementById(sectionId)
        section.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div className="max-w-screen-xl min-h-screen px-6 py-12 mx-auto text-white md:px-12 md:py-20 sm:text-center md:text-left">
            <div className="justify-center md:flex md:justify-between sm:gap-10 md:gap-40">
                <header className="text-center md:text-left md:sticky md:top-0 md:flex md:flex-col md:max-h-screen md:w-1/3 md:pt-20">
                    <div>
                        <h1 className="text-6xl font-bold md:text-4xl lg:text-5xl text-cyan-400">Arc</h1>
                        <p className="overflow-hidden text-lg md:mt-3 text-slate-400">I Build Full Stack Web Applications.</p>
                        <p className="h-10 text-lg text-slate-600 md:mt-3">Graduating from College Soon</p>
                        <nav className="mt-3 sm:hidden md:block">
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
                            <i className="fa-brands fa-github"></i>
                            <p className="hidden md:block">Github</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="fa-brands fa-linkedin-in"></i>
                            <p className="hidden md:block">LinkedIn</p>
                        </div>
                    </div>
                </header>
                <main className="pt-12 md:flex md:flex-col md:gap-60 md:w-2/3 md:flex-1">
                    <div className="grid gap-4 leading-relaxed" id="section1">
                        <h2 className="text-xl">About Me</h2>
                        <p className="mt-3 text-pretty">I am a 4th-year college student expecting to graduate in a semester after OJT/Internships. I learned about HTML and CSS back when I was in grade 9 and that made me interested in programming in general. I had grown up to love knowing all the nerdy stuff, like a kid who discovers a manual for a potential lego masterpiece.</p>
                        <p className="mt-3 sm:text-balance md:text-pretty">Fast forward to where I am right now, I am looking forward to contribute for the better and to continually improve.</p>
                        <div className="flex gap-4 sm:justify-center md:justify-start">
                            <button className="px-4 py-3 mt-6 bg-transparent border border-white rounded">Contact Me</button>
                            <button className="px-4 py-3 mt-6 rounded bg-cyan-500">Download CV</button>
                        </div>
                    </div>
                    <div className="grid gap-4 leading-relaxed text-slate-600" id="section2">
                        <h2 className="text-xl">About Me</h2>
                        <p className="mt-3 text-pretty">I am a 4th-year college student expecting to graduate in a semester after OJT/Internships. I learned about HTML and CSS back when I was in grade 9 and that made me interested in programming in general. I had grown up to love knowing all the nerdy stuff, like a kid who discovers a manual for a potential lego masterpiece.</p>
                        <p className="mt-3 sm:text-balance md:text-pretty">Fast forward to where I am right now, I am looking forward to contribute for the better and to continually improve.</p>
                        <div className="flex gap-4 sm:justify-center md:justify-start">
                            <button className="px-4 py-3 mt-6 bg-transparent border border-white rounded">Contact Me</button>
                            <button className="px-4 py-3 mt-6 rounded bg-cyan-500">Download CV</button>
                        </div>
                    </div>
                    <div className="grid gap-10 leading-relaxed text-slate-600" id="section3">
                        <h2 className="text-xl">About Me</h2>
                        <p className="mt-3 text-pretty">I am a 4th-year college student expecting to graduate in a semester after OJT/Internships. I learned about HTML and CSS back when I was in grade 9 and that made me interested in programming in general. I had grown up to love knowing all the nerdy stuff, like a kid who discovers a manual for a potential lego masterpiece.</p>
                        <p className="mt-3 sm:text-balance md:text-pretty">Fast forward to where I am right now, I am looking forward to contribute for the better and to continually improve.</p>
                        <div className="flex gap-4 sm:justify-center md:justify-start">
                            <button className="px-4 py-3 mt-6 bg-transparent border border-white rounded">Contact Me</button>
                            <button className="px-4 py-3 mt-6 rounded bg-cyan-500">Download CV</button>
                        </div>
                    </div>
                 
                </main>
            </div>
        </div>
    )
}

export default Home