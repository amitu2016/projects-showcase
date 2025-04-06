'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { projects, Project } from '../data/projects';

export default function Home() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  const filterOptions = ['All', 'Full-Stack', 'Frontend', 'Backend'];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow container mx-auto p-8 z-10">
        <motion.h2
          className="text-3xl font-bold text-blue-300 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Project Showcase
        </motion.h2>
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {filterOptions.map((option) => (
            <motion.button
              key={option}
              className={`px-4 py-2 rounded-md text-white font-medium ${
                filter === option
                  ? 'bg-blue-600'
                  : 'bg-gray-800 hover:bg-gray-700'
              } transition-colors`}
              onClick={() => setFilter(option)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {option}
            </motion.button>
          ))}
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              screenshots={project.screenshots}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
              tags={project.tags}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </main>
      <Footer />
      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}