import { useState } from "react";

export default function Navbar(){
    const[isopen,setstate]=useState(false);
    
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#ach", label: "Achievements" },
        { href: "#contact", label: "Contact" }
    ];

    const linkClass = "px-3 py-2 rounded-md text-sm md:text-base transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative group";
    const underlineClass = "absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300";

    return (
        <>
         <nav className="sticky top-0 z-50 flex justify-between items-center bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-6 py-4 font-semibold shadow-lg border-b border-gray-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-600">
                Portfolio
            </h2>
            <div>
                  <ul className="hidden md:flex gap-2">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className={linkClass}>
                                {link.label}
                                <span className={underlineClass}></span>
                            </a>
                        </li>
                    ))}
                    </ul>
            </div>
            {isopen ? (
                <a href="#" className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-300 text-xl" onClick={()=>setstate(!isopen)}>✕</a>
            ) : (
                <a href="#" className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-300 text-xl" onClick={()=>setstate(!isopen)}>☰</a>
            )}
         </nav>
            {isopen&&(
               <ul className="md:hidden fixed top-16 left-0 right-0 flex flex-col items-center justify-center gap-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-6 py-6 font-semibold shadow-lg border-b border-gray-200 dark:border-slate-700 animate-in fade-in duration-300 ">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300" onClick={()=>setstate(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                    </ul>
            )}
       
        
        
        </>
    );
}