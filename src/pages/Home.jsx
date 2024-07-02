import { Timeline, TimelinePoint } from "flowbite-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import strapi from "../utils/strapi"
import FeaturedProject from "../components/FeaturedProject"

const Home = () => {
    const [projects, setProjects] = useState([])

    const scrollIntoView = (sectionId) => {
        const section = document.getElementById(sectionId)
        section.scrollIntoView({ behavior: 'smooth'})
    }

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await strapi.get('projects?populate=*&IsFeatured=true')
                setProjects(response.data.data)
            }
            catch(error) {
                console.log(error)
            }
        }

        fetchArticles()
    }, [])

    return (
        <div className="max-w-screen-xl px-6 py-4 mx-auto text-white md:px-12 md:pt-20 sm:text-center md:text-left">
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
                            I am a 4th-year college student expecting to graduate on October. I am very much motivated to improving my craft and I know my way around learning new technologies. 
                            I mainly use ReactJS, Django and Tailwind, and also had experience using Laravel and Vue
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
                                {projects.map(project => <FeaturedProject key={project.id} project={project} />)}
                            </div>
                        </div>
                        <div className="text-right">View All</div>
                    </div>
                    <div className="py-10">
                        <h2 className="text-xl font-bold text-center uppercase md:text-left text-text-800">Developer History</h2>
                        <Timeline className="my-10">
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>April 2024 - July 2024</Timeline.Time>
                                <Timeline.Title className="text-primary-default">Web Developer Intern at Lamina Studios</Timeline.Title>
                                <Timeline.Body>
                                    Contributed in the making of a Logistics Management System. Designed the initial database structure
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>April 2024</Timeline.Time>
                                <Timeline.Title className="text-primary-default">WriteUps</Timeline.Title>
                                <Timeline.Body>
                                   Built a Social Media Website in order to learn the basics of Laravel. 
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>

                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>March 2024</Timeline.Time>
                                <Timeline.Title className="text-primary-default">CebuRoute</Timeline.Title>
                                <Timeline.Body>
                                    Technical Lead for a Capstone Project involving an Itinerary Recommendation System. 
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            </Timeline>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home