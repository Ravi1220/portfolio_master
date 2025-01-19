import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBadge } from "./components/SkillBadge";

function App() {
  const professionalProjects = [
    {
      title: "Pinch and Page - Recipe WebApp",
      description:
        "Frontend-only recipe book where users can browse recipes, view details, and filter them by category (e.g., Breakfast, Lunch, Dessert).",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind", "Vite", "NextJS"],
      link: "https://pinchandpage.netlify.app/",
      image: "assets/1.png",
    },
    {
      title: "Ravindra Audio",
      description:
        "Ravindra Audio is a sleek and modern e-commerce platform dedicated to delivering premium audio experiences. Featuring cutting-edge audio devices like the 'Ravindra Pro Wireless' headphones, the platform showcases the fusion of traditional acoustics and modern technology.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "Vite",
        "NextJS",
        "React",
      ],
      link: "https://spontaneous-sunshine-35e1ba.netlify.app/",
      image: "assets/2.png",
    },
    {
      title: "Protfolio Website",
      description:
        "Personal Profile Web Page that showcases my skills and creativity! 🌐",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "Vite",
        "NextJS",
        "React",
      ],
      link: "https://ravindraportfolio3.netlify.app/",
      image: "assets/3.png",
    },
  ];

  const personalProjects = [
    {
      title: "Shoe Shopping App | EVOLITE",
      description:
        "A basic and clean UI app for shopping different shoes online with a ease. it has all possible features",
      tags: ["Flutter", "Dart"],
      link: "https://github.com/yourusername/weather-dashboard",
      image: "link_to_image_4.jpg",
    },
  ];

  const skills = [
    "Flutter",
    "Dart",
    "Python",
    "C Programming",
    "C++ Programming",
    "Machine Learning",
    "SQL",
    "Linux",
    "Data Analysis and Visualization",
    "Tableau",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Ravindra Kumar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Frontend Developer
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://github.com/Ravi1220"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="http://www.linkedin.com/in/ravindra-kumar-89bb34286"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ravindragupta747@gmail.coom"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Projects */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Professional Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {professionalProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Personal Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:ravindragupta747@gmail.coom"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Ravindra Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
