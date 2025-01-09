//MobileMenu.tsx
import Link from 'next/link';
interface Props {
  isOpen: boolean;
  isHeaderTransparent: boolean;
}
export default function MobileMenu({ isOpen ,isHeaderTransparent }: Props) {
  return (
    <div
      className={`absolute top-full right-0 z-10 w-48 bg-gray-200 rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
      }`}
      >
        <div className="flex flex-col items-center gap-4 p-4">
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
        </div>
    </div>
  );
}