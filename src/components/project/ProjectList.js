import { FaReact, FaJava, FaJsSquare, FaHtml5, FaCss3 } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import Project from './Project';

const ProjectList = () => {
    const allProjects = [
        { name: "E-commerce NAMP", url: "", img: <FaReact />,desc:"Tienda web para una empresa de bebidas."},
        { name: "Dogital", url: "", img: <FaReact />,desc:"Prototipo de un sistema para mascotas."},
        { name: "TurnosGO", url: "", img: <FaReact />,desc:"Sistema para la reserva y gestion de turnos."},
        { name: "Q'Yerba", url: "", img: <FaReact />,desc:"Ecommerce para una tienda de mates."}
    ];

    return (  
        <div className="grid grid-cols-5 gap-0 py-0">
            {allProjects.map((proj)=>(
                <Project name={proj.name} img={proj.img} desc={proj.desc}/>
            ))}
        </div>
    );
}
 
export default ProjectList;