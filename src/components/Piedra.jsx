import React, { useState } from 'react'

export const Piedra = () => {

const [opcionJugador,setOpcionJugador] = useState('');
const [opcionmaquina,setOpcionmaquina] = useState('');
const [resultado,setResultado] = useState('');





let result; 

const elecciones=(eleccion)=> {
    const resultados=["piedra","papel","tijera"];
    let random=Math.floor(Math.random()*3);
    let selectMaquina=resultados[random];
setOpcionJugador(eleccion);
setOpcionmaquina(selectMaquina);

comparacion(eleccion,selectMaquina);


setResultado(result);
};



const comparacion=(j,m)=> {
 
    

if(j===m){
return result="empate";
}
else if(j==="tijera" && m==="papel" || j==="piedra" && m==="tijera" || j==="papel" && m==="piedra"){

   return result="ganaste";
}

else {
   return result="perdiste";
}


}



  return (

<>
<h1>Piedra, papel o tijera </h1>

<button onClick={()=>elecciones("piedra")} >piedra</button>
<button onClick={()=>elecciones("papel")} >papel</button>
<button onClick={()=>elecciones("tijera")}>tijera</button>


<h3>Elegiste :{opcionJugador}</h3>
<h3>La maquina elegió: :{opcionmaquina}</h3>
<hr />
<h3>{resultado}</h3>



</>


   


  );
};
