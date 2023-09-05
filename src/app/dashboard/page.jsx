import Navbar from "@/components/Navbar";
import { headers } from "next/headers";

const page = () => {
    const headersList = headers()
    const email =  headersList.get('email')
  return (
    <>
      <Navbar></Navbar>
      <h1>This is a Dashboard page</h1>
      <h2> {email} </h2>
    </>
  );
};

export default page;
