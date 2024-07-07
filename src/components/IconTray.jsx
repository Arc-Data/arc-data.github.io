import { FaLaravel, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStrapi } from "react-icons/si";

const IconTray = ({ technologies, size = 24 }) => {

    const Icon = (icon) => {
        const name = icon.icon.attributes.name
        switch (name) {
            case 'React': 
                return (<FaReact size={size} aria-label="React"/>)
            case 'Tailwind': 
                return (<RiTailwindCssFill size={size} />)
            case 'Laravel':
                return (<FaLaravel size={size} />)
            case 'Strapi':
                return (<SiStrapi size={size} />)
            default:
                return (<FaReact size={size}/>)
        }
    }

    console.log("Technologies", technologies)

    return (
        <div className="flex justify-center gap-8 p-4 rounded-lg bg-background-900">
            {technologies.data.map(tech => <Icon icon={tech} key={tech.id}/>)}
        </div>
    )
}

export default IconTray