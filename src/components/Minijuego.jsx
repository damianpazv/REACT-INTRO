import React from 'react'

export const Minijuego = () => {
  
  const [seleccionJugador, setSeleccionJugador] = useState("");

  const [seleccionMaquina, setSeleccionMaquina] = useState("");

  const [resultado, setRseultado] = useState("");

  const seleccionOpcion = (opcion)=>{


  }
  
    return (
    <>
    
    
  
<h1>Piedra, papel o tijera</h1>
<p>seleccione su opcion</p>

<button onClick={()=>seleccionOpcion("piedra")}>piedra</button>
<button>papel</button>
<button>tijera</button>

</>
  )
}


