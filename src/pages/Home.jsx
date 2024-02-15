import { useEffect } from "react"

const Home = () => {
    const handleScroll = () => {

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="max-w-screen-xl mt-12 mx-auto px-6 justify-center text-white flex flex-col md:flex-row sm:gap-10 md:gap-40 sm:text-center md:text-left">
            <div className="md:sticky md:top-24 md:h-fit">
                <h1 className="text-6xl md:text-4xl lg:text-5xl font-bold text-cyan-400">Arc</h1>
                <p className="text-lg md:mt-3 text-slate-400">I Build Full Stack Web Applications.</p>
                <p className="text-lg text-slate-600 md:mt-3">Graduating from college soon...</p>
                <div className="mt-4 md:mt-16 flex md:flex-col gap-4 justify-center">
                    <div className="flex gap-4 items-center">
                        <i className="fa-brands fa-github"></i>
                        <p className="hidden md:block">Github</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <i className="fa-brands fa-linkedin-in"></i>
                        <p className="hidden md:block">LinkedIn</p>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 h-screen">
                <div className="leading-relaxed">
                    <h2 className="text-xl">About Me</h2>
                    <p className="mt-3">I am a 4th-year college student expecting to graduate in a semester after OJT/Internships. I learned about HTML and CSS back when I was in grade 9 and that made me interested in programming in general. I had grown up to love knowing all the nerdy stuff, like a kid who discovers a manual for a potential lego masterpiece.</p>
                    <p className="mt-3">Fast forward to where I am right now, I am looking forward to contribute for the better and to continually improve.</p>
                    <button className="bg-cyan-500 rounded px-4 py-3 mt-6">Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default Home