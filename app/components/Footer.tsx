import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 text-gray-300 p-8 text-center z-10 border-t border-purple-700/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="text-lg">© 2025 Amit Kumar Upadhyay. All rights reserved.</p>
    </motion.footer>
  );
}