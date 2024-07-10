import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import strapi from "../utils/strapi"
import { Spinner } from "flowbite-react"
import PageContext from "../context/PageContext"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

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

    console.log(project)

    return (
        <div>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <a href="#" className="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            {loading ? 
                                <Spinner /> :
                                <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 dark:text-gray-400">{project?.title}</span>
                            }
                        </div>
                    </li>
                </ol>
            </nav>
            { loading ? 
            <div className="grid w-full mt-4 place-items-center">
                <Spinner className="mt-20 size-20"/>
            </div>
            :
            <div className="flex flex-col w-full gap-4 mt-8 text-lg leading-8 text-text-200 ">
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
                <BlocksRenderer content={project.description}/>
            </div>
            }
            
        </div>
    )
}

export default ProjectDetail
