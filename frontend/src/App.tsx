import { useEffect, useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import type { Candidate } from './types/candidate';
import { CandidateCard } from './components/CandidateCard';
import { Pagination } from './components/Pagination';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const candidatesPerPage = 10;


  const fetchCandidates = async (search: string) => {
    try {
      setLoading(true);

      const response = await fetch(`http://localhost:8000/api/candidates?search=${search}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setCandidates(data.candidates || []);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchCandidates(searchValue);
  }, [searchValue]);

  const startIndex = (currentPage - 1) * candidatesPerPage;
  const currentCandidates = candidates.slice(startIndex, startIndex + candidatesPerPage);


  const handleGenerateReport = () => {
    alert("📄 Report generation coming soon!");
  };

  const handleAddCandidate = () => {
    alert("➕ Add Candidate form coming soon!");
  };

  const handleBulkActions = () => {
    alert("🧾 Bulk actions coming soon!");
  };
  return (
    <div className="min-h-screen bg-[#f7f8f7]">
      {/* Page Title */}
      <h1 className="text-[34.59px] font-normal text-[#15372c] px-6 pt-4 pb-3 leading-[46.67px]">All Candidates</h1>

      <div className="flex">
        {/* Sidebar - Pre-built component with search, toggle, dropdown */}
        <Sidebar searchValue={searchValue} onSearchChange={setSearchValue} />

        {/* Main Content */}
        <main className="flex-1 px-6">
          {/* Action Buttons */}
          <div className="flex justify-between mb-6">
            <div className='text-xs w-[13%]' >
              Showing 50 candidate applications
            </div>
            <div className='flex gap-2 w-[87%] justify-end' >
              <button
                onClick={handleGenerateReport}
                className="flex justify-center items-center bg-transparent text-[#047957] border border-[#047957] rounded-xl h-8 text-sm font-normal hover:bg-[#e6f3ef] transition w-44 shadow-2xl"
              >
                Generate Report
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className='ml-1'
                >
                  <path
                    d="M11.9948 16.7858C11.804 16.7856 11.6211 16.7098 11.4862 16.5747L3.34403 8.43251C3.2169 8.29607 3.1477 8.11563 3.15099 7.92918C3.15428 7.74272 3.22981 7.56483 3.36167 7.43296C3.49353 7.30111 3.67142 7.22557 3.85788 7.22228C4.04433 7.21899 4.22478 7.2882 4.36122 7.41533L11.5702 14.6243C11.626 14.6802 11.6921 14.7245 11.765 14.7547C11.8379 14.785 11.9159 14.8006 11.9948 14.8006C12.0737 14.8006 12.1518 14.785 12.2247 14.7547C12.2976 14.7245 12.3638 14.6802 12.4194 14.6243L19.6284 7.41533C19.7649 7.2882 19.9453 7.21899 20.1318 7.22228C20.3182 7.22557 20.4962 7.30111 20.628 7.43296C20.7599 7.56483 20.8354 7.74272 20.8387 7.92918C20.8419 8.11563 20.7728 8.29607 20.6456 8.43251L12.5034 16.5747C12.3686 16.7098 12.1856 16.7856 11.9948 16.7858Z"
                    fill="#047957"
                  />
                </svg>
              </button>


              <button
                onClick={handleAddCandidate}
                className="flex justify-center items-center bg-transparent text-[#047957] border border-[#047957] rounded-lg h-8 text-sm font-normal hover:bg-[#e6f3ef] transition w-40 shadow-2xl"
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
                  <path d="M4.28125 10.3125V-5.96046e-07H6.03125V10.3125H4.28125ZM1.3411e-07 6.03125V4.28125H10.3125V6.03125H1.3411e-07Z" fill="#047957" />
                </svg>
                Add Candidate
              </button>

              <button
                onClick={handleBulkActions}
                className="flex justify-center items-center bg-transparent text-[#047957] border border-[#047957] rounded-lg h-8 text-sm font-normal hover:bg-[#e6f3ef] transition w-32 shadow-2xl"
              >
                Bulk Actions
              </button>
            </div>
          </div>

          {/* Candidate List */}
          <div className="bg-white rounded-md shadow-sm border border-[#E1E1E1]">

            {/* Table Header */}
            <div className="bg-[#f9fafb] text-[13px] font-medium text-gray-600">
              <div className="grid grid-cols-[20%_80%] h-10   border-b border-[#E1E1E1]">
                {/* left cell has the vertical divider */}
                <div className="text-xs font-normal text-[#909090] border-r border-[#E1E1E1] pr-4">
                  <div className='h-full flex items-center px-4'>

                    Name
                  </div>
                </div>
                <div className="text-xs font-normal text-[#909090]">
                  <div className='h-full flex items-center px-4'>

                    Job/Status
                  </div>
                </div>
              </div>
            </div>


            {/* Table Rows */}
            {loading ? (
              <p className="text-gray-500 text-sm p-4">Loading candidates...</p>
            ) : currentCandidates.length > 0 ? (
              currentCandidates.map((candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))
            ) : (
              <p className="text-gray-500 text-sm p-4">No candidates found.</p>
            )}


          </div>
          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(candidates.length / candidatesPerPage)}
            onPageChange={setCurrentPage}
          />

        </main>
      </div>
    </div>
  )
}

export default App
