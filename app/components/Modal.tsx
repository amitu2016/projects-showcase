'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ModalProps {
  project: {
    title: string;
    description: string;
    screenshots: string[];
    githubLink: string;
    liveDemoLink?: string;
    tags: string[];
    details?: string;
  } | null;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 rounded-xl p-6 max-w-2xl w-full relative"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-blue-300"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-3xl font-bold text-blue-300 mb-4">{project.title}</h2>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop className="rounded-md mb-4">
          {project.screenshots.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`${project.title} screenshot ${index + 1}`}
                width={600}
                height={300}
                className="rounded-md object-cover w-full h-64"
              />
            </div>
          ))}
        </Carousel>
        <p className="text-gray-300 mb-4">{project.description}</p>
        {project.details && <p className="text-gray-200 mb-4">{project.details}</p>}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-sm text-purple-300 bg-purple-800/30 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}