import Layout from "@/components/layout/Layout";
import "../styles/globals.css";

// _app.js; for wrapping general layout for page components/content

// like "Root Component" NextJS will render
// automatically pulls these automatically
// Component - holds page content that should be rendered
// pageProps - props our pages might be getting
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
