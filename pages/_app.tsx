import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    const router = useRouter();
    return (<Component {...pageProps} key={router.route} />);
}
export default MyApp;