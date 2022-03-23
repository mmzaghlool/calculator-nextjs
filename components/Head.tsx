import NHead from 'next/head';

type P = { title: string; meta: string };

function Head() {
  return (
    <NHead>
      <title>حاسبة الزكاه و نصاب الزكاه</title>
      <meta
        name="description"
        content={
          'احسب نصاب زكاتك و قيمتها، عبر حاسبة الزكاة، أياً كانت أجناس الأموال التي تجب فيها الزكاة سواء كانت مالاً أو أسهماً أو ذهباً.'
        }
      />
      <link rel="icon" href="/favicon.ico" />
    </NHead>
  );
}

export default Head;
