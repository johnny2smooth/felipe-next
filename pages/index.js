import Head from 'next/head';
import Image from 'next/image';
import Cta from '../components/Cta';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Layout>
        <Cta />
        <div className="flex flex-col items-center justify-center">
          <div className="my-8 grid gap-10 grid-cols-3 ">
            <Image
              src="/contact-sticker.png"
              height={200}
              width={200}
              alt="contact me"
            />
            <Image
              src="/heart-sticker.png"
              height={200}
              width={200}
              alt="heart me"
            />
            <Image
              src="/contact-sticker.png"
              height={200}
              width={200}
              alt="contact me"
            />
            <div className="col-span-3 grid grid-cols-3 rounded bg-[#4969ED] p-2">
              <h3 className="text-white col-span-2 text-3xl">
                What sets me apart from others!!!!!
              </h3>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
