import { BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom"

import Header from "./components/Header/Header"
import Search from "./components/Search/Search"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Search />}></Route>
        <Route path="/" element={<Search />}></Route>
        <Route path="/word/:word" element={<Search />}></Route>
      </Routes>
    </Router>
  )
}

export default App
