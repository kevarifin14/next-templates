import Head from 'next/head';

export default function Container({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="container mx-auto">
        {children}
      </div>
    </>
  );
}
