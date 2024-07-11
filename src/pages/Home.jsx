import { Timeline, TimelinePoint } from "flowbite-react"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import strapi from "../utils/strapi"
import FeaturedProject from "../components/FeaturedProject"
import PageContext from "../context/PageContext"

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
            <div className="grid gap-8 py-10 text-slate-200" id="section1">
                <h2 className="text-xl font-bold text-center uppercase md:text-left text-text-800">About Me</h2>
                <p className="px-[1.5rem] indent-8 md:max-w-full mx-auto text-justify mt-3 text-sm leading-8 md:px-0 md:leading-8 md:text-base ">
                    I am a 4th year college student set to graduate around October. I am passionate about learning and building web technologies. I see web development as a field that lets me apply my passion for learning almost immediately and is incredibly rewarding for that fact alone.    
                </p>
                <p className="px-[1.5rem] mx-auto md:px-0 md:max-w-full text-justify mt-3 text-sm leading-8 md:leading-8 md:text-base indent-8">
                    Outside of programming, I play DOTA, I watch anime, and I a read light novels and visual novels. I am also studying a bit of the Japanese language in my free time to fuel my hobbies.
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