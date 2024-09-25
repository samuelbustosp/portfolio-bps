import React from 'react';

const Skill = ({ name, level, icon }) => {
    // Define una función para asignar clases de fondo según el nivel
    const getLevelBackground = (level) => {
        switch (level) {
            case 'High':
                return 'bg-green-500'; // Verde para alto
            case 'Medium':
                return 'bg-yellow-500'; // Amarillo para medio
            case 'Low':
                return 'bg-red-500'; // Rojo para bajo
            default:
                return 'bg-gray-300'; // Gris para otros casos
        }
    };

    return (
        <div className="flex flex-col items-start mb-5"> {/* Cambia items-center a items-start */}
            <article className="flex flex-col shadow-lg bg-gray-950 bg-opacity-80 p-2 border border-gray-800 w-40 h-40 rounded-lg">
                <div className='flex items-center justify-center h-full'>
                    <span className="text-7xl text-white">{icon}</span>
                </div>
            </article>
            {/* Nombre y nivel alineados a la izquierda */}
            <div className='w-full ml-2'> {/* Asegúrate de que el div ocupe el ancho completo */}
                <h3 className="font-bold font-spotify text-white text-left mt-1">{name}</h3> {/* Cambia text-center a text-left */}
                <p className={` text-white leading-3 p-1.5 text-sm rounded-full font-spotify font-light ${getLevelBackground(level)} inline-block`}>
                    {level}
                </p>
            </div>
        </div>
    );
};

export default Skill;
