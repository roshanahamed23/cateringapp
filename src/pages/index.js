import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Service from "@/components/Service";
import Moreinfo from "@/components/Moreinfo";
import Product from "@/components/Product";
import Menuflag from "@/components/Menuflag";
import Clientpart from "@/components/Clientpart";


const inter = Inter({ subsets: ["latin"] });
import Hero from "@/components/Hero";

export default function Home() {
  return (
   <Layout>
    <Hero/>
    <Service/>
    <Moreinfo/>
    <Product/>
    <Menuflag/>
    <Clientpart/>
   </Layout>
  );
}
