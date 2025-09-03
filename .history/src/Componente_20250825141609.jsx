import React, {useState} from 'react'

export default function Componente() {

    const [text, setText] = useState()
    const [updated, setUpdated] = useState()

    const textOnClick = () =>{
        setUpdated
    }


  return (
    <div>
        <input type="text" />
        <button>Actualizar</button>
        <p>Texto input</p>
        <p>Texto actualizado</p>
    </div>
  )
}
