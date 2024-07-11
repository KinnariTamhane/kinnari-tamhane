import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Tech Stack</h2>
        <p className='mt-6 mb-10 text-2xl md:text-3xl text-center' block>Web Designing - Frameworks - Libraries</p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>SEO</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Vue.js</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>TailwindCss</li>
            <li>Redux</li>
            <li>JEST</li>
        </ul>

        <p className='mt-10 mb-10 text-3xl text-center' block>Tools</p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <li>Google Optimize</li>
            <li>Bit.dev</li>
            <li>Git</li>
            <li>Jira</li>
            <li>Bitbucket</li>
            <li>Confluence</li>
            <li>Excalidraw</li>
            <li>Webpack</li>
            <li>Razzel</li>
            <li>Bugsnag</li>
        </ul>

        <p className='mt-10 mb-10 text-2xl md:text-3xl text-center' block>Analytic & SEO Tools</p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <li>Pagespeed insights</li>
            <li>Google Analytics</li>
            <li> Google Search Console</li>
            <li>Core Web Vitals Report</li>
        </ul>

        <p className='mt-10 mb-10 text-2xl md:text-3xl text-center' block>OS & Softwares - DevOps - Databases</p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <li>Windows</li>
            <li>Linux</li>
            <li>macOs</li>
            <li>Adobe Photoshop</li>
            <li>Figma</li>
            <li>JenKins</li>
            <li>Docker</li>
            <li>MySQL</li>
            <li>MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
