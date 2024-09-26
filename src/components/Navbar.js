import logoBPS from './../assets/bps.png'
import logoSP from './../assets/spotify-logo.png'
import { MdVerified } from "react-icons/md";

const Navbar = () => {
    return ( 
        <div className='ml-8'>
            <nav className="bg-black bg-opacity-75 font-spotify p-4 rounded-full fixed top-4 left-8 right-8 z-10">
                <div className="flex items-center justify-between">
                    <div className='flex items-center'>
                        <img src={logoSP} className='h-10 opacity-95'></img>
                        <h1 className="font-black text-lg text-white opacity-95 ml-2 flex items-center">
                            Samuel Bustos Puntis
                            <span className='ml-1 text-blue-500'><MdVerified/></span>
                        </h1>
                    </div>
                    
                    <div className="hidden md:flex space-x-4 mr-2 font-spotify">
                        <a href="#home" className="text-gray-300 hover:text-white">
                            Inicio
                        </a>
                        <a href="#skills" className="text-gray-300 hover:text-white">
                            Habilidades
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-white">
                            Proyectos
                        </a>
                    </div>
                </div>
                
            </nav>
        </div>
     );
}
 
export default Navbar;