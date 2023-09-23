import { useCallback, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [lenth, setlenth] = useState(8);
  const [numberAllow, setnumberAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setpassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKALMANOPQRSTUVWXYZabcdefghijkalmanopqrtuvwxyz";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "@#$%^&*()";

    for (let i = 1; i <= lenth; i++) {
      let chara = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(chara);
      console.log(pass)

      
    }
    
    console.log(setpassword(pass))
  }, [lenth ,numberAllow, charAllow, setpassword]);

  useEffect(()=>{
    PasswordGenerator()
  },[numberAllow, charAllow, lenth ,PasswordGenerator] )

  return (
    <>
      <h1> password genretor</h1>

      <div className="main">
        <div className="inputbox">
          <input type="text" value={password}  readOnly  placeholder="password" />
          <button>copy</button>
        </div>
        <div className="rang">
          <input
            type="range"
            id=""
            min={6}
            max={20}
            value={lenth}
            onChange={(e) => {
              setlenth(e.target.value);
            }}
          />
          {lenth}
        </div>
        <div className="chekbox">
          <input type="checkbox"  defaultChecked={numberAllow} id='' 
          
            onChange={()=>{
              setnumberAllow((prev)=> !prev);
            }}
            />
            numbar
        </div>
        <div className="chekbox2">
          <input type="checkbox"  defaultChecked={charAllow} id='' 
          
            onChange={()=>{
              setcharAllow((prev)=> !prev);
            }}
            />
            char
        </div>
      </div>
    </>
  );
}

export default App;
