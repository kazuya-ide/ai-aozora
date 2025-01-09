//Nav.tsx
import Link from 'next/link';

interface Props {
    isHeaderTransparent: boolean;
}
export default function Nav({ isHeaderTransparent }: Props) {
    return (
      <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/about"
            className={`py-2 px-4 text-gray-700 hover:text-blue-500 transition-colors duration-300 ${
              isHeaderTransparent ? 'text-black' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`py-2 px-4 text-gray-700 hover:text-blue-500 transition-colors duration-300 ${
              isHeaderTransparent ? 'text-black' : ''
            }`}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={`py-2 px-4 text-gray-700 hover:text-blue-500 transition-colors duration-300 ${
              isHeaderTransparent ? 'text-black' : ''
            }`}
          >
           Blog
          </Link>
          <Link
            href="/contact"
            className={`py-2 px-4 text-gray-700 hover:text-blue-500 transition-colors duration-300 ${
              isHeaderTransparent ? 'text-black' : ''
            }`}
          >
            Contact
          </Link>
        </nav>
    );
}