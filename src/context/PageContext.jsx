import { createContext, useContext, useState } from "react"
import strapi from "../utils/strapi"

const PageContext = createContext()

export default PageContext

export const PageProvider = ({ children }) => {
    const [ title, setTitle ] = useState("Arc")
    const [ subtitle, setSubtitle ] = useState("I Build Full Stack Web Applications")
    const [ showStack, setShowStack ] = useState(false)
    const [ project, setProject ] = useState()
    const [ stack, setStack ] = useState([])
    const [ loading, setLoading ] = useState(true)


    const getProjectDetails = async (id) => {
        try {
            const response = await strapi.get(`/api/projects/${id}?populate=*`)
            setProject(response.data.data.attributes)
            showProjectDetails(response.data.data.attributes)
        } catch (error) {
            console.log("An error occurred: ", error)
        } finally { 
            setLoading(false)
        }
    }

    const showProjectDetails = (project) => {
        setTitle(project.title)
        setStack(project.technologies.data)
        setShowStack(true)
    }

    const defaultScreenDetails = () => {
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
        setLoading,
        getProjectDetails
    }

    return (
        <PageContext.Provider value={contextData} >
            {children}
        </PageContext.Provider>
    )
}