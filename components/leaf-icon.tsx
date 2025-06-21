import React from 'react'

interface LeafIconProps {
  className?: string
  size?: number
}

export const LeafIcon: React.FC<LeafIconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main leaf shape - symmetrical oval-to-heart with pointed tip and slight inward dip */}
      <path
        d="M12 2C12 2 14 4 16 6C18 8 19 10 19 12C19 14 18 16 16 18C14 20 12 22 12 22C12 22 10 20 8 18C6 16 5 14 5 12C5 10 6 8 8 6C10 4 12 2 12 2Z"
        fill="#A3C585"
        stroke="#6C8B4E"
        strokeWidth="0.5"
      />
      
      {/* Central vertical vein */}
      <path
        d="M12 2L12 22"
        stroke="#6C8B4E"
        strokeWidth="0.3"
        strokeLinecap="round"
      />
      
      {/* Secondary veins - 4-5 curved branches on each side */}
      {/* Left side veins */}
      <path
        d="M12 4C11 4.5 10.5 5.5 10.5 6.5"
        stroke="#6C8B4E"
        strokeWidth="0.2"
        strokeLinecap="round"
      />
      <path
        d="M12 6C11 6.5 10.5 7.5 10.5 8.5"
        stroke="#6C8B4E"
        strokeWidth="0.2"
        strokeLinecap="round"
      />
      <path
        d="M12 8C11 8.5 10.5 9.5 10.5 10.5"
        stroke="#6C8B4E"
        strokeWidth="0.2"
        strokeLinecap="round"
      />
      <path
        d="M12 10C11 10.5 10.5 11.5 10.5 12.5"
        stroke="#6C8B4E"
        strokeWidth="0.2"
        strokeLinecap="round"
      />
      <path
        d="M12 12C11 12.5 10.5 13.5 10.5 14.5"
        stroke="#6C8B4E"
        strokeWidth="0.2"
        strokeLinecap="round"
      />
      
      {/* Right side veins */}
      <path
        d="M12 4C13 4.5 13.5 5.5 13.5 6.5"
        stroke="#6C8B4E"
        strokeWidth="0.2"
        strokeLinecap="round"
      />
      <path
        d="M12 6C13 6.5 13.5 7.5 13.5 8.5"
        stroke="#6C8B4E"
        strokeWidth="0.2"
        strokeLinecap="round"
      />
      <path
        d="M12 8C13 8.5 13.5 9.5 13.5 10.5"
        stroke="#6C8B4E"
        strokeWidth="0.2"
        strokeLinecap="round"
      />
      <path
        d="M12 10C13 10.5 13.5 11.5 13.5 12.5"
        stroke="#6C8B4E"
        strokeWidth="0.2"
        strokeLinecap="round"
      />
      <path
        d="M12 12C13 12.5 13.5 13.5 13.5 14.5"
        stroke="#6C8B4E"
        strokeWidth="0.2"
        strokeLinecap="round"
      />
      
      {/* Stem extending downward */}
      <path
        d="M12 22L12 24"
        stroke="#6C8B4E"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  )
} 