'use client';
import Image from 'next/image';
import { Icons } from '../../config/icons';
import Link from 'next/link';
import { certifications, projects, siteConfig } from '../../config/site';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

const linkContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const linkChildVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

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

const LinkIcons = {
  phone_number: FaPhone,
  email: MdEmail,
  // Add other mappings between link names and their icons
};

export default function Home() {
  return (
    <>
      <header className='my-40'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className='fixed top-2 right-1/2 translate-x-1/2 z-50'>
            <ul className='flex gap-2 border-2 border-gray-600/80 dark:border-gray-500 px-4 py-3 rounded-full bg-black/40 backdrop-blur-md'>
              <li>
                <a
                  href='#my-projects'
                  className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition '
                >
                  My Projects
                </a>
              </li>
              <li>
                <a
                  href='#certifications'
                  className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition '
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href='#contact-me'
                  className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition '
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
          <div className='relative flex flex-col items-center justify-center'>
            <Image
              src='/hero-image.jpeg'
              alt='My image'
              className='rounded-full size-[150px] object-cover'
              width={100}
              height={24}
              priority
            />
            <div className='mt-4'>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='text-center text-3xl sm:text-5xl font-medium text-balance z-3'
              >
                I&apos;m Hizkiel
              </motion.h2>
              <p className='text-xl md:text-2xl lg:text-4xl'></p>
              <p className='max-w-[42rem] mx-auto text-muted-foreground sm:text-xl md:text-2xl md:max-w-[50rem] inline-block py-4 text-balance text-center'>
                A talented architect with expertise in rendering, drafting, and
                3D design. I specialize in bringing architectural visions to
                life with precision and creativity. My goal is to transform
                complex concepts into stunning, functional spaces that inspire
                and captivate.
                <span className='block mt-4'>
                  Let&apos;s build something extraordinary together.
                </span>
              </p>
              <div className='flex justify-center mt-4 items-center gap-4'>
                <Link
                  target='_blank'
                  href={siteConfig.links.upwork}
                  className='transition border-2 rounded-full bg-gray-100 dark:bg-white/25 border-gray-200 dark:border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-400 -py-4'
                >
                  <Icons.upwork_large className='w-32 h-14' />
                </Link>
                <Link
                  target='_blank'
                  href={siteConfig.links.linkedin}
                  className='transition border-2 rounded-full bg-gray-100 dark:bg-white/25 border-gray-200 dark:border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-400 -py-4'
                >
                  <Icons.linkedin_large className='w-32 h-14' />
                </Link>
              </div>
            </div>
            {/* <Image
            src='/bg.png'
            alt='buildings'
            className='hidden sm:block rotate-90 absolute -left-56 opacity-45 top-1/2 -translate-y-1/2'
            width={100 + 500}
            height={24}
            priority
            /> */}
          </div>
        </motion.div>
      </header>
      <main className='mx-4'>
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-2xl mt-4 mb-10 sm:text-3xl font-black text-center'
            id='my-projects'
          >
            My Projects
          </motion.h2>

          <div className='space-y-10'>
            {projects.map((project, projectIndex) => {
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
                    <Image
                      width={300}
                      height={500}
                      className='w-full h-full rounded-lg object-cover'
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className='my-10'>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-2xl sm:text-3xl font-black text-center'
            id='certifications'
          >
            Certifications
          </motion.h2>
          <motion.div
            className='max-w-[90rem] mx-auto sm:flex max-sm:space-y-4 gap-4 justify-center items-center flex-wrap mt-10'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {certifications.map((cert, certIndex) => (
              <motion.div
                key={certIndex}
                className='hover:scale-[1.02] transition bg-gray-100 dark:bg-gray-800/60 border-2 border-gray-400 dark:border-gray-700 rounded-lg max-sm:w-full'
                variants={childVariants} // Apply child variants for stagger effect
              >
                <div className='p-2'>
                  <Image
                    src={cert.file}
                    alt=''
                    className='sm:min-w-[300px] w-full object-cover rounded-md'
                    width={100}
                    height={24}
                    priority
                  />
                </div>
                <div className='flex flex-col px-4 py-2'>
                  <span className='text-md font-medium text-gray-600 dark:text-gray-300'>
                    By {cert.instructor}
                  </span>

                  <Link
                    href={cert.link}
                    target='_blank'
                    className='text-blue-500 dark:text-blue-400 hover:underline transition underline-offset-2 lg:mb-0 inline w-fit'
                  >
                    verification link
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section className='my-10'>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-2xl sm:text-3xl font-black text-center'
            id='contact-me'
          >
            Contact Me
          </motion.h2>

          <motion.div
            variants={linkContainerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='flex justify-center items-center mt-4 gap-6 flex-wrap'
          >
            {Object.entries(siteConfig.links).map(([key, value]) => {
              const IconComponent = LinkIcons[key] || Icons[key];
              return (
                <motion.div
                  key={key}
                  variants={linkChildVariants}
                  className='hover:scale-110 transition'
                >
                  <Link
                    href={
                      key === 'phone_number'
                        ? `tel:${value}`
                        : key === 'email'
                        ? `mailto:${value}`
                        : value
                    }
                    target='_blank'
                  >
                    <IconComponent
                      className={`size-[40px] ${
                        key === 'phone_number' && '!size-[30px]'
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </main>

      <footer className='container border-t-gray-500 border-t-[1px] mt-4 w-full py-4'>
        <div className='flex container justify-between'>
          <span>
            Allright reserved &copy;{' '}
            <span className='text-[15px]'>{new Date().getFullYear()}</span>
          </span>

          <p>
            Developed by
            <Link
              href={'https://habte.netlify.app/'}
              target='_blank'
              className='text-blue-500 font-bold'
            >
              {' '}
              Hab.
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
