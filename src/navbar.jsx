export default function Navbar(){
    return (
        <>
        <nav className="sticky top-0 z-50 flex justify-between items-center bg-slate-700 text-white dark:bg-slate-700 dark:text-white px-6 py-4 font-semibold shadow-md">
            <h2 className="text-xl">
                Portfolio
            </h2>
            <div>
                  <ul className="flex gap-6">
                    
                        <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
                        <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
                        <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
                        <li><a href="#ach" className="hover:text-blue-600 transition">Achievements</a></li>
                        <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
                    </ul>
            </div>
        </nav>
        
        
        </>
    );
}