import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [estado, setEstado] = useState("activo"); /* el setEstado, set es por convención */
  const [pagina, setPagina] = useState("inicio");

  useEffect(()=> {
    console.log(`el estado es ${estado}`);
  }, [estado])

  useEffect(()=> {
    console.log(`la pagina es ${pagina}`);
  }, [pagina])

  return(
  <>
 <h1>El estado de la web es: {estado} y la página es {pagina}</h1>
 <button onClick={()=>setEstado("desactivado")}>desactivado</button>
 <button onClick={()=>setEstado("activado")}>activado</button>
 <button onClick={()=>setPagina("inicio")}>inicio</button>
  </>
  );
}
export default App;
