import React from 'react';
import { User, Briefcase } from 'lucide-react';

const About = () => {
    return (
        <section className="py-20 px-6 bg-slate-900 text-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <User className="text-purple-400 mr-4" size={28} />
                            <h3 className="text-2xl font-semibold">Professional Summary</h3>
                        </div>
                        <p className="leading-relaxed text-lg text-gray-300">
                            I'm a recent B.E. Information Technology graduate from Mumbai University with a passion for building secure, scalable web and blockchain-based applications. I've developed real-time systems like an Intrusion Detection System and a Carpooling dApp on Ethereum.
                        </p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <Briefcase className="text-purple-400 mr-4" size={28} />
                            <h3 className="text-2xl font-semibold">Career Goals</h3>
                        </div>
                        <p className="leading-relaxed text-lg text-gray-300">
                            I'm eager to bring my skills to a collaborative tech team and grow as a software engineer. My focus is on creating innovative solutions that make a real impact in the tech industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;