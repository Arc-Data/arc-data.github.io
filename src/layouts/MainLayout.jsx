import { Link, Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div className="max-w-screen-xl min-h-screen px-6 py-4 mx-auto text-white md:px-12 md:pt-20 sm:text-center md:text-left">
            <div className="md:flex md:justify-between md:gap-20">
                <header className="pt-20 text-center md:text-left md:sticky md:top-20 md:flex md:flex-col md:max-h-screen md:w-1/4 ">
                    <div>
                        <h1 className="text-6xl font-bold text-primary-default md:text-4xl lg:text-6xl">Arc</h1>
                        <p className="mt-3 overflow-hidden text-lg text-primary-default">I Build Full Stack Web Applications.</p>
                        <p className="h-10 mt-3 text-lg text-text-700">Graduating from College Soon</p>
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
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout