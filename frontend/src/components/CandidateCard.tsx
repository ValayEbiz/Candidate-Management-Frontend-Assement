import React, { useState } from "react";
import type { Candidate } from "../types/candidate";

interface CandidateCardProps {
    candidate: Candidate;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div
            onClick={() => setIsSelected(!isSelected)}
            className={`grid grid-cols-[19%_81%] px-4 py-3 border-b border-[#E1E1E1] cursor-pointer transition-colors duration-200 hover:bg-[#f5f5f5]"
                }`}
        >
            {/* Candidate Name + Company */}
            <div>
                <p
                    className={`text-sm font-normal leading-5 text-[#15372C]`}
                >
                    {candidate.name}
                </p>
                <p
                    className={`text-xs leading-4 text-[#909090]`}
                >
                    {candidate.company}
                </p>
            </div>

            {/* Job / Status */}
            <div>
                <p
                    className={`text-sm font-normal leading-5 text-[#15372C]`}

                >
                    {candidate.position}
                </p>
                <p
                    className={`text-xs leading-4 text-[#909090]`}
                >
                    {candidate.action_link?.includes("Collect") ? "↑" : "↓"}{" "}
                    {candidate.action_link + " in " +
                        candidate.status}
                </p>
            </div>
        </div>
    );
};
