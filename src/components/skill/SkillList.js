import React from 'react';
import Skill from './Skill';
import { FaReact, FaJava, FaJsSquare, FaHtml5, FaCss3 } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';

const SkillList = ({ selectedCategory }) => {
    const allSkills = [
        { name: "React", level: "Medium", icon: <FaReact />, category: "Library" },
        { name: "Java", level: "Low", icon: <FaJava />, category: "Language" },
        { name: "JavaScript", level: "High", icon: <FaJsSquare />, category: "Language" },
        { name: "Spring Boot", level: "Low", icon: <FaJava />, category: "Framework" },
        { name: "Tailwind CSS", level: "High", icon: <RiTailwindCssFill />, category: "Framework" },
        { name: "HTML5", level: "High", icon: <FaHtml5 />, category: "Markup" },
        { name: "CSS3", level: "High", icon: <FaCss3 />, category: "Style" }
    ];

    const filteredSkills = selectedCategory === 'All'
        ? allSkills
        : allSkills.filter(skill => skill.category === selectedCategory);

    return (
        <div className="grid grid-cols-4"> 
            {filteredSkills.map((skill, index) => (
                <Skill key={index} name={skill.name} category={skill.category} icon={skill.icon} />
            ))}
        </div>
    );
};

export default SkillList;
