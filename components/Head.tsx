import Head from 'next/head';

type P = { title: string; meta: string };

export default function (params: P) {
    const { title, meta } = params;

    return (
        <Head>
            <title>Mostafa Mahmoud | {title}</title>
            <meta name="description" content={meta} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
