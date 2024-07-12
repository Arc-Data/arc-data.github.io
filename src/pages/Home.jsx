import { Timeline, TimelinePoint } from "flowbite-react"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import strapi from "../utils/strapi"
import FeaturedProject from "../components/FeaturedProject"
import PageContext from "../context/PageContext"
import { SiCss3, SiGithub, SiJavascript, SiTailwindcss } from "react-icons/si"
import { DiCss3, DiDjango, DiFirebase, DiHtml5, DiJavascript, DiLaravel, DiReact } from "react-icons/di"
import { FaReact, FaVuejs } from "react-icons/fa"
import { BsBootstrap } from "react-icons/bs"
import { RiFirebaseFill } from "react-icons/ri"
import { BiCaretRight } from "react-icons/bi"

const Home = () => {
    const [projects, setProjects] = useState([])
    const { defaultScreenDetails } = useContext(PageContext)

    // const scrollIntoView = (sectionId) => {
    //     const section = document.getElementById(sectionId)
    //     section.scrollIntoView({ behavior: 'smooth'})
    // }

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await strapi.get('api/projects?populate=*&IsFeatured=true')
                setProjects(response.data.data)
            }
            catch(error) {
                console.log(error)
            }
        }
        defaultScreenDetails()
        fetchArticles()
    }, [])

    return (
            <>
            <div className="grid gap-8 text-text-default" id="section1">
                <h2 className="text-xl font-bold text-center uppercase md:text-left text-text-800">About Me</h2>
                <p className="mx-auto mt-3 text-sm leading-8 text-justify indent-8 md:max-w-full md:px-0 md:leading-8 md:text-base ">
                    <span className="text-xl text-accent-default">Approach problem-solving </span>with <span className="text-xl text-accent-default">enthusiasm</span> and <span className="text-xl text-accent-default">passion! </span>  
                    I like building web technologies with the intention of being able to see myself as a fan or a consumer of it. <span className="text-xl text-accent-default">No cutting corners</span>, and aim to <span className="text-xl text-accent-default">deliver the best website experience possible</span>.  
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
                {/* <div className="flex justify-center gap-4 md:justify-start">
                    <button className="px-8 py-2.5 mt-6 rounded shadow-xl bg-secondary-default hover:border-cyan-500">Contact Me</button>
                    <button className="px-8 py-2.5 mt-6 rounded text-background-default bg-primary-default hover:shadow-primary-default hover:shadow-2xl">Download CV</button>
                </div> */}
            </div>
            
            <div className="py-10 text-base text-text-default" id="section2">
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
                            Contributed in the making of a Logistics Management System. Designed the initial database structure as well as its authentication features using Vue + Laravel
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
            </>
    )
}

export default Home