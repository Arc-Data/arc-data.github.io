import { FaGithub, FaLaravel, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCloudinary, SiDjango, SiOpenstreetmap, SiPusher, SiRender, SiStrapi } from "react-icons/si";

const Icon = ({icon, size=24}) => {
    switch (icon) {
        case 'React': 
            return (<FaReact size={size} aria-label="React"/>)
        case 'Tailwind': 
            return (<RiTailwindCssFill size={size} />)
        case 'Laravel':
            return (<FaLaravel size={size} />)
        case 'Strapi':
            return (<SiStrapi size={size} />)
        case 'Django':
            return (<SiDjango size={size} />)
        case 'Cloudinary':
            return (<SiCloudinary size={size} />)
        case 'Render':
            return (<SiRender size={size} />)
        case 'Github':
            return (<FaGithub size={size} />)
        case 'OpenStreetMap':
            return (<SiOpenstreetmap size={size} />)
        case 'Pusher':
            return (<SiPusher size={size} />)
        default:
            return (<FaReact size={size}/>)
    }
}

export default Icon