import { useState } from 'react';
import Image from 'next/image';

function PhotoTabs() {
  const [tab, setTab] = useState(1);

  let data = [
    {
      src: '/contact-sticker.png',
      alt: 'alt',
      topic: 'short',
      paragraph:
        'A short version of the contact sticker 1. A short version of the contact sticker 1. A short version of the contact sticker 1 A short version of the contact sticker 1 A short version of the contact sticker 1 ',
      index: '1',
    },
    {
      src: '/heart-sticker.png',
      alt: 'alt',
      topic: 'medium',
      paragraph:
        '22222222 A short version of the contact sticker 1. A short version of the contact sticker 1. A short version of the contact sticker 1 A short version of the contact sticker 1 A short version of the contact sticker 1 ',
      index: '2',
    },
    {
      src: '/contact-sticker.png',
      alt: 'alt',
      topic: 'longer',
      paragraph:
        '33333 A short version of the contact sticker 1. A short version of the contact sticker 1. A short version of the contact sticker 1 A short version of the contact sticker 1 A short version of the contact sticker 1 ',
      index: '3',
    },
  ];

  const handleTabChange = (e) => {
    setTab(e.target.value);
  };

  console.log(tab);

  return (
    <div className="flex flex-col items-center justify-center my-8 text-slate-100">
      <div className="my-8 grid grid-cols-3 gap-2 border-b p-4">
        {data.map(({ src, alt, topic, index = 1 }) => (
          <div
            key={topic}
            className={`z-1 index text-center flex flex-col border-b border-gray-200 hover:border-red-200`}
          >
            <Image src={src} height={200} width={200} alt={alt} />
            <button
              className={`${
                tab == index
                  ? 'bg-slate-800 shadow-lg shadow-slate-600'
                  : 'bg-slate-600'
              } inline-block py-4 px-1 rounded-t-lg  hover:bg-slate-800 active:bg-slate-800`}
              onClick={handleTabChange}
              value={index}
            >
              {topic}
            </button>
          </div>
        ))}
        <div className="col-span-3  bg-slate-800 shadow-lg shadow-slate-600 rounded-b-xl px-4 mt-[-10px]">
          <p className={`max-w-2xl py-4`}>{data[tab - 1].paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoTabs;
