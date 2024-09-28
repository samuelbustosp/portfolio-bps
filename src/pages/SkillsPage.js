import { useState } from "react";
import SkillList from "../components/skill/SkillList";


const SkillsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    
    
    return ( 
        <div className="bg-gray-900 min-h-screen">
            <div className="flex items-center justify-start">
                <h1 className="font-spotify font-black text-3xl text-white mt-28 ml-20">Habilidades</h1>
                
            </div>
            <div className="flex items-center gap-2 ml-20 mt-4"> 
                <button 
                    className="bg-gray-500 font-spotify font-medium text-sm text-white py-1.5 px-2.5 rounded-full"
                    onClick={() => setSelectedCategory('All')}
                >
                    Todas
                </button>
                <button 
                    className="bg-gray-500 font-spotify font-medium text-sm text-white py-1.5 px-2.5 rounded-full"
                    onClick={() => setSelectedCategory('Language')}
                >
                    Lenguajes
                </button>
                <button 
                    className="bg-gray-500 font-spotify font-medium text-sm text-white py-1.5 px-2.5 rounded-full"
                    onClick={() => setSelectedCategory('Framework')}
                >
                    Frameworks
                </button>
                <button 
                    className="bg-gray-500 font-spotify font-medium text-sm text-white py-1.5 px-2.5 rounded-full"
                    onClick={() => setSelectedCategory('Library')}
                >
                    Librerías
                </button>
            </div>
            <div className="ml-20">
                <SkillList selectedCategory={selectedCategory} />
            </div>
            
        </div>
     );
}
 
export default SkillsPage;