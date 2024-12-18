import { useContext, useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import PageContext from "../context/PageContext"
import dayjs from "dayjs"
import RelativeTime from "dayjs/plugin/relativeTime"
import Icon from "../components/Icon"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BsArrowUpRight } from "react-icons/bs"
import { Modal } from "flowbite-react"
import { MdOutlineArrowBackIosNew } from "react-icons/md"

dayjs.extend(RelativeTime)

const MainLayout = () => {
    const { project, showStack, loading } = useContext(PageContext)
    const [ openModal, setOpenModal ] = useState(false)
    const [ stack, setStack ] = useState([])

    useEffect(() => {
        if (project) {
            setStack(project.technologies.data)
        }
    }, [project])

    return (
        <div>
            <div className="fixed z-10 flex w-full p-6 border-b border-background-900 bg-background-default"></div>
            <div className="max-w-screen-xl min-h-screen px-0 py-4 mx-auto text-white md:px-12 md:pt-20 sm:text-center md:text-left">
                <div className="md:flex md:justify-between md:gap-20">
                    <header className="px-4 pt-20 space-y-8 text-center md:px-0 md:text-left md:sticky md:top-20 md:flex md:flex-col md:max-h-screen md:w-1/4">
                    {
                        showStack ?
                        <>
                        {/* Back Links */}
                        <Link to="/" className="flex items-center  gap-2 px-4 rounded-lg text-sm py-2.5 border border-transparent hover:border-accent-default hover:text-accent-default">
                            <MdOutlineArrowBackIosNew size={16} />
                            <span>Back</span>
                        </Link>
                        {
                        loading 
                        ? 
                        // Loading Bars
                        <div className="flex flex-col items-center space-y-4 md:items-start">
                            <div className="w-full h-2 rounded-full bg-primary-default animate-pulse"></div>
                            <div className="w-full h-2 rounded-full bg-primary-default animate-pulse"></div>
                            <div className="w-2/3 h-2 rounded-full bg-primary-default animate-pulse"></div>
                        </div>
                        :
                        <>
                        {/* Project Content */}
                        <div>
                            <h1 className="text-3xl font-bold font-heading text-primary-default md:text-2xl">{project.title}</h1>
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-wrap justify-center gap-2 mt-4 md:justify-normal md:max-w-80">
                                    {stack.map(item => {
                                        return (
                                            <div key={item.id} className="flex items-center gap-2 px-2 text-sm rounded bg-primary-800 ">
                                                <Icon icon={item.attributes.name} size={12} />
                                                <p>{item.attributes.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* Project Links */}
                        <div className="grid justify-center gap-2 md:justify-normal">
                            {project.links.data.map((link) => (
                                <a href={link.attributes.url} target="_blank" className="px-5 py-2.5 w-60 flex gap-2 items-center rounded-lg bg-background-800 border border-background-950 hover:bg-accent-default" key={link.id}>
                                    <Icon icon={"Github"} size={16}/>
                                    <span className="text-sm">Link to {link.attributes.name}</span></a>
                            ))}
                        </div>
                        {/* Article Last Updated */}
                        <div className="text-xs text-background-400">Article Last Updated: {dayjs(project.updatedAt).fromNow()}</div>
                        </>
                        }
                        </>
                        :
                        <>
                        {/* Default Screen */}
                        <div>
                            <h1 className="text-6xl font-bold font-heading text-primary-default md:text-4xl">Arc</h1>
                            <div>
                                <p className="mt-3 overflow-hidden text-base text-secondary-default font-heading">I Build Full Stack Web Applications.</p>
                                <div className="flex flex-col justify-center gap-2 mt-4 lg:flex-row md:justify-start">
                                    <button onClick={() => setOpenModal(true)} className="px-8 py-2.5 text-sm rounded shadow-xl bg-secondary-default hover:bg-secondary-500">Contact Me</button>
                                    {/* <button className="px-8 py-2.5  text-sm rounded text-background-default bg-primary-default hover:shadow-primary-default hover:shadow-2xl">Download CV</button> */}
                                </div>
                                <Modal dismissible size={'4xl'} show={openModal} onClose={() => setOpenModal(false)}>
                                    <Modal.Header className="border-none bg-background-800">
                                        <p className="text-text-default">Contact Me</p>
                                    </Modal.Header>
                                    <Modal.Body className="grid gap-4 md:grid-cols-2 bg-background-800">
                                        <p className="text-2xl text-text-default"> Get in touch. Let's build something great!</p>
                                        <form action="https://formsubmit.co/8b8f9b2810dbf1f78d8b6db43cd4bc85" method="POST" className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label for="name" class="block mb-2 text-sm text-text-default font-medium">Name</label>
                                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   placeholder="John Doe" required />
                                            </div>
                                            <div>
                                                <label for="email" class="block mb-2 text-sm text-text-default font-medium">Email</label>
                                                <input type="text" id="email" name="email" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="johndoe@email.com" required />
                                            </div>
                                            <div className="col-span-2">
                                                <label for="message" class="block mb-2 text-sm text-text-default font-medium">Your message</label>
                                                <textarea id="message" name="message" rows="6" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write your thoughts here..."></textarea>
                                            </div>       
                                            <button className="px-8 py-2.5 text-sm rounded shadow-xl bg-secondary-default hover:bg-secondary-500 text-text-default col-span-2">Contact Me</button>
                                        </form>
                                    </Modal.Body>
                                    <Modal.Footer className="border-none bg-background-800"></Modal.Footer>
                                </Modal>
                                <div className="flex justify-center gap-2 mt-4 md:flex-col md:mt-24">
                                    <a href="https://github.com/Arc-Data" target="_blank" className="flex items-center gap-2 rounded-lg px-5 py-2.5   hover:bg-accent-default">
                                        <FaGithub size={16} />
                                        <p>Github</p>
                                        <BsArrowUpRight size={12}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/marc-stephen-gabres-5b04712b3/" target="_blank" className="flex items-center gap-2 rounded-lg px-5 py-2.5  hover:bg-accent-default">
                                        <FaLinkedin size={16} />
                                        <p>LinkedIn</p>
                                        <BsArrowUpRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        </>
                    }
                    </header>
                    {/* {loading ? 
                    <header className="px-4 pt-20 space-y-8 text-center md:px-0 md:text-left md:sticky md:top-20 md:flex md:flex-col md:max-h-screen md:w-1/4">
                        <Link to="/" className="flex items-center  gap-2 px-4 rounded-lg text-sm py-2.5 border border-transparent hover:border-accent-default hover:text-accent-default">
                            <MdOutlineArrowBackIosNew size={16} />
                            <span>Back</span>
                        </Link>
                        <div className="flex flex-col items-center space-y-4 md:items-start">
                            <div className="w-full h-2 rounded-full bg-primary-default animate-pulse"></div>
                            <div className="w-full h-2 rounded-full bg-primary-default animate-pulse"></div>
                            <div className="w-2/3 h-2 rounded-full bg-primary-default animate-pulse"></div>
                        </div>
                    </header>
                    :
                    <header className="px-4 pt-20 text-center md:px-0 md:text-left md:sticky md:top-20 md:flex md:flex-col md:max-h-screen md:w-1/4">
                        {showStack ?
                        <div className="space-y-8">
                            <Link to="/" className="flex items-center  gap-2 px-4 rounded-lg text-sm py-2.5 border border-transparent hover:border-accent-default hover:text-accent-default">
                                <MdOutlineArrowBackIosNew size={16} />
                                <span>Back</span>
                            </Link>
                            <div>
                                <h1 className="text-3xl font-bold font-heading text-primary-default md:text-2xl">{project.title}</h1>
                                <div className="flex flex-col gap-10">
                                    <div className="flex flex-wrap justify-center gap-2 mt-4 md:justify-normal md:max-w-80">
                                        {stack.map(item => {
                                            return (
                                                <div key={item.id} className="flex items-center gap-2 px-2 text-sm rounded bg-primary-800 ">
                                                    <Icon icon={item.attributes.name} size={12} />
                                                    <p>{item.attributes.name}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="grid justify-center gap-2 md:justify-normal">
                                {project.links.data.map((link) => (
                                    <a href={link.attributes.url} target="_blank" className="px-5 py-2.5 w-60 flex gap-2 items-center rounded-lg bg-background-800 border border-background-950 hover:bg-accent-default" key={link.id}>
                                        <Icon icon={"Github"} size={16}/>
                                        <span className="text-sm">Link to {link.attributes.name}</span></a>
                                ))}
                            </div>
                            <div className="text-xs text-background-400">Article Last Updated: {dayjs(project.updatedAt).fromNow()}</div>
                        </div>
                        :
                        <div>
                            <h1 className="text-6xl font-bold font-heading text-primary-default md:text-4xl">Arc</h1>
                            <div>
                                <p className="mt-3 overflow-hidden text-base text-secondary-default font-heading">I Build Full Stack Web Applications.</p>
                                <div className="flex flex-col justify-center gap-2 mt-4 lg:flex-row md:justify-start">
                                    <button onClick={() => setOpenModal(true)} className="px-8 py-2.5 text-sm rounded shadow-xl bg-secondary-default hover:bg-secondary-500">Contact Me</button>
                                    <button className="px-8 py-2.5  text-sm rounded text-background-default bg-primary-default hover:shadow-primary-default hover:shadow-2xl">Download CV</button>
                                </div>
                                <Modal dismissible size={'4xl'} show={openModal} onClose={() => setOpenModal(false)}>
                                    <Modal.Header className="border-none bg-background-800">
                                        <p className="text-text-default">Contact Me</p>
                                    </Modal.Header>
                                    <Modal.Body className="grid gap-4 md:grid-cols-2 bg-background-800">
                                        <p className="text-2xl text-text-default"> Get in touch. Let's build something great!</p>
                                        <form action="https://formsubmit.co/8b8f9b2810dbf1f78d8b6db43cd4bc85" method="POST" className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label for="name" class="block mb-2 text-sm text-text-default font-medium">Name</label>
                                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   placeholder="John Doe" required />
                                            </div>
                                            <div>
                                                <label for="email" class="block mb-2 text-sm text-text-default font-medium">Email</label>
                                                <input type="text" id="email" name="email" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="johndoe@email.com" required />
                                            </div>
                                            <div className="col-span-2">
                                                <label for="message" class="block mb-2 text-sm text-text-default font-medium">Your message</label>
                                                <textarea id="message" name="message" rows="6" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write your thoughts here..."></textarea>
                                            </div>       
                                            <button className="px-8 py-2.5 text-sm rounded shadow-xl bg-secondary-default hover:bg-secondary-500 text-text-default col-span-2">Contact Me</button>
                                        </form>
                                    </Modal.Body>
                                    <Modal.Footer className="border-none bg-background-800"></Modal.Footer>
                                </Modal>
                                <div className="flex justify-center gap-2 mt-4 md:flex-col md:mt-24">
                                    <a href="https://github.com/Arc-Data" target="_blank" className="flex items-center gap-2 rounded-lg px-5 py-2.5   hover:bg-accent-default">
                                        <FaGithub size={16} />
                                        <p>Github</p>
                                        <BsArrowUpRight size={12}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/marc-stephen-gabres-5b04712b3/" target="_blank" className="flex items-center gap-2 rounded-lg px-5 py-2.5  hover:bg-accent-default">
                                        <FaLinkedin size={16} />
                                        <p>LinkedIn</p>
                                        <BsArrowUpRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        }
                    </header>
                    } */}
                    <main className="flex flex-col *:px-[1.5rem] gap-40 mt-10 text-sm md:w-3/4 md:flex-1 md:text-left text-text-default">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default MainLayout