import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./container";

function App() {
  return ( 
   
  <div className="w-screen h-screen flex items-start justify-start  overflow-hidden">
  <Routes>
    <Route path="/home/*"  element={<Home />}/>
    {/* if the route not matching */}
    <Route path="*"  element={<Navigate to={"/home"} />} />

  </Routes>
  </div>
  
    
  );
}

export default App;
