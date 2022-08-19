import { useState } from 'react';
import Image from 'next/image';

function PhotoTabs() {
  const [tab, setTab] = useState(1);

  let data = [
    {
      src: '/contact-sticker.png',
      alt: 'alt',
      topic: 'A short version',
      paragraph:
        'A short version of the contact sticker 1. A short version of the contact sticker 1. A short version of the contact sticker 1 A short version of the contact sticker 1 A short version of the contact sticker 1 ',
      index: '1',
    },
    {
      src: '/heart-sticker.png',
      alt: 'alt',
      topic: 'A medium version',
      paragraph:
        '22222222 A short version of the contact sticker 1. A short version of the contact sticker 1. A short version of the contact sticker 1 A short version of the contact sticker 1 A short version of the contact sticker 1 ',
      index: '2',
    },
    {
      src: '/contact-sticker.png',
      alt: 'alt',
      topic: 'A longer verion',
      paragraph:
        '33333 A short version of the contact sticker 1. A short version of the contact sticker 1. A short version of the contact sticker 1 A short version of the contact sticker 1 A short version of the contact sticker 1 ',
      index: '3',
    },
  ];

  const handleTabChange = (e) => {
    setTab(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="my-8 grid grid-cols-3 gap-6 border-b bg-slate-100 rounded-2xl border-gray-200 p-2">
        {data.map(({ src, alt, topic, index }) => (
          <div
            key={topic}
            className={`index text-center flex flex-col border-b border-gray-200 hover:border-red-200`}
          >
            <Image src={src} height={200} width={200} alt={alt} />
            <button
              className={`${
                tab === index ? 'bg-slate-400 shadow-lg shadow-slate-600' : ''
              } inline-block py-4 rounded-t-lg bg-slate-300 hover:bg-slate-400 active:bg-slate-400`}
              onClick={handleTabChange}
              value={index}
            >
              {topic}
            </button>
          </div>
        ))}
        <p
          className={`max-w-2xl col-span-3 bg-slate-400 shadow-lg shadow-slate-600 rounded-b-xl px-4 mt-[-30px]`}
        >
          {data[tab - 1].paragraph}
        </p>
      </div>
    </div>
  );
}

export default PhotoTabs;
