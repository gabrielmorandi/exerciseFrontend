import React from "react"

const Form = () => {
    return(
        <form>
            <label>Preço - litro etanol (R$):</label>
            <input type="number" pattern="[0-9]+([,\.][0-9]+)?" min="0" step="any" name="valorE"/>
            <label>Preço - litro gasolina (R$):</label>
            <input type="number" pattern="[0-9]+([,\.][0-9]+)?" min="0" step="any" name="valorG"/>
            <input type="submit" value="Calcular" />
        </form>
    )
}

export default Form