import React from "react"
import Header from "./header/Header.jsx"
import Form from "./form/Form.jsx"
import './css/index.css'

const All = () => {
    return(
        <>
            <main>
                <div className="container-flex">
                    <Header />
                    <Form />
                </div>
            </main>
        </>
    )
}

export default All