import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Layout>
        <main>Hello!</main>
      </Layout>
    </div>
  );
}
