"use client";

import React, { useState } from "react";
import { SidebarWrapperProps } from "../interface";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import { games } from "@/lib/drizzle/schema";

export const SidebarWrapper: React.FC<
  SidebarWrapperProps & {
    setSelectedGameAction: React.Dispatch<
      React.SetStateAction<typeof games.$inferSelect | null>
    >;
  }
> = ({ Games, Navigation, selectedGame, profile, setSelectedGameAction }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handler for game selection
  const handleGameSelect = (game: typeof games.$inferSelect) => {
    setSelectedGameAction(game);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };
  return (
    <>
      {/* Sidebar Trigger */}
      <div className="fixed right-4 top-4 w-16 h-16 rounded-xl bg-accents-pink-4 border-4 border-text-dark-3 md:hidden z-50">
        <button
          className="w-full h-full"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <div className="w-full h-full relative flex justify-center items-center">
            {isSidebarOpen ? (
              <X className="scale-[180%] text-text-dark-3" />
            ) : (
              <Menu className="scale-[180%] text-text-dark-3" />
            )}
          </div>
        </button>
      </div>
      <Sidebar
        Games={Games}
        Navigation={Navigation}
        isSidebarOpen={isSidebarOpen}
        selectedGame={selectedGame}
        onGameSelect={handleGameSelect}
        profile={profile}
      />
    </>
  );
};
