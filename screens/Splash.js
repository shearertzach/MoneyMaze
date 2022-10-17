import { useState } from "react"
import SplashDefault from "../components/Splash"
import LogIn from "../components/Splash/LogIn"
import SignUp from "../components/Splash/SignUp"



export default function Splash() {
  const [authType, setAuthType] = useState(null)
  return (
    <div className='relative w-full h-full'>
      {(authType != null) && <button onClick={() => setAuthType(null)} className="absolute top-4 left-4 font-bold">Back</button>}
      {(authType == null) && <SplashDefault setType={setAuthType} />}
      {(authType == 'Log In') && <LogIn setType={setAuthType} />}
      {(authType == 'Sign Up') && <SignUp setType={setAuthType} />}
    </div>
  )
}
