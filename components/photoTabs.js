import Image from 'next/image';

let data = [
  { src: '/contact-sticker.png', alt: 'alt', topic: 'Press me' },
  { src: '/contact-sticker.png', alt: 'alt', topic: 'Press me' },
  { src: '/contact-sticker.png', alt: 'alt', topic: 'Press me' },
];

function PhotoTabs() {
  return (
    <div className="flex flex-col items-center justify-center my-8 border-b border-gray-200">
      <div className="my-8 grid gap-2 grid-cols-3">
        {data.map((item) => (
          <button
            key={item.topic}
            className="text-center flex flex-col items-center mb-4 border-b border-gray-200 hover:border-red-200"
          >
            <Image src={item.src} height={200} width={200} alt={item.alt} />
            <p className="inline-block p-4 rounded-t-lg border-b-2 hover:border-red-200">
              {item.topic}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default PhotoTabs;
