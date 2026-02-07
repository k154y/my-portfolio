export default function About(){
    return (
        <section id="about" className="py-20 px-6 bg-blue-50 dark:bg-slate-700">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                    About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
                
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
                    A versatile developer with hands-on experience in web development and embedded systems. 
                    I enjoy connecting software and hardware to build practical, real-world solutions through project-based learning.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-200 dark:border-slate-600">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Software Development</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Create responsive websites with React, Tailwind CSS, and Node.js. Building modern, scalable applications with clean code.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-200 dark:border-slate-600">
                        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Embedded Systems</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Develop Arduino and ESP32 projects with sensors and automation. Creating intelligent hardware solutions.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-indigo-200 dark:border-slate-600">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">IoT & Smart Systems</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Build connected devices that integrate hardware with software. Bringing ideas to life through innovation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}