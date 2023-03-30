import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="*" element={<NotFound />}></Route> */}
        {/* <Route path="/" element={<Index />}></Route> */}
        {/* <Route path="/home" element={<Home />}></Route> */}
        {/* <Route path="/ajuda" element={<Ajuda />}></Route> */}
        {/* <Route path="/admin" element={<Admin />}></Route> */}
        {/* <Route path="/admin/cliente/:idCliente" Component={Cliente}></Route> */}
      </Routes>
    </Router>
  )
}

export default App
