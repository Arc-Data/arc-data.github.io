import { createContext, useContext, useState } from "react"

const PageContext = createContext()

export default PageContext

export const PageProvider = ({ children }) => {
    const [ title, setTitle ] = useState("Arc")
    const [ subtitle, setSubtitle ] = useState("I Build Full Stack Web Applications")
    const [ showStack, setShowStack ] = useState(false)
    const [ project, setProject ] = useState()
    const [ stack, setStack ] = useState([])

    const showProjectDetails = (project) => {
        setTitle(project.Title)
        setStack(project.technologies.data)
        setShowStack(true)
    }

    const defaultScreenDetails = () => {
        setTitle("Arc")
        setSubtitle("I Build Full Stack Web Apps")
        setShowStack(false)
    }

    const contextData = {
        title,
        setTitle,
        subtitle, 
        setSubtitle,
        stack,
        setStack,
        showStack, 
        setShowStack,
        showProjectDetails,
        defaultScreenDetails,
        project,
        setProject
    }

    return (
        <PageContext.Provider value={contextData} >
            {children}
        </PageContext.Provider>
    )
}