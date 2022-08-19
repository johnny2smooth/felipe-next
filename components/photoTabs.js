import { useState } from 'react';
import Image from 'next/image';

function PhotoTabs() {
  const [tab, setTab] = useState(1);

  let data = [
    { src: '/contact-sticker.png', alt: 'alt', topic: '1', index: 1 },
    { src: '/contact-sticker.png', alt: 'alt', topic: '2', index: 2 },
    { src: '/contact-sticker.png', alt: 'alt', topic: '3', index: 3 },
  ];

  const handleTabChange = (e) => {
    setTab(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="my-8 grid gap-2 grid-cols-3 border-b bg-slate-100 rounded-2xl border-gray-200 p-2">
        {data.map(({ src, alt, topic, index }) => (
          <div
            key={topic}
            className={`index text-center flex flex-col  mb-1 border-b border-gray-200 hover:border-red-200`}
          >
            <Image src={src} height={200} width={200} alt={alt} />
            <button
              className={`${
                tab === index ? 'bg-slate-400 shadow-sm' : ''
              } inline-block p-4 rounded-t-lg bg-slate-300 hover:bg-slate-400 active:bg-slate-400`}
              onClick={handleTabChange}
              value={index}
            >
              {topic}
            </button>
          </div>
        ))}
        <p className={`col-span-3`}>
          {tab === '3'
            ? '3333333 something so special that it needs a description!'
            : tab === '2'
            ? '2222222 something so special that it needs a description!'
            : '1111111 something so special that it needs a description!'}
        </p>
      </div>
    </div>
  );
}

export default PhotoTabs;
