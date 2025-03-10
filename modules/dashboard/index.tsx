"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User2, Pen, DoorOpen, Link, Edit, House } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { FormattedTeam } from "./interface";
import { games, profiles } from "@/lib/drizzle/schema";
import { generateTextOutline } from "@/components/utils/textOutline";
import { User } from "@supabase/supabase-js";
import { useState } from "react";
import { Modal } from "./components/Modal";
import { SidebarWrapper } from "./components/SidebarWrapper";

let Navigation = {
  href: "#",
  label: "",
  icon: <User2 />,
  children: [
    {
      href: "/",
      label: "Home",
      icon: <House />,
      className: "hover:bg-[#FF9900] hover:text-text-light-3 text-text-dark-1",
    },
    {
      href: "#",
      label: "Edit Profile",
      icon: <Pen />,
      className: "hover:bg-[#FF9900] hover:text-text-light-3",
    },
    {
      href: "/auth/logout",
      label: "Keluar",
      icon: <DoorOpen />,
      className:
        "hover:bg-accents-red-1 hover:text-text-light-3 font-bold text-accents-red-1",
    },
  ],
};

export const Dashboard = ({
  user,
  profile,
  teamsData,
  allGames,
}: {
  user: User;
  profile: typeof profiles.$inferSelect;
  teamsData: FormattedTeam[];
  allGames: (typeof games.$inferSelect)[];
}) => {
  const [selectedGame, setSelectedGame] = useState<
    typeof games.$inferSelect | null
  >(null);

  // Filter games based on selection
  const filteredTeams = teamsData.filter((game) =>
    selectedGame === null ? true : game.game_id === selectedGame.id,
  );

  return (
    <div className="flex">
      <SidebarWrapper
        Games={allGames}
        Navigation={Navigation}
        selectedGame={selectedGame}
        profile={profile}
        setSelectedGameAction={setSelectedGame}
      />
      <div className="w-full pl-4 md:pl-[21rem] pr-4">
        <h1
          className="font-husky-stash text-accents-grey-5 text-6xl sm:text-7xl lg:text-8xl mt-4 mb-12"
          style={{
            filter: generateTextOutline({
              color: "#6F1026",
              thickness: "4px",
            }),
          }}
        >
          My Dashboard
        </h1>
        <Card className="border-4 relative border-accents-peach-1 bg-accents-yellow-5 rounded-[18px]">
          <h1
            className="absolute text-5xl sm:text-6xl font-husky-stash text-accents-grey-5 -top-6 left-4"
            style={{
              filter: generateTextOutline({
                color: "#6F1026",
                thickness: "2px",
              }),
            }}
          >
            My Games
          </h1>
          <div className="h-8 bg-accents-pink-4 border-b-4 border-accents-peach-1 rounded-t-[14px]" />
          <div className="p-8 grid lg:grid-cols-2 gap-x-16 gap-y-8">
            {filteredTeams.length === 0 ? (
              selectedGame === null ? (
                <div className="text-center col-span-2 py-8 text-gray-500">
                  Pilih game dan daftarkan timmu!
                </div>
              ) : (
                <div className="col-span-2 py-8 font-orelega flex flex-col items-center gap-5">
                  <p className="text-text-dark-1 text-3xl text-center w-2/3">
                    {" "}
                    Hey,{" "}
                    <span className="text-text-dark-3">{profile.username}</span>
                    ! Kamu belum daftar lomba ini. Ayo daftar sekarang sebelum
                    terlambat!
                  </p>
                  <Modal game={selectedGame!} user={user} profile={profile} />
                </div>
              )
            ) : (
              filteredTeams.map((team, idx) => (
                <div key={idx}>
                  <Card className="relative bg-accents-yellow-4 border-2 border-black pt-2 px-4 pb-4">
                    <h1 className="text-6xl font-husky-stash text-text-dark-3">
                      {team.name}
                    </h1>
                    <h2 className="my-4 inline-block text-white font-semibold bg-accents-peach-1 px-2 rounded-sm">
                      {team.id}
                    </h2>
                    <div className="grid md:max-lg:grid-cols-[1fr_12rem] xl:grid-cols-[1fr_12rem] gap-4">
                      <div>
                        <h3 className="font-extrabold">STATUS</h3>
                        <h4 className="px-2 inline-block text-white font-semibold bg-accents-green-3 rounded-sm">
                          {team.status}
                        </h4>
                      </div>
                      {team.status === "verified" && (
                        <Button
                          variant="ghost"
                          className="text-black shadow-md border-3 hover:bg-accents-yellow-5"
                        >
                          <div className="relative h-8 w-8">
                            <Image src="./line-icon.svg" fill alt="line" />
                          </div>
                          LINE Group
                        </Button>
                      )}
                    </div>
                    <Accordion
                      type="single"
                      collapsible
                      className="my-4 !font-poppins"
                    >
                      <AccordionItem
                        value={team.name!}
                        className="bg-accents-yellow-5 hover:bg-[#fff1c7] border-text-dark-2"
                      >
                        <AccordionTrigger className="font-bold text-base md:text-xl">
                          Anggota
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm md:text-lg">
                            {team.members.map((member, idx) => (
                              <li key={idx}>
                                <div className="font-bold mb-1">
                                  {member.in_game_name}{" "}
                                  {member.is_captain && (
                                    <span className="bg-accents-yellow-2 inline-block text-white rounded-sm px-2">
                                      Leader
                                    </span>
                                  )}
                                </div>
                                {member.profile_id}
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
