"use client";

import {
  RegistrationModal,
  RegistrationModalContent,
  RegistrationModalDescription,
  RegistrationModalHeader,
  RegistrationModalTitle,
  RegistrationModalTrigger,
} from "@/components/elements/RegistrationModal/RegistrationModal";
import { Button } from "@/components/ui/button";
import { games, profiles } from "@/lib/drizzle/schema";
import { User } from "@supabase/supabase-js";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const TeamNameInput = () => {
  return (
    <div className="w-full mb-4">
      <p className="font-extrabold text-sm md:text-base mb-1 text-left">
        Nama Tim
      </p>
      <input
        type="text"
        name="team-name"
        placeholder="Nama tim kamu"
        className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-transparent py-2 px-4 placeholder-text-dark-3"
        required
      />
    </div>
  );
};

const TabsTrigger = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<"captain" | "solo">>;
}) => {
  return (
    <div className="w-full mb-4">
      <p className="font-extrabold text-sm md:text-base mb-1 text-left">
        Mau main sebagai apa?
      </p>
      <div className="w-full flex justify-between gap-4 pr-20">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="registrationType"
            value="captain"
            checked={selectedTab === "captain"}
            onChange={() => setSelectedTab("captain")}
            className="w-5 h-5 accent-yellow-400"
          />
          <span className="text-sm md:text-base">Kapten Tim</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="registrationType"
            value="solo"
            checked={selectedTab === "solo"}
            onChange={() => setSelectedTab("solo")}
            className="w-5 h-5 accent-yellow-400"
          />
          <span className="text-sm md:text-base">Pemain Solo</span>
        </label>
      </div>
    </div>
  );
};

const ContentTabs = ({ selectedTab }: { selectedTab: string }) => {
  return selectedTab === "captain" ? (
    <TeamNameInput />
  ) : (
    <div className="w-full mb-4">
      <p className="font-extrabold text-sm md:text-base mb-1 text-left">
        Rank Game
      </p>
      <input
        type="text"
        name="rank"
        placeholder="Rank game kamu"
        className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-transparent py-2 px-4 placeholder-text-dark-3"
        required
      />
      <p className="font-extrabold text-sm md:text-base mb-1 mt-3 text-left">
        Role
      </p>
      <input
        type="number"
        name="role"
        placeholder="Peran kamu"
        className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-transparent py-2 px-4 placeholder-text-dark-3"
        min="1"
        required
      />
    </div>
  );
};

export const Modal = ({
  game,
  user,
  profile,
}: {
  game: typeof games.$inferSelect;
  user: User;
  profile: typeof profiles.$inferSelect;
}) => {
  const [selectedTab, setSelectedTab] = useState<"captain" | "solo">("captain");

  return (
    <RegistrationModal>
      <RegistrationModalTrigger asChild>
        <Button>Daftar Sekarang</Button>
      </RegistrationModalTrigger>
      <RegistrationModalContent>
        <RegistrationModalHeader>
          <RegistrationModalTitle>Daftar {game.name}</RegistrationModalTitle>
          <RegistrationModalDescription>
            Hanya kapten tim yang perlu mendaftarkan permainan. Jika kamu bukan
            kapten, tunggu link pendaftaran dari kapten timmu untuk bergabung
            sebagai anggota!
          </RegistrationModalDescription>
        </RegistrationModalHeader>
        <form className="flex flex-col items-center justify-start">
          <div className="w-full mb-4">
            <p className="font-extrabold text-sm md:text-base mb-1 text-left">
              In-Game Name
            </p>
            <input
              type="text"
              name="ign"
              placeholder="IGN kamu"
              className="w-full border-[2px] md:text-base text-sm rounded-[8px] focus:outline-yellow-400 border-accents-blue-3 bg-transparent py-2 px-4 placeholder-text-dark-3"
              required
            />
          </div>
          {game.is_team_game ? (
            game.can_solo ? (
              <>
                <TabsTrigger
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                />
                <ContentTabs selectedTab={selectedTab} />
              </>
            ) : (
              <TeamNameInput />
            )
          ) : null}
          <div className="w-full flex items-start mb-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="w-5 h-5 mr-2 accent-yellow-400"
            />
            <label htmlFor="terms" className="text-sm md:text-base text-left">
              Saya menyetujui Syarat & Ketentuan serta Kebijakan Privasi.
            </label>
          </div>
          <Button type="submit" className="px-10">
            Daftar <ArrowRight />
          </Button>
        </form>
      </RegistrationModalContent>
    </RegistrationModal>
  );
};
