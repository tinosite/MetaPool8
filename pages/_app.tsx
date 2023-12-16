import 'bootstrap/dist/css/bootstrap.css'
import("bootstrap");
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        // import("bootstrap/dist/js/bootstrap");
import("bootstrap");

        // typeof document !== undefined 
        // ? require('bootstrap/dist/js/bootstrap') 
        // : null
    }, []);

    const router = useRouter();
    return (<Component {...pageProps} key={router.route} />);
}
export default MyApp;