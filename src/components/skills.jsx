export default function Skills(){
    const frontend=['React','Next.js','Vue.js','Typescript','Tailwindcss','HTML/CSS'];
    const Backend=['Node.js','PostgreSQL','GraphQL'];
    const devops=['Git','AWS','Linux','Docker'];
    const design=['Figma','Responsive design','Perfomance','SEO'];
    return (
        <section id="skills" className="dark:text-white">
            <h1 className="text-center text-5xl font-bold">Skills & Expertise</h1>
            <div className="grid grid-cols-2">        
             <div className="p-10 m-10 border-gray-600 border-1 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl">
                <h1 className="text-center font-semibold text-2xl ">Front End</h1>
                <ul  className="list-disc pl-5 grid grid-cols-2">
                  {frontend.map(s=>(<li key={s} >{s}</li>))}
                </ul>
             </div>
             <div className="p-10 m-10 border-gray-600 border-1 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl">
                <h1 className="text-center font-semibold text-2xl ">Front End</h1>
                <ul  className="list-disc pl-5 grid grid-cols-2">
                  {frontend.map(s=>(<li key={s} >{s}</li>))}
                </ul>
             </div>
             <div className="p-10 m-10 border-gray-600 border-1 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl">
                <h1 className="text-center font-semibold text-2xl ">Front End</h1>
                <ul  className="list-disc pl-5 grid grid-cols-2">
                  {frontend.map(s=>(<li key={s} >{s}</li>))}
                </ul>
             </div>
            </div> 
        </section>
    )
}