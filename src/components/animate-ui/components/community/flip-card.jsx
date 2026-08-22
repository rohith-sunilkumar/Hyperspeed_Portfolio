'use client';

import { easeOut, motion } from 'motion/react';
import * as React from 'react';
import { FaGithub, FaExternalLinkAlt, FaSyncAlt } from 'react-icons/fa';

export function FlipCard({ project, index = 0 }) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const isTouchDevice =
    typeof window !== 'undefined' && 'ontouchstart' in window;

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const cardVariants = {
    front: { rotateY: 0, transition: { duration: 0.5, ease: easeOut } },
    back: { rotateY: 180, transition: { duration: 0.5, ease: easeOut } },
  };

  if (!project) return null;

  return (
    <div
      className="relative w-full h-[460px] perspective-1000 cursor-pointer select-none group"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* FRONT SIDE */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-[16px] border border-[#d9d9d9] group-hover:border-[#2d62ff] p-6 flex flex-col justify-between bg-[#fdfbf8] shadow-sm transition-colors duration-200"
        animate={isFlipped ? 'back' : 'front'}
        variants={cardVariants}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div>
          {/* Header Icon & Index */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-[13px] bg-[#000000] text-[#fdfbf8] flex items-center justify-center text-xl shadow-sm">
              {project.icon}
            </div>
            <span className="text-[10px] font-mono text-[#7b7b7a] uppercase tracking-widest px-2.5 py-1 border border-[#d9d9d9] rounded-[100px]">
              0{index + 1}
            </span>
          </div>

          <h3 className="text-xl font-medium text-[#000000] leading-snug group-hover:text-[#2d62ff] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[#2d62ff] mt-1">
            {project.subtitle}
          </p>

          <p className="text-[#333333] text-xs md:text-sm leading-relaxed mt-4 line-clamp-3 font-normal">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies?.map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#fdfbf8] text-[#333333] rounded-[13px] text-[10px] font-medium border border-[#d9d9d9]"
              >
                <span className="text-[#2d62ff] text-xs">{tech.icon}</span>
                <span>{tech.name}</span>
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#d9d9d9] text-[11px] text-[#7b7b7a] font-medium">
            <span className="flex items-center gap-1.5 text-[#2d62ff]">
              <FaSyncAlt className="text-xs animate-spin-slow" /> Flip for insights
            </span>
            <span className="group-hover:translate-x-1 transition-transform">Hover / Tap &rarr;</span>
          </div>
        </div>
      </motion.div>

      {/* BACK SIDE */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-[16px] border border-[#2d62ff] p-6 flex flex-col justify-between bg-[#121212] text-[#fdfbf8] shadow-md"
        initial={{ rotateY: 180 }}
        animate={isFlipped ? 'front' : 'back'}
        variants={cardVariants}
        style={{ transformStyle: 'preserve-3d', rotateY: 180 }}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#333333]">
            <h4 className="text-sm font-medium text-[#2d62ff] uppercase tracking-wider">
              Project Insights
            </h4>
            <span className="text-[10px] font-mono text-[#7b7b7a]">
              0{index + 1}
            </span>
          </div>

          {/* Key Features */}
          <div>
            <h5 className="text-[10px] font-medium text-[#7b7b7a] uppercase tracking-wider mb-2">
              Key Features
            </h5>
            <ul className="space-y-2">
              {project.features?.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-[#d9d9d9] font-normal"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2d62ff] shrink-0 mt-1.5"></span>
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Box */}
          {project.impact && (
            <div className="p-3 bg-[#1e1e1e] rounded-[13px] border border-[#333333]">
              <p className="text-[11px] text-[#d9d9d9] leading-relaxed font-normal">
                <span className="font-medium text-[#2d62ff]">Impact:</span>{' '}
                {project.impact}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3 border-t border-[#333333]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#fdfbf8] text-[#000000] rounded-[100px] font-medium text-xs hover:bg-[#2d62ff] hover:text-[#fdfbf8] transition-all duration-200"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2d62ff] text-[#fdfbf8] hover:bg-[#fdfbf8] hover:text-[#000000] rounded-[100px] font-medium text-xs transition-all duration-200"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
