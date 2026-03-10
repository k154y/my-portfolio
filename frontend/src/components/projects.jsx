//  export default function Projects(){
// return(
// <section id="projects" className="py-20 px-6  text-dark dark:text-grey-300">
// <div>
//     <h1 className="text-5xl font-bold text-center dark:text-white">Featured Projects</h1>
//     <p className="text-center dark:text-gray-300 text-1xl py-5">A selection of projects that showcase my skills and passion for building great products</p>
//     <div className="  flex flex-col md:flex-row dark:text-gray-300 ">
//         <div className="p-10 border border-gray-600    m-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg  hover:shadow-2xl
//             transform hover:-translate-y-4 transition-all duration-300">
//             <h2 className="font-bold text-2xl my-5">E-Commerce Platform</h2>
//             <p>A full-featured online shopping platform with payment integration, inventory management, and real-time analytics dashboard.</p>
           
//         </div>
//         <div className="p-10 border-1 border-gray-600    m-5  bg-gradient-to-br from-red-50 to-red-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg  hover:shadow-2xl
//             transform hover:-translate-y-4 transition-all duration-300">
//             <h2 className="font-bold text-2xl my-5">Task Management App</h2>
//             <p>Collaborative project management tool with real-time updates, drag-and-drop functionality, and team workspaces.</p>
//         </div>
//          <div className="p-10 border-1 border-gray-600    m-5 bg-gradient-to-br from-green-50 to-green-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg  hover:shadow-2xl
//             transform hover:-translate-y-4 transition-all duration-300">
//             <h2 className="font-bold text-2xl my-5">AI Content Generator</h2>
//             <p>AI-powered content creation tool that helps marketers generate blog posts, social media content, and more.</p>
//         </div>
//     </div>
// </div>
// </section >
// )
// }



// ============================================
// Projects.jsx — Updated to fetch from your Express API
// ============================================
// BEFORE: Data was hardcoded in the component
// AFTER:  Data is fetched from your Express server
// This is the pattern used in EVERY real-world React app!

import { useState, useEffect } from "react";

// Custom hook — reusable fetch logic
// This is a common pattern: extract fetch logic from components
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // Lets us cancel the fetch if component unmounts

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setData(json.data); // Our API wraps data in { success, data }
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') { // Ignore cancellation errors
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort(); // Cleanup on unmount
  }, [url]);

  return { data, loading, error };
}

// Individual project card component — separated for clarity
function ProjectCard({ project }) {
  const gradientMap = {
    1: 'from-blue-50 to-blue-100',
    2: 'from-red-50 to-red-100',
    3: 'from-green-50 to-green-100',
  };

  const gradient = gradientMap[project.id] || 'from-gray-50 to-gray-100';

  return (
    <div className={`p-10 border border-gray-600 m-5 bg-gradient-to-br ${gradient} 
      dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg 
      hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300`}>
      
      <div className="flex justify-between items-start mb-2">
        <h2 className="font-bold text-2xl my-5">{project.title}</h2>
        {/* Status badge — we get this from the API now! */}
        <span className={`text-xs px-2 py-1 rounded-full mt-5 ${
          project.status === 'completed' 
            ? 'bg-green-200 text-green-800' 
            : 'bg-yellow-200 text-yellow-800'
        }`}>
          {project.status}
        </span>
      </div>

      <p className="dark:text-gray-300">{project.description}</p>

      {/* Tech stack tags — also from API! */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.techStack?.map(tech => (
          <span key={tech} className="text-xs bg-white dark:bg-slate-600 px-2 py-1 rounded border border-gray-300 dark:border-slate-500">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="text-sm text-green-600 dark:text-green-400 hover:underline">
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const API_URL = 'http://localhost:5000/'; // Your Express server
  
  // Using our custom hook — clean and reusable!
  const { data: projects, loading, error } = useFetch(`${API_URL}/projects?featured=true`);

  // Loading state
  if (loading) {
    return (
      <section id="projects" className="py-20 px-6 text-center">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded w-64 mx-auto mb-4"></div>
          <div className="flex gap-4 justify-center mt-10">
            {[1,2,3].map(i => (
              <div key={i} className="h-64 w-80 bg-gray-200 dark:bg-slate-700 rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="projects" className="py-20 px-6 text-center">
        <p className="text-red-500">Failed to load projects: {error}</p>
        <p className="text-gray-500 text-sm mt-2">Make sure your Express server is running on port 5000</p>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6 text-dark dark:text-grey-300">
      <div>
        <h1 className="text-5xl font-bold text-center dark:text-white">Featured Projects</h1>
        <p className="text-center dark:text-gray-300 text-1xl py-5">
          A selection of projects that showcase my skills and passion for building great products
        </p>
        <div className="flex flex-col md:flex-row dark:text-gray-300">
          {projects?.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}