import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./container";
import { useEffect, useState } from "react";
import { auth, db } from "./config/firebase.config";
import { doc, setDoc } from "firebase/firestore";

function App() {
  
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
     const unsubscribe = auth.onAuthStateChanged(userCred =>{
      if(userCred){
         console.log(userCred?.providerData[0])
         setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).
         then(()=>{
          // dispatch the action to store 


         })
 } else{
navigate("/home/auth", {replace: true});

      }
     })

     //clean up the listener event 
     return () => unsubscribe();
  }, [])
  return ( 
   <>
   {isLoading?(
   <div className="w-screen h-screen flex items-center justify-center overflow-hidden"></div>
   )  
   :(
    <div className="w-screen h-screen flex items-start justify-start  overflow-hidden">
    <Routes>
      <Route path="/home/*"  element={<Home />}/>
      {/* if the route not matching */}
      <Route path="*"  element={<Navigate to={"/home"} />} />
  
    </Routes>
    </div>
   )}
   </>
  
  
    
  );
}

export default App;
