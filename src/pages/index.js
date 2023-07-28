import auth from "@/firebase/firebase.auth";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
    const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
      {user?.email && <h1 style={{ textAlign: "center", marginTop:"10%" }}>Logged in user email:{user?.email} </h1>}
    </div>
  );
};

export default HomePage;
