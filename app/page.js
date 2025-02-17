'use client';

import Image from 'next/image';  // Use Image component to load the profile image

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-teal-300 min-h-screen text-gray-800">
      {/* Header Section */}
      <header className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Ajeng Reyra Prameswari</h1>
        <p className="text-xl mb-4 text-gray-700">Mahasiswa Sistem Informasi | Ma'soem University</p>
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
          <Image
            src="/profile.jpeg"  // Replace with your profile image path
            alt="Profile Picture"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">About Me</h2>
          <p className="text-lg text-gray-600">
            Hallo, perkenalkan nama saya Ajeng Reyra Prameswari. Saya mahasiswa Sistem Informasi semester 4 di Ma'Soem University. 
            Saya sangat tertarik dengan bidang teknologi informasi, terutama dalam pengembangan perangkat lunak dan web.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-4 bg-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Skills</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="text-lg">💻 Web Development (HTML, CSS, JavaScript, React.js, Next.js)</li>
            <li className="text-lg">🔧 Backend Development (Node.js, Express)</li>
            <li className="text-lg">📊 Database Management (MySQL, MongoDB)</li>
            <li className="text-lg">⚙️ Problem Solving and Algorithms</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-4 bg-teal-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p>Building responsive and interactive websites with modern frameworks like React.js and Next.js.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
              <p>Developing efficient and scalable server-side applications using Node.js and Express.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
              <p>Designing clean and user-friendly interfaces for web and mobile applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Portfolio</h2>
          <p className="text-lg mb-6 text-gray-700">Here are some of the projects I have worked on:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
              <p>A web app for task management built using React.js and Node.js.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
              <p>A portfolio website built with Next.js to showcase my work.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project 3</h3>
              <p>A blog platform that allows users to write and share articles built using Node.js.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Me</h2>
          <p className="text-lg mb-6 text-gray-700">Feel free to reach out to me via email or LinkedIn.</p>
          <div className="flex justify-center space-x-8">
            <a href="mailto:ajengreyra27@gmail.com" className="text-blue-500">Email</a>
            <a href="https://www.linkedin.com/in/ajengreyra" className="text-blue-500">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
