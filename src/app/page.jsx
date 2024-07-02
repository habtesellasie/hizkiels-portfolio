import Image from 'next/image';
import { Icons } from '../../config/icons';
import Link from 'next/link';
import { certifications, projects, siteConfig } from '../../config/site';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';

export default function Home() {
  return (
    <>
      <header className='my-40'>
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
            <h2 className='text-center text-3xl sm:text-5xl font-medium text-balance z-3'>
              I&apos;m Hizkiel
            </h2>
            <p className='text-xl md:text-2xl lg:text-4xl'></p>
            <p className='max-w-[42rem] mx-auto text-muted-foreground sm:text-xl md:text-2xl md:max-w-[50rem] inline-block py-4 text-balance text-center'>
              A talented architect with expertise in rendering, drafting, and 3D
              design. I specialize in bringing architectural visions to life
              with precision and creativity. My goal is to transform complex
              concepts into stunning, functional spaces that inspire and
              captivate.
              <span className='block mt-4'>
                Let&apos;s build something extraordinary together.
              </span>
            </p>
            <div className='flex justify-center mt-4 items-center gap-4'>
              <Link
                href={siteConfig.links.upwork}
                className='transition border-2 rounded-full bg-gray-100 dark:bg-white/25 border-gray-200 dark:border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-400 -py-4'
              >
                <Icons.upwork_large className='w-32 h-14' />
              </Link>
              <Link
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
      </header>
      <main className='mx-4'>
        <section>
          <h2 className='text-2xl mt-4 mb-10 sm:text-3xl font-black text-center'>
            My Projects
          </h2>

          <div className='space-y-10'>
            {projects.map((project, projectIndex) => {
              return (
                <div
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
                    <div className='flex gap-2 flex-wrap mt-2'>
                      {project.tools.map((tool, i) => {
                        return (
                          <span
                            key={i}
                            className='px-4 py-1 bg-gray-200 dark:bg-gray-400 dark:text-black rounded-full text-sm capitalize hover:scale-105 transition cursor-pointer'
                          >
                            {tool}
                          </span>
                        );
                      })}
                    </div>
                    <Link
                      href={project.youtube_link}
                      target='_blank'
                      className='text-blue-500 inline-flex items-center gap-2 mt-4 hover:underline transition'
                    >
                      Visit link
                      <FaArrowRightLong />
                    </Link>
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
                </div>
              );
            })}
          </div>
        </section>

        <section className='my-10'>
          <h2 className='text-2xl sm:text-3xl font-black text-center'>
            Certifications
          </h2>
          <div className='max-w-[90rem] mx-auto sm:flex max-sm:space-y-4 gap-4 justify-center items-center flex-wrap mt-10'>
            {certifications.map((cert, certIndex) => {
              return (
                <div
                  key={certIndex}
                  className='hover:scale-[1.02] transition bg-gray-100 dark:bg-gray-800/60 border-2 border-gray-400 dark:border-gray-700 rounded-lg max-sm:w-full'
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
                </div>
              );
            })}
          </div>
        </section>
        <section className='my-10'>
          <h2 className='text-2xl sm:text-3xl font-black text-center'>
            Contact Me
          </h2>

          <div className='flex justify-center items-center mt-4 gap-6 flex-wrap'>
            <Link
              href={`tel:${siteConfig.links.phone_number}`}
              target='_blank'
              className='hover:scale-110 transition'
            >
              <FaPhone className='size-[30px]' />
            </Link>
            <Link
              href={siteConfig.links.telegram}
              target='_blank'
              className='hover:scale-110 transition'
            >
              <Icons.telegram className='size-10' />
            </Link>

            <Link
              href={`mailto:${siteConfig.links.email}`}
              target='_blank'
              className='hover:scale-110 transition'
            >
              <MdEmail className='size-10' />
            </Link>

            <Link
              href={siteConfig.links.instagram}
              target='_blank'
              className='hover:scale-110 transition'
            >
              <Icons.instagram className='size-10' />
            </Link>
            <Link
              href={siteConfig.links.upwork}
              target='_blank'
              className='hover:scale-110 transition'
            >
              <Icons.upwork className='size-8' />
            </Link>
            <Link
              href={siteConfig.links.whatsapp}
              target='_blank'
              className='hover:scale-110 transition'
            >
              <Icons.whatsapp className='size-8' />
            </Link>
            <Link
              href={siteConfig.links.pinterest}
              target='_blank'
              className='hover:scale-110 transition'
            >
              <Icons.pinterest className='size-8' />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target='_blank'
              className='hover:scale-110 transition'
            >
              <Icons.linkedin className='size-8' />
            </Link>
          </div>
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
