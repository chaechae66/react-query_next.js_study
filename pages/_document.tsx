import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head title='화장품 정보' lang='ko'>
        <meta charSet='utf-8' content='화장품' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}