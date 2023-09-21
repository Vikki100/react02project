import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [lenth, setlenth] = useState(8);
  const [numberAllow, setnumberAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setpassword] = useState("");


  const  PasswordGenerator = useCallback(   ()=>{
    
    let pass= "";
    let str = "ABCDEFGHIJKALMANOPQRSTUVWXYZabcdefghijkalmanopqrtuvwxyz";

    if(numberAllow) str += "0123456789";
    if(charAllow) str += '@#$%^&*()';
    





  },[numberAllow ,charAllow , password])


  return (
   <>
    <h1> password genretor</h1>

    <div className="main">
      <input type="text"  />
      <button>copy</button>
    </div>

    
   </>
  )
}

export default App
