import React from 'react';
import { Code, Settings } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Java", "JavaScript", "Python", "Solidity"],
            icon: <Code size={24} />
        },
        {
            title: "Frontend Technologies",
            skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
            icon: <Settings size={24} />
        },
        {
            title: "Backend & Database",
            skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
            icon: <Settings size={24} />
        },
        {
            title: "DevOps & Cloud",
            skills: ["Docker", "Jenkins", "AWS", "Git"],
            icon: <Settings size={24} />
        }
    ];

    return (
        <section className="py-20 bg-slate-800 text-center" id="skills">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Technical Skills
                </h2>
                <p className="text-gray-400 mb-12 text-lg">Technologies I work with</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="flex items-center justify-center mb-4 text-purple-400">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                            <div className="space-y-2">
                                {category.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx} className="bg-slate-700 text-gray-300 py-2 px-4 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200 cursor-default">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;