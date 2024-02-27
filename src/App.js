import { Route, Routes } from "react-router-dom";
import { Home } from "./container";

function App() {
  return ( 
   
  <div className="w-screen h-screen flex items-start justify-start  overflow-hidden">
  <Routes>
    <Route path="/home/*"  element={<Home />}/>
  </Routes>
  </div>
  
    
  );
}

export default App;
