import React, {useState} from 'react'

export default function Componente() {

    const [inputText, setInputText] = useState('');
  return (
    <div>
        <input type="text" />
        <button>Actualizar</button>
        <p>Texto input</p>
        <p>Texto actualizado</p>
    </div>
  )
}
