import { getAuthSlice, signout, signin } from "../redux/auth";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../screens/Dashboard";
import Splash from "../screens/Splash";
import Head from "next/head";


const Home = () => {
  const auth = useSelector(getAuthSlice)
  const dispatch = useDispatch()

  console.log(auth)

  return (
    <div className="bg-white max-w-[440px] w-11/12 h-[92vh] rounded-3xl">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      {auth.user.loggedIn ? <Dashboard /> : <Splash />}
      {/* <button onClick={() => dispatch(signin())}>Sign In</button>
      <button onClick={() => dispatch(signout())}>Sign Out</button> */}
    </div>
  );
};

export default Home;
