import React from 'react'
import COMBUSTIVEL from '../../assets/combustivel.png'

const Header = () => {
  return (
    <header>
        <img src={COMBUSTIVEL} alt="Logo" />
        <h1>
            <p>Você sabe qual combustível compensa mais abastecer seu carro? </p>
            <p>Utilize a calculadora abaixo:</p>
        </h1>
    </header>
  )
}

export default Header