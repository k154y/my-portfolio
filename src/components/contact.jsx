
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
    return (
        <section id="contact" className=" py-20 px-6 text-black dark:text-white">
        <h1 className="text-center font-bold text-5xl">Get In Touch</h1>
        <p className="mt-10 text-center dark:text-grey-300">Have a project in mind or just want to say hello? I'd love to hear from you</p>
        <div className="grid grid-cols-2 mt-10">
            <div className="grid grid-cols-1">
                {contact.map(c=>(
                    <div>
                        <h2 className="dark:text-grey-300">{c.title}</h2>
                        <p className="dark:text-grey-300 font-bold ">{c.discription}</p>
                    </div>
                ))}

            </div>
            <div>
                 <form>
                    <div className="flex">
                  <div className="flex flex-col">
                  <labe>Name</labe>                            
                  <input type='text' placeholder=' your name' className="mt-2"></input>
                  </div>
                   <div className="flex flex-col ">
                   <labe>Email</labe>
                    <input type='email' placeholder='your@gmail.com' className="mt-2"></input>
                    </div>
                    </div>
                   <labe className="mt-10">Subject</labe>  <br></br>
                   <input type="text" placeholder=' How can  i help you' className="mt-2"/><br></br>
                   <labe>Message</labe> <br></br>
                    <textarea placeholder='Tell me about your project'  className="mt-2"> </textarea>
                   <input type="submit" value="Submit" />
                </form> 
              
            </div>

        </div>
        </section>
    )
}