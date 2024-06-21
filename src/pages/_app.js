import "@/styles/globals.css";
import Myprovider from "@/components/Mycontext";
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function App({ Component, pageProps }) {
  return(
  <Myprovider>
  <Component {...pageProps} />
  </Myprovider>);
}
