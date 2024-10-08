import Project from "../components/project/Project";
import ProjectList from "../components/project/ProjectList";


const ProjectsPage = () => {
    return ( 
        <div className="bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen ">
            <div className="flex items-center justify-start">
                <h1 className="font-spotify font-black text-3xl text-white mt-28 ml-20">Proyectos</h1>
                
            </div>
            <div className="ml-20 py-12">
                <ProjectList/>
            </div>
            
        </div>
     );
}
 
export default ProjectsPage;