import React, {useState} from 'react'

export default function Componente() {

    const [text, setText] = useState()
    const [updated, setUpdated] = useState()

    const textOnClick = () =>{
        setUpdated(text)
    }


  return (
    <div>
        <input type="text" value={text} onChange={textOn} />
        <button onClick={textOnClick}>Actualizar</button>
        <p>Texto input: {text}</p>
        <p>Texto actualizado: {updated}</p>
    </div>
  )
}
