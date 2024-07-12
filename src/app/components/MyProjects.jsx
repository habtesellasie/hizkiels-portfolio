'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCircleChevronRight, FaCircleChevronLeft } from 'react-icons/fa6';

const toolsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const toolsChildVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

const MyProjects = ({ projects }) => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='text-2xl mb-10 sm:text-3xl font-black text-center'
        id='my-projects'
      >
        My Projects
      </motion.h2>

      <div className='space-y-10'>
        {projects.map((project, projectIndex) => {
          const [currentImageIndex, setCurrentImageIndex] = useState(0);

          const handleNextImage = () => {
            setCurrentImageIndex((prevIndex) =>
              prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
            );
          };

          const handlePrevImage = () => {
            setCurrentImageIndex((prevIndex) =>
              prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
            );
          };
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: 'easeInOut', delay: 0.2 }}
              key={projectIndex}
              className='flex max-lg:flex-col items-center lg:even:flex-row-reverse gap-4 group justify-center'
            >
              <div className='flex flex-col justify-center gap-2'>
                <div className='flex flex-col justify-center w-full max-w-[600px] gap-4'>
                  <h3 className='text-xl font-bold md:text-2xl capitalize'>
                    {project.title}
                  </h3>
                  <p className='md:text-lg lg:text-xl text-md text-pretty'>
                    {project.description}
                  </p>
                </div>
                <motion.div
                  variants={toolsContainerVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  className='flex gap-2 flex-wrap mt-2'
                >
                  {project.tools.map((tool, i) => {
                    return (
                      <motion.span
                        variants={toolsChildVariants}
                        key={i}
                        className='px-4 py-1 bg-gray-200 dark:bg-gray-400 dark:text-black rounded-full text-sm capitalize hover:scale-105 transition cursor-pointer'
                      >
                        {tool}
                      </motion.span>
                    );
                  })}
                </motion.div>
                {/* <Link
                      href={project.youtube_link}
                      target='_blank'
                      className='text-blue-500 inline-flex items-center gap-2 mt-4 hover:underline transition'
                    >
                      Visit link
                      <FaArrowRightLong />
                    </Link> */}
              </div>

              <div className='w-full max-w-[600px] relative'>
                <div className='rounded-lg overflow-hidden'>
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      width={300}
                      height={500}
                      className='w-full h-[400px] rounded-lg object-cover'
                      src={project.images[currentImageIndex]}
                      alt={project.title}
                    />
                  </motion.div>
                </div>
                <button
                  onClick={handlePrevImage}
                  className='absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full focus:ring-1 ring-blue-500'
                >
                  <FaCircleChevronLeft
                    size={30}
                    className=' shadow-lg shadow-black text-white rounded-full'
                  />
                </button>
                <button
                  onClick={handleNextImage}
                  className='absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full focus:ring-1 ring-blue-500'
                >
                  <FaCircleChevronRight
                    size={30}
                    className=' shadow-lg shadow-black text-white rounded-full'
                  />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MyProjects;
