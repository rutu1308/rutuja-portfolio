import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, User, MessageCircle } from 'lucide-react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white text-center px-6 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            </div>

            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                        <User size={48} className="text-white" />
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Rutuja Deshmukh
                </h1>
                <p className="text-xl md:text-2xl mb-2 text-gray-300">Full-Stack Developer</p>
                <p className="text-lg mb-8 text-gray-400">IT Graduate | Cybersecurity Enthusiast | Blockchain Developer</p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <a
                        href="https://drive.google.com/file/d/13u4xTvjC7VDPT3bruwrNTUGsHPjGkAre/view?usp=drivesdk"
                        className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                        download
                    >
                        <Download size={20} className="group-hover:animate-bounce" />
                        Download Résumé
                    </a>
                    <a
                        href="#contact"
                        className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                        <MessageCircle size={20} className="group-hover:animate-pulse" />
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 animate-bounce">
                <ChevronDown size={32} className="text-purple-400" />
            </div>
        </section>
    );
};

export default Hero;
