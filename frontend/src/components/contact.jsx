import { useState } from "react"


const contact=[{

    title:'Email',
    discription:'yveskwizera154@gmail.com'
},
{
    title:'Phone',
    discription:'+250 791354340'
},
{
    title:'Location',
    discription:'Kigali/Rwanda'
}]
export default function Contact() {
   
    const[formData,setformdata]=useState({
        name:'',
        email:'',
        subject:'',
        message:''
    });
    const handlechange=(e)=>{setformdata({
        ...formData,
        [e.target.name]:e.target.value
    })};
    
    return (
        <section id="contact" className=" py-20 px-6 text-black dark:text-white">
        <h1 className="text-center font-bold text-5xl">Get In Touch</h1>
        <p className="mt-10 text-center dark:text-grey-300">Have a project in mind or just want to say hello? I'd love to hear from you</p>
        <div className="grid grid-cols-2 mt-10 gap-10">
            <div  className="grid grid-cols-1 gap-10 ">
                {contact.map(c=>(
                    <div className="border border-gray-600 rounded-xl  p-5 dark:bg-slate-900 h-20 w-120" key={c.title}>
                        <h2 className="dark:text-grey-300">{c.title}</h2>
                        <p className="dark:text-grey-300 font-bold ">{c.discription}</p>
                    </div>
                ))}

            </div>
            <div>
                 <form onSubmit={e=>e.preventDefault()} >
                    <div className="flex gap-10">
                  <div className="flex flex-col">
                  <label htmlFor="name" className="">Name</label>                            
                 <input type='text' id="name"  name="name" value={formData.name}  onChange={handlechange} placeholder=' your name' className="mt-2 mt-2 p-2 border border-gray-600 rounded-md w-full dark:bg-slate-800"></input>
                  </div>
                   <div className="flex flex-col ">
                   <label htmlFor="name" className="">Email</label>
                    <input type='email' id="email" name="email" value={formData.email}  onChange={handlechange} placeholder='your@gmail.com' className="mt-2 block mt-2 p-2 border border-gray-600 rounded-md w-full dark:bg-slate-800"></input>
                    </div>
                    </div>
                   <div className="mt-6">
                   <label htmlFor="subject" className="block">Subject</label>
                   <input type="text" id="subject" name="subject" value={formData.subject}  onChange={handlechange} placeholder=' How can  i help you' className="mt-2 block p-2 border border-gray-600 rounded-md w-full dark:bg-slate-800"/>
                   </div>
                   <div className="mt-6">
                   <label htmlFor="message" className="">Message</label> <br></br>
                    <textarea id="message" name="message" value={formData.message}  onChange={handlechange} placeholder='Tell me about your project' className="mt-2 block mt-2 p-2 border border-gray-600 rounded-md w-full dark:bg-slate-800"> </textarea>
                    </div>
                   <button type="submit" className="mt-6 bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-700 transition"> Submit</button>
                </form> 
              
            </div>

        </div>
        </section>
    )
}

