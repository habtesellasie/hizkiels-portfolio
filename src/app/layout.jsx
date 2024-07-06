import { Poppins, Karla } from 'next/font/google';
import './globals.css';
import ThemeSwitcher from './components/ThemeSwitcher';

const karla = Karla({ subsets: ['latin'] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: 'My Portfolio',
  description:
    'This is my portfolio where I showcase my expertise, skills and more',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className='bg-white text-black dark:bg-black dark:text-white'
    >
      <body className={karla.className}>
        {/* <ThemeSwitcher /> */}
        {children}
      </body>
    </html>
  );
}
