import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-20 bg-slate-800" id="contact">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Let's Connect
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg">
                    Have an opportunity or collaboration in mind? Reach out and let's build something impactful together.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700">
                        <h3 className="text-2xl font-semibold mb-6 text-white">Send Message</h3>
                        <div className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                                />
                            </div>
                            <button
                                onClick={() => window.open(`mailto:rutujadeshmukh267@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`)}
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-white">Get In Touch</h3>
                            <p className="text-gray-300 mb-6">
                                I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="mailto:rutujadeshmukh267@gmail.com"
                                    className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-purple-600 transition-all duration-200 group"
                                >
                                    <Mail className="text-purple-400 group-hover:text-white" size={24} />
                                    <div>
                                        <p className="font-semibold text-white">Email</p>
                                        <p className="text-gray-400 group-hover:text-gray-200">rutujadeshmukh267@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://linkedin.com/in/rutuja1308"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-purple-600 transition-all duration-200 group"
                                >
                                    <Linkedin className="text-purple-400 group-hover:text-white" size={24} />
                                    <div>
                                        <p className="font-semibold text-white">LinkedIn</p>
                                        <p className="text-gray-400 group-hover:text-gray-200">linkedin.com/in/rutuja1308</p>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/<your-username>"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-purple-600 transition-all duration-200 group"
                                >
                                    <Github className="text-purple-400 group-hover:text-white" size={24} />
                                    <div>
                                        <p className="font-semibold text-white">GitHub</p>
                                        <p className="text-gray-400 group-hover:text-gray-200">https://github.com/rutu1308</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
