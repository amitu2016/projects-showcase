'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium, FaFileDownload } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: 'mailto:amitu2016@gmail.com', label: 'Email', icon: <FaEnvelope /> },
    { href: 'https://linkedin.com/in/upadhyayamitk', label: 'LinkedIn', icon: <FaLinkedin />, external: true },
    { href: 'https://github.com/amitu2016', label: 'GitHub', icon: <FaGithub />, external: true },
    { href: 'https://medium.com/@amitu2016', label: 'Medium', icon: <FaMedium />, external: true },
    { href: '/Amit_Kumar_Upadhyay_Resume.pdf', label: 'Download Resume', icon: <FaFileDownload />, download: true },
  ];

  return (
    <motion.header
      className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-md text-white p-6 shadow-xl sticky top-0 z-40 border-b border-purple-700/50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Title */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-blue-300 tracking-tight">My Projects</h1>
        </motion.div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </motion.svg>
        </button>

        {/* Navigation Menu */}
        <motion.nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block absolute md:static top-20 left-0 w-full md:w-auto bg-gradient-to-br from-purple-900/90 to-blue-900/90 md:bg-transparent p-6 md:p-0 z-30 shadow-lg md:shadow-none rounded-b-xl md:rounded-none`}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 divide-y divide-purple-700/50 md:divide-y-0">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                download={item.download}
                whileHover={{ scale: 1.1, color: '#bfdbfe', y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-lg font-medium text-gray-200 transition-colors duration-200 block md:inline-block pt-4 md:pt-0"
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-purple-800/50">
                  <span className="text-xl text-purple-300">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}