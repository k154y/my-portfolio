const skills=[
    {
      title:'Frontend',
      item:['React','Next.js','Vue.js','Typescript','Tailwindcss','HTML/CSS']
    },
    {
      title:'Backend',
      item:['Node.js','PostgreSQL','GraphQL']
    },
      {
      title:'Devops',
      item:['Git','AWS','Linux','Docker']
    },
      {
      title:'Design',
      item:['Figma','Responsive design','Perfomance','SEO']
    }
  ]
    
export default function Skills(){
  
    return (
        <section id="skills" className="py-20 px-6  text-black dark:text-white">
            <h1 className="text-center text-5xl font-bold">Skills & Expertise</h1>
            <div className="flex  flex-col md:grid grid-cols-2">
              {skills.map(s=>( 
                <div key={s.title} className="p-10 m-10 border-gray-600 border-1 bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 rounded-xl">
                <h1 className="text-center font-semibold text-2xl ">{s.title}</h1>
                <ul className="list-disc pl-5 flex flex-col md:grid grid-cols-2">
                  {s.item.map(i=>(
                    <li key={i}>{i}</li>))}
                </ul> 
                </div>
                ))}
                
            </div> 
        </section>
    )
}