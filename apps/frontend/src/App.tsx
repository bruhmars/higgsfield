import { BrowserRouter, Routes, Route } from "react-router";
import { Appbar } from "./components/Appbar";
import "./index.css"; 

export function App() {
  return(
    <div>
      <Appbar/> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={""} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App; 