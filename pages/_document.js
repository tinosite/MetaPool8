import { Html, Head, Main, NextScript } from 'next/document'
import SimpleLayout from '../components/layout/simple'

export default function Document() {
  return (
    <Html>
      
      <Head/>
      <body>
        <SimpleLayout>
          {/* <Main /> */}
          <NextScript />
        </SimpleLayout>
      </body>
    </Html>
  )
}
