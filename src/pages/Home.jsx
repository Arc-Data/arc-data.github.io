import { Timeline, TimelinePoint } from "flowbite-react"
import { useContext, useEffect, useState } from "react"
import strapi from "../utils/strapi"
import FeaturedProject from "../components/FeaturedProject"
import PageContext from "../context/PageContext"
import { SiCss3, SiGithub, SiJavascript, SiTailwindcss } from "react-icons/si"
import {  DiDjango,  DiHtml5, DiJavascript, DiLaravel, DiReact } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { BiCaretRight } from "react-icons/bi"

const Home = () => {
    const [ projects, setProjects ] = useState([])
    const [ loading, setLoading ] = useState(true)
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
            finally {
                setLoading(false)
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
            </div>
            
            <div className="py-10 text-base text-text-default" id="section2">
                <h2 className="text-xl font-bold text-center uppercase md:text-left text-text-800">Featured Projects</h2>
                <div className="grid mt-4 *:py-4">
                    {loading ? 
                    <div className="grid gap-24 md:gap-8 place-items-center md:place-items-start">
                        <div class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                            <div class="flex items-center justify-center h-36 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                            </div>
                            <div class="w-full">
                                <div class="h-2.5 bg-background-800 rounded-full w-48 mb-4"></div>
                                <div class="h-2 bg-background-800 rounded-full mb-3 "></div>
                                <div class="h-2 bg-background-800 rounded-full mb-3 "></div>
                                <div class="h-2 bg-background-800 rounded-full mb-3 "></div>
                                <div class="h-2 w-24 bg-background-800 rounded-full mb-3"></div>
                            </div>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                            <div class="flex items-center justify-center h-36 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                            </div>
                            <div class="w-full">
                                <div class="h-2.5 bg-background-800 rounded-full w-48 mb-4"></div>
                                <div class="h-2 bg-background-800 rounded-full mb-2.5 "></div>
                                <div class="h-2 bg-background-800 rounded-full mb-2.5"></div>
                                <div class="h-2 bg-background-800 rounded-full mb-2.5"></div>
                                <div class="h-2 bg-background-800 rounded-full mb-2.5"></div>
                                <div class="h-2 bg-background-800 rounded-full "></div>
                            </div>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                            <div class="flex items-center justify-center h-36 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                <svg class="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                            </div>
                            <div class="w-full">
                                <div class="h-2.5 bg-background-800 rounded-full w-48 mb-4"></div>
                                <div class="h-2 bg-background-800 rounded-full mb-2.5 "></div>
                                <div class="h-2 bg-background-800 rounded-full mb-2.5"></div>
                                <div class="h-2 bg-background-800 rounded-full mb-2.5"></div>
                                <div class="h-2 bg-background-800 rounded-full mb-2.5"></div>
                                <div class="h-2 bg-background-800 rounded-full "></div>
                            </div>
                            <span class="sr-only">Loading...</span>
                        </div>
                        
                    </div>
                    :
                    projects.map(project => <FeaturedProject key={project.id} project={project} />)
                    }
                </div>
            </div>
            <div className="py-10">
                <h2 className="text-xl font-bold text-center uppercase md:text-left text-text-800">Developer History</h2>
                <Timeline className="my-10">
                    
                    
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>April 2024 - July 2024</Timeline.Time>
                        <div className="px-4 mt-4 border border-gray-800 border-dashed rounded"> 
                            <Timeline.Title className="my-4 text-primary-default">Web Developer Intern at Lamina Studios</Timeline.Title>
                            <Timeline.Body>
                                <div>Learned more about projects from a real world perspective. Picked up Laravel and Vue</div>
                                <div className="p-4 mt-4">
                                    <Timeline className="mt-4">

                                        <Timeline.Item>
                                            <Timeline.Point />
                                            <Timeline.Content >
                                                <Timeline.Time>May - July 2024</Timeline.Time>
                                                <div className="p-4 my-4 border border-gray-800 border-dashed rounded">
                                                    <Timeline.Title className="my-4 text-primary-default">Logistics System</Timeline.Title>
                                                    <Timeline.Body className="space-y-8">
                                                        <div>Worked on a company project involving truck logistics. Heavily involved with the initial database structure as well as authentication related functions.</div>
                                                        <p className="text-lg text-secondary-default">Key Experiences</p>
                                                        <div className="px-4 space-y-2 list-disc">
                                                            <li>Collaborated with other interns for the initial database structure</li>
                                                            <li>Heavily involved in managing authentication between differing user types, as well as using experience with tools from past projects to create a better user experience.</li>
                                                        </div>
                                                    </Timeline.Body>
                                                </div>
                                            </Timeline.Content>
                                        </Timeline.Item>

                                        <Timeline.Item>
                                            <Timeline.Point />
                                            <Timeline.Content >
                                                <Timeline.Time>May 2024</Timeline.Time>
                                                <div className="p-4 my-4 border border-gray-800 border-dashed rounded">
                                                    <Timeline.Title className="my-4 text-primary-default">To Do List - Vue</Timeline.Title>
                                                    <Timeline.Body className="space-y-8">
                                                        <div>Built a basic to-do list app in order to learn Vue and learned about theme switching using color palettes from RealTime Colors</div>
                                                        <p className="text-lg text-secondary-default">Key Experiences</p>
                                                        <div className="px-4 space-y-2 list-disc">
                                                            <li>Picked up Vue for the first time.</li>
                                                            <li>Managed authentication contexts using Pinia.</li>
                                                            <li>Utilized RealTime Colors and Tailwind CSS to implement dark and light mode theme switches</li>
                                                        </div>
                                                    </Timeline.Body>
                                                </div>
                                            </Timeline.Content>
                                        </Timeline.Item>


                                        <Timeline.Item>
                                            <Timeline.Point />
                                            <Timeline.Content >
                                                <Timeline.Time>April - May 2024</Timeline.Time>
                                                <div className="p-4 my-4 border border-gray-800 border-dashed rounded">
                                                    <Timeline.Title className="my-4 text-primary-default">WriteUps</Timeline.Title>
                                                    <Timeline.Body className="space-y-8">
                                                        <div>Built a Social Media Website to learn the basics of Laravel. Also learned about Realtime Notifications using Pusher API and utilizing Flowbite designs for better user interfaces. </div>
                                                        <p className="text-lg text-secondary-default">Key Experiences</p>
                                                        <div className="px-4 space-y-2 list-disc">
                                                            <li>Picked up Laravel for the first time.</li>
                                                            <li>Actively used TailwindCSS for making responsive content.</li>
                                                            <li>Learned about realtime notifications using Pusher API.</li>
                                                            <li>Used Flowbite designs and RealTime Colors website as a guide for creating better user interfaces.</li>
                                                        </div>
                                                    </Timeline.Body>
                                                </div>
                                            </Timeline.Content>
                                        </Timeline.Item>

                                        
                                    </Timeline>                                    
                                </div>
                            </Timeline.Body>
                        </div>
                        </Timeline.Content>
                    </Timeline.Item>
                    {/* <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>April 2024</Timeline.Time>
                        <div className="px-4 mt-4 border border-gray-800 border-dashed rounded"> 
                            <Timeline.Title className="my-4 text-primary-default">WriteUps</Timeline.Title>
                            <Timeline.Body>
                                Built a Social Media Website in order to learn the basics of Laravel. 
                            </Timeline.Body>
                        </div>
                        </Timeline.Content>
                    </Timeline.Item> */}

                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>May 2023 - March 2024</Timeline.Time>
                        <div className="px-4 mt-4 border border-gray-800 border-dashed rounded"> 
                            <Timeline.Title className="my-4 text-primary-default">CebuRoute</Timeline.Title>
                            <Timeline.Body className="space-y-8">
                                <p className="">
                                Technical Lead for a Capstone Project involving an Itinerary Recommendation System. Learned more about content-based filtering recommendation systems, as well as first real experience with deployment services and first real big project in React. 
                                </p>
                                <p className="text-lg text-secondary-default">Key Experiences</p>
                                <div className="px-4 space-y-2 list-disc">
                                    <li>Taught groupmates to use Git and Github in order to collaborate code assignments. Gained more experience managing project repositories.</li>
                                    <li>Researched about content-based filtering systems and devised algorithms for different kinds of recommendation contexts.</li>
                                    <li>Implemented OpenStreetMap API for added visual representation for selected locations.</li>
                                    <li>First experience with deploying client and server web services.</li>
                                </div>
                            </Timeline.Body>
                        </div>
                        </Timeline.Content>
                    </Timeline.Item>
                    </Timeline>
            </div>
            </>
    )
}

export default Home