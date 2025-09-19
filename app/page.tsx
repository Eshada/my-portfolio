import Image from "next/image";
import FadeInSection from "../components/FadeInSection";
import ProjectsJson from "./projects.json";
import Link from "next/link";

interface Project {
  projectName: string;
  projectDescription: string;
  link: string;
  githup: string;
}

export default function Portfolio() {
  const navSections: string[] = ["Home", "About", "Projects", "Tickets", "Contact"];
  const projects: Project[] = ProjectsJson as Project[];

  return (
    <div className="bg-white text-dark min-h-screen font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 z-50 bg-white">
        <h1 className="text-2xl font-bold text-primary">Essam Dhamri</h1>
        <ul className="hidden md:flex gap-8 font-medium">
          {navSections.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-primary hover:text-accent transition-colors duration-300 "
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <FadeInSection id="home" className="flex flex-col items-center justify-center text-center py-25 px-6 bg-white">
        <div className="w-64 h-64 mb-6 relative rounded-full overflow-hidden border-4 border-primary shadow-md transition-all duration-300 hover:scale-105">
          <Image src="/Avatar.png" alt="Essam Avatar" fill style={{ objectFit: "cover" }} />
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-dark mb-4 drop-shadow-sm">
          Essam Abdullah Dhamri
        </h2>

        <p className="text-lg md:text-xl max-w-2xl text-gray-600 mb-6">
          Web Developer specialized in React, Next.js, Tailwind, and Supabase. Passionate about clean code and user-friendly solutions.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 mb-6">        
          <Image src="/icons/Node.svg" alt="Node.js" width={48} height={48} className="hover:scale-110 transition-transform" />
          <Image src="/icons/TS.svg" alt="TypeScript" width={48} height={48} className="hover:scale-110 transition-transform" />
          <Image src="/icons/Next.svg" alt="Next.js" width={48} height={48} className="hover:scale-110 transition-transform" />
          <Image src="/icons/React.svg" alt="React.js" width={48} height={48} className="hover:scale-110 transition-transform" />
          <Image src="/icons/Tailwind.svg" alt="Tailwind CSS" width={48} height={48} className="hover:scale-110 transition-transform" />
          <Image src="/icons/SCSS.svg" alt="SCSS" width={48} height={48} className="hover:scale-110 transition-transform" />
        </div>

        <Link
          href="#projects"
          className="mt-6 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          View My Work
        </Link>
      </FadeInSection>

      {/* About Section */}
      <section className="bg-gray-50">
        <FadeInSection id="about" className="px-6 py-20 max-w-5xl mx-auto text-center ">
          <h3 className="text-3xl font-bold text-primary mb-8 drop-shadow-sm">About Me</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            I am a Web Developer with hands-on experience in building responsive platforms using React, Next.js, and Tailwind. I successfully developed and manage the &quot;Telawah&quot; platform, improving data accessibility for 200+ users.
          </p>
          <Link
            href="/Essam Front End Resume.pdf"
            download="Essam_Abdullah_Dhamri_CV.pdf"
            target="_blank"
            className="inline-block mt-8 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md"          >
            Download CV
          </Link>
        </FadeInSection>
      </section>

      {/* Projects Section */}
      <section className="bg-white">
        <FadeInSection id="projects" className="px-6 py-20 max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary mb-12 drop-shadow-sm">Projects</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project : Project, index : number) => (
              <FadeInSection
                key={index}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-200 text-left"
                delay={index * 0.2}
              >
                <h4 className="text-xl font-bold mb-2 text-dark">{project.projectName}</h4>
                <p className="text-gray-600 mb-4">{project.projectDescription}</p>
                <div className="flex gap-4">
                  <Link href={project.link} className="px-5 py-2 bg-primary text-white rounded-full font-semibold hover:bg-accent transition-all duration-300 transform hover:scale-105" target="_blank">Visit</Link>
                  <Link href={project.githup} className="px-5 py-2 bg-accent text-white rounded-full font-semibold hover:bg-primary transition-all duration-300 transform hover:scale-105" target="_blank">GitHub</Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Tickets Section */}
      <FadeInSection id="tickets" className="px-6 py-20 text-center bg-gray-50">
        <h3 className="text-3xl font-bold text-primary mb-6 drop-shadow-sm">Tickets</h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Tickets will be fetched from Supabase (visible only when approved).
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {[1, 2].map(ticket => (
            <FadeInSection
              key={ticket}
              className="relative bg-white p-8 rounded-2xl shadow-md border border-gray-200 text-left 
                        transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
            >
              {/* رقم التذكرة كأيقونة */}
              <div className="absolute -top-5 left-6 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md">
                {ticket}
              </div>

              <div className="mt-2">
                <h4 className="text-lg font-semibold text-dark mb-3">Ticket {ticket}</h4>
                <div className="border-t border-gray-100 mb-3"></div>
                <p className="text-gray-600 leading-relaxed">
                  This is a sample ticket fetched from Supabase.
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>

      {/* Contact Section */}
      <section className="bg-white">
        <FadeInSection id="contact" className="px-6 py-20 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary mb-8 drop-shadow-sm">Contact</h3>
          <p className="text-gray-600 mb-8">Feel free to reach out through the following channels:</p>
          <div className="flex justify-center gap-8 text-lg font-medium">
            <Link href="mailto:essada.dev@gmail.com" className="text-primary hover:text-accent transition-colors duration-300">Email</Link>
            <Link href="https://www.linkedin.com/in/essam-dhamri-45aab9287/" className="text-primary hover:text-accent transition-colors duration-300">LinkedIn</Link>
            <Link href="https://github.com/Eshada?tab=repositories" className="text-primary hover:text-accent transition-colors duration-300">GitHub</Link>
          </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 bg-gray-50">
        © 2025 Essam Abdullah Dhamri – All Rights Reserved
      </footer>

    </div>
  );
}
