import { useState } from 'react';
import { SearchInput } from './SearchInput';
import { CollapsibleSection } from './CollapsibleSection';

interface SidebarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ searchValue, onSearchChange }) => {
  const [fullTextSearch, setFullTextSearch] = useState(false);

  return (
    <aside className="w-[248px] bg-[#f7f8f7] min-h-screen px-6 pt-2 pb-6">
      {/* Search Input */}
      <SearchInput value={searchValue} onChange={onSearchChange} />

      {/* Full Text Search Toggle */}
      <div className="mt-2">
        <div className="flex items-center gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="fullTextSearch"
              checked={fullTextSearch}
              onChange={(e) => setFullTextSearch(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-[50px] h-[25px] bg-[#ccd4d1] rounded-full peer peer-checked:bg-[#047957] peer-focus:ring-2 peer-focus:ring-[#047957]/20 transition-colors duration-200 ease-in-out">
              <div className={`absolute left-0 top-0 w-[25px] h-[25px] bg-white border-[3px] rounded-full transition-transform duration-200 ease-in-out ${fullTextSearch ? 'translate-x-[25px] border-[#047957]' : 'translate-x-0 border-[#ccd4d1]'}`}></div>
            </div>
          </label>
          <label htmlFor="fullTextSearch" className="text-[13px] font-medium text-[#15372c] cursor-pointer leading-[19.5px]">
            Full Text Search
          </label>
        </div>
        <p className="text-[11.6px] text-[#909090] font-light leading-[12px] mt-1">(Includes resumes and notes)</p>
      </div>

      {/* Sort Dropdown (visual only) */}
      <div className="mt-4">
        <div className="w-full h-[36px] px-3 flex items-center justify-between border border-[#e1e1e1] bg-white rounded text-[14px] text-[#333333]">
          <span className="truncate">Last Activity (new to old)</span>
          <svg className="w-3.5 h-3.5 text-[#909090] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Filter Sections - TODO: Candidates need to build these */}
      <div className="mt-6 border-[#e1e1e1] border-t">
        {/* TODO: Add CollapsibleSection components for: */}
        <CollapsibleSection title="Application Type" defaultOpen>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#15372c]" /> Full-Time
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#15372c]" /> Part-Time
          </label>
        </CollapsibleSection>
        <CollapsibleSection title="Jobs">
          <p className="text-gray-500 italic text-xs">No jobs yet</p>
        </CollapsibleSection>
        <CollapsibleSection title="CRM" />
        <CollapsibleSection title="Profile Details" />
        <CollapsibleSection title="Source" />
        <CollapsibleSection title="Responsibility" />
        <CollapsibleSection title="Pipeline Tasks" />
        <CollapsibleSection title="Education" />



      </div>

      {/* Reset Filters Button */}
      <button className="mt-6 w-full py-2 text-[#3574d6] text-[13.9px] font-light flex items-center justify-start gap-2 hover:underline">
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_8_1560)">
            <path d="M1.59229 7.23169L4.19755 11.1396L7.23702 7.6659" stroke="#2975CA" stroke-width="1.15789" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.20243 11.1395C3.78038 5.58164 7.58927 1.75972 12.1433 1.59212C16.6964 1.42451 20.5244 4.97983 20.6903 9.53296C20.8605 14.087 17.3034 17.9141 12.7503 18.0808" stroke="#2975CA" stroke-width="1.15789" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_8_1560">
              <rect width="22" height="19.6842" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span>Reset Filters</span>
      </button>
    </aside>
  );
};
