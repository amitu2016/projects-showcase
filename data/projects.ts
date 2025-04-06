// data/projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    screenshots: string[]; // Changed to array for multiple images
    githubLink: string;
    liveDemoLink?: string;
    tags: string[]; // e.g., 'Full-Stack', 'Frontend', 'Backend'
    details?: string; // Optional extra details for modal
  }
  
  export const projects: Project[] = [
   
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing my skills and experience.',
      screenshots: ['/project2-screenshot.png'],
      githubLink: 'https://github.com/amitu2016/amit-portfolio',
      liveDemoLink: 'https://amitupadhyay.co.in',
      tags: ['Frontend', 'Next.js', 'Tailwind CSS'],
      details: 'Designed with a dark theme and interactive animations using Framer Motion.',
    },
    {
        id: 2,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce site with user authentication, product listings, and payment integration.',
        screenshots: ['/project1-screenshot.jpg', '/project1-screenshot2.jpg'],
        githubLink: 'https://github.com/amitu2016/ecommerce-platform',
        liveDemoLink: 'https://ecommerce-demo.vercel.app',
        tags: ['Full-Stack', 'React', 'Node.js', 'MongoDB'],
        details: 'Built with Next.js, Express, and Stripe for payments. Features include cart management and order tracking.',
      },
    // Add more projects here
  ];