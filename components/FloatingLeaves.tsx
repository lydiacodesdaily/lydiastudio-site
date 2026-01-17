'use client';

export default function FloatingLeaves() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Right side - Rounded leaf */}
      <svg
        className="animate-leaf-1 absolute right-[8%] top-0 h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(45deg)' }}
      >
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="5"
          fill="#3F6D4E"
          fillOpacity="0.5"
        />
        <path
          d="M4 12h16M12 9c-2 0.5-4 1.5-5 3M12 9c2 0.5 4 1.5 5 3"
          stroke="#3F6D4E"
          strokeOpacity="0.3"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Center-right - Pointed leaf (drifts near text) */}
      <svg
        className="animate-leaf-2 absolute right-[30%] top-0 h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-30deg)' }}
      >
        <path
          d="M2 12c4-6 8-8 10-8s6 2 10 8c-4 6-8 8-10 8s-6-2-10-8z"
          fill="#b5d1a3"
          fillOpacity="0.55"
        />
        <path
          d="M4 12h16"
          stroke="#7ba65e"
          strokeOpacity="0.3"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Left side - Small teardrop (drifts across header) */}
      <svg
        className="animate-leaf-3 absolute left-[20%] top-0 h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(120deg)' }}
      >
        <path
          d="M12 3c-4 5-6 9-6 12 0 3 2.5 5 6 5s6-2 6-5c0-3-2-7-6-12z"
          fill="#7ba65e"
          fillOpacity="0.45"
        />
        <path
          d="M12 8v10"
          stroke="#4d6a3b"
          strokeOpacity="0.3"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Far left - Small rounded */}
      <svg
        className="animate-leaf-4 absolute left-[5%] top-0 h-3.5 w-3.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-60deg)' }}
      >
        <ellipse
          cx="12"
          cy="12"
          rx="7"
          ry="4.5"
          fill="#b5d1a3"
          fillOpacity="0.45"
        />
        <path
          d="M5 12h14"
          stroke="#7ba65e"
          strokeOpacity="0.25"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
