export default function Hero(){
    return (
        <>
        <div className="flex flex-col justify-between items-center p-10">
            <img src="/profile.jpeg" alt="profile" className="rounded-full w-40 h-40 object-cover" />
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white mt-6">Hi, I’m Kwizera Yves </h1>
            <h3 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-2">Full-Stack Web Developer & Cybersecurity Enthusiast</h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mt-4">
               I build secure, scalable, and modern web applications using React, Node.js, Express, and Tailwind CSS.
            </p>
            <div className="flex flex-row justify-center md:justify-between items-center gap-6 mt-6">
                <button className="px-4 py-2 bg-blue-600 text-white rounded transition-colors duration-300 hover:bg-blue-800"> View Projects</button>
                <button className="px-4 py-2 border border-gray-300 font-semibold rounded transition-colors duration-300 hover:bg-gray-100 hover:border-gray-400">Contact Me</button>
            </div>
        </div>
        </>
    );
}