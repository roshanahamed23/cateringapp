import "@/styles/globals.css";
import Myprovider from "@/components/Mycontext";

export default function App({ Component, pageProps }) {
  return(
  <Myprovider>
  <Component {...pageProps} />
  </Myprovider>);
}
