import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const scrollIntoView = (sectionId) => {
        const section = document.getElementById(sectionId)
        section.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div className="max-w-screen-xl px-6 py-12 mx-auto text-white md:px-12 md:py-20 sm:text-center md:text-left">
            <div className="md:flex md:justify-between md:gap-20">
                <header className="pt-20 text-center md:text-left md:sticky md:top-20 md:flex md:flex-col md:max-h-screen md:w-1/4 ">
                    <div>
                        <h1 className="text-6xl font-bold text-primary-default md:text-4xl lg:text-6xl">Arc</h1>
                        <p className="mt-3 overflow-hidden text-lg text-primary-default">I Build Full Stack Web Applications.</p>
                        <p className="h-10 mt-3 text-lg text-text-700">Graduating from College Soon</p>
                        <nav className="hidden mt-3 md:grid *:w-full  *:border-blue-500 *:rounded md:gap-2">
                            <button onClick={() => scrollIntoView("section1")} className="flex items-center gap-2 px-2 py-3 group hover:bg-accent-default">
                                <span className="w-4 h-2 rounded bg-secondary-default group-hover:w-8 group-hover:bg-white"></span> 
                                <p className="uppercase">About Me</p>
                            </button>
                            <button onClick={() => scrollIntoView("section2")} className="flex items-center gap-2 px-2 py-3 group hover:bg-accent-default">
                                <span className="w-4 h-2 transition ease-in-out rounded bg-secondary-default delay-10 group-hover:w-8 group-hover:bg-white"></span> 
                                <p className="uppercase">Projects</p>
                            </button>
                        </nav>
                    </div>
                    <div className="flex justify-center gap-4 mt-4 md:mt-16 md:flex-col">
                        <Link to="https://github.com/Arc-Data" className="flex items-center gap-4">
                            <i className="fa-brands fa-github fa-lg"></i>
                            <p className="hidden md:block">Github</p>
                        </Link>
                        <Link to="https://www.linkedin.com/in/marc-stephen-gabres-5b04712b3/" className="flex items-center gap-4">
                            <i className="fa-brands fa-linkedin-in fa-lg"></i>
                            <p className="hidden md:block">LinkedIn</p>
                        </Link>
                    </div>
                </header>
                <main className="flex flex-col *:px-[1.5rem] gap-40 mt-10 text-sm md:w-3/4 md:flex-1 md:text-left">
                    <div className="grid gap-8 py-10 text-slate-200" id="section1">
                        <h2 className="text-xl font-bold text-center uppercase md:text-left text-text-800">About Me</h2>
                        <p className="px-[1.5rem] indent-8 md:max-w-full mx-auto text-justify mt-3 text-sm leading-8 md:px-0 md:leading-8 md:text-base ">
                            I am a 4th-year college student expecting to graduate in a semester after OJT/Internships. I learned about HTML and CSS back when I was in grade 9 and that made me interested in programming in general. I had grown up to love knowing all the nerdy stuff, like a kid who discovers a manual for a potential lego masterpiece. 
                            I am looking forward to contribute to the community.
                        </p>
                        <p className="px-[1.5rem] mx-auto md:px-0 md:max-w-full text-justify mt-3 text-sm leading-8 md:leading-8 md:text-base indent-8">
                            Outside of programming, my interests lie in anime, light novels and visual novels, and I have been studying Japanese language in my free time.
                        </p>
                        <div className="flex justify-center gap-4 md:justify-start">
                            <button className="px-8 py-2.5 mt-6 rounded shadow-xl bg-secondary-default hover:border-cyan-500">Contact Me</button>
                            <button className="px-8 py-2.5 mt-6 rounded text-background-default bg-primary-default hover:shadow-primary-default hover:shadow-2xl">Download CV</button>
                        </div>
                    </div>
                    <div className="py-10 text-base text-slate-200" id="section2">
                        <h2 className="text-xl font-bold text-center uppercase md:text-left text-text-800">Featured Projects</h2>
                        <div className="grid mt-4 *:py-4">
                            <div>
                                <div className="grid px-4 py-6 rounded group md:grid-cols-3 gap-x-5 gap-y-8 md:gap-y-8 hover:bg-slate-800 hover:cursor-pointer">
                                    <img src="irs.png" alt="" className="object-cover col-span-3 border-2 border-gray-300 rounded group-hover:border-cyan-500 md:col-span-1"/>
                                    <div className="col-span-3 md:col-span-2">
                                        <h2 className="text-lg font-medium text-center group-hover:text-blue-400 md:text-left">Itinerary Recommendation System</h2>
                                        <p className="mt-2 text-md">A travel planning website where interested travelers may create their own itinerary and also involves analyzing and matching user preferences to possible itineraries or recommended locations in Cebu. Capstone Research Project.</p>
                                        <div className="mt-4 flex justify-center md:justify-between gap-4 *:items-center *:flex *:gap-2">
                                            <div>
                                                <i className="fa-solid fa-link"></i>    
                                                <p>Frontend Repository</p>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-link"></i>    
                                                <p>Backend Repository</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap justify-center gap-2 mt-4 md:justify-normal">
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