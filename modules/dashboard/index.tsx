"use client";
import { Button } from "@/components/ui/button";
import Sidebar from "./components/Sidebar";
import { Card } from "@/components/ui/card";
import { User2, Pen, DoorOpen, File, Menu, X, Link, Edit } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const Games = [
  "All Games",
  "DOTA",
  "Tebak Kata",
  "Family Games",
  "Tebak Angka",
  "Hayolo",
];

const MyGames = [
  {
    team_name: "Team 1",
    game: "DOTA",
    status: "Terkonfirmasi",
    members: [
      {
        name: "Player 1",
        username: "player1",
        role: "Leader",
      },
      {
        name: "Player 2",
        username: "player2",
        role: "Member",
      },
      {
        name: "Player 3",
        username: "player3",
        role: "Member",
      },
    ],
  },
  {
    team_name: "Team 2",
    game: "Family Games",
    status: "Terkonfirmasi",
    members: [
      {
        name: "Player 1",
        username: "player1",
        role: "Leader",
      },
      {
        name: "Player 2",
        username: "player2",
        role: "Member",
      },
      {
        name: "Player 3",
        username: "player3",
        role: "Member",
      },
      {
        name: "Player 4",
        username: "player4",
        role: "Member",
      },
    ],
  },
  {
    team_name: "Team 3",
    game: "DOTA",
    status: "Terkonfirmasi",
    members: [
      {
        name: "Player 1",
        username: "player1",
        role: "Leader",
      },
      {
        name: "Player 2",
        username: "player2",
        role: "Member",
      },
      {
        name: "Player 3",
        username: "player3",
        role: "Member",
      },
    ],
  },
];

const Navigation = {
  href: "#",
  label: "Username",
  icon: <User2 />,
  children: [
    {
      href: "#",
      label: "Landing Page",
      icon: <File />,
      className: "hover:bg-[#FF9900] hover:text-text-light-3",
    },
    {
      href: "#",
      label: "Edit Profile",
      icon: <Pen />,
      className: "hover:bg-[#FF9900] hover:text-text-light-3",
    },
    {
      href: "#",
      label: "Keluar",
      icon: <DoorOpen />,
      className:
        "hover:bg-accents-red-1 hover:text-text-light-3 font-bold text-accents-red-1",
    },
  ],
};

interface Team {
  id: string;
  name: string;
  status: string;
  competition_id: string;
  created_at: string;
}

export const Dashboard = () => {
  const supabase = createClient();
  const [teams, setTeams] = useState<Team[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState("All Games");

  useEffect(() => {
    const fetchTeams = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("teams")
        .select("id, name, status, competition_id, created_at")
        .eq(
          "id",
          supabase.from("members").select("team_id").eq("profile_id", user.id)
        );

      if (error) {
        console.error("Error fetching teams:", error);
      } else {
        setTeams(data);
      }
    };

    fetchTeams();
    console.log(teams);
  }, []);

  // Filter games based on selection
  const filteredGames = MyGames.filter((game) =>
    selectedGame === "All Games" ? true : game.game === selectedGame
  );

  // Handler for game selection
  const handleGameSelect = (game: string) => {
    setSelectedGame(game);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="flex">
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
      />
      <div className="w-full pl-4 md:pl-[21rem] pr-4">
        <h1 className="font-husky-stash text-accents-grey-5 text-6xl sm:text-7xl lg:text-8xl font-outline-2 sm:font-outline-4 mt-4 mb-12">
          Dashboard
        </h1>
        <Card className="border-4 relative border-accents-peach-1 bg-accents-yellow-5 rounded-[18px]">
          <h1 className="absolute text-5xl sm:text-6xl font-husky-stash text-accents-grey-5 -top-6 font-outline-2 left-4">
            M y Games
          </h1>
          <div className="h-8 bg-accents-pink-4 border-b-4 border-accents-peach-1 rounded-t-[14px]" />
          <div className="p-8 grid lg:grid-cols-2 gap-x-16 gap-y-8">
            {filteredGames.length === 0 ? (
              <div className="text-center col-span-2 py-8 text-gray-500">
                No games found for {selectedGame}
              </div>
            ) : (
              filteredGames.map((game, idx) => (
                <div key={idx}>
                  <Card className="relative bg-accents-yellow-4 border-2 border-black pt-2 px-4 pb-4">
                    <h1 className="text-6xl font-husky-stash text-text-dark-3">
                      {game.team_name}
                    </h1>
                    <h2 className="my-4 inline-block text-white font-semibold bg-accents-peach-1 px-2 rounded-sm">
                      {game.game}
                    </h2>
                    <div className="grid md:max-lg:grid-cols-[1fr_12rem] xl:grid-cols-[1fr_12rem] gap-4">
                      <div>
                        <h3 className="font-extrabold">STATUS</h3>
                        <h4 className="px-2 inline-block text-white font-semibold bg-accents-green-3 rounded-sm">
                          {game.status}
                        </h4>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-black shadow-md border-3 hover:bg-accents-yellow-5"
                      >
                        <div className="relative h-8 w-8">
                          <Image src="./line-icon.svg" fill alt="line" />
                        </div>
                        LINE Group
                      </Button>
                    </div>
                    <Accordion
                      type="single"
                      collapsible
                      className="my-4 !font-poppins"
                    >
                      <AccordionItem
                        value={game.team_name}
                        className="bg-accents-yellow-5 hover:bg-[#fff1c7] border-text-dark-2"
                      >
                        <AccordionTrigger className="font-bold text-base md:text-xl">
                          Anggota
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm md:text-lg">
                            {game.members.map((member, idx) => (
                              <li key={idx}>
                                <div className="font-bold mb-1">
                                  {member.username}{" "}
                                  {member.role === "Leader" && (
                                    <span className="bg-accents-yellow-2 inline-block text-white rounded-sm px-2">
                                      {member.role}
                                    </span>
                                  )}
                                </div>
                                {member.name}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="grid grid-cols-2 gap-4 md:text-sm">
                      <Button className="py-2 font-semibold">
                        <Link />
                        Undang
                      </Button>
                      <Button
                        variant="secondary"
                        className="py-2 font-semibold"
                      >
                        <Edit />
                        Edit
                      </Button>
                    </div>
                    <Image
                      src="/pop-up.png"
                      width={120}
                      height={120}
                      alt="pop-up"
                      className="object-contain absolute -top-12 -right-12 max-sm:scale-75"
                    />
                  </Card>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
