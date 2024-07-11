import React from 'react';

const Education = () => {
  return (
    <section id="education" className="p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Education</h2>
        <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-300 shadow-md rounded-lg overflow-hidden text-sm md:text-sm">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-4 px-4 uppercase font-semibold text-lg">Degree</th>
            <th className="py-4 px-4 uppercase font-semibold text-lg">Institution</th>
            <th className="py-4 px-4 uppercase font-semibold text-lg">Duration</th>
            <th className="py-4 px-4 uppercase font-semibold text-lg">Percentage/CGPA</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-center">
          <tr>
            <td className="py-4 px-4">B.E. (Computer Engineering)</td>
            <td className="py-4 px-4">Thadomal Shahani Engineering College</td>
            <td className="py-4 px-4">August 2013 - May 2016</td>
            <td className="py-4 px-4">8.25 CGPA</td>
          </tr>
          <tr>
            <td className="py-4 px-4">Diploma (Computer Engineering)</td>
            <td className="py-4 px-4">Shri Bhagubhai Mafatlal Polytechnic</td>
            <td className="py-4 px-4">August 2010 - June 2013</td>
            <td className="py-4 px-4">86.95%</td>
          </tr>
          <tr>
            <td className="py-4 px-4">S.S.C.</td>
            <td className="py-4 px-4">S.C.D. Barfiwala High School</td>
            <td className="py-4 px-4">April 2009 - March 2010</td>
            <td className="py-4 px-4">91.45%</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
    </section>
  );
};

export default Education;
