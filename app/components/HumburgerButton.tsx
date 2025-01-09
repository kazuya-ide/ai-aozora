//HamburgerButton.tsx
interface Props {
    onClick: () => void;
    isHeaderTransparent: boolean;
  }
export default function HamburgerButton({onClick, isHeaderTransparent}: Props) {
    return (
        <button
            onClick={onClick}
            className="border-none cursor-pointer transition-colors duration-300 flex items-center"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${isHeaderTransparent ? 'text-black' : 'text-gray-900'}`}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    );
}