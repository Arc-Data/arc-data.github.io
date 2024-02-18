import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const scrollIntoView = (sectionId) => {
        const section = document.getElementById(sectionId)
        section.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div className="max-w-screen-xl min-h-screen px-6 py-12 mx-auto text-white md:px-12 md:py-20 sm:text-center md:text-left">
            <div className="md:flex md:justify-between md:gap-20">
                <header className="pt-20 text-center md:text-left md:sticky md:top-20 md:flex md:flex-col md:max-h-screen md:w-1/4 ">
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
                                <p className="uppercase">Projects</p>
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
                <main className="flex flex-col *:px-[1.5rem] gap-40 mt-10 text-sm md:w-3/4 md:flex-1 md:text-left">
                    <div className="grid gap-8 py-10 text-slate-200" id="section1">
                        <h2 className="text-xl font-bold text-center uppercase md:text-left text-slate-500">About Me</h2>
                        <p className="px-[1.5rem] indent-8 md:max-w-full mx-auto text-justify mt-3 text-sm leading-8 md:px-0 md:leading-8 md:text-base ">
                            I am a 4th-year college student expecting to graduate in a semester after OJT/Internships. I learned about HTML and CSS back when I was in grade 9 and that made me interested in programming in general. I had grown up to love knowing all the nerdy stuff, like a kid who discovers a manual for a potential lego masterpiece. 
                            I am looking forward to contribute to the community.
                        </p>
                        <p className="px-[1.5rem] mx-auto md:px-0 md:max-w-full text-justify mt-3 text-sm leading-8 md:leading-8 md:text-base indent-8">
                            Outside of programming, my interests lie in anime, light novels and visual novels, and I have been studying Japanese language in my free time.
                        </p>
                        <div className="flex justify-center gap-4 md:justify-start">
                            <button className="px-4 py-3 mt-6 bg-transparent border border-white rounded">Contact Me</button>
                            <button className="px-4 py-3 mt-6 bg-blue-800 rounded hover:bg-blue-700">Download CV</button>
                        </div>
                    </div>
                    <div className="py-10 text-base text-slate-200" id="section2">
                        <h2 className="text-xl font-bold text-center uppercase md:text-left text-slate-500">Featured Projects</h2>
                        <div className="grid mt-4 *:py-4">
                            <div>
                                <div className="grid px-4 py-6 rounded md:grid-cols-3 gap-x-5 gap-y-8 md:gap-y-8 hover:bg-slate-800 hover:cursor-pointer">
                                    <img src="irs.png" alt="" className="object-cover col-span-3 rounded md:col-span-1"/>
                                    <div className="col-span-3 md:col-span-2">
                                        <h2 className="text-lg font-medium text-center md:text-left">Itinerary Recommendation System</h2>
                                        <p className="mt-2 text-md">A travel planning website where interested travelers may create their own itinerary and also involves analyzing and matching user preferences to possible itineraries or recommended locations in Cebu. Capstone Research Project.</p>
                                        <div className="flex flex-wrap justify-center gap-2 mt-6 md:justify-normal">
                                            <div className="px-4 py-1 text-sm rounded-2xl bg-cyan-500">Django</div>
                                            <div className="px-4 py-1 text-sm rounded-2xl bg-cyan-500">React</div>
                                            <div className="px-4 py-1 text-sm rounded-2xl bg-cyan-500">OpenStreetMap</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="text-right">View All</div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home