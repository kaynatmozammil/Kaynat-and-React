import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen transition-colors duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
      >
       <div className="flex flex-wrap justify-center  
       gap-3 bg-white text-black px-3 py-2 rounded-full">
        <button 
        onClick={()=>setColor("red")}
        className="outline-none px-4 rounded-full text-white
        shadow-lg "
        style={{backgroundColor:"red"}}
        >Red</button>

         <button
         onClick={()=>setColor("green")}
        className="outline-none px-4 rounded-full text-white
        shadow-lg "
        style={{backgroundColor:"green"}}
        >Green</button>

         <button
         onClick={()=>setColor("blue")}
        className="outline-none px-4 rounded-full text-white
        shadow-lg "
        style={{backgroundColor:"blue"}}
        >Blue</button>

        <button
         onClick={()=>setColor("Olive")}
        className="outline-none px-4 rounded-full text-white
        shadow-lg "
        style={{backgroundColor:"Olive"}}
        >Olive</button>

        <button
         onClick={()=>setColor("gray")}
        className="outline-none px-4 rounded-full text-white
        shadow-lg "
        style={{backgroundColor:"gray"}}
        >Gray</button>

        <button
         onClick={()=>setColor("yellow")}
        className="outline-none px-4 rounded-full text-black
        shadow-lg "
        style={{backgroundColor:"yellow"}}
        >Yellow</button>

        <button
         onClick={()=>setColor("Pink")}
        className="outline-none px-4 rounded-full text-black
        shadow-lg "
        style={{backgroundColor:"Pink"}}
        >Pink</button>

        <button
         onClick={()=>setColor("Purple")}
        className="outline-none px-4 rounded-full text-black
        shadow-lg "
        style={{backgroundColor:"Purple"}}
        >Purple</button>

        <button
         onClick={()=>setColor("Lavender")}
        className="outline-none px-4 rounded-full text-black
        shadow-lg "
        style={{backgroundColor:"Lavender"}}
        >Lavender</button>

        <button
         onClick={()=>setColor("white")}
        className="outline-none px-4 rounded-full text-black
        shadow-lg "
        style={{backgroundColor:"white"}}
        >White</button>

        <button
         onClick={()=>setColor("black")}
        className="outline-none px-4 rounded-full text-white
        shadow-lg "
        style={{backgroundColor:"black"}}
        >Black</button>
       </div>
      </div>
    </div>
  );
}

export default App;
