import Head from 'next/head';
import Image from 'next/image';
import Cta from '../components/cta';
import Header from '../components/Header';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Layout>
        <Cta />
      </Layout>
    </>
  );
}
