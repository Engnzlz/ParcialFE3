//Este componente deberia recibir por props y mostrar en pantalla la informacion

//que envia el usuario

import MusicaForm from "./Formulario";
import Formulario from "./Formulario";

function Card(props) {
  return (
    <div>
      
      <h2></h2>
      <p>{props.informacion}</p>

    </div>
  );
}

export default Card;
