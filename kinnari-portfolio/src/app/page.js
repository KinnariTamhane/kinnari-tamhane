import React from 'react';
import Head from 'next/head';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Experience from './components/Experience';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kinnari Tamhane</title>
      </Head>
      <Header />
      <main className='bg-slate-700'>
        <Introduction/>
        <About />
        <Experience/>
        <Skills />
        <Education />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
