import '../styles/globals.css'
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Function to capitalize the first letter of the page name for dynamic title
  const getPageName = (pathname) => {
    const pageName = pathname.split('/').pop();
    return pageName ? pageName.charAt(0).toUpperCase() + pageName.slice(1) : 'Home';
  };


  const pageTitle = getPageName(router.pathname);


  return (
    <>
      <Head>
        <title>{`${pageTitle} - Prabisha Dental`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Render the appropriate layout based on the route */}
       <Layout>

       <Component {...pageProps} />
       </Layout>
       
      
    </>
  );
}

export default MyApp;