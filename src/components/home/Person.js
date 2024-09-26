import imgMe from './../../assets/perfil.jpg';
import SocialMedia from './SocialMedia';
import { FaPlay } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import About from './About';

const Person = () => {
    const [showSocialMedia, setShowSocialMedia] = useState(false); 
    const [isHovered, setIsHovered] = useState(false); 
    const [translateY, setTranslateY] = useState('translate-y-4'); 

    useEffect(() => {
        if (showSocialMedia) {
            setTranslateY('translate-y-0'); 
        } else {
            setTranslateY('translate-y-4'); 
        }
    }, [showSocialMedia]);

    return ( 
        <div className="flex items-center justify-start ml-20"> 
            <div className="mt-36">
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} 
                >   
                    <div className='shadow-xl rounded-full'>
                        <img src={imgMe} alt="Perfil" className="h-60 w-60 rounded-full" />
                    </div>
                    

                    
                    <button
                        className={`text-2xl absolute bottom-2 right-2 bg-green-500 hover:bg-green-400 text-black hover:text-zinc-900 p-5 rounded-full shadow-lg transition-transform duration-300 transform ${
                            isHovered ? '-translate-y-2 opacity-100' : 'translate-y-2 opacity-0'
                        }`}
                        onClick={() => setShowSocialMedia(!showSocialMedia)}
                        style={{ pointerEvents: isHovered ? 'auto' : 'none' }} 
                    >
                        <FaPlay />
                    </button>
                </div>

                <div className="text-left mt-2">
                    <h1 className="font-spotify font-bold text-3xl text-white">Samuel</h1>
                    <h2 className="font-spotify font-light text-xl text-white opacity-75 leading-5">Software Developer</h2>
                </div>
            </div>

            <div className="relative">
                <About />
                {showSocialMedia && (
                    <div
                        className={`absolute left-0 ml-8 transition-transform duration-300 transform ${translateY} opacity-100`}
                    >
                        <SocialMedia />
                    </div>
                )}
            </div>


            
        </div>
    );
}

export default Person;
