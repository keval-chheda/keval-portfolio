import { useEffect, useState } from "react";

export default function Terminal({ show, onClose }) {
  const lines = [
    "> keval --about",
    "",
    "Senior Java Backend Engineer",
    "Spring Boot • Microservices • Kafka",
    "Distributed Systems Enthusiast",
    "5+ years building enterprise banking & logistics systems",
  ];

  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    if (!show) return;

    setVisibleLines([]);

    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, index * 400);
    });
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
      <div className="bg-gray-900 border border-blue-500/50 rounded-lg shadow-xl shadow-blue-500/20 w-[500px] max-w-[90%]">
        {/* header */}
        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
          <span className="text-gray-400 text-sm">terminal</span>

          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        {/* body */}
        <div className="p-4 font-mono text-sm text-green-400 min-h-[180px]">
          {visibleLines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
