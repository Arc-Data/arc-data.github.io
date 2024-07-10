import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import PageContext from "../context/PageContext"
import dayjs from "dayjs"
import RelativeTime from "dayjs/plugin/relativeTime"
import Icon from "../components/Icon"

dayjs.extend(RelativeTime)
const MainLayout = () => {
    const { project, title, stack, showStack } = useContext(PageContext)
    
    return (
        <div className="max-w-screen-xl min-h-screen px-6 py-4 mx-auto text-white md:px-12 md:pt-20 sm:text-center md:text-left">
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
                            <p className="h-10 mt-3 text-lg text-text-700">Graduating from College Soon</p>
                            <div className="justify-center hidden gap-4 mt-4 md:flex md:mt-16 md:flex-col">
                                <Link to="https://github.com/Arc-Data" className="flex items-center gap-4">
                                    <i className="fa-brands fa-github fa-lg"></i>
                                    <p className="hidden md:block">Github</p>
                                </Link>
                                <Link to="https://www.linkedin.com/in/marc-stephen-gabres-5b04712b3/" className="flex items-center gap-4">
                                <i className="fa-brands fa-linkedin-in fa-lg"></i>
                                    <p className="hidden md:block">LinkedIn</p>
                                </Link>
                            </div>
                        </div>
                        }
                        <nav className="hidden mt-3 md:grid *:w-full  *:border-blue-500 *:rounded md:gap-2">
                            {/* <button onClick={() => scrollIntoView("section1")} className="flex items-center gap-2 px-2 py-3 group hover:bg-accent-default">
                                <span className="w-4 h-2 rounded bg-secondary-default group-hover:w-8 group-hover:bg-white"></span> 
                                <p className="uppercase">About Me</p>
                            </button>
                            <button onClick={() => scrollIntoView("section2")} className="flex items-center gap-2 px-2 py-3 group hover:bg-accent-default">
                                <span className="w-4 h-2 transition ease-in-out rounded bg-secondary-default delay-10 group-hover:w-8 group-hover:bg-white"></span> 
                                <p className="uppercase">Projects</p>
                            </button> */}
                        </nav>
                    </div>
                    
                </header>
                <main className="flex flex-col *:px-[1.5rem] gap-40 mt-10 text-sm md:w-3/4 md:flex-1 md:text-left">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout