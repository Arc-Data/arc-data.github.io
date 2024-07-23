import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import strapi from "../utils/strapi"
import { Spinner } from "flowbite-react"
import PageContext from "../context/PageContext"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { BsImage } from "react-icons/bs"

const blocks = {
    paragraph: ({ children }) => <p className="leading-loose text-justify text-md indent-8">{children}</p>,
    heading: ({ children }) => <h2 className="my-4 text-2xl text-bold">{children}</h2>,
    list: ({children, format }) => {
        switch(format) {
            case 'unordered':
                return <ul className="leading-loose list-decimal text-md">{children}</ul>
            case 'ordered':
                return <ol className="leading-loose list-disc text-md">{children}</ol>
        }
    }
}

const ProjectDetail = () => {
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const { project, setProject, showProjectDetails } = useContext(PageContext)

    useEffect(() => {
        const fetchProject = async () => {
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

        fetchProject()
    }, [id])


    return (
        <div>
            { loading ? 
            <div className="grid w-full mt-8 animate-pulse">
                <div className="grid w-full h-96 place-items-center bg-background-800 ">
                    <BsImage size={32}/>
                </div>  
                {/* <div className="w-64 h-8 mt-4 bg-background-800 "></div> */}
                <div className="w-full h-4 mt-12 ml-8 rounded-lg bg-background-800 "></div>
                <div className="w-full h-4 mt-4 rounded-lg bg-background-800 "></div>
                <div className="w-full h-4 mt-4 rounded-lg bg-background-800 "></div>
                <div className="w-64 h-4 mt-4 rounded-lg bg-background-800 "></div>
            </div>
            :
            <div className="flex flex-col w-full gap-4 mt-8 text-lg leading-8 text-text-default ">
                <img
                    src={project?.header?.data?.attributes?.formats?.large.url}
                    // srcSet={`
                    //     ${project?.header?.data?.attributes?.formats?.thumbnail?.url} 245w, 
                    //     ${project?.header?.data?.attributes?.formats?.small?.url} 500w, 
                    //     ${project?.header?.data?.attributes?.formats?.medium?.url} 750w, 
                    //     ${project?.header?.data?.attributes?.formats?.large?.url} 1000w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    alt=""
                    className="object-cover border-2 border-gray-300 rounded group-hover:border-cyan-500"
                />
                <BlocksRenderer 
                    blocks={blocks}
                    content={project.description}/>
            </div>
            }
            
        </div>
    )
}

export default ProjectDetail
