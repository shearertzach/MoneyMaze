import { getAuthSlice, signout, signin } from "../redux/auth";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../screens/Dashboard";
import Splash from "../screens/Splash";


const Home = () => {
  const auth = useSelector(getAuthSlice)
  const dispatch = useDispatch()

  console.log(auth)

  return (
    <div className="bg-slate-100 max-w-[440px] w-11/12 h-[92vh] rounded-3xl">
      {auth.user.loggedIn ? <Dashboard /> : <Splash />}
      {/* <button onClick={() => dispatch(signin())}>Sign In</button>
      <button onClick={() => dispatch(signout())}>Sign Out</button> */}
    </div>
  );
};

export default Home;
