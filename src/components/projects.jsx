 export default function Projects(){
return(
<section id="projects" className=" dark:text-grey-300">
<div>
    <h1 className="text-5xl font-bold text-center dark:text-white">Featured Projects</h1>
    <p className="text-center dark:text-gray-300 text-1xl py-5">A selection of projects that showcase my skills and passion for building great products</p>
    <div className="  flex flex-col md:flex-row dark:text-gray-300 ">
        <div className="p-10 border-1 border-gray-600    m-5 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl shadow-lg  hover:shadow-2xl
            transform hover:-translate-y-4 transition-all duration-300">
            <h2 className="font-bold text-2xl my-5">E-Commerce Platform</h2>
            <p>A full-featured online shopping platform with payment integration, inventory management, and real-time analytics dashboard.</p>
           
        </div>
        <div className="p-10 border-1 border-gray-600    m-5 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl shadow-lg  hover:shadow-2xl
            transform hover:-translate-y-4 transition-all duration-300">
            <h2 className="font-bold text-2xl my-5">Task Management App</h2>
            <p>Collaborative project management tool with real-time updates, drag-and-drop functionality, and team workspaces.</p>
        </div>
         <div className="p-10 border-1 border-gray-600    m-5 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl shadow-lg  hover:shadow-2xl
            transform hover:-translate-y-4 transition-all duration-300">
            <h2 className="font-bold text-2xl my-5">AI Content Generator</h2>
            <p>AI-powered content creation tool that helps marketers generate blog posts, social media content, and more.</p>
        </div>
    </div>
</div>
</section >
)
}