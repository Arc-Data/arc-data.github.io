import { FaLaravel, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango, SiStrapi } from "react-icons/si";

const Icon = ({icon, size=24}) => {
    console.log(icon )
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
        default:
            return (<FaReact size={size}/>)
    }
}

export default Icon