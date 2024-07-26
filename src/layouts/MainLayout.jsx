import { useContext, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import PageContext from "../context/PageContext"
import dayjs from "dayjs"
import RelativeTime from "dayjs/plugin/relativeTime"
import Icon from "../components/Icon"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BsArrowUpRight } from "react-icons/bs"
import { Modal } from "flowbite-react"

dayjs.extend(RelativeTime)
const MainLayout = () => {
    const { project, title, stack, showStack } = useContext(PageContext)
    const [ openModal, setOpenModal ] = useState(false)

    return (
        <div>
            <div className="fixed flex w-full py-4 border-b border-background-900 z-1 bg-background-default">
                <div className="container flex justify-center max-w-6xl gap-8 mx-auto text-sm md:justify-normal ">
                    <Link to="/" className="md:ml-auto">Home</Link>
                    <div>Projects</div>
                    <div>About Me</div>
                </div>
            </div>
            <div className="max-w-screen-xl min-h-screen px-0 py-4 mx-auto text-white md:px-12 md:pt-20 sm:text-center md:text-left">
                <div className="md:flex md:justify-between md:gap-20">
                    <header className="pt-20 text-center md:text-left md:sticky md:top-20 md:flex md:flex-col md:max-h-screen md:w-1/4 ">
                        <div>
                            <h1 className="text-3xl font-bold text-primary-default md:text-3xl lg:text-4xl">{title}</h1>
                            
                            {showStack ? 
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
                                <p className="mt-3 overflow-hidden text-lg text-primary-default">I Build Full Stack Web Applications.</p>
                                <div className="flex justify-center gap-2 mt-4 md:justify-start">
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
                            }
                        </div>
                    </header>
                    <main className="flex flex-col *:px-[1.5rem] gap-40 mt-10 text-sm md:w-3/4 md:flex-1 md:text-left text-text-default">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default MainLayout