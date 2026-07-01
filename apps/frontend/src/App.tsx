import { BrowserRouter, Routes, Route } from "react-router";
import { Appbar } from "./components/Appbar";
import "./index.css"; 
import { Landing } from "./pages/Landing";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { VideoCreator } from "./pages/VideoCreator";

export function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/video-creator" element={<VideoCreator />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App; 