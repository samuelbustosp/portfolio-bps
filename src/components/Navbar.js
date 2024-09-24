import logoBPS from './../assets/bps.png'
import logoSP from './../assets/spotify-logo.png'
import { MdVerified } from "react-icons/md";

const Navbar = () => {
    return ( 
        <nav className="bg-black bg-opacity-75 font-spotify p-4 ml-4 mr-4 rounded-full">
            <div className="flex items-center justify-between">
                <div className='flex items-center'>
                    <img src={logoSP} className='h-10 opacity-95'></img>
                    <h1 className="font-bold text-lg text-white opacity-95 ml-2 flex items-center">
                        Samuel Bustos Puntis
                        <span className='ml-1 text-blue-500'><MdVerified/></span>
                    </h1>
                </div>
                
                <div className="hidden md:flex space-x-4 mr-2">
                    <a href="/" className="text-gray-300 hover:text-white">
                        Inicio
                    </a>
                    <a href="/acerca" className="text-gray-300 hover:text-white">
                        Habilidades
                    </a>
                    <a href="/contacto" className="text-gray-300 hover:text-white">
                        Proyectos
                    </a>
                </div>
            </div>
            
        </nav>
     );
}
 
export default Navbar;