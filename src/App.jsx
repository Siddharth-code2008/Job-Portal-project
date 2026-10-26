import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import Applyjob from "./pages/applyjob.jsx";
import Savedjobs from "./pages/savedjobs.jsx";
import Applications from "./pages/applications.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/applyjob/:id" element={<Applyjob />}/>
      <Route path="/savedjobs" element={<Savedjobs />} />
      <Route path="/applications" element={<Applications />} />

    </Routes>
  );
}

export default App;