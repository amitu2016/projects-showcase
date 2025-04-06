'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

interface ProjectCardProps {
  title: string;
  description: string;
  screenshots: string[];
  githubLink: string;
  liveDemoLink?: string;
  tags: string[];
  onClick: () => void; // Added for modal trigger
}

export default function ProjectCard({
  title,
  description,
  screenshots,
  githubLink,
  liveDemoLink,
  tags,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-md rounded-xl shadow-xl border border-purple-800/50 p-6 flex flex-col cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)' }}
      onClick={onClick}
    >
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay className="rounded-md">
        {screenshots.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              width={400}
              height={200}
              className="rounded-md object-cover w-full h-48"
            />
          </div>
        ))}
      </Carousel>
      <h2 className="text-2xl font-bold text-blue-300 mt-4">{title}</h2>
      <p className="text-gray-300 mt-2 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag) => (
          <span key={tag} className="text-sm text-purple-300 bg-purple-800/30 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-4" onClick={(e) => e.stopPropagation()}> {/* Prevent modal trigger on button click */}
        <motion.a
          href={githubLink}
          target="_blank"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
          <span>GitHub</span>
        </motion.a>
        {liveDemoLink && (
          <motion.a
            href={liveDemoLink}
            target="_blank"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}