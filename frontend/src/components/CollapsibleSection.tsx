/**
 * CollapsibleSection Component - COMPLETE VERSION
 *
 * Features:
 * - Expands/collapses when clicked
 * - Chevron rotates 90° (right) when collapsed, points down when expanded
 * - Styled as per given design specs
 */

import { ReactNode, useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  children?: ReactNode;
  defaultOpen?: boolean;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#e1e1e1]">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 text-[14px] font-medium text-[#15372c] hover:bg-gray-50 transition-colors"
      >
        <span className="leading-[19.5px]">{title}</span>

        {/* Chevron icon */}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-0" : "rotate-90"
            }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Collapsible content */}
      {isOpen && children && (
        <div className="pb-3 px-2 text-[13px] text-[#555]">{children}</div>
      )}
    </div>
  );
};
