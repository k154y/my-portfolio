function Greeting({names}){
    return(
        <div className='text-red-500 font-bold'>
    <h2>Nice to meet you my name is </h2>
    <ul>
        {names.map(name=>(
            <li key={name}>{name}</li>
        ))}
   
         
   </ul>
  </div>);
}
import { useState } from "react";
const day = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("rw-RW").format(date);
}
function updated({name}){
  return (<h2>{name}</h2>);
}



function Ap() {
  const [names, setNames] = useState(["yves", "alice","kwizera"]);
  const [name,setName]=useState("")
  return (
    <div>
      <h1>Names:</h1>

      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <Greeting names={["yves",'hey','we']} />

      <button
        className="text-white bg-blue-500 px-4 py-2 rounded"
        onClick={() => setNames([...names, "new name"])}
      >
        Click me
      </button>
      <br/>
    <input type='text' onChange={(e)=> setName(e.target.value)}  placeholder='enter your name' />
    <button className="p-4 m-4 bg-yellow-200 font-bold rounded" onClick={()=>(alert(name))}>change the name </button>
    
      <h2>Today we are on {formatDate(day)}</h2>
    </div>
  );
}

export default Ap;
