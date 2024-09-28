import { Footer } from "flowbite-react";
import {BsInstagram} from "react-icons/bs";

function TheFooter() {
  return (
    <Footer container className="bg-gray-950 text-white font-spotify rounded-none py-6 ">
      <div className="w-full">
        <div className=" flex w-full text-start justify-between mb-6 px-20">
          <div className="color-text-wh">
            <p className='font-bold text-lg'>Habilidades</p>
            <p className='text-sm text-gray-300 '>Lenguajes</p>
            <p className='text-sm text-gray-300 '>Frameworks</p>
            <p className='text-sm text-gray-300 '>Librerías</p>
            <p className='text-sm text-gray-300 '>Otras</p>
            
          </div>
          <div className="color-text-wh">
            <p className='font-bold text-lg'>Proyectos</p>
            <p className='text-sm text-gray-300 '>Dogital</p>
            <p className='text-sm text-gray-300 '>E-commerce NAMP</p>
            <p className='text-sm text-gray-300 '>Turnos GO</p>
            <p className='text-sm text-gray-300 '>Q'Yerba</p>
            
          </div>
          <div className="color-text-wh">
            <p className='font-bold text-lg'>Contacto</p>
            <p className='text-sm text-gray-300 '>Linkedin</p>
            <p className='text-sm text-gray-300 '>Instagram</p>
            <p className='text-sm text-gray-300 '>+54 (358) - 154286325</p>
            <p className='text-sm text-gray-300 '>samuelbustospuntis@gmail.com</p>
           
          </div>
          <div className="color-text-wh">
            <p className='font-bold text-lg'>Educación</p>
            <p className='text-sm text-gray-300 '>UTN FRVM</p>
            <p className='text-sm text-gray-300 '>Coder House</p>
            <p className='text-sm text-gray-300 '>Bootcamp</p>
            <p className='text-sm text-gray-300 '></p>
           
          </div>
        </div>
        <Footer.Divider className="mt-2 mb-2"/>
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright href="#" by="BPS Portfolio" year={2024} className="text-gray-300" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center mr-4">
            <Footer.Icon href="https://www.instagram.com/turnosGo/" icon={BsInstagram} />
            <Footer.Icon href="https://www.instagram.com/turnosGo/" icon={BsInstagram} />
            <Footer.Icon href="https://www.instagram.com/turnosGo/" icon={BsInstagram} />
            <Footer.Icon href="https://www.instagram.com/turnosGo/" icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default TheFooter;
