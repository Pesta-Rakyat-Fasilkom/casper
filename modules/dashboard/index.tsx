"use client";
import { Button } from "@/components/ui/button";
import Sidebar from "./components/Sidebar";
import { Card } from "@/components/ui/card";
import { User2, Pen, DoorOpen, File, Menu, X } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { useState } from "react";

const Games = [
  "Tebak Gambar",
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
      },
      {
        name: "Player 2",
        username: "player2",
      },
      {
        name: "Player 3",
        username: "player3",
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
      },
      {
        name: "Player 2",
        username: "player2",
      },
      {
        name: "Player 3",
        username: "player3",
      },
      {
        name: "Player 4",
        username: "player4",
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
      },
      {
        name: "Player 2",
        username: "player2",
      },
      {
        name: "Player 3",
        username: "player3",
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

export const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex">
      {/* Sidebar Trigger */}
      <div className="fixed md:hidden right-4 top-4 w-16 h-16 rounded-xl bg-accents-pink-4 border-4 border-text-dark-3">
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
            {MyGames.map((game, idx) => (
              <div key={idx}>
                <Card className="bg-accents-yellow-4 border-2 border-black pt-2 px-4 pb-4">
                  <h1 className="text-6xl font-husky-stash text-text-dark-3 ">
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
                  <Accordion type="single" collapsible className="my-4">
                    <AccordionItem
                      value={game.team_name}
                      className="bg-accents-yellow-5 hover:bg-[#fff1c7] border-text-dark-2"
                    >
                      <AccordionTrigger className="font-bold text-xl ">
                        Anggota
                      </AccordionTrigger>
                      <AccordionContent className="">
                        <ul className="space-y-2 text-lg">
                          {game.members.map((member, idx) => (
                            <li key={idx}>
                              <div className="font-bold">{member.username}</div>
                              {member.name}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="py-2 font-semibold">Undang Teman</Button>
                    <Button variant="secondary" className="py-2 font-semibold">
                      Edit Anggota
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
};
