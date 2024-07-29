import { createContext, useContext, useState } from "react"
import strapi from "../utils/strapi"

const PageContext = createContext()

export default PageContext

export const PageProvider = ({ children }) => {
    const [ project, setProject ] = useState()
    const [ showStack, setShowStack ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    const fetchProject = async (id) => {
        setLoading(true)
        setShowStack(true)
        try {
            const response = await strapi.get(`/api/projects/${id}?populate=*`)
            setProject(response.data.data.attributes)
        } catch (error) {
            console.log("An error occurred: ", error)
        } finally { 
            setLoading(false)
        }
    }

    const contextData = {
        showStack, 
        setShowStack,
        loading,
        setLoading,
        project,
        fetchProject
    }

    return (
        <PageContext.Provider value={contextData} >
            {children}
        </PageContext.Provider>
    )
}