export default function SectionDivider() {
  return (
    <div className="flex justify-center py-4">
      <svg
        className="w-4 h-4 text-neutral-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  )
}
