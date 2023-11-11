import { useState } from "react";
import Card from "./component/Card";
import MusicaForm from "./component/Formulario";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  return (

    <>
    <h1 className="titulo"> Musica </h1>
    <Card informacion={<MusicaForm />} />
    </>
    
  )


}
export default App;
