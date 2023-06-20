import Layout from "@/components/Layout";
import ParticlesBackground from "@/components/ParticlesBackground";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <ParticlesBackground/>
      <Component {...pageProps} />
    </Layout>
  );
}
