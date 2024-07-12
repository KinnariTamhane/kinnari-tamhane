import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'The ParentInc. (TickledMedia Pvt Ltd)',
      location: 'Mumbai',
      title: 'Software Engineer II',
      duration: 'MAY 2021 - MAR 2024',
      achievements: [
        'Developed new product features that align with the product roadmap and user needs, resulting in a 55% increase in user traffic.',
        'Lead E-commerce project from Front End for South East Asia Markets, delivering 8 successful releases within 1 year.',
        'Created and maintained CRM initiatives by coordinating with Project Manager & Business directly.',
        'Led a revenue generation feature with a Project Manager & Third party service, increasing revenue by 15%.',
        'Conducted a thorough audit of the website\'s SEO performance and implemented technical SEO optimizations, improving performance with at least 90% of identified optimizations.',
        'Improved Web Vitals Score from 90% poor URLs to 0% poor URLs and 60% Good URLs.',
        'Analyzed & improved product using tools like Google Analytics, Google Tag Manager, Google Optimize.',
        'Implemented A/B testing strategies, leading to a 15% improvement in conversion rates.',
        'Collaborated with cross-functional teams to troubleshoot and resolve 100% frontend issues.',
        'Met project deadlines for each sprint with a 95% on-time delivery rate.'
      ]
    },
    {
      company: 'Big Rattle Technologies',
      location: 'Mumbai',
      title: 'Software Developer',
      duration: 'NOVEMBER 2017 - APRIL 2021',
      achievements: [
        'Designed and developed web applications and user interfaces for 10+ clients.',
        'Ensured 100% consistency with appearance/behavior across multiple browsers and devices.',
        'Maintained the LIVE website, added more appealing features, and made web pages responsive, increasing traffic by 25%.'
      ]
    }
  ];

  return (
    <section id="experience" className="p-8">
    <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-300 shadow-md rounded-lg overflow-hidden text-sm md:text-sm">
            <thead className="bg-gray-800 text-white">
            <tr>
                <th className="py-4 px-4 uppercase font-semibold text-lg">Company</th>
                <th className="py-4 px-4 uppercase font-semibold text-lg">Location</th>
                <th className="py-4 px-4 uppercase font-semibold text-lg">Title</th>
                <th className="py-4 px-4 uppercase font-semibold text-lg">Duration</th>
                {/* <th>Achievements</th> */}
            </tr>
            </thead>
            <tbody  className="text-gray-700 text-center">
            {experiences.map((experience, index) => (
                <tr key={index}>
                <td className="py-4 px-4">{experience.company}</td>
                <td className="py-4 px-4">{experience.location}</td>
                <td className="py-4 px-4">{experience.title}</td>
                <td className="py-4 px-4">{experience.duration}</td>
                {/* <td width='40%'>
                    <ul>
                    {experience.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                    ))}
                    </ul>
                </td> */}
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    </div>
    </section>
  );
};

export default Experience;
