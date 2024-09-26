import { FaReact, FaJava, FaJsSquare, FaHtml5, FaCss3 } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import Project from './Project';
import nampImg from './../../assets/namp-prod.png'
import dogitalImg from './../../assets/dogit.png'
import turnosGoImg from './../../assets/turnos-go-land.png'
import qyerbaImg from './../../assets/qyerba-web.png'

const ProjectList = () => {
    const allProjects = [
        { name: "E-commerce NAMP", url: "", img: nampImg,desc:"Tienda web para una empresa de bebidas."},
        { name: "Dogital", url: "", img: dogitalImg ,desc:"Prototipo de un sistema para mascotas."},
        { name: "TurnosGO", url: "", img: turnosGoImg,desc:"Sistema para la reserva y gestion de turnos."},
        { name: "Q'Yerba", url: "", img: qyerbaImg,desc:"Mi primer web en el curso de React JS en Coder."}
    ];

    return (  
        <div className="grid grid-cols-2 gap-6 py-0">
            {allProjects.map((proj)=>(
                <Project name={proj.name} img={proj.img} desc={proj.desc}/>
            ))}
        </div>
    );
}
 
export default ProjectList;