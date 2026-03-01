import ParticlesBackground from './ParticlesBackground'
import { useState, useEffect } from 'react'
import profileimg from './assets/imageport.png'
import profileHover from './assets/imageport2.png'
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { HiMoon, HiSun } from "react-icons/hi";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <ParticlesBackground />
      <div className="relative z-10 min-h-screen bg-white dark:bg-[#0a0a0a] px-6 md:px-20 font-sans transition-colors duration-500">

        {/* 1. Navbar Section */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 md:px-20 bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-white/10 transition-colors">
          <div className="flex gap-4  md:gap-10 text-[12px] text-sm text-gray-700 dark:text-gray-400 font-medium tracking-wide">

            <a href="#about" className="hover:text-blue-500 dark:hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-blue-500 dark:hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-blue-500 dark:hover:text-white transition">Contact</a>
          </div>
          <a
            href="/Resume_Wuttikorn.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >

            <button className="bg-slate-900 dark:bg-white text-white dark:text-black text-[11px] md:text-sm px-5 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition duration-300 shadow-lg">
              Download Resume
            </button>
          </a>
        </nav>

        {/* HERO SECTION */}
        <section className="min-h-screen text-center overflow-hidden relative">

          {/* Glow Background */}
          <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[220px] -z-10 hidden dark:block"></div>

          {/* TEXT AREA */}
          <div className="pt-24 md:pt-32 px-6 z-10">

            <p className="font-bold text-slate-600 dark:text-gray-300 mb-1 leading-relaxed text-[clamp(1rem,2.5vw,1.25rem)]">
              Hello, I'm Wuttikorn
            </p>

            <h1 className="relative z-10 font-black mb-1 leading-relaxed text-[clamp(1.8rem,4vw,2.6rem)]">
              <span className="text-blue-500">AI & Full-Stack</span>{' '}
              <span className="text-black dark:text-white transition-colors duration-300">Developer</span>
            </h1>

            <p className="text-gray-400 mb-1 mx-auto max-w-lg leading-tight text-[clamp(0.95rem,2vw,1.1rem)] italic">
              "A 3rd-year Computer Science student combining the power of AI with modern
              Web & Mobile development to solve real-world problems."
            </p>
          </div>

          {/* IMAGE AREA */}
          <div className="flex justify-center items-center pt-6 md:pt-10 relative">
            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}  /* เมื่อเมาส์เข้ามา */
              onMouseLeave={() => setIsHovered(false)} /* เมื่อเมาส์ออกไป */
            >
              {/* Glow */}
              {/* <div className="absolute bottom-0 w-[360px] h-[360px] bg-blue-500/30 rounded-full blur-[200px] -z-10"></div> */}

              <img
                src={isHovered ? profileHover : profileimg}
                alt="Wuttikorn"
                className="relative w-[280px] sm:w-[350px] md:w-[480px] rounded-2xl /* มนขอบนิดหน่อย */
              object-cover  transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* 3. About Me Section */}

        <section id="about" className="py-40 text-center px-6">
          <h2 className="font-bold text-3xl text-slate-900 dark:text-white mb-6">
            About Me
          </h2>

          <p className="max-w-xl mx-auto text-gray-400 text-[clamp(1.1rem,2.5vw,1.3rem)] leading-loose">
            A 3rd-year Computer Science student at Srinakharinwirot University (SWU) with a deep passion
            for Artificial Intelligence and Full-Stack Development. I focus on building intelligent solutions that combine
            Computer Vision models with modern web and mobile applications to solve real-world problems.
          </p>
        </section>



        {/* 4. Tech Stack Section */}
        <section className="py-5 max-w-2xl mx-auto text-center">
          <h3 className="text-xl uppercase tracking-[0.3em] text-gray-900 dark:text-gray-400 mb-16 font-bold">My Tech Stack</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-4">
            {/* 1. เปลี่ยน Array เป็น Object ที่มีชื่อและ path รูป */}
            {[
              { name: 'Python', img: '/Icon/python1.png' },
              { name: 'React', img: '/Icon/react1.png' },
              { name: 'Node.js', img: '/Icon/nodejs.png' },
              { name: 'Docker', img: '/Icon/docker1.png' },
              { name: 'Firebase', img: '/Icon/firebase111.png' },
              { name: 'Git', img: '/Icon/git.png' },
              { name: 'Tailwind', img: '/Icon/tailwind11.png' },
              { name: 'JS', img: '/Icon/js1.png' },
              { name: 'HTML', img: '/Icon/html1.png' },
              { name: 'CSS', img: '/Icon/css1.png' },
              { name: 'PHP', img: '/Icon/php.png' },
              { name: 'Flutter', img: '/Icon/flutter1.png' },
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center group cursor-pointer transition-all duration-300 transform hover:-translate-y-3">

                <div className="w-12 h-12 mb-4 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <p className="font-bold  text-gray-600  dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-white transition-colors duration-300 ">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>


        {/* 5. Projects Section */}
        <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white"> Academic Projects</h2>

          <div className="space-y-20">
            {[
              {
                id: "01",
                title: "Face-Recognition-Attendance",
                description: "A smart, contactless attendance management system leveraging Deep Learning technology for real-time identification.",
                tech: [
                  { name: "Python", img: "/Icon/python1.png" },
                  { name: "HTML", img: "/Icon/html1.png" },
                  { name: "CSS", img: "/Icon/css1.png" },
                ],
                img: ["/mockup/faceraclobby.png"],
                github: "https://github.com/WuttikornFunk/Face-Recognition-Attendance",
              },
              {
                id: "02",
                title: "Low-Light Vehicle & License Plate Detection",
                description: "An AI-powered system that enhances low-light vehicle and license plate detection using image brightening and YOLOv8.",
                tech: [
                  { name: "Python", img: "/Icon/python1.png" },
                  { name: "OpenCV", img: "/Icon/opencv1.png" },
                ],
                img: ["/mockup/comvision.png"],
                github: "https://github.com/WuttikornFunk/Enhancing-Low-Light-Vehicle-License-Plate-Detection-Using-Image-Brightening-and-YOLOv8",
              },
              {
                id: "03",
                title: "Shabu_Umami",
                description: "A comprehensive Point of Sale (POS) & Restaurant Management System designed specifically for buffet restaurants. Built with Flutter and powered by Firebase, this application streamlines the entire dining process from self-ordering at the table to real-time kitchen updates and cashless payment.",
                tech: [
                  { name: "Flutter", img: "/Icon/flutter.png" },
                  { name: "Firebase", img: "/Icon/firebase111.png" },
                ],
                img: ["/mockup/shabulanding.png", "/mockup/shabumenu.png"],
                github: "https://github.com/WuttikornFunk/Shabu_Umami",
              },
              {
                id: "04",
                title: "Shopping Cart System",
                description: "A comprehensive shopping cart system built with React and Firebase, enabling users to browse products, add items to their cart, and manage their purchases.",
                tech: [
                  { name: "EJS", img: "/Icon/ej.png" },
                  { name: "JS", img: "/Icon/js1.png" },
                  { name: "Node.js", img: "/Icon/nodejs.png" },
                ],
                img: ["/mockup/homecart.png", "/mockup/logincart.png"],
                github: "https://github.com/WuttikornFunk/Shopping-Cart",
              }

            ].map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Project Info */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                    <span className="text-blue-500 mr-2"># {project.id}</span>
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Tech Badges  */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t.name}
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm  bg-black/5 border border-black/10 text-gray-700 hover:border-blue-500/50 dark:bg-white/5 dark:border-white/10 dark:text-gray-300 dark:hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <img src={t.img} alt={t.name} className="w-4 h-4 object-contain" />
                        <span className="whitespace-nowrap ">{t.name}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">

                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2  px-6 py-2.5 rounded-full  bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Project Image / Mockup */}
                <div className="w-full lg:w-7/12 relative ">

                  {project.img.length === 1 ? (
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={project.img[0]}
                        alt={project.title}
                        className="w-full rounded-2xl shadow-2xl transition-all duration-500 ease-in-out transform-gpu origin-center hover:scale-110 hover:-translate-y-2 cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-8 ">
                      {project.img.map((imgSrc, i) => (
                        <div key={i} className="overflow-hidden rounded-2xl">
                          <img
                            src={imgSrc}
                            alt={`${project.title}-${i}`}
                            className="w-full h-auto object-cover rounded-2xl shadow-2xl transition-all duration-500 ease-in-out transform-gpu origin-center hover:scale-110 hover:-translate-y-2 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* 6. Contact Section */}
        <section id="contact" className="py-20 px-6 max-w-xl mx-auto w-full">
          <h2 className="text-5xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Contact Me
          </h2>

          {/* Form Container with Blue Glow Effect */}
          <div className="relative rounded-2xl bg-slate-50 dark:bg-[#1c1c1c] p-8 md:p-12 shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)] border border-slate-200 dark:border-white/5">
            <form className="space-y-6"
              onSubmit={async (event) => {
                event.preventDefault();
                const form = event.target;

                const formData = new FormData(form);
                const dataToSave = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  message: formData.get('message')
                };

                const button = form.querySelector('button[type="submit"]');
                const originalText = button.innerText;
                button.innerText = "Sending...";
                button.disabled = true;

                try {
                  const response = await fetch('http://localhost:5000/api/contact', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataToSave)
                  });

                  const data = await response.json();

                  if (response.ok) {
                    button.innerText = "Message Sent! 🎉";
                    form.reset(); // ล้างข้อมูลในฟอร์มหลังส่งสำเร็จ
                    setTimeout(() => {
                      button.innerText = originalText;
                      button.disabled = false;
                    }, 3000); // กลับเป็นปุ่มเดิมใน 3 วินาที
                  }
                } catch (error) {
                  console.error(error);
                  button.innerText = "Failed to send ❌";
                  setTimeout(() => {
                    button.innerText = originalText;
                    button.disabled = false;
                  }, 3000);
                }
              }}
            >


              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-slate-900 dark:text-white font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-white dark:bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-slate-900 dark:text-white font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your.Email@example.com"
                  className="w-full bg-white dark:bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-slate-900 dark:text-white font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="How can I help you?"
                  className="w-full bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-black dark:bg-white/10 border border-blue-500/50 hover:border-blue-500 text-white font-semibold py-3.5 rounded-lg transition duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
        {/* --- ปุ่มสลับโหมด --- */}
        <div className="fixed left-8 bottom-8 z-50">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-3 rounded-full bg-gray-100 dark:bg-white/10 
             text-xl shadow-xl backdrop-blur-md 
             border border-gray-200 dark:border-white/10 
             transition-all duration-300 hover:scale-110"
          >
            <span className="transition-transform duration-500">
              {isDarkMode ? <HiSun className="text-white" /> : <HiMoon />}
            </span>
          </button>
        </div>

        {/* Floating Social Sidebar */}
        <div className="fixed right-8 bottom-8 flex flex-col items-center gap-6 z-50 text-gray-500 text-3xl">

          <a href="https://github.com/WuttikornFunk" target="_blank" rel="noreferrer" className="hover:text-blue-500 dark:hover:text-white hover:-translate-y-1 transition-all duration-300"
            title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/wuttikorn-jantawises-4606913a3/" target="_blank" rel="noreferrer" className="hover:text-blue-500 dark:hover:text-white hover:-translate-y-1 transition-all duration-300"
            title="LinkedIn">
            <FaLinkedin />
          </a>
          <a
            href="mailto:wuttikornuptown@gmail.com" className="hover:text-blue-500 dark:hover:text-white hover:-translate-y-1 transition-all duration-300 "
            title="Send an Email"
          >
            <SiGmail />
          </a>

        </div>
        {/* 7. Footer Section */}
        <footer className="py-10 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-4">

            {/* ข้อความลิขสิทธิ์แบบในรูปของคุณ */}
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base text-center">
              © 2026 Wuttikorn Jantawises Portfolio. All rights reserved.
            </p>

            {/* (Optional) ถ้าอยากให้ดูมีอะไรขึ้นมาหน่อย อาจจะใส่ประโยคสั้นๆ ไว้ข้างล่าง */}
            <p className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest">
              Designed & Built with  by Wuttikorn
            </p>
          </div>
        </footer>

      </div>
    </>
  )
}

export default App