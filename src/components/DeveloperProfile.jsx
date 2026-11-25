const profileCode = `const Dela = {

    frontend: [
        "HTML", "CSS", "JavaScript",
        "React", "Next.js", "Tailwind CSS",
        "TypeScript (learning)"
    ],

    backend: [
        "Node.js", "Express",
        "PostgreSQL", "REST APIs"
    ],

    design: [
        "UI/UX", "Figma",
        "Responsive Design"
    ],

    values: [
        "Accessibility",
        "Reusable components",
        "Maintainable code"
    ]
};`

function DeveloperProfile() {
  return (
    <div className="developer-profile min-w-0 self-start border border-line bg-surface font-mono">

      {/* Editor header */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-2 w-2 rounded-full border border-muted" />
          <span className="h-2 w-2 rounded-full border border-muted" />
          <span className="h-2 w-2 rounded-full border border-muted" />
        </div>

        <span className="text-xs text-muted">
          dela.js
        </span>
      </div>

      {/* Developer profile code */}
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed sm:p-6 sm:text-sm">
        <code>
          {profileCode.split("\n").map((line, index) => (
            <span key={index} className="flex">
              <span
                aria-hidden="true"
                className="mr-4 inline-block w-6 shrink-0 select-none text-right text-muted"
              >
                {index + 1}
              </span>

             <span className="whitespace-pre">{line}</span>
            </span>
          ))}
        </code>
      </pre>

    </div>
  );
}

export default DeveloperProfile;