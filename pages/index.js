import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Hero from "../components/Hero";


export default function Home() {
  return ( 

    <div className=" bg-pattern " >
      <Hero />
      <Header />
    </div>
  );
}
