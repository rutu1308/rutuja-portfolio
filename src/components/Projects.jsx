import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Intrusion Detection System",
            tech: ["Python", "Scapy", "MongoDB", "Random Forest"],
            desc: "Real-time network traffic analysis that flags anomalies from live TCP packets. Implemented machine learning algorithms for enhanced threat detection.",
            repo: "https://github.com/<your-username>/ids",
            demo: "#",
            featured: true
        },
        {
            title: "Blockchain Carpooling dApp",
            tech: ["Solidity", "Truffle", "Ganache", "Ethereum"],
            desc: "Decentralised ride-sharing platform enabling transparent seat bookings via smart contracts. Built with Web3 integration for seamless user experience.",
            repo: "https://github.com/<your-username>/carpool-dapp",
            demo: "#",
            featured: true
        },
        {
            title: "Travel Assistant Chatbot",
            tech: ["React", "Node", "Google Maps API"],
            desc: "Interactive chatbot that plans itineraries, books hotels, and provides geo-based suggestions with real-time data integration.",
            repo: "https://github.com/<your-username>/travel-bot",
            demo: "#",
            featured: false
        },
    ];

    return (
        <section className="py-20 bg-slate-900" id="projects">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <p className="text-gray-400 text-center mb-12 text-lg">Some of my recent work</p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map(({ title, tech, desc, repo, demo, featured }) => (
                        <div key={title} className={`bg-slate-800 border ${featured ? 'border-purple-500' : 'border-slate-700'} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col group hover:transform hover:scale-105`}>
                            {featured && (
                                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                                    Featured
                                </div>
                            )}

                            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                                {title}
                            </h3>
                            <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{desc}</p>

                            <div className="flex flex-wrap gap-2 text-sm mb-6">
                                {tech.map((t) => (
                                    <span key={t} className="bg-slate-700 text-purple-300 rounded-full px-3 py-1 hover:bg-purple-600 hover:text-white transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href={repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                                >
                                    <Github size={16} />
                                    Source
                                </a>
                                {demo !== "#" && (
                                    <a
                                        href={demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200"
                                    >
                                        <ExternalLink size={16} />
                                        Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;