import Image from 'next/image';

function Cta() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <Image
        src="/ellipse.svg"
        alt="ellipse"
        width={1119}
        height={175}
        layout="intrinsic"
        className="z-0 absolute"
      />
      <h2
        className={`text-7xl font-bold text-center z-1 absolute text-[#4969ED] max-w-[800px] leading-normal
        `}
      >
        Something to make you feel safe here.
      </h2>
    </div>
  );
}

export default Cta;
