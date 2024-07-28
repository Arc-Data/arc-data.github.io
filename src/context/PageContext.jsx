import { createContext, useContext, useState } from "react"

const PageContext = createContext()

export default PageContext

export const PageProvider = ({ children }) => {
    const [ title, setTitle ] = useState("Arc")
    const [ subtitle, setSubtitle ] = useState("I Build Full Stack Web Applications")
    const [ showStack, setShowStack ] = useState(false)
    const [ project, setProject ] = useState()
    const [ stack, setStack ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const showProjectDetails = (project) => {
        setLoading(true)
        setTitle(project.title)
        setStack(project.technologies.data)
        setShowStack(true)
        setLoading(false)
    }

    const defaultScreenDetails = () => {
        setLoading(true)
        setTitle("Arc")
        setSubtitle("I Build Full Stack Web Apps")
        setShowStack(false)
        setLoading(false)
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
        setProject,
        loading,
        setLoading
    }

    return (
        <PageContext.Provider value={contextData} >
            {children}
        </PageContext.Provider>
    )
}