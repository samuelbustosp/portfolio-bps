import { FaLinkedin, FaInstagram, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { useState } from 'react';

const SocialMedia = () => {
    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/samuelbustospuntis",
            icon: <FaLinkedin />,
            followers: 20,
            year: 2020,
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/samubustoss",
            icon: <FaInstagram />,
            followers: 2000,
            year: 2016,
        },
        {
            name: "GitHub",
            url: "https://github.com/samuelbustosp",
            icon: <FaGithub />,
            followers: 2,
            year: 2024,
        },
    ];
    const [visitedLinks, setVisitedLinks] = useState(socialLinks.map(() => false));

    const handleLinkClick = (index) => {
        // Actualizar el estado de enlaces visitados
        const newVisitedLinks = [...visitedLinks];
        newVisitedLinks[index] = true;
        setVisitedLinks(newVisitedLinks);
    };
    
    const formatYear = year => `${year.toString().slice(0, 2)}:${year.toString().slice(2)}`;

    return (
        <div 
            className="bg-gradient-to-b from-black to-transparent p-4 rounded-md mx-auto text-white"
            style={{ width: '700px' }}
        >
            <h2 className="text-lg font-spotify font-black mb-4">Mis Redes</h2>
            {socialLinks.map((link, index) => (
                <div key={index} className="flex items-center mb-3 hover:bg-white hover:bg-opacity-10 p-2 rounded-lg">
                    {/* Columna Izquierda - Número y Icono */}
                    <div className="flex items-center flex-1">
                        <span className="font-bold">{index + 1}.</span>
                        <a 
                            href={link.url} 
                            className='flex items-center' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => handleLinkClick(index)} // Maneja el clic en el enlace
                        >
                            <span className="text-4xl ml-2">{link.icon}</span>
                        </a>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="font-spotify font-medium ml-2">
                            <span>{link.name}</span>
                        </a>
                    </div>

                    
                    <div className="flex-1 text-center cursor-default"> 
                        <div className='justify-end flex'> 
                            <span className="text-sm text-gray-400">
                            {link.followers < 1000 ? (<p>&lt; 1000 seguidores</p>) : (<p>{link.followers} seguidores</p>)}
                            </span>
                        </div>
                    </div>

                    
                    <div className="flex items-center flex-1 justify-end gap-6">
                        {visitedLinks[index] && ( // Solo mostrar el check si ha sido visitado
                            <span className='text-green-500 mr-2'><FaCheckCircle/></span>
                        )}
                        <span className='font-spotify font-light text-md opacity-85'>{formatYear(link.year)}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SocialMedia;
